'use client';

import { motion } from 'framer-motion';
import { COLORS, SIZES, ANIMATIONS } from '../styles';
import Button from './components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        {...ANIMATIONS.fadeIn}
        className="text-center"
      >
        <h1 className={`${SIZES.text.h1} font-bold mb-4`}>
          <span className={`bg-gradient-to-r ${COLORS.primary.blue} bg-clip-text text-transparent`}>
            404
          </span>
        </h1>
        <p className={`${SIZES.text.base} ${COLORS.secondary.text} mb-8`}>
          Página não encontrada
        </p>
        <Button href="/" variant="primary">
          Voltar para Home
        </Button>
      </motion.div>
    </main>
  );
} 