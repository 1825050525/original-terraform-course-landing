'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Terraformの経験がありませんが、受講できますか？',
      answer: 'はい、大丈夫です。本講座は初心者の方でも理解できるよう、基礎から丁寧に説明します。ただし、基本的なLinuxコマンドやクラウドサービスの概念についてある程度の知識があると、より理解が深まります。'
    },
    {
      question: '講座の進行はどのような形式ですか？',
      answer: '週1回のライブ配信講義（録画も提供）と、個人でのハンズオン演習を組み合わせた形式です。ライブ配信では質疑応答の時間も設けており、リアルタイムで疑問を解決できます。'
    },
    {
      question: '仕事をしながらでも受講できますか？',
      answer: 'はい、多くの受講生が働きながら受講されています。講義は録画されるため、ご都合の良い時間に視聴いただけます。推奨学習時間は週7-10時間程度です。'
    },
    {
      question: 'AWS以外のクラウドプロバイダーについても学べますか？',
      answer: 'はい、主にAWSを使用しますが、Azure、GCPについても実践的な内容を含んでいます。マルチクラウド環境でのTerraform活用方法も学習できます。'
    },
    {
      question: '修了後のサポートはありますか？',
      answer: 'プロフェッショナルプランでは6ヶ月間の質問サポートが含まれます。また、修了生限定のコミュニティで情報交換や継続学習が可能です。'
    },
    {
      question: 'クラウドの利用料金はどれくらいかかりますか？',
      answer: 'AWS無料枠を最大限活用するため、ベーシックプランでは追加費用はほとんどかかりません。プロフェッショナルプランでは月$50までの利用料金補助があります。'
    },
    {
      question: '企業での団体受講は可能ですか？',
      answer: 'はい、エンタープライズプランで企業研修として提供しています。社内の要件に合わせたカスタマイズや、オンサイト研修にも対応可能です。お気軽にお問い合わせください。'
    },
    {
      question: '講座資料はダウンロードできますか？',
      answer: '講義で使用するスライド、ハンズオン用のコード、参考資料などは全てダウンロード可能です。修了後もご自身の学習資料として活用いただけます。'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            受講を検討される際によくいただく質問にお答えします。
            その他ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">その他のご質問がありますか？</p>
          <a
            href="#contact"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            お問い合わせはこちら
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}