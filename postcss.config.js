import postcssNormalize from 'postcss-normalize'
import postcssPresetEnv from 'postcss-preset-env'

export default {
  plugins: [postcssNormalize(), postcssPresetEnv()]
}
