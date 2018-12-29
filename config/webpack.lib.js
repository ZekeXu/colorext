const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  output: {
      library: 'lib',
      libraryTarget: 'umd',
      filename: 'index.js',
      path: path.resolve(process.cwd(), 'lib'),
  },
  externals: {
    'uuid': 'umd uuid',
    'mousetrap': 'umd mousetrap'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  minimize: true
              }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            emitFile: false,
          }
        }],

      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ],
}
