import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { useProfile } from '../../../hooks/useProfile';
import { COLORS, SIZES, ANIMATIONS } from '../../../styles';

export const Hero = () => {
  const profile = useProfile();

  return (
    <section className={`${SIZES.padding.section}`}>
      <div className={`${SIZES.container.max} mx-auto`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            {...ANIMATIONS.slideInX}
            className="text-center md:text-left"
          >
            <h1 className={`${SIZES.text.h1} font-bold mb-6`}>
              <span className={`bg-gradient-to-r ${COLORS.primary.blue} bg-clip-text text-transparent`}>
                {profile.title}
              </span>
            </h1>
            <p className={`${SIZES.text.base} ${COLORS.secondary.text} mb-8`}>
              {profile.description}
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
            {...ANIMATIONS.scaleIn}
            className="relative mt-8 md:mt-0"
          >
            <div className={`aspect-square ${SIZES.rounded.full} overflow-hidden border-4 border-white shadow-xl max-w-xs sm:max-w-sm md:max-w-md mx-auto`}>
              <Image
                src={profile.image}
                alt={profile.name}
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
            {profile.available && (
              <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 ${COLORS.white.bg} px-4 sm:px-6 py-2 ${SIZES.rounded.full} shadow-lg`}>
                <p className={`${COLORS.primary.text} font-semibold ${SIZES.text.small}`}>
                  Disponível para projetos
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 