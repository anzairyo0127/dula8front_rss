const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry: {
    "scripts/script": "./scripts/script.ts",
  },
  output: {
    filename: "./[name].js",
    path: path.resolve(process.cwd(), "dist/public"),
    publicPath: "/",
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: 'expanded',
              },
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/style.css',
      ignoreOrder: true,
    })
  ]
};
