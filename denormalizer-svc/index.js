const bus = require('../bus');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://db/${process.env.DB_NAME}`);

bus.subscribe('site.created', require('./handlers/on-site-created'));
bus.subscribe('site.updated', require('./handlers/on-site-updated'));

console.log("denormalizer-svc online");
