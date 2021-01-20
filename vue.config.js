module.exports = {
  pwa: {
    name: 'Dominion PWA',
    lang: 'de-DE',
    orientation: 'portrait',
    description: 'Dominion is a card board game for 3 to 5 players.',
    background_color: 'white',
    themeColor: '#948d29',
    msTileColor: '#948d29',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      navigateFallback: 'index.html',
    },
    manifestOptions: {
      name: 'Dominion PWA',
      short_name: 'Dominion',
      start_url: '.',
      display: 'standalone',
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}