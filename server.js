const axios   = require('axios'),
      express = require('express'),
      app     = express(),
      session = require('express-session'),
      {}      = require('./config'),
      path    = require('path'),
      port    = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`[ READY ] › Servidor rodando na porta ${port}.`);
});

app.get('/', (req, res) => {
  res.render('index', {
    // style: path.join(__dirname, '/src/css/style.css')
  });
});