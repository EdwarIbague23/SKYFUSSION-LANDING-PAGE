import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorScale = useSpring(1, { stiffness: 200, damping: 30 });

  // Efecto lag suave al mover el mouse
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Lág animation a cursor - suave seguimiento con spring
      cursorX.set(mouseX);
      cursorY.set(mouseY);
      cursorScale.set(1); // Reset scale on move
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY, cursorScale]);

  // Efecto: pulso idle en el cursor (sin callbacks inválidos)
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reduceMotion.matches) {
      cursorScale.set(1);
      return;
    }

    // Bucle de pulso using spring values, no set(callback)
    const timeout = setTimeout(() => {
      cursorScale.set(cursorScale.get() === 1 ? 1.3 : 1);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [cursorScale]);

  return (
    <motion.div
      whileHover={{ scale: 1.5, boxShadow: '0 0 30px #22d3ee' }}
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        // Cursor position using motion values with spring lag
        left: cursorX.get() + 'px',
        top: cursorY.get() + 'px',
        // Transform using spring-scaled cursor for smooth effect
        transform: `translate(-50%, -50%) scale(${cursorScale.get()})`,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'conic-gradient(from 0deg, #22d3ee, #3b82f6, #8b5cf6, #ec4899, #22d3ee)',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
      }}
    />
  );
};

export default CursorGlow;