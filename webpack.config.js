/**
 * @type import('webpack').Configuration
 */
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

  /**
   * source mapを生成
   * デフォルトはeval
   */
  devtool: 'hidden-source-map',

  // 開発サーバーの設定
  devServer: {
    /*
     * コンテンツの基底パス(検索先)を指定
     * 開発サーバーから配信したいコンテンツ(ex: html)が配置されているディレクトリ
    */
    contentBase: './dist',

    /**
     * 使用するポート番号
     * デフォルトで8080
     */
    port: 8080,

    /**
     * 起動時にブラウザを開くか
     */
    open: true,

    /**
     * 起動時に開くページ
     */
    openPage: '',

    /**
     * ファイル監視の設定
     */
    watchOptions: {
      // 除外するフォルダ
      ignored: /node_modules/
    }
  }
}
