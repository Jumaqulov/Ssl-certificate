module.exports = {
    plugins: [
      require('autoprefixer'),
      require('@fullhuman/postcss-purgecss')({
        content: [
          './src/**/*.{js,jsx}', 
          './public/index.html'
        ],
        css: ['./src/styles.css'],
        defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
        safelist: [],
        blocklist: [], 
      })
    ]
  }
  