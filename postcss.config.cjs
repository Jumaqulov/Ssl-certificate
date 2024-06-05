module.exports = {
    plugins: [
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: [
                './src/**/*.js',
                './src/**/*.jsx',
                './public/index.html'
            ],
            css: ['./src/**/*.css']
        })
    ]
}
