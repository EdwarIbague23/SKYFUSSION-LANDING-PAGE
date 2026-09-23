import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import logoImg from '../images/Logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Estadísticas', href: '#stats' },
    { name: 'Sobre', href: '#about' },
    { name: 'Características', href: '#features' },
    { name: 'Tecnologías', href: '#tech' },
    { name: 'Modelo de Negocio', href: '#business' },
    { name: 'Aliados', href: '#partners' },
    { name: 'Equipo', href: '#team' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
      {/* BRAND LOGO LEFT */}
      <div className="min-w-0 flex items-center gap-2">
        <span className="truncate bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-lg font-black tracking-[0.12em] text-transparent sm:text-2xl">
          SKY FUSSION ANALYTICS
        </span>
      </div>

      {/* BOTÓN HAMBURGUESA (Esquina Superior Derecha) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-50 flex shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-slate-900 p-3 text-cyan-400 shadow-lg shadow-cyan-500/10 transition-all hover:border-cyan-400 hover:bg-slate-800"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
      </button>

      {/* MENÚ DESPLEGABLE LATERAL (OFF-CANVAS DESDE LA DERECHA) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay Oscuro Suave - cierra al hacer clic afuera */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              transition={{ duration: 0.08, ease: 'linear' }}
              className="fixed inset-0 z-40 cursor-pointer bg-slate-950/60"
            />

            {/* Panel Lateral Flotante / Desplegable desde la derecha */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-40 flex h-dvh w-[min(20rem,88vw)] flex-col justify-between overflow-hidden border-l border-cyan-500/20 bg-slate-950 p-6 shadow-2xl will-change-transform sm:p-8"
            >
              <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pt-8 sm:pt-16">
                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.12, ease: 'easeOut' }}
                  className="mb-3 flex flex-col items-center border-b border-slate-800 pb-6"
                >
                  <img
                    src={logoImg}
                    alt="Logo SKY FUSSION ANALYTICS"
                    className="h-24 w-24 rounded-2xl object-contain shadow-[0_0_32px_rgba(34,211,238,0.2)]"
                  />
                  <span className="mt-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                    SKY FUSSION ANALYTICS
                  </span>
                </motion.div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  Navegación
                </p>
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.14, delay: 0.04 + index * 0.018, ease: 'easeOut' }}
                    className="text-lg font-medium text-slate-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-200 py-1 flex items-center gap-2"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Botón CTA dentro del Menú */}
              <div className="shrink-0 border-t border-slate-800 bg-slate-950 pt-6">
                <a href="#contact" onClick={() => setIsOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-105">
                  <Sparkles className="w-4 h-4" /> Solicitar Demo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}