const services = [
  {
    title: 'Desenvolvimento Web',
    description: 'Criação de sites e aplicações web modernas e responsivas.',
    features: [
      'Desenvolvimento com React e Next.js',
      'Design responsivo e mobile-first',
      'Otimização de performance',
      'Integração com APIs'
    ],
    icon: '🌐'
  },
  {
    title: 'Desenvolvimento Mobile',
    description: 'Desenvolvimento de aplicativos nativos e híbridos.',
    features: [
      'Apps iOS e Android',
      'React Native',
      'Integração com APIs',
      'Publicação nas lojas'
    ],
    icon: '📱'
  },
  {
    title: 'Backend & APIs',
    description: 'Desenvolvimento de APIs robustas e escaláveis.',
    features: [
      'Node.js e Python',
      'APIs REST e GraphQL',
      'Banco de dados SQL e NoSQL',
      'Autenticação e segurança'
    ],
    icon: '⚙️'
  },
  {
    title: 'Consultoria',
    description: 'Orientação técnica e arquitetural para seu projeto.',
    features: [
      'Análise de requisitos',
      'Arquitetura de software',
      'Melhores práticas',
      'Code review'
    ],
    icon: '💡'
  }
];

export default function Servicos() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Serviços</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Ofereço soluções completas em desenvolvimento de software, desde a concepção
          até a implementação e manutenção.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contato"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  );
} 