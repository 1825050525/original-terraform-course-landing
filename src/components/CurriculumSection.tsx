'use client'

import { useState } from 'react'

export default function CurriculumSection() {
  const [activeWeek, setActiveWeek] = useState(0)

  const curriculum = [
    {
      week: 1,
      title: 'Terraform入門',
      topics: [
        'Infrastructure as Codeとは',
        'Terraformの基本概念',
        'プロバイダーとリソース',
        '初回のインフラ構築'
      ]
    },
    {
      week: 2,
      title: '設定とステート管理',
      topics: [
        '変数とアウトプット',
        'Terraformステートの理解',
        'リモートステートの設定',
        'ワークスペースの活用'
      ]
    },
    {
      week: 3,
      title: 'モジュール化',
      topics: [
        'モジュールの作成と使用',
        'モジュールの設計パターン',
        'Terraform Registryの活用',
        '再利用可能なコンポーネント'
      ]
    },
    {
      week: 4,
      title: 'AWS基礎リソース',
      topics: [
        'VPCとネットワーク構成',
        'EC2インスタンスの管理',
        'セキュリティグループの設定',
        'IAMリソースの管理'
      ]
    },
    {
      week: 5,
      title: 'データベースとストレージ',
      topics: [
        'RDSの構築と管理',
        'S3バケットの設定',
        'バックアップとスナップショット',
        'データ暗号化の実装'
      ]
    },
    {
      week: 6,
      title: 'ロードバランサーとスケーリング',
      topics: [
        'Application Load Balancerの設定',
        'Auto Scalingグループ',
        'CloudWatchメトリクス',
        'ヘルスチェックの実装'
      ]
    },
    {
      week: 7,
      title: 'CI/CD統合',
      topics: [
        'GitHubとの連携',
        'Terraform Cloudの活用',
        '自動テストの実装',
        'デプロイメントパイプライン'
      ]
    },
    {
      week: 8,
      title: 'セキュリティとコンプライアンス',
      topics: [
        'セキュリティベストプラクティス',
        'シークレット管理',
        'コンプライアンスチェック',
        'セキュリティスキャンの自動化'
      ]
    },
    {
      week: 9,
      title: 'マルチクラウド対応',
      topics: [
        'Azure Providerの使用',
        'GCP Providerの使用',
        'マルチクラウド戦略',
        'プロバイダー間のデータ共有'
      ]
    },
    {
      week: 10,
      title: '監視とロギング',
      topics: [
        'CloudWatchの設定',
        'ログ集約システム',
        'アラートの設定',
        'パフォーマンス監視'
      ]
    },
    {
      week: 11,
      title: 'トラブルシューティング',
      topics: [
        'エラーハンドリング',
        'ステートの修復',
        'リソースのインポート',
        'デバッグ手法'
      ]
    },
    {
      week: 12,
      title: '最終プロジェクト',
      topics: [
        '完全なWebアプリケーション構築',
        'コードレビューとフィードバック',
        'パフォーマンス最適化',
        '本番環境デプロイメント'
      ]
    }
  ]

  return (
    <section id="curriculum" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            12週間の完全カリキュラム
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            初心者から上級者まで、段階的にTerraformをマスターできるよう設計された体系的なカリキュラムです。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">週別カリキュラム</h3>
              <div className="space-y-2">
                {curriculum.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveWeek(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeWeek === index
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">第{item.week}週</span>
                      <span className="text-sm text-gray-500">
                        {activeWeek === index ? '▼' : '▶'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">{item.title}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  第{curriculum[activeWeek].week}週: {curriculum[activeWeek].title}
                </h3>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">学習内容</h4>
                <ul className="space-y-3">
                  {curriculum[activeWeek].topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">週の成果物</h4>
                <p className="text-blue-800 text-sm">
                  この週の終わりには、実際のハンズオン演習を通じて学習内容を実践し、
                  実際のプロジェクトで使用できるTerraformコードを作成します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}