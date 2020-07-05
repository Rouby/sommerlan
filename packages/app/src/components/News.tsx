import { Button, Col, Drawer, Empty, Form, Input, Row, Spin } from 'antd';
import * as React from 'react';
import { mutate } from '../api';
import { useUser } from '../auth';

type NewsData = {
  id: string;
  title: string;
  article: string;
  datetime: string;
};

export function News(): React.ReactElement {
  return (
    <div>
      <Empty description={<span>Es gibt nichts Neues.</span>} />
    </div>
  );
}

function WriteNews() {
  const user = useUser();
  const [isFormVisible, setFormVisible] = React.useState(false);
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [article, setArticle] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  // const setBoardgameList = useSetRecoilState(boardgamesList);

  const canWriteNews = user?.groups?.includes('NewsEditors');

  if (!canWriteNews) {
    return null;
  }

  return (
    <>
      <Button type="primary" onClick={() => setFormVisible(true)}>
        Einen Artikel schreiben
      </Button>
      <Drawer
        title="Artikel schreiben"
        width={Math.min(500, window.innerWidth)}
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
                    console.log(news);
                    // setBoardgameList((list) =>
                    //   list.update((v) => ({
                    //     data: { boardgames: [...v.data.boardgames, boardgame] },
                    //   })),
                    // );
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
                <Input
                  disabled={isSubmitting}
                  style={{ width: 200 }}
                  value={title}
                  onChange={({ target: { value } }) => setTitle(value)}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
}
