const app = require('./app');

app.listen(process.env.API_PORT, () => {
    console.log(`API Online on port ${process.env.API_PORT}`);
});
