module.exports = {
  // エントリーポイントを指定
  entry: './src/index.js',

  // 出力先の設定
  output: {
    // 出力先のフォルダ
    path: `${__dirname}/dist`,
    // 出力先のファイル名
    filename: 'main.js'
  },
  // 開発サーバーの設定
  devServer: {
    /*
     * コンテンツの基底パス(検索先)を指定
     * 開発サーバーから配信したいコンテンツ(ex: html)が配置されているディレクトリ
    */
    contentBase: './dist'
  }
}