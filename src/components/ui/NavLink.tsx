import Link from 'next/link';
import { NavItem } from '@/constants/navigation';

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
}

export function NavLink({ item, isActive }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      className={`
        px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
        ${isActive
          ? 'text-blue-600 dark:text-blue-400'
          : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
        }
      `}
    >
      {item.label}
    </Link>
  );
} 