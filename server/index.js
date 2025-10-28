import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
app.use(express.json());

// simple health route
app.get('/', (req, res) => {
  res.send('Revealr server running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
