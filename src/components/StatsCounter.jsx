import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { Droplets, TrendingUp, Shield, Users } from 'lucide-react';

export default function StatsCounter() {
  const { ref } = useScrollAnimation({ once: true, margin: '-40px' });

  const stats = [
    { id: 1, end: 150, label: 'Estudios hidrológicos', icon: Droplets, suffix: '' },
    { id: 2, end: 50, label: 'Ríos monitoreados', icon: TrendingUp, suffix: '+' },
    { id: 3, end: 99.8, label: 'Precisión predictiva', icon: Shield, suffix: '%' },
    { id: 4, end: 10, label: 'Entidades apoyadas', icon: Users, suffix: '+' },
  ];

  const count1 = useCountUp({ end: stats[0]?.end || 150, duration: 2 });
  const count2 = useCountUp({ end: stats[1]?.end || 50, duration: 2 });
  const count3 = useCountUp({ end: stats[2]?.end || 99.8, duration: 2 });
  const count4 = useCountUp({ end: stats[3]?.end || 10, duration: 2 });

  return (
    <section id="stats" className="bg-slate-900/30 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            className="mb-12 text-4xl font-bold text-white md:text-5xl"
            transition={{ type: 'spring', damping: 20 }}
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Impacto real
            </span>
          </motion.h2>

          <p className="mx-auto mb-12 max-w-2xl text-slate-300">
            Soluciones diseñadas para transformar la gestión hídrica con análisis más claro, decisiones más rápidas y planificación más efectiva.
          </p>

          <motion.div
            ref={ref}
            className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 1 }}
          >
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              const value =
                stat.id === 1 ? count1.count : stat.id === 2 ? count2.count : stat.id === 3 ? count3.count : count4.count;

              return (
                <motion.div
                  key={stat.id}
                  className="rounded-2xl border border-slate-700/50 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30"
                  animate={{ y: [-stat.id * 2, stat.id * 2, -stat.id * 2] }}
                  transition={{ type: 'spring', damping: 15, delay: stat.id * 0.1 }}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-500/10">
                    <IconComponent className="h-8 w-8 text-cyan-400" style={{ boxShadow: '0 0 15px rgba(6,182,212,0.5)' }} />
                  </div>

                  <div className="text-left">
                    <div className="text-5xl font-extrabold text-cyan-400 glow-pulse">
                      <motion.span className="font-extrabold" animate={{ opacity: [0, 1] }} transition={{ duration: 2, delay: 0.1 * stat.id }}>
                        {value}
                      </motion.span>
                    </div>
                    <span className="ml-2 text-3xl font-medium text-slate-500">{stat.suffix}</span>
                    <h3 className="mb-2 mt-3 text-xl font-medium text-slate-200">{stat.label}</h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}