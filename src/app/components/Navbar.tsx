'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HUGO FERREIRA
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Início
            </Link>
            <Link href="/projetos" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Projetos
            </Link>
            <Link href="/certificacoes" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Certificações
            </Link>
            <Link href="/contato" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            <Link
              href="/"
              className="block text-gray-600 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/projetos"
              className="block text-gray-600 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </Link>
            <Link
              href="/certificacoes"
              className="block text-gray-600 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Certificações
            </Link>
            <Link
              href="/contato"
              className="block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
} 