const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MiniStore API',
            version: '1.0.0',
            description: 'Learning how to use the MiniStore API',
    },
    servers: [ //add server detials
        {url: "http://localhost:8800",
            description: "My API through HTTP"
        },
        {url: "https://localhost:8443",
            description: "My API through HTTPS"
        },
    ]
},
apis: ['./routes/*.js'], //Path to the API docs
};
const swaggerSpecs = swaggerJSDoc(swaggerOptions);
module.exports = {swaggerSpecs,swaggerUI};