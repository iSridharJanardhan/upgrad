const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = express.Router();
const port = 4000;

let upgrad = require('./upgrad.model');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/upgrad',{useNewUrlParser:true});
const connection = mongoose.connection

connection.once('open',function(){
    console.log('MongoDb connected successfully!!')
})

routes.route('/contactlist').get(function(req, res){
    upgrad.find(function(err, upgrad){
        if(err){
            console.log(err);
        }
        else{
            res.status(200).json({
                upgrad,
            })
        }
    })
})

routes.route('/addcontact').post(function(req,res){
    let upgrad = new upgrad(req.body);
    upgrad.save()
            .then(upgrad =>{
                res.status(200).json({
                    upgrad
                })
                .catch(err => {
                    res.status(400).send('adding task failes');
                });
            });
})

routes.route('/contact/:id').delete(function(req,res){
    const id =req.params.id;
    upgrad.remove({_id : id})
            .exec()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.json({
                    'error' : err
                })
            })
    
})
app.use('/', routes);

app.listen(port, function(){
    console.log('server is ruuning on port:' + port);
});