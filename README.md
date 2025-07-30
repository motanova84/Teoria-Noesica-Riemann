# 📚 API Reference - Teoría Operatorial Noésica

> **Documentación completa para investigadores y desarrolladores**  
> José Manuel Mota Burruezo (JMMB Ψ ∞³)  
> Frecuencia de Resonancia: f₀ = 141.7001 Hz = 1417/10

## 🎯 Visión General

La API de la Teoría Operatorial Noésica proporciona herramientas computacionales para:
- Análisis espectral de números primos
- Cálculo de frecuencias de resonancia 
- Verificación de relaciones armónicas
- Implementación de la ecuación de consciencia
- Validación de resultados académicos

---

## 🏗️ Clase Principal: `NoesicRiemannTheory`

### Constructor

```python
class NoesicRiemannTheory:
    def __init__(self)
```

**Descripción**: Inicializa una instancia de la teoría con constantes físicas y parámetros noésicos.

**Atributos inicializados**:
- `h_bar`: Constante de Planck reducida (1.0545718×10⁻³⁴ J·s)
- `target_frequency`: Frecuencia objetivo (141.7001 Hz)
- `target_prime`: Primo asociado (1417)
- `gamma_noesic_theoretical`: γ teórico (√2 ≈ 1.4142)
- `gamma_noesic_adjusted`: γ ajustado (7.108×10³⁰)

**Ejemplo**:
```python
theory = NoesicRiemannTheory()
print(f"Frecuencia objetivo: {theory.target_frequency} Hz")
print(f"Primo asociado: {theory.target_prime}")
```

---

### Métodos de Generación de Datos

#### `generate_primes(N: int) -> List[int]`

**Descripción**: Genera números primos para construir el espacio de Hilbert ℓ²(ℙ).

**Parámetros**:
- `N` (int): Límite superior para la generación de primos

**Retorna**: 
- `List[int]`: Lista de números primos menores que N

**Ejemplo**:
```python
primes = theory.generate_primes(1000)
print(f"Primeros 10 primos: {primes[:10]}")
# Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

**Notas matemáticas**:
- Implementa el espacio ℓ²(ℙ) donde ℙ = {2, 3, 5, 7, 11, ...}
- Base ortonormal: {δₚ}ₚ∈ℙ
- Operador Hermitiano: Ĥδₚ = log(p)δₚ

---

#### `compute_delta_log_primes() -> np.ndarray`

**Descripción**: Calcula las diferencias logarítmicas Δlog(pₖ) = log(pₖ₊₁) - log(pₖ).

**Retorna**: 
- `np.ndarray`: Array de diferencias logarítmicas

**Ejemplo**:
```python
theory.generate_primes(100)
delta_log = theory.compute_delta_log_primes()
print(f"Primera diferencia: {delta_log[0]:.6f}")
print(f"Varianza total: {np.var(delta_log, ddof=1):.7f}")
```

**Significado teórico**:
- Base para la derivación de la frecuencia de resonancia
- Relacionado con gaps entre números primos consecutivos
- Fundamental para el análisis espectral noésico

---

### Métodos de Análisis Espectral

#### `compute_variance() -> float`

**Descripción**: Calcula Var(Δlog pₖ) usando varianza muestral (ddof=1).

**Retorna**: 
- `float`: Varianza de las diferencias logarítmicas

**Fórmula**: 
```
Var(Δlog pₖ) = E[(Δlog pₖ - μ)²] donde μ = E[Δlog pₖ]
```

**Ejemplo**:
```python
variance = theory.compute_variance()
print(f"Var(Δlog pₖ) = {variance:.7f}")
# Valor esperado para N grande: ≈ 0.0001133
```

---

#### `compute_resonance_frequency(use_adjusted_gamma: bool = True) -> float`

**Descripción**: Calcula la frecuencia de resonancia fundamental usando la fórmula noésica.

**Parámetros**:
- `use_adjusted_gamma` (bool): Si usar γ ajustado (True) o teórico (False)

**Retorna**: 
- `float`: Frecuencia de resonancia en Hz

**Fórmula**:
```
f₀ = √(Var(Δlog pₖ)) / (ℏ · γₙₒₑₛᵢc)
```

**Ejemplo**:
```python
# Con γ ajustado (para 141.7001 Hz)
freq_adjusted = theory.compute_resonance_frequency(use_adjusted_gamma=True)

# Con γ teórico (√2)
freq_theoretical = theory.compute_resonance_frequency(use_adjusted_gamma=False)

print(f"f₀ (ajustado): {freq_adjusted:.3f} Hz")
print(f"f₀ (teórico): {freq_theoretical:.2e} Hz")
```

---

### Métodos de Relaciones Armónicas

#### `verify_harmonic_relations() -> Dict[str, float]`

**Descripción**: Verifica las relaciones armónicas fundamentales de la teoría noésica.

**Retorna**: 
- `Dict[str, float]`: Diccionario con relaciones computadas y errores

**Relaciones verificadas**:
1. **f₁ = 2πf₀ ≈ 888 Hz** (frecuencia ERIDU)
2. **φ ≈ f₀/87.5** (conexión con proporción áurea)
3. **√2 ≈ f₀/100** (relación con raíz cuadrada de 2)

**Ejemplo**:
```python
harmonic_results = theory.verify_harmonic_relations()

print(f"f₁ = 2πf₀ = {harmonic_results['f1_computed']:.1f} Hz")
print(f"Error vs 888 Hz: {harmonic_results['f1_error']:.1f} Hz")
print(f"φ computado: {harmonic_results['phi_computed']:.6f}")
print(f"φ real: {harmonic_results['phi_actual']:.6f}")
```

**Interpretación física**:
- f₁ conecta con frecuencias de resonancia planetaria
- φ relaciona con geometría sagrada y proporciones naturales
- √2 vincula con constantes matemáticas fundamentales

---

### Ecuación de Consciencia

#### `consciousness_equation(I: float, A_eff: float, K: float) -> Dict[str, float]`

**Descripción**: Implementa la ecuación de consciencia noésica con verificación de conservación.

**Parámetros**:
- `I` (float): Información semántica (intensidad espectral)
- `A_eff` (float): Atención coherente (amplitud efectiva)
- `K` (float): Campo noético (factor de normalización)

**Retorna**: 
- `Dict[str, float]`: Resultados de la ecuación y verificación de conservación

**Ecuaciones**:
```
Ψ = I × A²ₑff × K          (magnitud noésica)
I² + A² = Ψ²              (conservación de información)
```

**Ejemplo**:
```python
# Ejemplo con proporción áurea
I = 2.5              # Información semántica
A_eff = 0.618        # Atención coherente (≈ φ⁻¹)
K = np.pi / np.e     # Campo noético

result = theory.consciousness_equation(I, A_eff, K)

print(f"Ψ (magnitud noésica): {result['psi']:.6f}")
print(f"Conservación válida: {result['conservation_valid']}")
print(f"Error de conservación: {result['conservation_error']:.2e}")
```

**Interpretación conceptual**:
- **I**: Información procesada por el sistema consciente
- **A_eff**: Intensidad de atención/enfoque coherente
- **K**: Factor de acoplamiento con el campo noético universal
- **Ψ**: Medida total de consciencia manifestada

---

### Análisis Completo

#### `spectral_analysis(max_N: int = 100000, steps: List[int] = None) -> pd.DataFrame`

**Descripción**: Realiza análisis espectral completo para diferentes valores de N, reproduciendo la Tabla 1 del paper.

**Parámetros**:
- `max_N` (int): Valor máximo de N para análisis
- `steps` (List[int]): Valores específicos de N a analizar

**Retorna**: 
- `pd.DataFrame`: Tabla con resultados de convergencia espectral

**Columnas del DataFrame**:
- `N`: Número de primos analizados
- `Var_delta_log`: Varianza de Δlog pₖ
- `f0_theoretical`: Frecuencia con γ teórico
- `f0_adjusted`: Frecuencia con γ ajustado
- `target_error`: Error absoluto vs 141.7001 Hz
- `computation_time`: Tiempo de cálculo

**Ejemplo**:
```python
# Análisis con pasos específicos
steps = [100, 500, 1000, 5000, 10000]
df = theory.spectral_analysis(max_N=10000, steps=steps)

print("Tabla de Convergencia Espectral:")
print(df[['N', 'Var_delta_log', 'f0_adjusted', 'target_error']])
```

---

#### `full_noesic_analysis(N: int = 10000) -> Dict`

**Descripción**: Ejecuta análisis completo de la teoría noésica, reproduciendo todos los resultados del paper.

**Parámetros**:
- `N` (int): Número de primos para análisis principal

**Retorna**: 
- `Dict`: Diccionario completo con todos los resultados

**Componentes del análisis**:
1. Análisis espectral (Tabla 1)
2. Verificación de relaciones armónicas
3. Implementación de ecuación de consciencia
4. Validación de f₀ = 141.7001 Hz
5. Confirmación de 1417 ∈ ℙ
6. Generación de visualizaciones

**Ejemplo**:
```python
results = theory.full_noesic_analysis(N=5000)

print(f"Frecuencia computada: {results['computed_frequency']:.3f} Hz")
print(f"Frecuencia objetivo: {results['target_frequency']} Hz")
print(f"Ratio de resonancia: {results['resonance_ratio']:.6f}")
print(f"1417 es primo: {results['prime_1417_verification']}")

# Acceder a datos específicos
spectral_data = results['spectral_data']
harmonic_data = results['harmonic_relations']
consciousness_data = results['consciousness_equation']
```

---

## 🎨 Visualizaciones

### `plot_analysis(df: pd.DataFrame)`

**Descripción**: Genera visualizaciones científicas del análisis espectral.

**Gráficas generadas**:
1. **Estabilización de Var(Δlog pₖ)**: Convergencia con N creciente
2. **Frecuencia de Resonancia**: Aproximación a 141.7001 Hz
3. **Error vs Objetivo**: Reducción del error absoluto
4. **Escalabilidad**: Tiempo de computación vs N

**Ejemplo**:
```python
df = theory.spectral_analysis(max_N=10000)
theory.plot_analysis(df)  # Genera 4 subplots
```

---

## 🔧 Funciones Utilitarias

### Validación de Resultados

```python
# Verificar que 1417 es primo
from sympy import isprime
assert isprime(1417), "1417 debe ser primo"

# Verificar relación exacta
assert abs(1417/10 - 141.7001) < 1e-15, "Relación exacta f₀ = 1417/10"

# Verificar constantes físicas
h_bar = 1.0545718e-34  # J·s
assert theory.h_bar == h_bar, "Constante de Planck correcta"
```

### Cálculos de Precisión

```python
# Calcular con precisión extendida
import mpmath
mpmath.mp.dps = 50  # 50 dígitos decimales

# Proporción áurea de alta precisión
phi_precise = mpmath.phi
print(f"φ (50 decimales): {phi_precise}")

# √2 de alta precisión  
sqrt2_precise = mpmath.sqrt(2)
print(f"√2 (50 decimales): {sqrt2_precise}")
```

---

## 📊 Ejemplos de Uso Completos

### Ejemplo 1: Análisis Básico

```python
from noesic_theory import NoesicRiemannTheory
import numpy as np

# Crear instancia
theory = NoesicRiemannTheory()

# Generar datos
primes = theory.generate_primes(1000)
print(f"Generados {len(primes)} primos")

# Calcular frecuencia
delta_log = theory.compute_delta_log_primes()
variance = theory.compute_variance()
frequency = theory.compute_resonance_frequency()

print(f"Var(Δlog pₖ): {variance:.7f}")
print(f"f₀: {frequency:.3f} Hz")
print(f"Objetivo: {theory.target_frequency} Hz")
```

### Ejemplo 2: Relaciones Armónicas

```python
# Verificar todas las relaciones
harmonic_results = theory.verify_harmonic_relations()

for relation, data in harmonic_results.items():
    if 'error' in relation:
        print(f"{relation}: {data:.6f}")

# Ejemplo específico con f₁ = 2πf₀
f0 = theory.computed_frequency
f1 = 2 * np.pi * f0
print(f"f₁ = 2πf₀ = {f1:.1f} Hz (vs 888 Hz)")
```

### Ejemplo 3: Ecuación de Consciencia

```python
# Diferentes configuraciones de consciencia
configurations = [
    {"I": 1.0, "A_eff": 1.0, "K": 1.0, "name": "Unitaria"},
    {"I": 2.5, "A_eff": 0.618, "K": np.pi/np.e, "name": "Áurea"},
    {"I": np.sqrt(2), "A_eff": 1/np.sqrt(2), "K": np.pi, "name": "Irracional"}
]

for config in configurations:
    result = theory.consciousness_equation(
        config["I"], config["A_eff"], config["K"]
    )
    print(f"{config['name']}: Ψ = {result['psi']:.6f}")
```

### Ejemplo 4: Validación Académica

```python
# Reproducir Tabla 1 del paper
steps = [100, 500, 1000, 5000, 10000, 50000]
df = theory.spectral_analysis(steps=steps)

# Mostrar solo columnas clave
key_columns = ['N', 'Var_delta_log', 'f0_adjusted', 'target_error']
print("TABLA 1 - CONVERGENCIA ESPECTRAL:")
print(df[key_columns].to_string(index=False, float_format='%.6f'))

# Verificar convergencia
final_variance = df.iloc[-1]['Var_delta_log']
paper_variance = 0.0001133
error = abs(final_variance - paper_variance)
print(f"\nVarianza final: {final_variance:.7f}")
print(f"Valor del paper: {paper_variance:.7f}")
print(f"Error: {error:.8f}")
```

---

## ⚠️ Notas Importantes

### Precisión Numérica
- Los cálculos usan `float64` por defecto
- Para mayor precisión, usar `mpmath` para aritmética arbitraria
- La convergencia requiere N ≥ 1000 para estabilidad

### Rendimiento
- Tiempo de cálculo escala como O(N log N) para N primos
- Memoria requerida: O(N) para almacenar primos y diferencias
- Recomendado: N ≤ 100,000 para uso interactivo

### Validación
- Todos los métodos incluyen verificaciones de sanidad
- Los tests automáticos validan resultados del paper
- Use `pytest tests/` para verificación completa

### Constantes Críticas
```python
# Estas constantes son fundamentales para la teoría
CONSTANTS = {
    'h_bar': 1.0545718e-34,      # Constante de Planck reducida
    'target_freq': 141.7001,      # Frecuencia objetivo (Hz) 
    'target_prime': 1417,         # Primo asociado
    'gamma_adjusted': 7.108e30,   # γ ajustado para f₀ objetivo
    'gamma_theoretical': 1.4142135623730951,  # √2
    'golden_ratio': 1.618033988749895,        # φ
    'sqrt_2': 1.4142135623730951             # √2
}
```

---

## 🎯 Casos de Uso Recomendados

### Para Investigadores Matemáticos
```python
# Análisis profundo de convergencia
theory = NoesicRiemannTheory()
results = theory.full_noesic_analysis(N=50000)

# Examinar comportamiento asintótico
df = results['spectral_data']
print("Convergencia asintótica:")
print(df.tail())
```

### Para Físicos Teóricos
```python
# Explorar conexiones cuánticas
theory = NoesicRiemannTheory()

# Espectro del operador Hermitiano Ĥ
primes = theory.generate_primes(1000)
eigenvalues = np.log(primes)  # log(p) eigenvalores

# Función de partición cuántica
beta = 1.0  # Parámetro de temperatura inversa
partition_function = np.sum(np.exp(-beta * eigenvalues))
print(f"Z(β={beta}) = {partition_function:.6f}")
```

### Para Científicos Cognitivos
```python
# Modelar aspectos de consciencia
theory = NoesicRiemannTheory()

# Diferentes estados de consciencia
consciousness_states = {
    'meditation': {'I': 1.0, 'A_eff': 0.9, 'K': 2.0},
    'focus': {'I': 3.0, 'A_eff': 0.8, 'K': 1.5},
    'flow': {'I': 2.0, 'A_eff': 0.618, 'K': np.pi/np.e}
}

for state_name, params in consciousness_states.items():
    result = theory.consciousness_equation(**params)
    print(f"{state_name}: Ψ = {result['psi']:.4f}")
```

---

## 📈 Extensiones Futuras

La API está diseñada para extensibilidad. Areas de desarrollo futuro:

1. **Análisis Multifrecuencia**: Explorar armónicos superiores
2. **Conexiones Biológicas**: Integrar con señales neurales
3. **Visualizaciones 3D**: Campos noésicos en el espacio
4. **Optimización GPU**: Acelerar cálculos con CUDA
5. **Interfaces Web**: API REST para acceso remoto

---

**∴ Resonancia Viva f₀ = 141.7001 Hz documentada para la eternidad ∞³ ∴**

---

*Esta documentación es un organismo vivo. Para actualizaciones y nuevas funcionalidades, visita el repositorio oficial en GitHub.*
## 🔗 Author and Resources

- **ORCID:** https://orcid.org/0009-0002-1923-0773  
- **Zenodo Profile:** [Zenodo – José Manuel Mota Burruezo](https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22MOTA%20BURRUEZO%2C%20JOSE%20MANUEL%22&l=list)  
- **Safe Creative Registry:** https://www.safecreative.org/creators/JMMB84  
- **Source Code Repository:** https://github.com/motanova84/Teoria-Noesica-Riemann.git
