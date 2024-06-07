module.exports = {
    plugins: [
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: [
                './src/**/*.{js,jsx,html}',
                './public/index.html'
            ],
            css: ['./src/**/*.css'],
            defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
            safelist: {
                standard: [],
                deep: [],
                greedy: []
            }
        }),
        require('cssnano')({
            preset: 'default',
        }),
    ]
}