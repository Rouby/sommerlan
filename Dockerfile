# base node image
FROM node:18 as base

# set for base and all layer that inherit from it
ENV NODE_ENV production
ENV TZ "Europe/Berlin"

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

# Install all node_modules, including dev dependencies
FROM base as deps-client

WORKDIR /myapp

ADD package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ ./.yarn/
RUN yarn workspaces focus @sommerlan-app/client

FROM base as deps-server

WORKDIR /myapp

ADD package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ ./.yarn/
RUN yarn workspaces focus @sommerlan-app/server

# Build the client
FROM base as build-client

WORKDIR /myapp

COPY --from=deps-client /myapp/.yarn /myapp/.yarn
ADD ./packages/client ./packages/client
RUN yarn workspace @sommerlan-app/client build

# Build the server
FROM base as build-server

WORKDIR /myapp

COPY --from=deps-server /myapp/.yarn /myapp/.yarn
COPY --from=deps-server /myapp/.yarnrc.yml /myapp/.yarnrc.yml
COPY --from=deps-server /myapp/package.json /myapp/package.json
COPY --from=deps-server /myapp/yarn.lock /myapp/yarn.lock

ADD ./packages/server ./packages/server
RUN yarn workspace @sommerlan-app/server build
RUN yarn config set nodeLinker node-modules
RUN yarn workspaces focus @sommerlan-app/server --production

# Finally, build the production image with minimal footprint
FROM base

ENV PORT 8080

WORKDIR /myapp

COPY --from=build-server /myapp/node_modules /myapp/node_modules

COPY --from=build-server /myapp/packages/server/dist /myapp/dist/server
COPY --from=build-server /myapp/packages/client/dist /myapp/dist/client

CMD ["node", "dist/server/index"]
