const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session');

/*Middelware*/
app.use(express.static('public'))
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000, ()=>{
  console.log('Servidor funcionando');
  });

app.set('view engine', 'ejs');

app.set('views', './src/views');

const mainRoute = require('./src/routes/mainRoute');
const productRoute = require('./src/routes/productRoute');
const userRoute = require('./src/routes/userRoute');

app.use("/", [mainRoute,productRoute,userRoute]);

app.use((req, res, next) =>{
  res.status(404).render('not-found')
})