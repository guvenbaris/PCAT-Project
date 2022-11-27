const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Photo = require('./models/Photo');
//connect Db
mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db');

let photo = {
    title:'Title 2',
    description : 'Description 2',
    createdDate : Date.now
}
Photo.create(photo);
