FROM  node:carbon
USER root
RUN npm install yarn -g
RUN git clone https://github.com/cjmash/Bucketlist-react.git
WORKDIR Bucketlist-react
RUN yarn install
EXPOSE 8000:3001
ENTRYPOINT [ "yarn", "start" ]


