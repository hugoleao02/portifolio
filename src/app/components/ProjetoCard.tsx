import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjetoCardProps {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  link: string;
  icone: string;
  imagem: string;
}

export default function ProjetoCard({ titulo, descricao, tecnologias, link, icone, imagem }: ProjetoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={imagem}
          alt={titulo}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{icone}</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{titulo}</h3>
            <p className="text-gray-600 mb-4">{descricao}</p>
            <div className="flex flex-wrap gap-2">
              {tecnologias.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Ver Projeto
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 