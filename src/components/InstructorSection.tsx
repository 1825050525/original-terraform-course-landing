export default function InstructorSection() {
  const achievements = [
    { label: 'AWS認定', value: '5種類保有' },
    { label: '実務経験', value: '4年以上' },
    { label: '指導実績', value: '○○名+' },
    { label: '企業研修', value: '○社以上' }
  ]

  const skills = [
    'Terraform Expert',
    'AWS Solutions Architect',
    'Kubernetes Administrator',
    'Docker Specialist',
    'CI/CD Architect',
    'Security Consultant'
  ]

  return (
    <section id="instructor" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            講師紹介
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            現場で培った経験を持つエキスパートが、あなたの学習をサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
              <div className="text-white text-6xl font-bold">YH</div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">久光 悠士</h3>
            <p className="text-blue-600 font-semibold mb-4">Terraform Master / AWS Solutions Architect</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-blue-600">{achievement.value}</div>
                  <div className="text-gray-600 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">経歴・実績</h4>
              <div className="space-y-4 text-gray-600">
                <p>
                  IT企業でインフラエンジニアとして4年以上の経験を積み、
                  クラウドインフラの設計・構築・運用を担当。
                </p>
                <p>
                  Terraformの導入支援において、従来の手動作業から自動化による工数削減を実現し、
                  多くの企業のDX推進に貢献。
                </p>
                <p>
                  AWS、Azure、GCPのマルチクラウド環境での豊富な実装経験を持ち、
                  現在はソリューションアーキテクトとしてクラウドアーキテクチャの設計・実装を行っている。
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">講師からのメッセージ</h4>
              <p className="text-gray-700 italic">
                「Terraformは単なるツールではありません。インフラを『コード』として扱うことで、
                可視化・再現性・拡張性を実現する『思考法』なのです。
                この講座では、技術だけでなく、実務で本当に役立つ考え方もお伝えします。」
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">受講生の声</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="text-yellow-400 mr-2">★★★★★</div>
                  <p className="text-gray-700 text-sm">
                    「（例）理論と実践のバランスが絶妙で、現場ですぐに活用できる知識が身につきました」
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-yellow-400 mr-2">★★★★★</div>
                  <p className="text-gray-700 text-sm">
                    「（例）質問に対するレスポンスが早く、的確なアドバイスがもらえます」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}