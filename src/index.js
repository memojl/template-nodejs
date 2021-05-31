const express = require('express');
const colors = require('colors');
const server = express();
const PORT = process.env.PORT || 3000;

//settings
server.set('port',process.env.PORT || 3000);
server.set('views', __dirname+'/views');
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'ejs');
//server.set('json spaces',2);

//static files
server.use(express.static(__dirname + "/public"));

//middlewares
//server.use(express.json());

//routes
server.use('/', require('./routes/RutasWeb'));
//server.use('/api', require('./routes/RutasApi'));

//404
server.use((req,res,next)=>{
  res.status(404).render('404.html', {
    title: '404',
    msj: 'Página no encontrada'
  });
}); 

//server
server.listen(server.get('port'), () => {
  console.log(`Our server is running on port:`.blue + ` ${ server.get('port') }`.yellow);
});