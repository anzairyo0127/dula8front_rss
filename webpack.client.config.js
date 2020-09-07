const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    react: "./src/views/components/index.tsx",
  },
  output: {
    filename: "public/js/[name].js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/",
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};
