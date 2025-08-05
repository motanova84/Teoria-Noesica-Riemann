kimport sys

def es_primo(n):
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def es_armonico(f0, esperado=141.7001, tolerancia=1e-7):
    return abs(f0 - esperado) <= tolerancia

# Validación base
p = 1417
f0 = p / 10

if not es_primo(p):
    print(f"❌ {p} no es primo")
    sys.exit(1)

if not es_armonico(f0):
    print(f"❌ Frecuencia incorrecta: {f0} Hz")
    sys.exit(1)

print(f"✅ {p} es primo y f₀ = {f0} Hz ≈ 141.7001 Hz — verificado")


