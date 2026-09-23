import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const pulseRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
    
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    
    return () => clearTimeout(timeout);
  }, []);

  if (hasMounted && !isLoading) {
    return null;
  }

  return (
    <motion.div
      ref={pulseRef}
      initial="in"
      animate="out"
      className="fixed inset-0 bg-slate-950 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          className="w-20 h-20 rounded-full border-4 border-cyan-500/50 flex items-center justify-center mx-auto mb-6"
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        >
          <span className="text-4xl font-bold text-cyan-400">SF</span>
        </motion.div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          SKY FUSSION ANALYTICS
        </h1>
        
        <p className="text-slate-400 mb-8">
          Plataforma Inteligente de Gestión Hidrológica
        </p>
        
        <motion.div
          className="w-24 h-1 border-y border-slate-700 mx-auto"
          variants={{
            in: { y: 0 },
            out: { y: 20, opacity: 0 },
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          {/* Loading text children will be injected */}
        </motion.div>
      </div>
    </motion.div>
  );
}