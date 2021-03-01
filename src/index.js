import json from 'body-parser';
import express from 'express';

const app = express();
app.use(json());

// get webhook
app.get('/webhook', (request, response) => {
    response.json("o get idex ta rodando meu bruxo");
})

// post webhook
app.post('/webhook', (request, response) => {
    
    // armazenando o corpo da requisição que o dialogflow fez
    var data = request.body;
    console.log(data);

    var nomeIntencao = data.queryResult.intent.displayName;

    // intente de apresentação do produto com card
    if (nomeIntencao == 'Venda de Produtos - Calça Masculina'){
        
        var responseData = 
        {
            fulfillmentMessages: [{
                "title": "CALÇA JEANS COM RASGOS SKINNY PRETO",
                "subtitle": "R$ 49,90",   
                "image": {
                    "object": "https://img.lojasrenner.com.br/item/549840859/large/10.jpg"
                },
                "buttons": [
                    {
                        "object": "escolher produto"
                    }
                ],
                
                "title": "CALÇA EM SARJA COM BOLSOS VERDE",
                "subtitle": "R$ 49,90",
                "image": {
                    "object": "https://img.lojasrenner.com.br/item/550960410/large/10.jpg"
                },      
                "buttons": [
                    {
                        "object": "escolher produto"
                    }
                ]
            }]           
        };
        response.json(responseData);


    };






})



var port = 4200;
console.log("Iniciando Servidor...");
app.listen(process.env.PORT || port);
console.log("escutando na porta: " + port);