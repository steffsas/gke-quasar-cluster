module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/error/'
    : '/',
  outputDir: "dist/error",
  transpileDependencies: [
    'vuetify'
  ]
}
