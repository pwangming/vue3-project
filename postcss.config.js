const postcssNormalize = require('postcss-normalize')
const postcssPresetEnv = require('postcss-preset-env')
const postcssScss = require('postcss-scss')
const postcssAutoprefixer = require('autoprefixer')
module.exports = {
  plugins: [postcssNormalize, postcssPresetEnv, postcssScss, postcssAutoprefixer]
}
