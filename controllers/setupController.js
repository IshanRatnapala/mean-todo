"use strict";
var TodoModel = require('../models/todoModel');

module.exports = function (app) {
    app.get('/api/setup', function (req, res) {
        var seedData = [
            {
                username: 'testuser',
                todo: 'do this',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'testuser',
                todo: 'do that',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'testuser',
                todo: 'do this again',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'testuser',
                todo: 'do this again',
                isDone: false,
                hasAttachment: false
            }
        ];

        TodoModel.create(seedData, function (err, results) {
            res.send(results);
        });
    });
};