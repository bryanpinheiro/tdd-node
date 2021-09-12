import express from 'express';
import db from './db';

const app = express();

app.get('/users/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const user = await db.getUserByUsername(username);

    if (user === null) {
      return res.sendStatus(404);
    }

    res.json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

export { app };