const mongoose = require('mongoose');
const Event = require('../../models/event');

module.exports = (event, callback) => {
    const data = event.data;

    Event.create({
        aggregate: 'site',
        attrs: data,
        type: 'site.update'
    }, (err, createdEvent) => {
        if (err) {
            return callback(err);
        }

        return callback(null, createdEvent);
    });
};
