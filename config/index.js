"use strict";
var configValues = require('./config');

module.exports = {
    getDbConnectionString: 'mongodb://' + configValues.username + ':' + configValues.password + '@ds031892.mlab.com:31892/todolist'
};
