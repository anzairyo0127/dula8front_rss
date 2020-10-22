const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  entry: "./src/server.ts",
  output: {
    filename: "server/server.js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/",
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".mjs", ".mts",".d.ts"],
  },
  module: {
    rules: [
      {
        test: /\.m?[tj]sx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ],
  },
};
