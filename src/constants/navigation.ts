export const NAV_ITEMS = [
  { href: '/', label: 'Início' },
  { href: '/experience', label: 'Experiência' },
  { href: '/projects', label: 'Projetos' },
  { href: '/skills', label: 'Habilidades' },
  { href: '/contact', label: 'Contato' },
] as const;

export type NavItem = typeof NAV_ITEMS[number]; 