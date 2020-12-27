module.exports = {
  pageExtensions: ["js", "jsx", "md", "mdx"],

  webpack: (config, options) => {
    config.module.rules.push({
      test: /[.md|.mdx]$/,
      use: [options.defaultLoaders.babel, "@mdx-js/loader"],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
