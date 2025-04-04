'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useNavLinks } from '../../hooks/useLinks';
import { COLORS, SIZES } from '../../styles';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = useNavLinks();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className={`${SIZES.container.max} mx-auto px-4`}>
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className={`font-bold ${SIZES.text.h4} ${COLORS.primary.blue} bg-clip-text text-transparent`}>
              HUGO FERREIRA
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${link.isButton 
                  ? `${COLORS.primary.bg} ${COLORS.white.text} ${SIZES.rounded.full} ${SIZES.padding.button} ${COLORS.primary.hover.bg}`
                  : `${COLORS.secondary.text} ${COLORS.primary.hover.text}`
                } transition duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block ${link.isButton 
                  ? `${COLORS.primary.bg} ${COLORS.white.text} ${SIZES.rounded.full} ${SIZES.padding.button} ${COLORS.primary.hover.bg} text-center mt-4`
                  : `${COLORS.secondary.text} ${COLORS.primary.hover.text} py-2`
                } transition duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
} 