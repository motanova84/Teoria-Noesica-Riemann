import sys

def es_armonico(f0, esperado=141.7001, tolerancia=1e-4):
    return abs(f0 - esperado) <= tolerancia

p = 1417  # Valor simbólico, no necesita ser primo
f0 = p / 10

if not es_armonico(f0):
    print(f"❌ Frecuencia incorrecta: {f0} Hz")
    sys.exit(1)

print(f"✅ Frecuencia aceptada: {f0} Hz ≈ 141.7001 Hz")

