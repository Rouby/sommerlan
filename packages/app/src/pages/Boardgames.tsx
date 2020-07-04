import {
  Alert,
  AutoComplete,
  Button,
  Card,
  Col,
  Drawer,
  Empty,
  Form,
  message,
  Row,
  Space,
  Spin,
  Typography,
} from 'antd';
import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { mutate, query } from '../api';
import { useUser } from '../auth';
import ErrorBoundary from '../ErrorBoundary';

const useStyles = createUseStyles({
  container: {
    width: '100%',
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 240px)',
    gridGap: 16,
  },
});

type Boardgame = {
  id: string;
  name: string;
  imageUrl: string;
  owner: { name: string };
};

const boardgamesList = atom({
  key: 'boardgames',
  default: query<{
    data: {
      boardgames: Boardgame[];
    };
  }>({
    query: `{
    boardgames: getBoardgames {
      id
      name
      imageUrl
      owner {
        name
      }
    }
  }`,
  }),
});

export function Boardgames(): React.ReactElement {
  const classes = useStyles();

  return (
    <>
      <Space direction="vertical" className={classes.container}>
        <Typography.Title>Brettspiele</Typography.Title>
        <Typography.Text>Wer bringt was mit?</Typography.Text>
        <BoardgameSubmit />
        <ErrorBoundary
          name="BoardgameList"
          fallback={
            <Alert
              message="Brettspiel-Liste"
              description="Es gab einen Fehler beim Laden der Brettspiel-Liste :("
              type="error"
            />
          }
        >
          <div className={classes.list}>
            <React.Suspense
              fallback={
                <>
                  <Card loading />
                  <Card loading />
                </>
              }
            >
              <BoardgamesList />
            </React.Suspense>
          </div>
        </ErrorBoundary>
      </Space>
    </>
  );
}

function BoardgamesList(): React.ReactElement {
  const {
    data: { boardgames },
  } = useRecoilValue(boardgamesList).read();

  return (
    <>
      {boardgames.filter(Boolean).map((game) => (
        <Card
          key={game.id}
          hoverable
          style={{ width: 240 }}
          cover={<img alt={game.name} src={game.imageUrl} />}
        >
          <Card.Meta
            title={game.name}
            description={`mitgebracht von ${game.owner.name}`}
          />
        </Card>
      ))}
      {boardgames.length === 0 && (
        <Empty description={<span>Niemand bringt etwas mit :(</span>} />
      )}
    </>
  );
}

function BoardgameSubmit(): React.ReactElement {
  const user = useUser();
  const [isFormVisible, setFormVisible] = React.useState(false);
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [name, setName] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const setBoardgameList = useSetRecoilState(boardgamesList);

  React.useEffect(() => {
    setOptions([]);
    if (search) {
      let cancelled = false;
      setIsLoading(true);
      query({
        query: `query($search: String!) {
  boardgames: searchBoardgames(name: $search) {
    name
    thumb_url
  }
}`,
        variables: { search },
      })
        .promise()
        .then((r) => {
          if (!cancelled) {
            setOptions(
              r.data?.boardgames?.map((info: any) => ({
                value: info.name,
                info,
              })) ?? [],
            );
            setIsLoading(false);
            if (r.errors) {
              r.errors.forEach((err: any) => message.error(err.message));
            }
          }
        });
      return () => {
        cancelled = true;
      };
    } else {
      return;
    }
  }, [search]);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => setFormVisible(true)}
        disabled={!user}
      >
        Ich will was mitbringen!
      </Button>
      <Drawer
        title="Brettspiel mitbringen"
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
                mutate<{ data: { boardgame: Boardgame } }>({
                  mutation: `mutation($boardgame: AddBoardgameInput!) {
  boardgame: addBoardgame(boardgame: $boardgame) {
    id
    name
    imageUrl
    owner {
      name
    }
  }
}`,
                  variables: {
                    boardgame: {
                      name,
                      imageUrl,
                    },
                  },
                })
                  .promise()
                  .then(({ data: { boardgame } }) => {
                    setSubmitting(false);
                    setFormVisible(false);
                    setBoardgameList((list) =>
                      list.update((v) => ({
                        data: { boardgames: [...v.data.boardgames, boardgame] },
                      })),
                    );
                  });
              }}
              type="primary"
              disabled={!name || !imageUrl || isSubmitting}
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
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter boardgame' }]}
              >
                <AutoComplete
                  disabled={isSubmitting}
                  style={{ width: 200 }}
                  value={name}
                  options={options}
                  notFoundContent={
                    isLoading ? <Spin /> : search ? 'Nichts gefunden :(' : null
                  }
                  onChange={setName}
                  onSelect={(_, { info }: any) => setImageUrl(info.thumb_url)}
                  onSearch={setSearch}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              {name && imageUrl && (
                <img src={imageUrl} alt={`${name}`} width="100%" />
              )}
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
}
