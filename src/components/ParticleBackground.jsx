import React, { useRef, useEffect, useState } from 'react';

const PARTICLE_COUNT = 60;
const BASE_HUE = 180; // Cyan base #06B6D4 area

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const particlesRef = useRef([]);
  const waveOffsetRef = useRef(0);
  const mousePosRef = useRef({ x: 0, y: 0 });

  // Efecto: Fase de onda continua (idle animation - nunca se detiene)
  useEffect(() => {
    let animId;
    
    const animate = () => {
      waveOffsetRef.current += 0.02;
      animId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => cancelAnimationFrame(animId);
  }, []);

  // Efecto: Cursor magnético con lag suave
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Inicializar partículas con colores neón cian/azul
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => {
      canvas.width = canvas.getBoundingClientRect().width;
      canvas.height = canvas.getBoundingClientRect().height;
    };
    resize();
    window.addEventListener('resize', resize);

    const createParticles = () => {
      const particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Distribución en patrón de ola sinusoidal
        const baseAngle = (i / PARTICLE_COUNT) * Math.PI * 2;
        const radius = 30 + (i / PARTICLE_COUNT) * 80;
        const x = canvas.width / 2 + radius * Math.cos(baseAngle);
        const y = canvas.height / 2 + radius * Math.sin(baseAngle * 0.5);

        particles.push({
          x,
          y: y + (Math.sin(waveOffsetRef.current + (i / PARTICLE_COUNT) * Math.PI) * 15), // Wave motion
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          hue: BASE_HUE + Math.random() * 20, // Cyan family: 180-200
          saturation: 70 + Math.random() * 20,
          lightness: 50 + Math.random() * 20,
          radius: 1 + Math.random(),
        });
      }
      particlesRef.current = particles;
    };

    resize();
    createParticles();
  }, []);

  // Actualizar posiciones de partículas con interacción mouse
  useEffect(() => {
    let animationId;

    const update = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = ctxRef.current || canvas.getContext('2d');
      const { x: mouseX, y: mouseY } = mousePosRef.current;
      const { length } = particlesRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move particles with mouse interaction
      const newParticles = particlesRef.current.map((p, i) => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let vx = p.vx;
        let vy = p.vy;

        // Mouse repulsion/attraction zone
        if (dist < 200) {
          const angle = Math.atan2(dy, dx);
          const force = (200 - dist) / 200;
          vx = Math.cos(angle) * force * 0.3;
          vy = Math.sin(angle) * force * 0.3;
        } else {
          // Continuos floating motion
          vx = (Math.random() - 0.5) * 0.1;
          vy = (Math.random() - 0.5) * 0.1;
        }

        p.x += vx;
        p.y += vy;

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        return { ...p, vx, vy };
      });

      particlesRef.current = newParticles;

      // Draw connections between nearby particles
      ctx.strokeStyle = `rgba(6, 182, 212, 0.15)`;
      ctx.lineWidth = 1;

      for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
          const dx = newParticles[i].x - newParticles[j].x;
          const dy = newParticles[i].y - newParticles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(newParticles[i].x, newParticles[i].y);
            ctx.lineTo(newParticles[j].x, newParticles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles with neon glow
      newParticles.forEach((p) => {
        ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${0.6 + Math.random() * 0.3})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${0.3 + Math.random() * 0.4})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{
        display: 'block',
        width: '100%',
        height: '100%'
      }}
    />
  );
}