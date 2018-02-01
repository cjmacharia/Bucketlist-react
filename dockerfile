FROM  node:carbon
USER root
RUN npm install yarn -g
RUN mkdir Bucketlist-react
COPY . Bucketlist-react
WORKDIR Bucketlist-react
RUN yarn install
EXPOSE 20
ENTRYPOINT [ "yarn", "start" ]


