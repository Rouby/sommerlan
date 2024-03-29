# base node image
FROM node:20 as base

ENV NODE_ENV production
ENV TZ "Europe/Berlin"


FROM base as build

WORKDIR /myapp

ADD package.json yarn.lock .yarnrc.yml ./
ADD ./packages/client/package.json ./packages/client/package.json
ADD ./packages/server/package.json ./packages/server/package.json
ADD ./packages/integration/package.json ./packages/integration/package.json
COPY .yarn/ ./.yarn/
RUN yarn install


FROM build as client-build

ADD ./packages/client ./packages/client
ADD ./packages/server/src/schema ./packages/server/src/schema
RUN yarn workspace @sommerlan-app/client build


FROM build as server-build

ADD ./packages/server ./packages/server
RUN yarn workspace @sommerlan-app/server build
RUN yarn config set nodeLinker node-modules
RUN yarn workspaces focus @sommerlan-app/server --production


FROM base

ENV PORT 8080
ENV NEW_RELIC_NO_CONFIG_FILE true
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED true
ENV NEW_RELIC_LOG stdout
ENV NODE_OPTIONS --enable-source-maps

WORKDIR /myapp

COPY --from=server-build /myapp/node_modules /myapp/node_modules
COPY --from=server-build /myapp/packages/server/dist/src /myapp/dist/server

COPY --from=client-build /myapp/packages/client/dist /myapp/dist/client

CMD ["node", "dist/server/index"]
