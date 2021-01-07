/* 
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
plugins: [
new CopyWebpackPlugin([
  {
    from: 'node_modules/pdfjs-dist/cmaps/',
    to: 'cmaps/'
  },
]),
]
},
    "mode": "production",
    "entry": "src/index.js",
    "output": {
        "path": __dirname+'/static',
        "filename": "[name].[chunkhash:8].js"
    },
    "module": {
        "rules": [
            {
                "enforce": "pre",
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": "eslint-loader"
            },
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env",
                            "react"
                        ]
                    }
                }
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
}
*/
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    './Sample',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      { from: './index.html' },
      { from: './sample.pdf' },
      { from: 'node_modules/pdfjs-dist/cmaps/', to: 'cmaps/' },
    ]),
  ],
};