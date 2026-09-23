import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const text = 'SKY FUSSION';
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setTypingIndex((prev) => {
        if (prev >= text.length) return prev;
        return prev + 1;
      });
    }, 45);

    return () => clearInterval(timeout);
  }, []);

  const displayedText = text.slice(0, typingIndex);

  const stats = [
    { value: '99.8%', label: 'Precisión', color: 'text-cyan-300' },
    { value: '12', label: 'Estudios', color: 'text-white' },
    { value: '98%', label: 'Ríos activos', color: 'text-blue-300' },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-slate-950 px-4 pb-14 pt-28 sm:px-6 lg:px-16"
    >
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-start space-y-6 text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-300"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Futuro del agua inteligente
          </motion.div>

          <h1 className="max-w-full break-words text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl md:text-6xl xl:text-8xl">
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              {displayedText}
            </span>
            <span className="mt-2 block text-white">ANALYTICS</span>
          </h1>

          <p className="max-w-xl text-lg font-medium text-slate-200 md:text-xl">
            La plataforma que convierte datos hídricos en decisiones inteligentes, rápidas y accionables.
          </p>

          <p className="max-w-lg text-sm leading-7 text-slate-300 md:text-base">
            SKY FUSSION ANALYTICS ayuda a entidades públicas y organizaciones ambientales a anticipar riesgos, optimizar recursos y mejorar la gestión del agua con IA, análisis predictivo y visualización avanzada.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#about"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 px-6 py-3 font-bold text-white shadow-[0_0_35px_rgba(34,211,238,0.4)] transition-all duration-300"
            >
              Ver plataforma
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-cyan-500/30 bg-slate-900/80 px-6 py-3 font-semibold text-slate-100 transition-all duration-300 hover:border-cyan-300 hover:bg-slate-800"
            >
              Solicitar demo
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:gap-4 sm:tracking-[0.25em]">
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2">IA aplicada</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2">Mapas 3D</span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2">Predictivo</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative flex w-full items-center justify-center lg:justify-end"
        >
          <div className="absolute -inset-10 rounded-full bg-cyan-500/15 blur-3xl" />

          <div className="glass-panel relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-slate-900/60 p-4 shadow-[0_0_80px_rgba(34,211,238,0.18)] backdrop-blur-2xl sm:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">Command center</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Monitoreo hídrico</h2>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                ACTIVO
              </div>
            </div>

            <div className="mb-8 grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.12 }}
                  className="rounded-2xl border border-slate-700/80 bg-slate-950/60 p-2 text-center sm:p-4"
                >
                  <div className={`text-xl font-black sm:text-3xl ${item.color}`}>{item.value}</div>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.25em]">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-slate-700/80 bg-slate-950/80 p-4">
              <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-slate-400">
                <span>Riesgo de caudal</span>
                <span className="text-cyan-300">+24.6%</span>
              </div>

              <div className="flex h-36 items-end gap-3">
                {[24, 36, 48, 42, 68, 52, 84, 71, 95, 78, 90, 100].map((value, index) => (
                  <motion.div
                    key={value + index}
                    initial={{ height: 0 }}
                    animate={{ height: `${value}%` }}
                    transition={{ duration: 0.7, delay: 0.3 + index * 0.08 }}
                    className={`w-full rounded-t-2xl ${
                      value > 80
                        ? 'bg-gradient-to-t from-cyan-500 to-blue-400'
                        : value > 60
                          ? 'bg-gradient-to-t from-blue-500 to-indigo-400'
                          : 'bg-gradient-to-t from-slate-700 to-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}