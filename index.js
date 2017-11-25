const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const config = require('./config/database');
const path = require('path');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err){
        console.log('Could not connect to Database', err);
    }else {
        console.log(config.secret);
        console.log('Connect to databese:', + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', (req, res) => {
    res.send(Path2D.join(__dirname +'/client/dist/index.html'));
  });

app.listen(8080, () => {
    console.log('Listen on port 8080');
});