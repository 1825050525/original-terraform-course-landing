import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Terraformを</span>
            <span className="block text-blue-600">マスターしよう</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ゼロからプロダクション環境まで。インフラストラクチャの自動化を学び、クラウドエンジニアとしてのキャリアを加速させましょう。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              今すぐ始める
            </Link>
            <Link
              href="#overview"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              詳細を見る
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-2xl font-bold mb-2">12週間</div>
              <div className="text-gray-600">実践的なカリキュラム</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-2xl font-bold mb-2">100%</div>
              <div className="text-gray-600">ハンズオン形式</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-2xl font-bold mb-2">24/7</div>
              <div className="text-gray-600">質問サポート</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}