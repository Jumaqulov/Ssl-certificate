module.exports = {
    plugins: [
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: [
                './src/**/*.{js,jsx}',
                './public/index.html'
            ],
            css: ['./src/**/*.css'], // Bu yerda barcha CSS fayllarni ko'rsating
            defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
            safelist: {
                standard: [], // Bu yerda saqlanishi kerak bo'lgan sinflarni qo'shing
                deep: [], // Bu yerda chuqurroq tekshiriladigan sinflarni qo'shing
                greedy: [] // Bu yerda har qanday joyda topilishi mumkin bo'lgan sinflarni qo'shing
            }
        })
    ]
}