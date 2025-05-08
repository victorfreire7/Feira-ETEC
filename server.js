const express = require('express');
const routes = require('./routes');
const db = require('./src/db'); // 127.0.0.1 ???
const app = express();
const PORT = 3006;

app.use(express.static('public')); //seto o diretorio inicial das páginas EJS como 'public', assim posso executar o 'js/main.js' mais facilmente.
app.use(express.urlencoded({ extended: true }));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`BD conectado com sucesso.`))
.then(() => {
    app.emit('conectado');
});
/*
    o método '.sync' é um método pertencente do sequelize.
    ele é utilizado para sincronizar o modelo definido com 
    o banco de dados.
*/

app.on('conectado', () => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
});