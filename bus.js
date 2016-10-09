const bus = require('servicebus').bus({ url: 'amqp://rabbitmq' });

bus.use(bus.package());
bus.use(bus.correlate());

module.exports = bus;
