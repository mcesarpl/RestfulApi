import express, { json } from 'express';
import db from './database/db';
import router from './router';

const app = express();

app.use(json());
app.use(router);

app.listen(3333, async () => {
  await db.sync();
  console.log(`app running ${process.env.MYSQL_USER} on port 3333!`);
});
