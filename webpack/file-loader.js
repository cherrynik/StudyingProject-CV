module.exports = function() {
  return {
    module: {
      rules: [
        // Images
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          loader: 'file-loader',
          exclude: [/fonts/],
          options: {
            name: '[name].[ext]',
            outputPath: './img/'
          },
        },
        // Fonts
        {
          test: /\.(woff(2)?|otf|ttf|eot|svg)$/,
          loader: 'file-loader',
          exclude: [/img/],
          options: {
            name: '[name].[ext]',
            outputPath: './fonts/'
          },
        },
      ],
    }
  }
};