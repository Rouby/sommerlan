# base node image
FROM node:16-bullseye as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /myapp

ADD package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ ./.yarn/
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

ADD prisma .
RUN yarn prisma generate

ADD . .
RUN yarn build

# Finally, build the production image with minimal footprint
FROM base

ENV DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
ENV PORT="8080"
ENV NODE_ENV="production"

# add shortcut for connecting to database CLI
RUN echo "#!/bin/sh\nset -x\nsqlite3 \$DATABASE_URL" > /usr/local/bin/database-cli && chmod +x /usr/local/bin/database-cli

WORKDIR /myapp

COPY --from=production-deps /myapp/node_modules /myapp/node_modules
COPY --from=build /myapp/node_modules/.prisma /myapp/node_modules/.prisma
COPY --from=build /myapp/.yarn /myapp/.yarn

COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/public /myapp/public
ADD . .

CMD ["yarn", "start"]
