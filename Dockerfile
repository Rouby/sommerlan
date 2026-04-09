# base node image
FROM node:20 AS base

ENV NODE_ENV=production
ENV TZ=Europe/Berlin


FROM base AS build

WORKDIR /myapp

COPY package.json yarn.lock .yarnrc.yml ./
COPY ./packages/client/package.json ./packages/client/package.json
COPY ./packages/server/package.json ./packages/server/package.json
COPY ./packages/integration/package.json ./packages/integration/package.json
COPY .yarn/ ./.yarn/
RUN yarn install --immutable


FROM build AS client-build

COPY ./packages/client ./packages/client
COPY ./packages/server/src/schema ./packages/server/src/schema
RUN yarn workspace @sommerlan-app/client build


FROM build AS server-build

COPY ./packages/server ./packages/server
RUN yarn workspace @sommerlan-app/server build
RUN yarn config set nodeLinker node-modules
RUN yarn workspaces focus @sommerlan-app/server --production


FROM base

ENV PORT=8080
ENV NEW_RELIC_NO_CONFIG_FILE=true
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
ENV NEW_RELIC_LOG=stdout
ENV NODE_OPTIONS=--enable-source-maps

WORKDIR /myapp

COPY --from=server-build /myapp/node_modules /myapp/node_modules
COPY --from=server-build /myapp/packages/server/dist/src /myapp/dist/server

COPY --from=client-build /myapp/packages/client/dist /myapp/dist/client

CMD ["node", "dist/server/index.js"]
