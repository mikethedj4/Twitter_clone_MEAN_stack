/**
 * Created by Pratyush on 14-03-2016.
 */
'use strict'

var mongoose = require('mongoose');
var validator = require('node-mongoose-validator');

var TweetSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'cannot be empty']},
    body: {type: String, required: [true, 'cannot be empty']},
    updated_at: {type: Date, default: Date.now}
});

TweetSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model('Tweet', TweetSchema);