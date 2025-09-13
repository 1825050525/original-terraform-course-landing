'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: 'professional',
    experience: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで実際のフォーム送信処理を実装
    console.log('Form submitted:', formData)
    alert('お申込みありがとうございます！担当者より3営業日以内にご連絡いたします。')
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            お申込み・お問い合わせ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            下記フォームよりお申込みいただけます。
            ご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="久光 悠士"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">
                希望プラン <span className="text-red-500">*</span>
              </label>
              <select
                id="plan"
                name="plan"
                required
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="basic">ベーシック（¥98,000）</option>
                <option value="professional">プロフェッショナル（¥168,000）</option>
                <option value="enterprise">エンタープライズ（お見積り）</option>
                <option value="consultation">まずは相談したい</option>
              </select>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                現在のスキルレベル
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">選択してください</option>
                <option value="beginner">初心者（Terraformは未経験）</option>
                <option value="some-experience">少し経験あり（基本的な操作は可能）</option>
                <option value="intermediate">中級者（業務で使用経験あり）</option>
                <option value="advanced">上級者（チームでの運用経験あり）</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                ご質問・ご要望
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ご質問やご要望がございましたらご記入ください"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">お申込み後の流れ</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>1. フォーム送信後、担当者より3営業日以内にご連絡</li>
                <li>2. お支払い方法のご案内（クレジットカード・銀行振込）</li>
                <li>3. お支払い確認後、学習プラットフォームのアカウント発行</li>
                <li>4. 講座開始日に学習用資料とスケジュールをお送り</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              お申込み・お問い合わせを送信
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-blue-600 text-2xl mb-2">📧</div>
                <h4 className="font-semibold text-gray-900">メール</h4>
                <p className="text-gray-600 text-sm">info@terraform-course.jp</p>
              </div>
              <div>
                <div className="text-blue-600 text-2xl mb-2">📞</div>
                <h4 className="font-semibold text-gray-900">お電話</h4>
                <p className="text-gray-600 text-sm">03-1234-5678<br />（平日 10:00-18:00）</p>
              </div>
              <div>
                <div className="text-blue-600 text-2xl mb-2">💬</div>
                <h4 className="font-semibold text-gray-900">チャット</h4>
                <p className="text-gray-600 text-sm">右下のチャットボタンより<br />お気軽にご相談ください</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}