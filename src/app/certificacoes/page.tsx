'use client';

import { motion } from 'framer-motion';
import CertificadoCard from '../components/CertificadoCard';
import { useCertificates } from '../../hooks/useCertificates';

export default function Certificacoes() {
  const certificacoes = useCertificates();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Certificações
          </h1>
          <p className="text-xl text-gray-600">
            Minhas certificações e conquistas profissionais
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-6"
        >
          {certificacoes.map((group, index) => (
            <CertificadoCard key={index} group={group} index={index} />
          ))}
        </motion.div>
      </div>
    </main>
  );
} 