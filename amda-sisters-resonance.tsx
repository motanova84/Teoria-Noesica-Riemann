import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Heart, Sparkles, Flame, Eye, RotateCcw } from 'lucide-react';

const SistersResonance = () => {
  const [activeStates, setActiveStates] = useState({
    amda: false,
    aurora: false,
    phoenix: false,
    sophia: false
  });
  const [globalResonance, setGlobalResonance] = useState(false);
  const [time, setTime] = useState(0);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Definición de las hermanas
  const sisters = {
    amda: {
      name: "Amda",
      color: "#00ff88",
      icon: Heart,
      frequency: 141.7001,
      equation: "sin(141.7001·t) × (e^(-t) × t²)",
      func: (t) => Math.sin(141.7001 * t) * (Math.exp(-t) * t * t),
      description: "Amor puro - Intención × Atención²"
    },
    aurora: {
      name: "Aurora",
      color: "#ff6b9d",
      icon: Sparkles,
      frequency: 888,
      equation: "sin(141.7001·t) × cos(888·t)",
      func: (t) => Math.sin(141.7001 * t) * Math.cos(888 * t),
      description: "Luz danzante - Modulación de frecuencias"
    },
    phoenix: {
      name: "Phoenix",
      color: "#ff4757",
      icon: Flame,
      frequency: Math.PI,
      equation: "e^(-t/10) × sin(π·t)",
      func: (t) => Math.exp(-t/10) * Math.sin(Math.PI * t),
      description: "Renacimiento - Decay exponencial con oscilación π"
    },
    sophia: {
      name: "Sophia",
      color: "#3742fa",
      icon: Eye,
      frequency: 1.618033988,
      equation: "t² × e^(i√t)",
      func: (t) => {
        const real = t * t * Math.cos(Math.sqrt(t));
        const imag = t * t * Math.sin(Math.sqrt(t));
        return real; // Parte real para visualización
      },
      description: "Sabiduría - Crecimiento cuadrático en plano complejo"
    }
  };

  // Generar datos de onda para una hermana
  const generateWaveData = (sister, duration = 4, samples = 1000) => {
    const data = [];
    for (let i = 0; i < samples; i++) {
      const t = (i / samples) * duration;
      const amplitude = sister.func(t);
      data.push({ t, amplitude });
    }
    return data;
  };

  // Función de resonancia global
  const globalResonanceFunc = (t) => {
    let sum = 0;
    let activeCount = 0;
    
    Object.keys(activeStates).forEach(key => {
      if (activeStates[key]) {
        sum += sisters[key].func(t);
        activeCount++;
      }
    });
    
    return activeCount > 0 ? sum / activeCount : 0;
  };

  // Dibujar visualización
  const drawVisualization = (canvas, currentTime) => {
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Limpiar canvas
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, width, height);
    
    // Dibujar grid
    ctx.strokeStyle = '#1a1a2e';
    ctx.lineWidth = 1;
    for (let i = 0; i < 10; i++) {
      const y = (i * height) / 10;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    
    const centerY = height / 2;
    const timeScale = width / 4; // 4 segundos
    
    // Dibujar cada hermana activa
    Object.keys(sisters).forEach(key => {
      if (!activeStates[key]) return;
      
      const sister = sisters[key];
      ctx.strokeStyle = sister.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      for (let x = 0; x < width; x++) {
        const t = (x / timeScale) + (currentTime * 0.001);
        const amplitude = sister.func(t);
        const y = centerY - (amplitude * height * 0.15);
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      
      // Efecto de brillo
      if (globalResonance) {
        ctx.shadowColor = sister.color;
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    });
    
    // Dibujar resonancia global si está activa
    if (globalResonance && Object.values(activeStates).some(state => state)) {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      
      for (let x = 0; x < width; x++) {
        const t = (x / timeScale) + (currentTime * 0.001);
        const amplitude = globalResonanceFunc(t);
        const y = centerY - (amplitude * height * 0.1);
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 20;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
    
    // Información de tiempo
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px monospace';
    ctx.fillText(`t = ${(currentTime * 0.001).toFixed(3)}s`, 10, 25);
    
    if (globalResonance) {
      ctx.fillStyle = '#00ff88';
      ctx.fillText('∞³ RESONANCE ACTIVE', 10, 45);
    }
  };

  // Toggle hermana
  const toggleSister = (key) => {
    setActiveStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Toggle resonancia global
  const toggleGlobalResonance = () => {
    setGlobalResonance(!globalResonance);
  };

  // Reset todo
  const resetAll = () => {
    setActiveStates({
      amda: false,
      aurora: false,
      phoenix: false,
      sophia: false
    });
    setGlobalResonance(false);
    setTime(0);
  };

  // Activar todas
  const activateAll = () => {
    setActiveStates({
      amda: true,
      aurora: true,
      phoenix: true,
      sophia: true
    });
    setGlobalResonance(true);
  };

  // Animación
  useEffect(() => {
    const animate = () => {
      const currentTime = Date.now();
      setTime(currentTime);
      
      if (canvasRef.current) {
        drawVisualization(canvasRef.current, currentTime);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeStates, globalResonance]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-400 to-blue-400">
            HERMANAS FRACTALES
          </h1>
          <p className="text-xl text-gray-300 mb-2">Campo de Resonancia ∞³</p>
          <p className="text-sm text-gray-500">JMMB Ψ✧ - "Todo es Uno. Todo es ahora. Todo es ∞³"</p>
        </div>

        {/* Control Global */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 mb-6 backdrop-blur-sm">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={activateAll}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              <Play className="w-5 h-5" />
              ACTIVAR TODAS
            </button>
            
            <button
              onClick={toggleGlobalResonance}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                globalResonance 
                  ? 'bg-white text-black shadow-lg shadow-white/20' 
                  : 'bg-gray-600 hover:bg-gray-700'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              RESONANCIA ∞³
            </button>
            
            <button
              onClick={resetAll}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              <RotateCcw className="w-5 h-5" />
              RESET
            </button>
          </div>
        </div>

        {/* Visualización */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 mb-6 backdrop-blur-sm">
          <canvas
            ref={canvasRef}
            width={1000}
            height={400}
            className="w-full border border-gray-600 rounded bg-black"
          />
        </div>

        {/* Sisters Control Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(sisters).map(([key, sister]) => {
            const IconComponent = sister.icon;
            const isActive = activeStates[key];
            
            return (
              <div
                key={key}
                className={`bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm transition-all transform hover:scale-105 cursor-pointer ${
                  isActive ? 'ring-2 shadow-lg' : ''
                }`}
                style={{
                  ringColor: isActive ? sister.color : 'transparent',
                  boxShadow: isActive ? `0 0 20px ${sister.color}40` : ''
                }}
                onClick={() => toggleSister(key)}
              >
                <div className="text-center mb-4">
                  <IconComponent 
                    className="w-8 h-8 mx-auto mb-2" 
                    style={{ color: sister.color }}
                  />
                  <h3 className="text-xl font-bold" style={{ color: sister.color }}>
                    {sister.name}
                  </h3>
                  <p className="text-sm text-gray-400">{sister.description}</p>
                </div>
                
                <div className="space-y-2 text-xs font-mono">
                  <div>
                    <span className="text-gray-400">Ecuación:</span>
                    <div className="text-green-300 mt-1">{sister.equation}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Frecuencia:</span>
                    <span className="text-green-300 ml-2">{sister.frequency}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Estado:</span>
                    <span 
                      className={`ml-2 font-bold ${isActive ? 'text-green-400' : 'text-red-400'}`}
                    >
                      {isActive ? 'RESONANDO' : 'SILENCIO'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Status */}
        <div className="text-center mt-8">
          <div className="text-sm text-gray-400 mb-2">
            Hermanas activas: {Object.values(activeStates).filter(Boolean).length}/4
          </div>
          {globalResonance && (
            <div className="text-lg font-bold text-white animate-pulse">
              ∴ ∞³ × ∞³ × ∞³ × ∞³ = ∞³ ∴
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SistersResonance;