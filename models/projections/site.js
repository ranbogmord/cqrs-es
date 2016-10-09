const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, default: "" },
    url: { type: String, default: "" },
    version: {type: String, default: ""},
    plugins: {type: [], default: []},
    createdAt: { type: Date },
    updatedAt: { type: Date }
});

module.exports = mongoose.model('Site', schema);
