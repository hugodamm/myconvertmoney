const express = require('express')
const app = express()
const path = require('path')

const routes = require("./routes/routes");

const port = process.env.PORT || 3003;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes);

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, (err) => {
    if(err){
        console.log('Erro ao iniciar:', err)
    }else{
        console.log('Servidor Iniciado em', port)
    }
});