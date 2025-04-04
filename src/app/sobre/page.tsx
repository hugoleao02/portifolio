export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sobre Mim</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Minha Jornada</h2>
            <p className="text-gray-600 mb-6">
              Sou um desenvolvedor apaixonado por tecnologia com mais de X anos de experiência
              no desenvolvimento de aplicações web e mobile. Minha jornada começou quando...
            </p>
            <p className="text-gray-600">
              Ao longo dos anos, trabalhei em diversos projetos desafiadores que me permitiram
              desenvolver habilidades técnicas e de gestão. Acredito em criar soluções que
              realmente fazem a diferença na vida das pessoas.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Habilidades</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Frontend</h3>
                <p className="text-gray-600">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Backend</h3>
                <p className="text-gray-600">Node.js, Python, APIs REST, GraphQL</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Banco de Dados</h3>
                <p className="text-gray-600">PostgreSQL, MongoDB, Redis</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">DevOps</h3>
                <p className="text-gray-600">Docker, AWS, CI/CD, Git</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Educação</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-700">Bacharelado em Ciência da Computação</h3>
              <p className="text-gray-600">Universidade XYZ - 2015-2019</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-700">Certificações</h3>
              <p className="text-gray-600">AWS Certified Developer, Google Cloud Professional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 