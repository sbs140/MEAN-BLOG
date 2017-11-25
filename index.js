const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const config = require('./config/database');
const path = require('path');


mongoose.Promise = global.Promise;
mongoose.createConnection(config.uri, (err) => {
    if(err){
        console.log('Could not connect to Database', err);
    }else {
        console.log('Connected to databese:', + config.db);
    }
});

app.use(express.static(__dirname + '/mean-blog/dist/'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname +'/mean-blog/dist/index.html'));
  });

app.listen(8080, () => {
    console.log('Listening on port 8080');
});