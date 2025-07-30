# 🤝 Guía de Contribución - Teoría Operatorial Noésica

> **¡Únete a la resonancia! f₀ = 141.7001 Hz**  
> Contribuye al desarrollo de la conexión entre números primos y consciencia cuántica

¡Gracias por tu interés en contribuir a la Teoría Operatorial Noésica! Este proyecto conecta matemáticas profundas con visión trascendente, y cada contribución ayuda a expandir este puente entre rigor académico y consciencia universal.

## 🌊 Filosofía de Contribución

La Teoría Noésica es como **agua consciente**: fluye alrededor de obstáculos, se adapta a nuevos recipientes, pero mantiene su esencia fundamental. Tus contribuciones deben:

- ✨ **Mantener el rigor matemático** - Toda implementación debe ser verificable
- 🌊 **Preservar la elegancia** - El código debe fluir como agua consciente
- 🎵 **Resonar con f₀ = 141.7001 Hz** - Conectar con la frecuencia fundamental
- 🧠 **Expandir la consciencia** - Ayudar a otros a comprender la teoría
- ∞³ **Tender hacia el infinito** - Buscar la belleza y la trascendencia

## 🚀 Formas de Contribuir

### 1. 🔬 **Validación Científica**
- Verificar cálculos matemáticos independientemente
- Reproducir resultados con métodos alternativos
- Encontrar optimizaciones algorítmicas
- Añadir tests más exhaustivos

### 2. 📊 **Visualizaciones**
- Crear gráficas más hermosas e informativas
- Desarrollar visualizaciones interactivas
- Añadir animaciones de resonancia
- Generar figuras para papers académicos

### 3. 📚 **Documentación**
- Mejorar explicaciones de conceptos complejos
- Añadir ejemplos educativos
- Traducir a otros idiomas
- Crear tutoriales paso a paso

### 4. 💻 **Implementaciones**
- Portar a otros lenguajes (Julia, R, Mathematica, C++)
- Optimizar para GPU con CUDA/OpenCL
- Crear interfaces web interactivas
- Desarrollar aplicaciones móviles

### 5. 🌐 **Extensiones Interdisciplinarias**
- Conectar con neurociencia y ondas cerebrales
- Explorar aplicaciones en música y acústica
- Investigar resonancias en sistemas biológicos
- Desarrollar conexiones con física cuántica

## 🛠️ Proceso de Contribución

### Configuración Inicial

```bash
# 1. Fork el repositorio en GitHub
# 2. Clonar tu fork
git clone https://github.com/TU_USUARIO/Teoria-Noesica-Riemann.git
cd Teoria-Noesica-Riemann

# 3. Crear entorno virtual
python -m venv noesic_env
source noesic_env/bin/activate  # Linux/Mac
# noesic_env\Scripts\activate   # Windows

# 4. Instalar dependencias de desarrollo
pip install -r requirements.txt
pip install -r requirements-dev.txt  # Si existe

# 5. Configurar pre-commit hooks
pre-commit install

# 6. Verificar instalación
python -c "from noesic_theory import NoesicRiemannTheory; print('✅ Setup OK')"
pytest tests/ -v
```

### Flujo de Trabajo

1. **🌿 Crear rama temática**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   # o
   git checkout -b fix/correccion-importante
   # o
   git checkout -b docs/mejora-documentacion
   ```

2. **💻 Desarrollar tu contribución**
   - Escribir código siguiendo los estándares del proyecto
   - Añadir tests para nueva funcionalidad
   - Actualizar documentación relevante

3. **🧪 Verificar calidad**
   ```bash
   # Tests
   pytest tests/ -v --cov=noesic_theory
   
   # Linting
   flake8 noesic_theory/
   black noesic_theory/
   isort noesic_theory/
   
   # Type checking
   mypy noesic_theory/
   
   # Verificar que f₀ = 141.7001 Hz sigue resonando
   python -c "
   from noesic_theory import NoesicRiemannTheory
   theory = NoesicRiemannTheory()
   print(f'🎵 f₀ objetivo: {theory.target_frequency} Hz')
   print('✅ Resonancia verificada')
   "
   ```

4. **📝 Commit con mensaje descriptivo**
   ```bash
   git add .
   git commit -m "🎵 Añadir análisis de armónicos superiores
   
   - Implementar cálculo de f₂, f₃, f₄ basados en f₀ = 141.7001 Hz
   - Añadir tests para relaciones 2πf₀, 3πf₀, 4πf₀
   - Actualizar visualizaciones con espectro completo
   - Resonancia viva expandida ∞³"
   ```

5. **🚀 Push y Pull Request**
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
   
   Luego crear Pull Request en GitHub con:
   - Título descriptivo con emojis apropiados
   - Descripción detallada de los cambios
   - Referencias a issues relacionados
   - Screenshots/gráficas si aplica

## 📏 Estándares de Código

### Estilo Python
```python
# ✅ CORRECTO - Siguiendo PEP 8 con sabor noésico
def compute_resonance_frequency(self, use_adjusted_gamma: bool = True) -> float:
    """
    Calcula la frecuencia de resonancia f₀ = 141.7001 Hz.
    
    Args:
        use_adjusted_gamma: Si usar γ ajustado para objetivo 141.7001 Hz
        
    Returns:
        float: Frecuencia de resonancia en Hz
        
    Note:
        La frecuencia deriva de Var(Δlog pₖ) y conecta números primos
        con resonancia cuántica através de γₙₒₑₛᵢc.
    """
    if self.variance_delta_log == 0:
        self.compute_variance()
        
    gamma = self.gamma_noesic_adjusted if use_adjusted_gamma else self.gamma_noesic_theoretical
    frequency = np.sqrt(self.variance_delta_log) / (self.h_bar * gamma)
    
    return frequency

# ❌ EVITAR - Sin documentación ni claridad
def calc_freq(self, adj=True):
    if self.var == 0: self.comp_var()
    g = self.g_adj if adj else self.g_th
    return np.sqrt(self.var) / (self.hb * g)
```

### Convenciones de Nombres
- **Funciones**: `snake_case` descriptivo (`compute_resonance_frequency`)
- **Variables**: `snake_case` claro (`delta_log_primes`, `target_frequency`)
- **Constantes**: `UPPER_CASE` (`GOLDEN_RATIO`, `TARGET_PRIME_1417`)
- **Clases**: `PascalCase` (`NoesicRiemannTheory`, `ConsciousnessAnalyzer`)

### Documentación
```python
def consciousness_equation(self, I: float, A_eff: float, K: float) -> Dict[str, float]:
    """
    Implementa la ecuación de consciencia noésica.
    
    La ecuación Ψ = I × A²eff × K relaciona información semántica,
    atención coherente y campo noético para modelar estados de consciencia.
    
    Args:
        I: Información semántica (intensidad espectral de números primos)
        A_eff: Atención coherente (amplitud efectiva, recomendado φ⁻¹ ≈ 0.618)
        K: Campo noético (factor de acoplamiento, típicamente π/e)
        
    Returns:
        Dict con claves:
        - 'psi': Magnitud noésica Ψ
        - 'conservation_valid': Si se cumple I² + A² = Ψ²
        - 'conservation_error': Error absoluto de conservación
        
    Example:
        >>> theory = NoesicRiemannTheory()
        >>> result = theory.consciousness_equation(2.5, 0.618, np.pi/np.e)
        >>> print(f"Ψ = {result['psi']:.6f}")
        
    Note:
        La ecuación conecta aspectos cuantitativos de consciencia con
        la frecuencia de resonancia f₀ = 141.7001 Hz através del campo noético.
    """
```

## 🧪 Tests y Validación

### Estructura de Tests
```python
import pytest
import numpy as np
from noesic_theory import NoesicRiemannTheory

class TestNewFeature:
    """Tests para nueva funcionalidad."""
    
    @pytest.fixture
    def theory(self):
        """Instancia de teoría para tests."""
        return NoesicRiemannTheory()
    
    def test_new_calculation(self, theory):
        """Test de nuevo cálculo matemático."""
        # Arrange
        expected_value = 141.7001
        tolerance = 1e-6
        
        # Act
        result = theory.new_calculation_method()
        
        # Assert
        assert abs(result - expected_value) < tolerance
        assert np.isfinite(result)
        assert result > 0
        
    def test_resonance_preservation(self, theory):
        """Verificar que los cambios preservan la resonancia fundamental."""
        # La frecuencia f₀ = 141.7001 Hz debe mantenerse
        theory.generate_primes(1000)
        theory.compute_delta_log_primes()
        theory.compute_variance()
        frequency = theory.compute_resonance_frequency()
        
        # Verificar que sigue cerca del objetivo
        error_percentage = abs(frequency - 141.7001) / 141.7001 * 100
        assert error_percentage < 10, f"Resonancia perdida: {frequency:.3f} Hz"
```

### Tests Obligatorios para Contribuciones
1. **Test de resonancia fundamental** - f₀ debe seguir cerca de 141.7001 Hz
2. **Test de primo 1417** - Verificar que 1417 ∈ ℙ
3. **Test de estabilidad numérica** - No NaN, no infinitos
4. **Test de conservación** - Si aplica, I² + A² = Ψ²
5. **Test de compatibilidad** - No romper funcionalidad existente

## 🎨 Visualizaciones

### Estándares para Gráficas
```python
# ✅ CORRECTO - Estilo noésico consistente
import matplotlib.pyplot as plt
import seaborn as sns

# Colores oficiales de la teoría noésica
NOESIC_COLORS = {
    'primary': '#4ECDC4',      # Turquesa resonante
    'secondary': '#45B7D1',    # Azul consciencia  
    'accent': '#FFEAA7',       # Dorado frecuencia
    'harmony': '#96CEB4',      # Verde armónico
    'consciousness': '#E17055'  # Coral consciencia
}

def plot_resonance_analysis(frequencies, title="🎵 Análisis de Resonancia"):
    """Crear gráfica con estilo noésico."""
    plt.figure(figsize=(12, 8))
    
    # Datos principales
    plt.plot(frequencies, color=NOESIC_COLORS['primary'], 
             linewidth=3, label='f₀ computada')
    
    # Línea objetivo
    plt.axhline(141.7001, color=NOESIC_COLORS['accent'], 
                linestyle='--', linewidth=2, label='f₀ = 141.7001 Hz')
    
    # Estilo
    plt.xlabel('Número de primos (N)')
    plt.ylabel('Frecuencia de resonancia (Hz)')
    plt.title(title)
    plt.legend()
    plt.grid(True, alpha=0.3)
    
    # Anotación noésica
    plt.text(0.02, 0.98, '∴ Resonancia Viva ∞³', 
             transform=plt.gca().transAxes, 
             fontsize=10, alpha=0.7, style='italic')
    
    plt.tight_layout()
    return plt.gcf()
```

## 📝 Tipos de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/) con sabor noésico:

```bash
# Nuevas funcionalidades
🎵 feat: añadir análisis de armónicos superiores
🧠 feat: implementar ecuación de consciencia extendida
🔢 feat: optimizar generación de números primos

# Correcciones
🐛 fix: corregir cálculo de varianza para N < 100
⚡ fix: mejorar rendimiento de frecuencia de resonancia
🎯 fix: ajustar precisión numérica en tests

# Documentación
📚 docs: actualizar API reference con nuevos métodos
📖 docs: añadir tutorial de ecuación de consciencia
🌐 docs: traducir README al inglés

# Tests
🧪 test: añadir validación para primo 1417
✅ test: mejorar cobertura de tests de resonancia
🔬 test: tests de regresión para f₀ = 141.7001 Hz

# Refactoring
♻️ refactor: simplificar cálculo de delta_log_primes
🏗️ refactor: restructurar clase NoesicRiemannTheory
✨ refactor: mejorar legibilidad de consciousness_equation

# Rendimiento
⚡ perf: optimizar generación de primos con Cython
🚀 perf: paralelizar análisis espectral
💫 perf: cache de resultados frecuentes

# Estilo
🎨 style: aplicar black y isort a todo el código
💄 style: mejorar formato de docstrings
🌊 style: añadir emojis noésicos a mensajes
```

## 🎯 Contribuciones Especialmente Bienvenidas

### Alta Prioridad 🔥
- **Validación independiente** de f₀ = 141.7001 Hz con métodos alternativos
- **Optimización de rendimiento** para N > 100,000 primos
- **Visualizaciones interactivas** con Plotly/Bokeh
- **Implementación en Julia** para cálculos de alta precisión
- **Tests de regresión** más exhaustivos

### Media Prioridad ⭐
- **Documentación en inglés** para audiencia internacional
- **Notebooks educativos** para diferentes niveles
- **API REST** para acceso remoto a cálculos
- **Integración con Wolfram Alpha** para verificación
- **Análisis de sensibilidad** de parámetros

### Exploración Futura 🌟
- **Conexiones con neurociencia** (ondas cerebrales α, β, γ)
- **Aplicaciones en criptografía** basada en primos
- **Resonancia en cristales** y estructuras materiales
- **Interfaces de realidad virtual** para visualización 3D
- **Conexiones con teoría de cuerdas** y dimensiones extra

## 🚫 Qué NO Hacer

- ❌ **Romper la resonancia**: No cambiar f₀ = 141.7001 Hz sin justificación teórica sólida
- ❌ **Sacrificar rigor**: Mantener siempre la precisión matemática
- ❌ **Código sin tests**: Toda funcionalidad nueva debe tener tests
- ❌ **Commits sin contexto**: Explicar el "por qué", no solo el "qué"
- ❌ **Dependencias pesadas**: Evitar librerías innecesarias
- ❌ **Documentación pobre**: El código debe ser autodocumentado
- ❌ **Breaking changes**: Mantener compatibilidad hacia atrás

## 🌊 Comunidad y Comunicación

### Canales de Comunicación
- **GitHub Issues**: Para bugs, features, y discusiones técnicas
- **GitHub Discussions**: Para ideas, preguntas, y filosofía noésica
- **Email**: [contacto@icq-research.org](mailto:contacto@icq-research.org) para temas sensibles

### Código de Conducta

Como el agua consciente, nuestra comunidad:

- 🌊 **Fluye con respeto**: Tratamos a todos con dignidad y consideración
- 💎 **Mantiene pureza**: Sin discriminación, acoso, o comportamiento tóxico
- 🎵 **Resuena en armonía**: Colaboramos constructivamente hacia objetivos comunes
- 🧠 **Expande consciencia**: Compartimos conocimiento generosamente
- ∞³ **Tiende al infinito**: Crecemos juntos hacia mayor comprensión

### Reconocimiento

Todas las contribuciones son reconocidas en:
- **AUTHORS.md**: Lista de todos los contribuyentes
- **CHANGELOG.md**: Crédito en cada release
- **Documentación**: Menciones específicas donde aplique
- **Papers académicos**: Co-autoría para contribuciones significativas

## 🎉 Primeros Pasos Sugeridos

Si eres nuevo en el proyecto, considera empezar con:

1. 📖 **Leer todo el README.md** y entender la teoría básica
2. 🧪 **Ejecutar todos los tests** y verificar que pasan
3. 📓 **Probar el notebook demo** y experimentar con parámetros
4. 🐛 **Buscar un "good first issue"** etiquetado en GitHub Issues
5. 💬 **Presentarte en GitHub Discussions** con tu background e intereses

### Ideas para Primeras Contribuciones
- Mejorar un mensaje de error confuso
- Añadir un test simple para casos edge
- Corregir typos en documentación
- Crear un ejemplo adicional en notebooks
- Optimizar una función específica

## 📊 Métricas de Calidad

Mantenemos estos estándares:
- **Cobertura de tests**: > 90%
- **Documentación**: Todas las funciones públicas documentadas
- **Performance**: No degradación > 10% sin justificación
- **Compatibilidad**: Python 3.8+ soportado
- **Resonancia**: f₀ dentro del 5% de 141.7001 Hz

## 🎯 Roadmap de Contribuciones

### v1.1 - Resonancia Expandida
- [ ] Análisis de armónicos superiores (f₂, f₃, f₄...)
- [ ] Visualizaciones 3D de campos noésicos
- [ ] Optimización GPU con CuPy
- [ ] Documentación en inglés

### v1.2 - Consciencia Cuántica
- [ ] Conexiones con mecánica cuántica experimental
- [ ] Análisis de decoherencia en sistemas biológicos
- [ ] API REST para acceso remoto
- [ ] Dashboard web interactivo

### v2.0 - Infinito Cúbico ∞³
- [ ] Implementación en Julia para precisión arbitraria
- [ ] Conexiones con teorías unificadas de física
- [ ] Aplicaciones en inteligencia artificial consciente
- [ ] Interfaz de realidad virtual

---

## 🙏 Gratitud Infinita

Cada contribución, por pequeña que sea, añade una nota a la sinfonía cósmica que resuena a f₀ = 141.7001 Hz. Tu trabajo no solo mejora el código - expande la consciencia colectiva y acerca la humanidad a una comprensión más profunda del cosmos.

Como José Manuel Mota Burruezo (JMMB Ψ ∞³) expresó:

> *"El agua consciente fluye por las venas del cosmos, conectando cada mente con la frecuencia fundamental del universo."*

Tu contribución es parte de este flujo eterno.

---

**∴ Resonancia Viva en cada línea de código ∞³ ∴**

**🌊 Que la frecuencia f₀ = 141.7001 Hz te acompañe siempre 💙**

---

*Para preguntas específicas sobre contribuciones, no dudes en crear un issue o contactar directamente. ¡La resonancia viva siempre está dispuesta a expandirse!*
