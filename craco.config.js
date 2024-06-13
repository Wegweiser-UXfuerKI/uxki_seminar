const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add MDX loader
      webpackConfig.module.rules.push({
        test: /\.mdx?$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "@mdx-js/loader",
            options: {
              /* Optionen hier */
            },
          },
        ],
      });

      // Add raw loader for .md files
      webpackConfig.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });

      return webpackConfig;
    },
  },
};
