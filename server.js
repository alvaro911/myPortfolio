var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("./portfolio"));
app.listen(8080);
console.log("listening at port 8080");