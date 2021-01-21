// next.config.js
const withPlugins = require('next-compose-plugins');

const withSass = require("@zeit/next-sass");

const withTM = require('next-transpile-modules')(['three']);

module.exports = withPlugins([withSass, withTM]), {
    webpack: (config) => {

    }
}