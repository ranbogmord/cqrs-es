const express = require('express');
const mongoose = require('mongoose');
const bp = require('body-parser');
const bus = require('../bus');

const app = express();
app.use(bp.json());

mongoose.connect(`mongodb://db/${process.env.DB_NAME}`);

app.get('/events', (req, res) => {
    const Event = require('../models/event');

    Event.find({}, function (err, events) {
        return res.json(events);
    });
});

app.post('/site', (req, res) => {
    const data = req.body;
    if (!data.url || !data.name) {
        return res.status(400).end();
    }

    bus.send('site.create', data);
    return res.json({
        success: true
    });
});

app.get('/site', (req, res) => {
    const Site = require('../models/projections/site');

    Site.find({}, (err, sites) => {
        if (err) return res.status(500).end();

        return res.json(sites);
    });
});

app.get('/site/:id', (req, res) => {
    const Site = require('../models/projections/site');

    Site.findOne({
        _id: req.params.id
    }, (err, site) => {
        if (err) return res.status(500).end();
        if (!site) return res.status(404).end();

        return res.json(site);
    });
});

app.put('/site/:id', (req, res) => {

});

module.exports = app;
