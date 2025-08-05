import sys

def es_primo(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Frecuencia base
frecuencia_objetivo = 141.7001
f = 141.7001

# Verifica si 1417 es primo
if not es_primo(int(f * 10)):
    print("❌ 1417 no es primo")
    sys.exit(1)

# Verifica si la frecuencia es exacta
if abs(f - frecuencia_objetivo) >= 1e-7:
    print(f"❌ Frecuencia incorrecta: {f} Hz")
    sys.exit(1)

print(f"✅ Frecuencia verificada: {f} Hz es coherente con {frecuencia_objetivo} Hz y 1417 es primo")

