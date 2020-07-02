import { createServer, IncomingMessage, ServerResponse } from 'http';

let server = createServer(handler);
export const endpoint = 'http://localhost:3090';

export function start() {
  server.listen(3090);
}

export function stop() {
  server.close();
}

process.on('SIGINT', function () {
  server.close();

  process.exit();
});

function handler(req: IncomingMessage, res: ServerResponse) {
  console.log(`Cognito Request: ${req.headers['x-amz-target']}`);

  let body = '';
  req.on('data', (chunk) => (body += chunk));
  req.on('end', () => {
    switch (req.headers['x-amz-target']) {
      case 'AWSCognitoIdentityProviderService.AdminGetUser': {
        const { Username } = JSON.parse(body);
        if (Username in fakeUser) {
          res.writeHead(200);
          res.end(
            JSON.stringify({
              ...fakeUser[Username as keyof typeof fakeUser],
              Username,
            }),
          );
        } else {
          res.writeHead(400);
          res.end('UserNotFoundException');
        }
        return;
      }
    }

    res.writeHead(404);
    res.end();
  });
}

const fakeUser = {
  user1: {
    Enabled: true,
    UserCreateDate: 1337,
    UserLastModifiedDate: 1337,
    // MFAOptions: [
    // {
    //   AttributeName: 'string',
    //   DeliveryMedium: 'string',
    // },
    // ],
    // PreferredMfaSetting: 'string',
    UserMFASettingList: [],
    UserStatus: 'CONFIRMED',
    UserAttributes: [
      { Name: 'name', Value: 'Rando Calrissian' },
      { Name: 'preferred_username', Value: 'Rando Calrissian' },
      { Name: 'locale', Value: 'de' },
      { Name: 'given_name', Value: 'Rando' },
      { Name: 'family_name', Value: 'Calrissian' },
      { Name: 'email', Value: 'rando@examle.com' },
      {
        Name: 'picture',
        Value:
          'https://vignette.wikia.nocookie.net/starwars/images/2/29/LandoCalrissian-TROSOCE.png/revision/latest?cb=20200101050952',
      },
    ],
  },
  Google_114528438520800014589: {
    Enabled: true,
    UserCreateDate: 1337,
    UserLastModifiedDate: 1337,
    // MFAOptions: [
    // {
    //   AttributeName: 'string',
    //   DeliveryMedium: 'string',
    // },
    // ],
    // PreferredMfaSetting: 'string',
    UserMFASettingList: [],
    UserStatus: 'CONFIRMED',
    UserAttributes: [
      { Name: 'name', Value: 'Jonathan Burke' },
      { Name: 'preferred_username', Value: 'Jonathan Burke' },
      { Name: 'locale', Value: 'de' },
      { Name: 'given_name', Value: 'Jonathan' },
      { Name: 'family_name', Value: 'Burke' },
      { Name: 'email', Value: 'jonathan.burke.1311@gmail.com' },
      {
        Name: 'picture',
        Value:
          'https://lh3.googleusercontent.com/a-/AOh14GgvsfBsbRl__3VoI-QVAIjm6ZpgD5-twF4FPE9Qp78=s96-c',
      },
    ],
  },
};
