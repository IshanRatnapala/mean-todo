"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var TodoModel = mongoose.model('todos', todoSchema);

module.exports = TodoModel;