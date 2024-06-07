module.exports = {
    plugins: [
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: [
                './src/**/*.{js,jsx,ts,tsx,html}',
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