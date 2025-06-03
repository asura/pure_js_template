# 素の JavaScript を書くプロジェクトのテンプレート

純粋な JavaScript プロジェクトのためのシンプルなテンプレートです。ESLint、Prettier、Jasmine テスト、JSDoc ドキュメント生成を含みます。

## セットアップ

```bash
# 依存関係のインストール
yarn install
# または
npm install
```

## 利用可能なスクリプト

- `npm run test` - ブラウザでテストを実行
- `npm run lint` - ESLint でコードをチェック
- `npm run lint:fix` - ESLint エラーを自動修正
- `npm run format` - Prettier でコードをフォーマット
- `npm run docs` - JSDoc ドキュメントを生成
- `npm run watch` - ファイル変更を監視してドキュメントを自動生成

## プロジェクト構成

```
pure_js_template/
├── src/            # ソースコード
├── spec/           # Jasmine テスト
├── docs/           # 生成されたドキュメント（gitignore）
└── node_modules/   # 依存関係（gitignore）
```

## 開発環境

このプロジェクトは以下のツールを使用しています：

- **ESLint** - JavaScript の静的解析ツール
- **Prettier** - コードフォーマッター
- **Jasmine** - テストフレームワーク
- **JSDoc** - ドキュメント生成ツール

## 参考にしたサイト

- [VSCode で ESLint+typescript-eslint+Prettier を導入する（2020/11/14 修正） - Qiita](https://qiita.com/madono/items/a134e904e891c5cb1d20)
- [JsDoc をもとにドキュメントを自動生成する - Qiita](https://qiita.com/yuma84/items/e34e800cbd0b7632f85f)
