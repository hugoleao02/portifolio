'use client';

import { motion } from 'framer-motion';
import { COLORS, SIZES, ANIMATIONS } from '../../../styles';
import experienceData from '../../../data/experience.json';
import Link from 'next/link';

interface Certificate {
  title: string;
  issuer: string;
  date?: string;
}

interface CertificateCardProps {
  cert: Certificate;
  index: number;
}

const CertificateCard = ({ cert, index }: CertificateCardProps) => (
  <motion.div
    {...ANIMATIONS.slideIn}
    transition={{ delay: index * 0.1 }}
    className={`${COLORS.white.bg} ${SIZES.rounded.large} shadow-lg p-6 hover:shadow-xl transition-all duration-300`}
  >
    <div className="flex items-start gap-4">
      <div className={`text-4xl bg-gradient-to-br ${COLORS.primary.blue} p-3 ${SIZES.rounded.medium}`}>
        🎓
      </div>
      <div className="flex-1">
        <h3 className={`font-semibold ${COLORS.dark.text} ${SIZES.text.h4} mb-1`}>
          {cert.title}
        </h3>
        <p className={`${COLORS.secondary.text} ${SIZES.text.small}`}>
          {cert.issuer}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function Certificates() {
  const mainCertificates = experienceData.certifications.slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          {...ANIMATIONS.fadeIn}
          className="text-center mb-12"
        >
          <h2 className={`${SIZES.text.h2} font-bold mb-4`}>
            <span className={`bg-gradient-to-r ${COLORS.primary.blue} bg-clip-text text-transparent`}>
              Certificações
            </span>
          </h2>
          <p className={`${SIZES.text.base} ${COLORS.secondary.text}`}>
            Minhas principais certificações e cursos
          </p>
        </motion.div>

        <motion.div
          {...ANIMATIONS.stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {mainCertificates.map((cert, index) => (
            <Link
              key={index}
              href={`/certificates#${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CertificateCard cert={cert} index={index} />
            </Link>
          ))}
        </motion.div>

        <motion.div
          {...ANIMATIONS.fadeIn}
          className="text-center"
        >
          <Link
            href="/certificates"
            className={`inline-block ${COLORS.primary.bg} ${COLORS.white.text} px-6 py-2 ${SIZES.rounded.large} hover:opacity-80 transition-opacity`}
          >
            Ver Todas as Certificações
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 