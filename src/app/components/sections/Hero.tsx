import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { SIZES, COLORS, ANIMATIONS } from '../../constants/styles';

export const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className={`${SIZES.container.max} mx-auto`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            {...ANIMATIONS.slideInX}
            className="text-center md:text-left"
          >
            <h1 className={`${SIZES.text.h1} font-bold mb-6`}>
              <span className={`bg-gradient-to-r ${COLORS.primary.blue} bg-clip-text text-transparent`}>
                Desenvolvedor Java Backend
              </span>
            </h1>
            <p className={`${SIZES.text.base} ${COLORS.secondary.text} mb-8`}>
              Especializado em desenvolvimento de APIs RESTful e microsserviços com Spring Boot.
              Focado em criar soluções escaláveis e de alta qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="/projetos" variant="primary">
                Ver Projetos
              </Button>
              <Button href="/contato" variant="outline">
                Contato
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <Image
                src="/images/profile.png"
                alt="Hugo Ferreira"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 sm:px-6 py-2 rounded-full shadow-lg">
              <p className={`${COLORS.primary.text} font-semibold text-sm sm:text-base`}>
                Disponível para projetos
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 