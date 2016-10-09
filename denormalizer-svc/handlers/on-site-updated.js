const Site = require('../../models/projections/site');

module.exports = event => {
    const data = event.data;

    Site.findOne({
        _id: data.aggregate_id
    }, (err, site) => {
        if (err) console.error(new Error(`Failed to fetch site for update. CID: ${event.cid}`));
        if (!site) console.error(new Error(`Site not found. CID: ${event.cid}`));

        site.name = data.attrs.name || site.name;
        site.url = data.attrs.url || site.url;
        site.updatedAt = data.timestamp;

        site.save(err => {
            if (err) console.error(new Error(`Failed to update site. CID: ${event.cid}`));

            console.log(`Updated site ${site._id}`);
        });
    });
};
