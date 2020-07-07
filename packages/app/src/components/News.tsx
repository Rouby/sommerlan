import { CommentOutlined, EditOutlined, LikeOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Col,
  Drawer,
  Empty,
  Form,
  Input,
  List,
  Row,
  Skeleton,
  Space,
  Spin,
} from 'antd';
import * as React from 'react';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { mutate, query } from '../api';
import { useUser } from '../auth';
import { convertToHTML, TextEditor } from './TextEditor';

type NewsData = {
  id: string;
  title: string;
  article: string;
  author: {
    id: string;
    name: string;
    picture: string;
  };
  datetime: string;
  likes?: number;
  comments?: {}[];
};

const newsList = atom({
  key: 'news',
  default: query<{
    data: {
      news: NewsData[];
    };
  }>({
    query: `{
    news: getNews {
      id
      title
      article
      author {
        id
        name
        picture
      }
      datetime
    }
  }`,
  }),
});

const newsArticle = atom({
  key: 'writeNewsArticle',
  default: {
    writing: false,
    id: null as string | null,
    title: '',
    article: '',
  },
});

export function News(): React.ReactElement {
  return (
    <div>
      <WriteNews />
      <React.Suspense
        fallback={
          <List>
            <List.Item>
              <Skeleton loading active avatar>
                <List.Item.Meta
                  avatar={<Avatar />}
                  title="Lorem Ipsum Dolor sit"
                />
                Lorem Ipsum Dolor sit
              </Skeleton>
            </List.Item>
            <List.Item>
              <Skeleton loading active avatar>
                <List.Item.Meta
                  avatar={<Avatar />}
                  title="Lorem Ipsum Dolor sit"
                />
                Lorem Ipsum Dolor sit
              </Skeleton>
            </List.Item>
          </List>
        }
      >
        <NewsList />
      </React.Suspense>
    </div>
  );
}

function NewsList() {
  const {
    data: { news },
  } = useRecoilValue(newsList).read();
  const user = useUser();
  const setNewsArticle = useSetRecoilState(newsArticle);

  if (news.filter(Boolean).length === 0) {
    return <Empty description={<span>Es gibt nichts Neues.</span>} />;
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={news.filter(Boolean)}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[
            typeof item.likes === 'number' && (
              <Space key="likes">
                <LikeOutlined />
                {item.likes}
              </Space>
            ),
            item.comments && (
              <Space key="comments">
                <CommentOutlined />
                {item.comments.length}
              </Space>
            ),
            item.author.id === user?.id && (
              <Space key="edit">
                <EditOutlined
                  onClick={() =>
                    setNewsArticle({
                      writing: true,
                      id: item.id,
                      title: item.title,
                      article: item.article,
                    })
                  }
                />
              </Space>
            ),
          ].filter(Boolean)}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.author.picture} />}
            title={item.title}
            description={item.datetime}
          />
          {
            <div
              dangerouslySetInnerHTML={{ __html: convertToHTML(item.article) }}
            />
          }
        </List.Item>
      )}
    />
  );
}

function WriteNews() {
  const user = useUser();
  const [
    { writing: isFormVisible, id, title, article },
    setNewsArticle,
  ] = useRecoilState(newsArticle);
  const [isSubmitting, setSubmitting] = React.useState(false);
  const setNewsList = useSetRecoilState(newsList);

  const canWriteNews = user?.groups?.includes('NewsEditors');

  if (!canWriteNews) {
    return null;
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() =>
          setNewsArticle({ id: null, title: '', article: '', writing: true })
        }
      >
        Einen Artikel schreiben
      </Button>
      <Drawer
        title="Artikel schreiben"
        width={Math.min(800, window.innerWidth)}
        onClose={() => setNewsArticle((n) => ({ ...n, writing: false }))}
        visible={isFormVisible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div style={{ textAlign: 'right' }}>
            <Button
              onClick={() => setNewsArticle((n) => ({ ...n, writing: false }))}
              style={{ marginRight: 8 }}
            >
              Abbrechen
            </Button>
            <Button
              onClick={() => {
                setSubmitting(true);
                mutate<{ data: { news: NewsData } }>({
                  mutation: `mutation(${
                    id ? '$id: ID!, $news: NewsInput!' : '$news: NewsInput!'
                  }) {
  news: ${id ? 'updateNews(id: $id, news: $news)' : 'writeNews(news: $news)'} {
    id
    title
    article
    author {
      id
      name
      picture
    }
    datetime
  }
}`,
                  variables: {
                    ...(id && { id }),
                    news: {
                      title,
                      article,
                    },
                  },
                })
                  .promise()
                  .then(({ data: { news } }) => {
                    setSubmitting(false);
                    setNewsArticle({
                      id: null,
                      title: '',
                      article: '',
                      writing: false,
                    });
                    setNewsList((list) =>
                      list.update((v) => ({
                        data: {
                          news: id
                            ? v.data.news.map((n) =>
                                n?.id === news.id ? news : n,
                              )
                            : [...v.data.news, news],
                        },
                      })),
                    );
                  });
              }}
              type="primary"
              disabled={!title || !article || isSubmitting}
            >
              {isSubmitting && <Spin />}
              {id ? 'Bearbeiten' : 'Eintragen'}
            </Button>
          </div>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Titel"
                rules={[
                  { required: true, message: 'Bitte gib einen Titel an' },
                ]}
              >
                <Input
                  disabled={isSubmitting}
                  style={{ width: 200 }}
                  value={title}
                  onChange={({ target: { value } }) =>
                    setNewsArticle((n) => ({ ...n, title: value }))
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="Artikel"
                rules={[
                  {
                    required: true,
                    message: 'Bitte trag deinen News-Artikel ein',
                  },
                ]}
              >
                <TextEditor
                  value={article}
                  onChange={(text) =>
                    setNewsArticle((n) => ({ ...n, article: text }))
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
}
