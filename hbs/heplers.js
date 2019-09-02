
const hbs = require ('hbs');

//USO DE HELPERS DE HBS
hbs.registerHelper('getYear',()=>
{
    return new Date().getFullYear()
});

hbs.registerHelper('capitalizar',(texto)=>
{
    return texto.toUpperCase();
});

