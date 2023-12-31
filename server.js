const axios      = require('axios'),
      express    = require('express'),
      app        = express(),
      session    = require('express-session'),
      {}         = require('./config'),
      path       = require('path'),
      serverless = require('serverless-http'),
      port       = process.env.PORT || 1337;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('body-parser');

app.get('/', (req, res) => {
  res.render('index', {
    // style: path.join(__dirname, '/src/css/style.css')
  });
});

app.listen(port, () => {
  console.log(`[ READY ] › Servidor rodando na porta ${port}.`);
});

module.exports = app;
module.exports.handler = serverless(app);
