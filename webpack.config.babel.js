import Path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'

const OUTPUT_PATH = Path.resolve('./')

export default {
  entry: './src',

  output: {
    path: `${OUTPUT_PATH}/dist`,
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack2 starter'
    }),
  ]
}
