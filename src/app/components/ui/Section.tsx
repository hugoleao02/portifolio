import { motion } from 'framer-motion';
import { SIZES, ANIMATIONS } from '../../constants/styles';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'transparent';
}

export const Section = ({ 
  title, 
  subtitle, 
  children, 
  className = '',
  bgColor = 'transparent'
}: SectionProps) => {
  const bgClasses = {
    white: 'bg-white',
    transparent: '',
  };

  return (
    <section className={`${SIZES.padding.section} ${bgClasses[bgColor]} ${className}`}>
      <div className={`${SIZES.container.max} mx-auto`}>
        <motion.div
          {...ANIMATIONS.slideIn}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`${SIZES.text.h2} font-bold text-gray-800 mb-4`}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}; 