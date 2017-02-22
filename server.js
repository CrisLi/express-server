const express = require('express');
const fallback = require('express-history-api-fallback');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;
const root = process.env.HOST_DIR || path.join(__dirname, '/public');
const app = express();

app.use(morgan('combined'));
app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server has started at http://localhost:${port}`);
});
