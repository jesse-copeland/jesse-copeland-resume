const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  assetPrefix: isProduction ? 'https://mentalgrinds.github.io/jesse-copeland-resume/' : ''
}