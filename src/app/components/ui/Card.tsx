import { motion } from 'framer-motion';
import { SIZES, ANIMATIONS } from '../../constants/styles';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  onClick?: () => void;
}

export const Card = ({ 
  children, 
  className = '',
  index = 0,
  onClick 
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`${SIZES.padding.card} bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}; 