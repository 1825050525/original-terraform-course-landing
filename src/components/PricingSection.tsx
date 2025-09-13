import Link from 'next/link'

export default function PricingSection() {
  const plans = [
    {
      name: 'ベーシック',
      price: '98,000',
      period: '12週間',
      description: '基本的なTerraformスキルを習得',
      features: [
        '12週間のオンライン講義',
        '基本的なハンズオン演習',
        'コミュニティフォーラムアクセス',
        '修了証書の発行',
        'AWS無料枠内でのクラウド利用'
      ],
      popular: false,
      buttonText: 'ベーシックを選ぶ'
    },
    {
      name: 'プロフェッショナル',
      price: '168,000',
      period: '12週間',
      description: '実務レベルのスキルを完全習得',
      features: [
        '12週間のオンライン講義',
        '実践的なプロジェクト演習',
        '1対1メンタリングセッション（月2回）',
        'コードレビューサポート',
        '就職・転職サポート',
        'AWS利用料金補助（月$50まで）',
        '修了証書の発行',
        '6ヶ月間の質問サポート延長'
      ],
      popular: true,
      buttonText: 'プロフェッショナルを選ぶ'
    },
    {
      name: 'エンタープライズ',
      price: 'お見積り',
      period: 'カスタム',
      description: '企業研修・チーム向けカスタマイズプラン',
      features: [
        'カスタムカリキュラム設計',
        'オンサイト・リモート研修対応',
        '専任講師によるサポート',
        '企業固有の要件に対応',
        'チーム全体のスキル評価',
        'フォローアップ研修',
        '導入コンサルティング',
        '無制限の質問サポート'
      ],
      popular: false,
      buttonText: 'お問い合わせ'
    }
  ]

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あなたの学習目標とニーズに合わせて選べる3つのプランをご用意しました。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 relative ${
                plan.popular ? 'ring-4 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    人気No.1
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price === 'お見積り' ? plan.price : `¥${plan.price}`}
                  </span>
                  {plan.price !== 'お見積り' && (
                    <span className="text-gray-600 ml-2">/ {plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              30日間返金保証
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              講座開始から30日以内であれば、理由を問わず全額返金いたします。
              まずはお気軽にお試しください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                無条件返金保証
              </div>
              <div className="flex items-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                クレジットカード・銀行振込対応
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}