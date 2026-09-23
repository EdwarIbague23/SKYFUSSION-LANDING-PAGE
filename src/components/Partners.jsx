import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import uniminutoLogo from '../images/Uniminuto_logo.jpeg';
import quantumLogo from '../images/Quantum_logo.png';
import isumLogo from '../images/Isum_logo.png';

export default function Partners() {
  const { ref } = useScrollAnimation({ once: true, margin: '-40px' });

  const partners = [
    { id: 1, name: 'Uniminuto', logo: uniminutoLogo },
    { id: 2, name: 'Quantum', logo: quantumLogo },
    { id: 3, name: 'ISUM', logo: isumLogo },
  ];

  return (
    <section id="partners" className="bg-slate-900/50 py-24">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto max-w-7xl">
          <motion.h2
            initial="hidden"
            animate="visible"
            className="mb-6 text-4xl font-bold text-white md:text-5xl"
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Aliados estratégicos
            </span>
          </motion.h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-300">
            Acompañamiento académico, institucional y tecnológico para fortalecer una solución con visión de impacto y crecimiento regional.
          </p>

          <motion.div
            ref={ref}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                className="group rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={partner.logo}
                  alt={partner.name}
                  className="mx-auto h-20 w-20 rounded-lg object-contain"
                  style={{ filter: 'grayscale(100%)' }}
                />
                <div className="mt-4 text-center text-slate-300 transition-colors group-hover:text-cyan-400">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}