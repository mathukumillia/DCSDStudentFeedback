'use strict';

var _ = require('lodash');

// Extend the base configuration in all.js with environment
module.exports = _.extend(
    require(__dirname + '/../config/env/all.js')
);