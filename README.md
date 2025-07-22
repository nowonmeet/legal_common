# 法的文書テンプレート / Legal Documents Template

サブスクリプション型フリーミアムモバイルアプリケーション向けの汎用的な利用規約とプライバシーポリシーテンプレート。

Generic Terms of Service and Privacy Policy templates for subscription-based freemium mobile applications.

## 🌐 ライブデモ / Live Demo

- **日本語**: [利用規約](./ja/terms.html) | [プライバシーポリシー](./ja/privacy.html)
- **English**: [Terms of Service](./en/terms.html) | [Privacy Policy](./en/privacy.html)

## ✨ 特徴 / Features

### 日本語
- **サブスクリプション特化**: 広告ではなくサブスクリプション収益モデルに最適化
- **法的準拠**: GDPR、日本の個人情報保護法に配慮
- **多言語対応**: 日本語と英語で提供
- **カスタマイズ可能**: 会社情報や連絡先を簡単に変更
- **モバイル対応**: レスポンシブデザイン
- **アクセシビリティ**: WCAG 2.1 AA準拠

### English
- **Subscription-Focused**: Optimized for subscription revenue models, not advertising
- **Legal Compliance**: Addresses GDPR, Japanese privacy laws, and other regulations
- **Multilingual**: Available in Japanese and English
- **Customizable**: Easy to modify company information and contact details
- **Mobile-Optimized**: Responsive design
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 使用方法 / How to Use

### 1. GitHub Pagesでのホスティング

```bash
# リポジトリをクローン
git clone [your-repository-url]
cd [repository-name]

# GitHub Pagesブランチを作成
git checkout -b gh-pages

# ファイルをコミット
git add .
git commit -m "Add legal document templates"
git push origin gh-pages
```

### 2. カスタマイズ

以下のファイル内の変数を更新してください：

#### `_config.yml`
```yaml
company:
  name: "[あなたの会社名]"
  email: "[サポートメール]"
  contact_url: "[お問い合わせURL]"
```

#### HTML ファイル内
- `[会社名]` → あなたの会社名
- `[サポートメール]` → サポート用メールアドレス
- `[お問い合わせURL]` → お問い合わせフォームのURL
- `[更新日を挿入]` → 最終更新日

### 3. ローカルテスト

```bash
# Pythonでローカルサーバー起動
python3 -m http.server 8000

# ブラウザでアクセス
open http://localhost:8000
```

## 📁 ディレクトリ構造 / Directory Structure

```
legal-documents-template/
├── index.html              # メインランディングページ
├── 404.html               # カスタム404ページ
├── _config.yml            # Jekyll設定
├── assets/
│   ├── css/
│   │   └── style.css      # メインスタイルシート
│   └── js/
│       └── main.js        # JavaScriptファイル
├── ja/                    # 日本語版
│   ├── terms.html         # 利用規約
│   └── privacy.html       # プライバシーポリシー
├── en/                    # 英語版
│   ├── index.html         # 英語ランディングページ
│   ├── terms.html         # Terms of Service
│   └── privacy.html       # Privacy Policy
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions設定
├── package.json           # NPM設定（検証用）
└── README.md              # このファイル
```

## 🛠️ 開発とテスト / Development and Testing

### 依存関係のインストール

```bash
npm install
```

### HTMLの検証

```bash
npm run validate
```

### リンクチェック

```bash
npm run check-links
```

### すべてのテスト実行

```bash
npm test
```

## 🎨 カスタマイゼーション / Customization

### CSS変数

`assets/css/style.css` の `:root` セクションでテーマカラーを変更できます：

```css
:root {
  --primary-color: #2c3e50;    /* メインカラー */
  --secondary-color: #3498db;  /* アクセントカラー */
  --text-color: #333;          /* テキストカラー */
  /* ... */
}
```

### 会社情報の一括変更

設定ファイル `_config.yml` を使用して、会社情報を一括で管理できます。

## 📋 チェックリスト / Checklist

デプロイ前に以下を確認してください：

### 必須項目
- [ ] 会社名の更新
- [ ] 連絡先情報の更新
- [ ] 最終更新日の設定
- [ ] サービス固有の内容追加
- [ ] HTMLバリデーション通過
- [ ] リンクチェック通過
- [ ] モバイル表示確認

### オプション項目
- [ ] カラーテーマのカスタマイズ
- [ ] ロゴの追加
- [ ] カスタムドメインの設定
- [ ] 法務専門家によるレビュー

## ⚖️ 法的注意事項 / Legal Notice

### 日本語
このテンプレートは一般的なガイダンスとして提供されています。実際の使用前には、お住まいの地域の法律に詳しい法務専門家による確認をお勧めします。

### English
These templates are provided for general guidance purposes. We recommend consulting with legal professionals familiar with your local laws before actual implementation.

## 📄 ライセンス / License

MIT License

## 🤝 貢献 / Contributing

プルリクエストや Issues は歓迎します。

Pull requests and issues are welcome.

## 📞 サポート / Support

問題やご質問がございましたら、Issues でお知らせください。

For problems or questions, please create an issue.

---

**注意**: このテンプレートは、サブスクリプションベースのモバイルアプリに特化しており、広告ベースのモデルには対応していません。

**Note**: This template is specifically designed for subscription-based mobile apps and does not cover advertising-based models.