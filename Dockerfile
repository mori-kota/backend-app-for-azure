FROM node:16
# app ディレクトリを作成する。
WORKDIR /usr/src/app
# アプリの依存関係をインストールする。
COPY package*.json ./
RUN npm install
# アプリのソースをコピーする。
COPY . .
EXPOSE 80
CMD [ "npm", "start" ]