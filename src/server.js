const express = require('express');
const app = express();
const { PORT } = require('./common/config');

app.get('/api/health', (req, res) => {
  res.send('App is running')
});

app.listen(PORT, () => {
  console.log(`App listening on port '${PORT}'`)
});
