const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production', // Yoki 'development' agar rivojlantirish rejimida bo'lsangiz
  entry: './src/index.js', // Asosiy kirish nuqtasi
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // HTML fayl sifatida ochadi
      openAnalyzer: true, // O'zi avtomatik ochadi
      reportFilename: 'bundle-report.html' // Hisobot fayl nomi
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
