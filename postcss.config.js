const postcssNormalize = require('postcss-normalize')
module.exports = {
  plugins: [postcssNormalize, require('postcss-scss'), require('autoprefixer')]
}
