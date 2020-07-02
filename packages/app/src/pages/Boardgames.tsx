import { Alert, AutoComplete, Button, Card, Spin, Typography } from 'antd';
import * as React from 'react';
import { mutate, query } from '../api';
import ErrorBoundary from '../ErrorBoundary';

const boardgamesResource = query({
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
  authMode: 'iam',
});

export function Boardgames(): React.ReactElement {
  return (
    <>
      <Typography.Title>Brettspiele</Typography.Title>
      <Typography.Text>Wer bringt was mit?</Typography.Text>
      <ErrorBoundary
        name="BoardgameList"
        fallback={
          <Alert
            message="Brettspiel-Liste"
            description="Die Brettspiel-Liste ist nur für eingeloggte Nutzer sichtbar!"
            type="error"
            closable
          />
        }
      >
        <React.Suspense fallback="Lade Daten...">
          <BoardgamesList />
        </React.Suspense>
      </ErrorBoundary>
      <BoardgameSubmit />
    </>
  );
}

function BoardgamesList(): React.ReactElement {
  const {
    data: { boardgames },
  } = boardgamesResource.read();

  return (
    <>
      {boardgames.filter(Boolean).map((game: any) => (
        <Card
          key={game.id}
          hoverable
          style={{ width: 240 }}
          cover={<img alt={game.name} src={game.imageUrl} />}
        >
          <Card.Meta
            title={game.name}
            description={`${game.name} von ${game.owner.name}`}
          />
        </Card>
      ))}
    </>
  );
}

function BoardgameSubmit(): React.ReactElement {
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [name, setName] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    if (search) {
      let cancelled = false;
      query({
        query: `query($search: String!) {
  boardgames: searchBoardgames(name: $search) {
    name
    image_url
  }
}`,
        variables: { search },
      })
        .promise()
        .then((r) => {
          if (!cancelled) {
            setOptions(
              r.data.boardgames.map((info: any) => ({
                value: info.name,
                info,
              })),
            );
          }
        });
      return () => {
        cancelled = true;
      };
    } else {
      setOptions([]);
      return;
    }
  }, [search]);

  return (
    <div>
      Ich will was mitbringen:
      <AutoComplete
        disabled={isSubmitting}
        style={{ width: 200 }}
        value={name}
        options={options}
        notFoundContent={<Spin />}
        onChange={setName}
        onSelect={(_, { info }: any) => setImageUrl(info.image_url)}
        onSearch={setSearch}
      />
      <img src={imageUrl} alt="img" />
      <Button
        type="primary"
        disabled={!name || !imageUrl || isSubmitting}
        onClick={() => {
          setSubmitting(true);
          mutate({
            mutation: `mutation($boardgame: AddBoardgameInput!) {
  addBoardgame(boardgame: $boardgame) {
    id
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
            .then(() => {
              setSubmitting(false);
            });
        }}
      >
        {isSubmitting && <Spin />}
        Eintragen
      </Button>
    </div>
  );
}
