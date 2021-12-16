// Most code taken from react-three-next starter, thanks renaud :)
/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
    webpack(config, { webpack }) {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: ["raw-loader", "glslify-loader"],
        });

        return config;
    },
};

module.exports = {
    reactStrictMode: true,
};

module.exports = withPlugins(
    [withBundleAnalyzer],
    // { reactStrictMode: true },
    nextConfig
);
