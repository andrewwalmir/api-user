const express = require('express');

const app = express();

app.use(express.json());

app.get('/user/:cpf', (request, response) => {
    const { cpf } = request.params;
    console.log(cpf);

    const user = {
        "Cpf": "68482603639",
        "Name": "Mário Breno Roberto Carvalho",
        "Email": "contato@hero99.com.br",
        "Password": "teste123",
        "FirstAccess": true,
    };

    return response.json(user);

});

app.listen(3333, () => {
    console.log('🚀 Back-end started!')
});