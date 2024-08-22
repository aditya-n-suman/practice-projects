const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src",
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        use: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts"]
  },
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    static: "./dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "FB Clone",
      template: "src/index.html"
    })
  ]
};
