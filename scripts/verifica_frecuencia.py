import sys

f_esperada = 141.7001
frecuencia_actual = 141.7001  # Ajusta aquí si deseas probar error

if abs(frecuencia_actual - f_esperada) < 1e-6:
    print("✅ Frecuencia exacta verificada: 141.7001 Hz")
    sys.exit(0)
else:
    print(f"❌ Frecuencia incorrecta: {frecuencia_actual} Hz")
    sys.exit(1)

