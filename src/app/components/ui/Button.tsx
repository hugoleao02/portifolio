import Link from 'next/link';
import { COLORS } from '../../constants/styles';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export const Button = ({ 
  href, 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}: ButtonProps) => {
  const baseClasses = 'px-6 sm:px-8 py-3 rounded-lg transition duration-300 text-center';
  
  const variantClasses = {
    primary: `${COLORS.primary.bg} ${COLORS.white.text} ${COLORS.primary.hover.bg}`,
    secondary: `${COLORS.secondary.bg} ${COLORS.primary.text} ${COLORS.primary.hover.text}`,
    outline: `border-2 border-blue-600 ${COLORS.primary.text} hover:bg-blue-50`,
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}; 