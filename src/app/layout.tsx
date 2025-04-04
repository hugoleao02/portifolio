import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio profissional criado com Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-6 sm:py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm sm:text-base">© {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
