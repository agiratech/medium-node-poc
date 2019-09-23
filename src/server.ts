import * as dotenv from 'dotenv';
import { App } from './app';
import { PostsController } from './posts/posts.controller';
dotenv.config();
const app = new App(
  [
    new PostsController(),
  ],
  process.env.SERVER_PORT,
);
app.listen();
