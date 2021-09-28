// next.config.js
const path = require("path");
console.log(path);
// Code used from react-three-next starter
// https://github.com/pmndrs/react-three-next/blob/main/next.config.js

// custom transpile module
const debug = false;
let start = null;
let i = 0;

const match = (path) => {
    if (!path.includes("three/examples/jsm")) return false;
    if (debug) {
        // should be around 3/4 seconds the first time and then 200ms after using Webpack 5 built-in loader cache
        let end = start ? new Date() - start : 0;
        console.log(
            `\x1b[37m`,
            `🚄 ${end}ms - The transpilation ${path} in process`
        );
        if (i === 1) {
            start = new Date();
        }
        i++;
    }
    return true;
};

const nextConfig = {
    webpack(config) {
        config.module.rules.push(
            { test: /react-spring/, sideEffects: true }, // prevent vercel to crash when deploy
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: ["raw-loader", "glslify-loader"],
            },
            {
                test: /\.mp3$/,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                },
            },
            {
                test: /\.(glb|gltf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        publicPath: "/_next/static/images",
                        outputPath: "static/images/",
                        name: "[name].[ext]", // keep the original name
                        watch: true,
                    },
                },
            },
            {
                test: /\.(bin)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        publicPath: "/_next/static/images",
                        outputPath: "static/images/",
                        name: "[name].[ext]", // keep the original name
                        watch: true,
                    },
                },
            }
        );
        return config;
    },
};

const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withImages = require("next-images");
const { default: next } = require("next");
const { watch } = require("fs");

module.exports = withPlugins([withImages, withBundleAnalyzer], {sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },}, nextConfig);
