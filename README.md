# webpack-example
webpackの設定

# ライブラリのインストール

```bash
$ npm install --save-dev webpack webpack-cli webpack-dev-server
```

# ビルド実行

```json
  "scripts": {
    "build": "webpack"
  },
```

# 開発サーバー

webpack-dev-serverを利用する。

```json
  "scripts": {
    "start": "webpack-dev-server --open"
  },
```

# 本番/開発モードの選択

モードオプションでdevelopment or productionのモードを指定する。  
デフォルトではproduction。

```json
  "scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
```