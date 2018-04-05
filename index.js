import server from './server';

const config = {};

if(process.env.NODE_ENV === 'development'){
  config.port = 3000;
  config.host = 'localhost';
  server.locals.assestPath = 'http://localhost:8080/',
  server.locals.isDevelopment = true;
}

server.listen(config.port, config.host, (err) => {
  if(err) throw err;
  console.log('THe Web server is listening at ', config.port, config.host)
})
