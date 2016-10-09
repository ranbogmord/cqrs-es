const Site = require('../../models/projections/site');

module.exports = event => {
    const data = event.data;

    Site.create({
        _id: data.aggregate_id,
        name: data.attrs.name,
        url: data.attrs.url,
        createdAt: data.timestamp,
        updatedAt: data.timestamp
    }, (err, site) => {
        if (err) return console.error(new Error(`Failed to denormalize site. CID: ${event.cid}`));

        console.log(`Site ${site._id} created.`);
    });
};
