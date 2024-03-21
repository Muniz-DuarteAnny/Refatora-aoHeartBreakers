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
        'email':req.body.emailUser,
        'password':req.body.passwordUser,
        'createAt':new Date(),
        'updateAt':new Date()
    });
    console.log(req.body.emailUser);
})

let port = process.env.PORT || 3000;
app.listen(port,(req,res)=> {
    console.log('Servidor ON');
});


