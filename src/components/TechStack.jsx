import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiVite, SiTailwindcss, SiPython, SiScikitlearn, SiPostgresql } from 'react-icons/si';

export default function TechStack() {
  const techItems = [
    { id: 1, name: 'React', Icon: SiReact, color: '#61DAFB' },
    { id: 2, name: 'Vite', Icon: SiVite, color: '#646CFF' },
    { id: 3, name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
    { id: 4, name: 'Python', Icon: SiPython, color: '#4B8BBE' },
    { id: 5, name: 'Machine Learning', Icon: SiScikitlearn, color: '#F7931E' },
    { id: 6, name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  ];

  return (
    <section id="tech" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-6 text-center text-4xl font-bold text-white md:text-5xl"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tecnologías
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mb-12 max-w-2xl text-center text-slate-300"
          >
            Una base tecnológica preparada para integrar datos, modelos predictivos y experiencias de análisis claras.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 justify-center gap-4 sm:gap-6 md:grid-cols-3"
          >
            {techItems.map((item) => {
              const IconComp = item.Icon;
              return (
                <motion.div
                  key={item.id}
                  className="relative flex flex-col items-center justify-center gap-4 py-10 px-6 rounded-2xl bg-slate-900/40 border border-slate-700/30 overflow-hidden group"
                  whileHover={{ scale: 1.04, y: -6 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Halo difuso de color pulsante */}
                  <div
                    className="absolute inset-0 opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                    style={{ background: `radial-gradient(circle at 50% 40%, ${item.color}55, transparent 70%)` }}
                  />

                  {/* Anillo conic giratorio */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-70"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${item.color}, transparent 30%)`,
                      WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))',
                      mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))',
                    }}
                  />

                  {/* Logo gigante */}
                  <div className="relative z-10 group-hover:animate-[spin_3s_linear_infinite] transition-transform duration-300">
                    <IconComp
                      className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300"
                      style={{
                        color: item.color,
                        filter: `drop-shadow(0 0 12px ${item.color}) drop-shadow(0 0 30px ${item.color}66)`,
                      }}
                    />
                  </div>

                  {/* Etiqueta */}
                  <p
                    className="relative z-10 text-sm font-semibold tracking-wide bg-clip-text text-transparent"
                    style={{ backgroundImage: `linear-gradient(90deg, ${item.color}, #fff)` }}
                  >
                    {item.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
