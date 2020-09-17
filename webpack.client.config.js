const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    "scripts/script": "./src/react/components/index.tsx",
  },
  //externals:[nodeExternals()],
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
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/,
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
