const path = require('path')
var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {
    web: {}
  },
  resolve: {
    alias: {
      components: path.join(__dirname, 'src/components'),
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy'],
    modules: ['node_modules']
  },
  compilers: {
    // less: {
    //   compress: prod
    // },
    // sass: {
    //   'outputStyle': 'compressed'
    // },
    stylus: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions'
      ]
    }
  },
  plugins: {},
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {
  // // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}
  //
  // // 压缩less
  // module.exports.compilers['less'] = {'compress': true}

  // 压缩stylus
  module.exports.compilers['stylus'] = {'compress': true}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {}
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}
