const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    header: "./src/views/components/header/index.tsx"
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/"
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};
