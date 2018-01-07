const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..','public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Fix the following issue [ when we go to other routes other than index, and reload, it breaks ]
// OR it means "When the user asks for a page not available in public directory, serve the index.html file"
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up');
});