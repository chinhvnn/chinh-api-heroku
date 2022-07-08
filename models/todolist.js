const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/dbconfig');
const autoIncrement = require('mongoose-auto-increment');

var taskSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    creator: {
        type: String,
    },
    createAt: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
    },
    // dateAdded : { type: Date, default: Date.now },
})

// autoIncrement.initialize(mongoose.connection);
// taskSchema.plugin(autoIncrement.plugin, { model: 'Tasks', field: 'id' });

module.exports = mongoose.model('Tasks', taskSchema);