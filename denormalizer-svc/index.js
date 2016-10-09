const bus = require('../bus');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://db/${process.env.DB_NAME}`);

bus.subscribe('site.created', require('./handlers/on-site-created'));

console.log("denormalizer-svc online");
