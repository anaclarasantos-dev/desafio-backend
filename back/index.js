const Express = require('express'); // servidor HTTP
const cors = require('cors'); // frontend consegue acessar API
require('dotenv').config(); // carregando o .env 

const routes = require('./src/routes.js'); // pega a rota

const app = Express();
app.use(Express.json()); 
app.use(cors());
app.use(routes);

app.listen(3000, () => {
    console.log("App ON");
});