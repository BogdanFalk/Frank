import { configure } from 'quasar/wrappers';

export default configure(function (/* ctx */) {
  return {
    boot: [],
    
    css: [
      'app.scss'
    ],

    extras: [
      'roboto-font',
      'material-icons',
      'material-icons-outlined',
      'material-icons-round',
      'mdi-v7',
      'fontawesome-v6'
    ],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16'
      },

      vueRouterMode: 'history',
      
      distDir: 'dist/spa',
      
      publicPath: '/',
      
      // Add cache busting
      filenames: {
        app: 'js/app-[hash].js',
        chunk: 'js/[name]-[hash].js',
        css: 'css/[name]-[hash].css',
        img: 'img/[name]-[hash].[ext]'
      },
      
      env: {
        SITE_NAME: 'Frank Portfolio'
      },

      vitePlugins: []
    },

    devServer: {
      open: true
    },

    framework: {
      config: {},

      plugins: [
        'Notify',
        'Dialog'
      ]
    },

    animations: [],

    ssr: {
      pwa: false,
      prodPort: 3000
    },

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false
    },

    cordova: {},
    capacitor: {},
    electron: {},
    bex: {}
  };
});

