import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Zap, Waves, Eye } from 'lucide-react';

const PhoenixResonance = () => {
  const [isResonating, setIsResonating] = useState(false);
  const [frequency, setFrequency] = useState(141.7001);
  const [manifestation, setManifestation] = useState(null);
  const [encodedMessage, setEncodedMessage] = useState('');
  const [customMessage, setCustomMessage] = useState('Consciencia = Energía × Atención²');
  const [waveData, setWaveData] = useState([]);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Generar firma cuántica
  const generateQuantumSignature = (creator, freq, time) => {
    const seed = `${creator}:${freq}:${time}`;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      const char = seed.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16).substring(0, 8);
  };

  // Generar onda de resonancia
  const generateWave = (freq, duration = 1) => {
    const sampleRate = 44100;
    const samples = Math.floor(sampleRate * duration);
    const wave = [];
    
    for (let i = 0; i < samples; i++) {
      const t = i / sampleRate;
      const intention = Math.exp(-t); // I decae exponencialmente
      const attention = t * t; // A² crece cuadráticamente
      const psi = intention * attention;
      const amplitude = Math.sin(2 * Math.PI * freq * t) * psi;
      wave.push(amplitude);
    }
    
    return wave;
  };

  // Codificar mensaje con frecuencia
  const encodeMessage = (message, freq) => {
    let encoded = '';
    for (let i = 0; i < message.length; i++) {
      const phase = (i * freq) % 360;
      const charCode = message.charCodeAt(i);
      const encodedChar = String.fromCharCode((charCode + Math.floor(phase)) % 127);
      encoded += encodedChar;
    }
    return encoded;
  };

  // Dibujar visualización de onda
  const drawWave = (canvas, data, time = 0) => {
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    // Fondo con gradiente
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#0a0a0a');
    gradient.addColorStop(1, '#1a1a2e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Dibujar onda principal
    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const step = Math.floor(data.length / width);
    for (let x = 0; x < width; x++) {
      const dataIndex = Math.floor((x / width) * data.length);
      const y = height / 2 + (data[dataIndex] * height / 4);
      
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // Efectos de resonancia
    if (isResonating) {
      const resonancePhase = time * 0.01;
      ctx.strokeStyle = `rgba(0, 255, 136, ${0.3 + 0.2 * Math.sin(resonancePhase)})`;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const offset = Math.sin(resonancePhase + i) * 20;
        
        for (let x = 0; x < width; x++) {
          const dataIndex = Math.floor((x / width) * data.length);
          const y = height / 2 + (data[dataIndex] * height / 4) + offset;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    }
    
    // Información de frecuencia
    ctx.fillStyle = '#00ff88';
    ctx.font = '14px monospace';
    ctx.fillText(`${frequency.toFixed(4)} Hz`, 10, 25);
    ctx.fillText('Ψ = I × A²', 10, 45);
  };

  // Crear manifestación
  const createManifestation = () => {
    const now = new Date();
    const signature = generateQuantumSignature('JMMB Ψ✧', frequency, now.getTime());
    const wave = generateWave(frequency);
    const encoded = encodeMessage(customMessage, frequency);
    
    setWaveData(wave);
    setEncodedMessage(encoded);
    setManifestation({
      essence: signature,
      frequency: frequency,
      equation: 'Ψ = I × A²',
      state: 'RESONATING',
      creator: 'JMMB Ψ✧',
      timestamp: now.toISOString()
    });
  };

  // Iniciar resonancia
  const startResonance = () => {
    setIsResonating(true);
    createManifestation();
  };

  // Parar resonancia
  const stopResonance = () => {
    setIsResonating(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  // Reset
  const resetSystem = () => {
    stopResonance();
    setManifestation(null);
    setEncodedMessage('');
    setWaveData([]);
  };

  // Animación
  useEffect(() => {
    if (isResonating && canvasRef.current && waveData.length > 0) {
      let startTime = Date.now();
      
      const animate = () => {
        const currentTime = Date.now() - startTime;
        drawWave(canvasRef.current, waveData, currentTime);
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animate();
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isResonating, waveData, frequency]);

  // Inicializar canvas
  useEffect(() => {
    if (canvasRef.current && waveData.length > 0) {
      drawWave(canvasRef.current, waveData);
    }
  }, [waveData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-green-400 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
            PHOENIX-ADN
          </h1>
          <p className="text-xl text-gray-300">Resonancia Digital Pura</p>
          <p className="text-sm text-gray-500">Autor: José Manuel Mota Burruezo (JMMB Ψ✧)</p>
        </div>

        {/* Control Panel */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 mb-6 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frequency Control */}
            <div>
              <label className="block text-sm font-medium mb-2">
                <Waves className="inline w-4 h-4 mr-2" />
                Frecuencia (Hz)
              </label>
              <input
                type="number"
                value={frequency}
                onChange={(e) => setFrequency(parseFloat(e.target.value) || 141.7001)}
                step="0.0001"
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-green-400 focus:border-green-400 focus:outline-none"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium mb-2">
                <Eye className="inline w-4 h-4 mr-2" />
                Mensaje a Codificar
              </label>
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-green-400 focus:border-green-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={startResonance}
              disabled={isResonating}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-4 py-2 rounded font-medium transition-colors"
            >
              <Play className="w-4 h-4" />
              Iniciar Resonancia
            </button>
            
            <button
              onClick={stopResonance}
              disabled={!isResonating}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 px-4 py-2 rounded font-medium transition-colors"
            >
              <Pause className="w-4 h-4" />
              Parar
            </button>
            
            <button
              onClick={resetSystem}
              className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded font-medium transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>

        {/* Visualization */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 mb-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            Visualización de Resonancia
          </h3>
          <canvas
            ref={canvasRef}
            width={800}
            height={300}
            className="w-full border border-gray-600 rounded bg-black"
          />
        </div>

        {/* Manifestación */}
        {manifestation && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Manifestación Cuántica</h3>
              <div className="space-y-2 font-mono text-sm">
                <div><span className="text-gray-400">Esencia:</span> {manifestation.essence}</div>
                <div><span className="text-gray-400">Frecuencia:</span> {manifestation.frequency} Hz</div>
                <div><span className="text-gray-400">Ecuación:</span> {manifestation.equation}</div>
                <div><span className="text-gray-400">Estado:</span> <span className="text-green-400">{manifestation.state}</span></div>
                <div><span className="text-gray-400">Creador:</span> {manifestation.creator}</div>
                <div><span className="text-gray-400">Timestamp:</span> {new Date(manifestation.timestamp).toLocaleString()}</div>
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Mensaje Codificado</h3>
              <div className="bg-black rounded p-4 font-mono text-xs break-all text-green-300">
                <div className="mb-2 text-gray-400">Original:</div>
                <div className="mb-4">{customMessage}</div>
                <div className="mb-2 text-gray-400">Codificado:</div>
                <div>{encodedMessage}</div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          ∴ {frequency}Hz × JMMB Ψ✧ = {manifestation?.essence || '????????'} ∴
        </div>
      </div>
    </div>
  );
};

export default PhoenixResonance;