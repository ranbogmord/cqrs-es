const bus = require('../bus');
const mongoose = require('mongoose');
const create = require('./lib/create');
const update = require('./lib/update');
mongoose.connect(`mongodb://db/${process.env.DB_NAME}`);

bus.listen('site.create', event => {
    create(event, (err, storedEvent) => {
        if (err) return console.error(new Error(`Failed to create site. CID: ${event.cid}`));

        return bus.publish('site.created', storedEvent);
    });
});

bus.listen('site.update', event => {
    update(event, (err, storedEvent) => {
        if (err) return console.error(new Error(`Failed to update site. CID: ${event.cid}`));

        return bus.publish('site.updated', storedEvent);
    });
});

console.log("site-svc online");
