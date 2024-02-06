//constants
const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const model = require('./models');


let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.post('/create', async (req,res)=>{
    req.body.passwordUser;
    let reqs = await model.User.create({
        'cpf':req.body.cpfUser,
        'password':req.body.passwordUser,
        'createAt':new Date(),
        'updateAt':new Date()
    });
    console.log(req.body.cpfUser);
})

let port = process.env.PORT || 3000;
app.listen(port,(req,res)=> {
    console.log('Servidor ON');
});


