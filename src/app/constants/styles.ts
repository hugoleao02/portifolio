export const COLORS = {
  primary: {
    blue: 'from-blue-600 to-purple-600',
    text: 'text-blue-600',
    bg: 'bg-blue-600',
    hover: {
      bg: 'hover:bg-blue-700',
      text: 'hover:text-blue-700',
    },
  },
  secondary: {
    text: 'text-gray-600',
    bg: 'bg-gray-50',
  },
  white: {
    text: 'text-white',
    bg: 'bg-white',
  },
};

export const SIZES = {
  container: {
    max: 'max-w-6xl',
    medium: 'max-w-4xl',
  },
  padding: {
    section: 'py-16 px-4',
    card: 'p-6',
  },
  text: {
    h1: 'text-3xl sm:text-4xl md:text-5xl',
    h2: 'text-2xl sm:text-3xl',
    h3: 'text-xl',
    base: 'text-base sm:text-lg',
  },
};

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  slideInX: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
}; 