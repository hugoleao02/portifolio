'use client';

import { motion } from 'framer-motion';
import { COLORS, SIZES, ANIMATIONS } from '../../styles';
import experienceData from '../../data/experience.json';
import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb';

const CertificateCard = ({ cert, index }: { cert: any; index: number }) => (
  <motion.div
    {...ANIMATIONS.slideIn}
    transition={{ delay: index * 0.1 }}
    className={`${COLORS.white.bg} ${SIZES.rounded.large} shadow-lg p-8 hover:shadow-xl transition-all duration-300`}
  >
    <div className="flex items-start gap-6">
      <div className={`text-5xl bg-gradient-to-br ${COLORS.primary.blue} p-4 ${SIZES.rounded.medium}`}>
        🎓
      </div>
      <div className="flex-1">
        <h3 className={`font-semibold ${COLORS.dark.text} ${SIZES.text.h3} mb-2`}>
          {cert.title}
        </h3>
        <p className={`${COLORS.secondary.text} ${SIZES.text.base} mb-4`}>
          {cert.issuer}
        </p>
        {cert.date && (
          <p className={`${COLORS.primary.text} ${SIZES.text.small}`}>
            Concluído em: {cert.date}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

export default function CertificatesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Início', href: '/' },
          { label: 'Certificações' }
        ]}
      />

      <motion.div
        {...ANIMATIONS.fadeIn}
        className="text-center mb-12"
      >
        <h1 className={`${SIZES.text.h1} font-bold mb-4`}>
          <span className={`bg-gradient-to-r ${COLORS.primary.blue} bg-clip-text text-transparent`}>
            Certificações
          </span>
        </h1>
        <p className={`${SIZES.text.base} ${COLORS.secondary.text}`}>
          Minhas certificações e cursos complementares
        </p>
      </motion.div>

      <motion.div
        {...ANIMATIONS.stagger}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {experienceData.certifications.map((cert, index) => (
          <CertificateCard key={index} cert={cert} index={index} />
        ))}
      </motion.div>

      <motion.div
        {...ANIMATIONS.fadeIn}
        className="mt-16 text-center"
      >
        <Link
          href="/contact"
          className={`inline-block ${COLORS.primary.bg} ${COLORS.white.text} px-8 py-3 ${SIZES.rounded.large} hover:opacity-80 transition-opacity`}
        >
          Entre em Contato
        </Link>
      </motion.div>
    </div>
  );
} 