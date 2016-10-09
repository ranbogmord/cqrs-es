const bus = require('servicebus').bus();

setInterval(function () {
    bus.send('site.create', { my: 'event' });
}, 1000);
