module.exports = {
    plugins: [
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.html', './src/**/*.js'],
            css: ['./src/**/*.css'],
            defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
            safelist: {
                standard: [], // Bu yerda saqlanishi kerak bo'lgan sinflarni qo'shing
                deep: [], // Bu yerda chuqurroq tekshiriladigan sinflarni qo'shing
                greedy: [] // Bu yerda har qanday joyda topilishi mumkin bo'lgan sinflarni qo'shing
            }
        }),
        require('cssnano')({
            preset: 'default',
        }),
    ]
}