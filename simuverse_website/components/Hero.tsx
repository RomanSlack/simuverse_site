'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight;
    };

    // Initialize dimensions
    setCanvasDimensions();
    
    // Add resize listener
    window.addEventListener('resize', setCanvasDimensions);

    // Agent properties
    const agentCount = Math.min(15, Math.floor(window.innerWidth / 100));
    const agents: {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      size: number;
      color: string;
    }[] = [];

    // Create agents
    for (let i = 0; i < agentCount; i++) {
      agents.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3 + 2,
        color: `rgba(${177 + Math.random() * 72}, ${120 + Math.random() * 40}, ${100 + Math.random() * 40}, ${0.4 + Math.random() * 0.5})`,
      });
    }

    // Draw lines between nearby agents
    const drawConnections = () => {
      const maxDistance = canvas.width * 0.15;
      
      for (let i = 0; i < agents.length; i++) {
        for (let j = i + 1; j < agents.length; j++) {
          const dx = agents[i].x - agents[j].x;
          const dy = agents[i].y - agents[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(agents[i].x, agents[i].y);
            ctx.lineTo(agents[j].x, agents[j].y);
            
            // Opacity based on distance
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(249, 160, 140, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background pattern
      const patternSize = 20;
      ctx.fillStyle = 'rgba(249, 160, 140, 0.03)';
      
      for (let x = 0; x < canvas.width; x += patternSize) {
        for (let y = 0; y < canvas.height; y += patternSize) {
          if ((x + y) % (patternSize * 2) === 0) {
            ctx.fillRect(x, y, patternSize, patternSize);
          }
        }
      }
      
      // Update and draw agents
      agents.forEach(agent => {
        // Update position
        agent.x += agent.speedX;
        agent.y += agent.speedY;
        
        // Bounce off edges
        if (agent.x < 0 || agent.x > canvas.width) agent.speedX *= -1;
        if (agent.y < 0 || agent.y > canvas.height) agent.speedY *= -1;
        
        // Draw agent
        ctx.beginPath();
        ctx.arc(agent.x, agent.y, agent.size, 0, Math.PI * 2);
        ctx.fillStyle = agent.color;
        ctx.fill();
      });
      
      // Draw connections
      drawConnections();
      
      // Continue animation
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#fcf8f5] to-[#f9f0e9] mars-terrain"
        style={{ height: '100%' }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-space-blue">SimuVerse</span>
              <span className="block gradient-text mt-1">Intelligent Agents, Evolving Together</span>
            </h1>
            <p className="mt-6 text-lg text-[#718096] max-w-xl">
              A revolutionary multi-agent simulation environment where AI agents powered by LLMs live and interact on Mars, 
              paving the way for advanced research in artificial intelligence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="#features" className="btn-primary">
                Explore Features
              </Link>
              <Link href="https://github.com/RomanSlack/SimuVerse-Test-Environment-V1" className="btn-secondary">
                View on GitHub
              </Link>
            </div>
            <div className="mt-10 text-sm text-[#a0aec0]">
              Created by Roman Slack at The Rochester Institute of Technology
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tl from-mars-orange/10 to-transparent rounded-tl-full pointer-events-none" />
    </section>
  );
};

export default Hero;