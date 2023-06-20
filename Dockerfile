# base node image
FROM node:18 as base

# set for base and all layer that inherit from it
ENV NODE_ENV production
ENV TZ "Europe/Berlin"

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /myapp

ADD package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ ./.yarn/
RUN which node
RUN yarn

# Setup production node_modules
FROM base as production-deps

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules
COPY --from=deps /myapp/.yarn /myapp/.yarn
ADD package.json yarn.lock .yarnrc.yml ./
RUN yarn workspaces focus --production

# Build the app
FROM base as build

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules
COPY --from=deps /myapp/.yarn /myapp/.yarn
COPY --from=deps /myapp/.yarnrc.yml /myapp/.yarnrc.yml
COPY --from=deps /myapp/package.json /myapp/package.json
COPY --from=deps /myapp/yarn.lock /myapp/yarn.lock

ADD . .
RUN yarn build

# Finally, build the production image with minimal footprint
FROM base

ENV NODE_ENV="production"
ENV PORT=8080

WORKDIR /myapp

COPY --from=production-deps /myapp/node_modules /myapp/node_modules
COPY --from=build /myapp/.yarn /myapp/.yarn

COPY --from=build /myapp/dist /myapp/dist
COPY --from=build /myapp/public /myapp/public
ADD . .

CMD ["node", "dist/server/index"]
