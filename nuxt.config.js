
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { innerHTML: '!function(e,t){function n(){var e=Math.min(i.getBoundingClientRect().width,768)/7.5;i.style.fontSize=e/d*100+"%"}var i=e.documentElement;i.style.fontSize;var d=window.getComputedStyle(i).fontSize.replace("px","");if(n(),t.addEventListener("resize",n),t.devicePixelRatio&&devicePixelRatio>1){var o=function n(){var i=e.createElement("div");i.style.border=".5px solid transparent",e.body.appendChild(i),1===i.offsetHeight&&e.body.classList.add("hairline"),e.body.removeChild(i),t.removeEventListener("DOMContentLoaded",n)};"complete"===e.readyState?o():t.addEventListener("DOMContentLoaded",o)}}(document,window);'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vix.js', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      plugins: [
        require('postcss-px2rem')({
          remUnit: 50
        })
      ],
      preset: {
        autoprefixer: {
          browsers: ["iOS >= 8","Android >= 4"]
        }
      }
    },
    extend (config, ctx) {
    }
  }
}
