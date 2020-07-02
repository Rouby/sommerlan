FROM node:12 AS compile

WORKDIR /aim

COPY phase-1/ /aim

RUN yarn install --frozen-lockfile

COPY phase-2/ /aim

RUN yarn workspaces run build

RUN find . -name "node_modules" -exec rm -rf '{}' +
RUN find . -type f -name "*.ts" -exec rm -rf '{}' +


FROM node:12

WORKDIR /aim-built

COPY --from=compile /aim /aim-built

ENV NODE_ENV production
RUN yarn install --frozen-lockfile --production
