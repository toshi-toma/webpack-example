module.exports = {
  // エントリーポイントを指定
  entry: './src/index.js',

  // 出力先の指定
  output: {
    // 出力先のフォルダ
    path: `${__dirname}/dist`,
    // 出力先のファイル名
    filename: 'main.js'
  }
}