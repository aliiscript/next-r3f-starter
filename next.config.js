// next.config.js
const withPlugins = require('next-compose-plugins');

const withSass = require("@zeit/next-sass");


module.exports = withPlugins(
    [
        [
            withSass,
            {
                /* plugin config here ... */
            },
        ],

    ], {
    /* global config here ... */
}
);