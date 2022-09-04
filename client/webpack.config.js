const path = require("path");

module.exports = {
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
    },
    extensions: [".jsx", ".js", ".scss", ".json"],
  },
  devServer: {
    compress: true,
    port: "3000",
    allowedHosts: "all",
  },
};
