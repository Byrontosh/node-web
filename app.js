//importar express
const express = require('express');
//inicializar el modulo
const app = express();

const hbs = require ('hbs');
require('./hbs/heplers');



app.use(express.static(__dirname+'/public'));

//USO DE HBS

hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine','hbs');


const port = process.env.PORT || 3000;



//PRIMERA RUTA
app.get('/',(req,res)=>
{
    res.render('index');
})

app.get('/about',(req,res)=>
{
    res.render('about');
})

app.listen(port,()=>
{
    console.log(`SERVIDOR OK PUERTO ${port}`);
})