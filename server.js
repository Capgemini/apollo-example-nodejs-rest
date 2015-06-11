var restify = require('restify');
// Constants
var PORT = 8080;

var app = {
  version: '2.0.0',
  name: 'apollo-example-nodejs-rest'
};

// Server
var server = restify.createServer({
  name: app.name,
  version: app.version
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get("/", function (req, res, next) {
  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  res.end(JSON.stringify(app));
  return next();
});

server.listen(PORT, function () {
  console.log('%s listening at %s', server.name, server.url);
});
