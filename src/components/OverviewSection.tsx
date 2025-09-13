export default function OverviewSection() {
  const features = [
    {
      icon: '🏗️',
      title: 'Infrastructure as Code',
      description: 'Terraformを使ったインフラの自動化とバージョン管理を学びます'
    },
    {
      icon: '☁️',
      title: 'マルチクラウド対応',
      description: 'AWS、Azure、GCPなど複数のクラウドプロバイダーでの実践を学習'
    },
    {
      icon: '🔧',
      title: 'ベストプラクティス',
      description: '本番環境で使える設計パターンとセキュリティ対策を習得'
    },
    {
      icon: '🚀',
      title: 'CI/CD統合',
      description: 'TerraformとCI/CDパイプラインの統合方法を実践的に学習'
    },
    {
      icon: '👥',
      title: 'チーム開発',
      description: '複数人でのTerraform開発における協業手法を習得'
    },
    {
      icon: '📊',
      title: '監視・運用',
      description: 'インフラの監視、コスト管理、トラブルシューティングまで網羅'
    }
  ]

  return (
    <section id="overview" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            なぜTerraformマスタークラスなのか？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            現代のクラウドインフラ構築において必須のスキルであるTerraformを、
            初心者から上級者まで体系的に学べる唯一の講座です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                実際のプロジェクトで学ぶ
              </h3>
              <p className="text-gray-600 mb-4">
                理論だけでなく、実際のWebアプリケーションのインフラ構築を通じて学習します。
                EC2、RDS、ELB、CloudFrontなど、実務でよく使われるサービスの組み合わせを体験できます。
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>3層アーキテクチャの構築</li>
                <li>セキュリティグループの設定</li>
                <li>Auto Scalingの実装</li>
                <li>Database Migration の自動化</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3">サンプルプロジェクト</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">プロジェクト数:</span>
                  <span className="font-semibold">8個</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">コード行数:</span>
                  <span className="font-semibold">2,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">学習時間:</span>
                  <span className="font-semibold">80時間</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">修了率:</span>
                  <span className="font-semibold text-green-600">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}