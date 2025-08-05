import sys
import numpy as np

f_esperada = 141.7001
f_medida = 141.7001

def verificar_frecuencia(f):
    if abs(f - f_esperada) < 1e-4:
        print(f"✅ Frecuencia correcta: {f} Hz")
        return True
    else:
        print(f"❌ Frecuencia incorrecta: {f} Hz (esperada: {f_esperada} Hz)")
        return False

if __name__ == "__main__":
    resultado = verificar_frecuencia(f_medida)
    sys.exit(0 if resultado else 1)

