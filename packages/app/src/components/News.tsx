import { CommentOutlined, LikeOutlined } from '@ant-design/icons';
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
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { mutate, query } from '../api';
import { useUser } from '../auth';
import { convertToHTML, TextEditor } from './TextEditor';

type NewsData = {
  id: string;
  title: string;
  article: string;
  author: {
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
        name
        picture
      }
      datetime
    }
  }`,
  }),
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
          key={item.title}
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
  const [isFormVisible, setFormVisible] = React.useState(false);
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [article, setArticle] = React.useState('');
  const setNewsList = useSetRecoilState(newsList);

  const canWriteNews = user?.groups?.includes('NewsEditors');

  if (!canWriteNews) {
    return null;
  }

  return (
    <div>
      <Button type="primary" onClick={() => setFormVisible(true)}>
        Einen Artikel schreiben
      </Button>
      <Drawer
        title="Artikel schreiben"
        width={Math.min(800, window.innerWidth)}
        onClose={() => setFormVisible(false)}
        visible={isFormVisible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div style={{ textAlign: 'right' }}>
            <Button
              onClick={() => setFormVisible(false)}
              style={{ marginRight: 8 }}
            >
              Abbrechen
            </Button>
            <Button
              onClick={() => {
                setSubmitting(true);
                mutate<{ data: { news: NewsData } }>({
                  mutation: `mutation($news: NewsInput!) {
  news: writeNews(news: $news) {
    id
    title
    article
    author {
      name
      picture
    }
    datetime
  }
}`,
                  variables: {
                    news: {
                      title,
                      article,
                    },
                  },
                })
                  .promise()
                  .then(({ data: { news } }) => {
                    setSubmitting(false);
                    setFormVisible(false);
                    setNewsList((list) =>
                      list.update((v) => ({
                        data: { news: [...v.data.news, news] },
                      })),
                    );
                  });
              }}
              type="primary"
              disabled={!title || !article || isSubmitting}
            >
              {isSubmitting && <Spin />}
              Eintragen
            </Button>
          </div>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Titel"
                rules={[
                  { required: true, message: 'Bitte gib einen Titel an' },
                ]}
              >
                <Input
                  disabled={isSubmitting}
                  style={{ width: 200 }}
                  value={title}
                  onChange={({ target: { value } }) => setTitle(value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="article"
                label="Artikel"
                rules={[
                  {
                    required: true,
                    message: 'Bitte trag deinen News-Artikel ein',
                  },
                ]}
              >
                <TextEditor onChange={setArticle} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
}
