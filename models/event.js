const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    aggregate: { type: String, required: true },
    aggregate_id: { type: String, required: true, default: new mongoose.Types.ObjectId() },
    type: { type: String, required: true },
    attrs: { type: Schema.Types.Mixed, required: true },
    timestamp: { type: Date, default: new Date() }
});

module.exports = mongoose.model('Event', eventSchema);
