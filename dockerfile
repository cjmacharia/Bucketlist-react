FROM  node:carbon
RUN npm install yarn -g
RUN mkdir Bucketlist-react
COPY . Bucketlist-react
WORKDIR Bucketlist-react
RUN yarn install
EXPOSE 8000
CMD yarn start



