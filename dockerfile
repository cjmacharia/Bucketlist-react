FROM  node:carbon
RUN npm install yarn -g
RUN mkdir Bucketlist-react
COPY . Bucketlist-react
WORKDIR Bucketlist-react
EXPOSE 20



