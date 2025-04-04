import { motion } from 'framer-motion';
import { CertificateGroup } from '../../types/certificates';
import { COLORS, SIZES, ANIMATIONS } from '../../styles';

interface CertificadoCardProps {
  group: CertificateGroup;
  index: number;
}

export default function CertificadoCard({ group, index }: CertificadoCardProps) {
  return (
    <motion.div
      {...ANIMATIONS.slideIn}
      transition={{ delay: index * 0.1 }}
      className={`${COLORS.white.bg} ${SIZES.rounded.large} shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100`}
    >
      <div className="flex items-start gap-4">
        <div className={`text-4xl bg-gradient-to-br ${COLORS.primary.blue} p-4 ${SIZES.rounded.medium}`}>
          {group.icon}
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold ${COLORS.dark.text} ${SIZES.text.h4} mb-2`}>{group.title}</h3>
          <p className={`${COLORS.secondary.text} mb-4 line-clamp-2`}>{group.description}</p>
          <p className={`${SIZES.text.small} ${COLORS.primary.text} mb-3 flex items-center`}>
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
            {group.institution}
          </p>
          <div className="space-y-2">
            {group.certificates.map((certificado, idx) => (
              <motion.a
                key={idx}
                href={`/certificados/${certificado.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${SIZES.text.small} ${COLORS.secondary.text} ${COLORS.primary.hover.text} transition-colors group`}
                whileHover={{ x: 5 }}
              >
                <svg 
                  className={`w-4 h-4 mr-2 text-gray-400 group-hover:${COLORS.primary.text} transition-colors`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                {certificado.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 