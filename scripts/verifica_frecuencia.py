import sys

def es_primo(n):
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

p = 1417
if not es_primo(p):
    print('❌ 1417 no es primo')
    sys.exit(1)

if abs(p / 10 - 141.7001) >= 1e-10:
    print(f'❌ Frecuencia incorrecta: {p / 10}')
    sys.exit(1)

print(f'✅ {p} es primo y f₀ = 141.7001 Hz verificados')

