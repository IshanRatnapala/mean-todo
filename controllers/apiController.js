"use strict";

var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos/:username', function (req, res) {
        Todos.find({ username: req.params.username }, function (err, todos) {
            if (err) { throw err; }
            else {
                res.send(todos);
            }
        });
    });

    app.get('/api/todo/:id', function (req, res) {
        Todos.findById({ _id: req.params.id }, function (err, todo) {
            if (err) { throw err; }
            else {
                res.send(todo);
            }
        });
    });

    app.post('/api/todo', function (req, res) {
        if (req.body.id) {
            Todos.findByIdAndUpdate({ _id: req.body.id }, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function (err, todo) {
                res.send('Update Successful');
            });
        } else {
            var newTodo = Todos({
                username: req.body.username,
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            newTodo.save(function (err, todo) {
                if (err) { throw err; }
                else {
                    res.send('Added new Todo');
                }
            });
        }
    });
};
