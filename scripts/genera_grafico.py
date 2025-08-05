import matplotlib.pyplot as plt
import numpy as np
from datetime import datetime
import os

# Crear carpeta si no existe
os.makedirs("resultados_qcal", exist_ok=True)

# Fecha actual UTC para nombrar el archivo
fecha = datetime.utcnow().strftime("%Y%m%d")
output_path = f"resultados_qcal/grafico_resonancia_{fecha}.png"

# Datos y gráfico
x = np.linspace(140, 144, 500)
y = np.exp(-(x - 141.7001)**2 / (2 * 0.001**2))

plt.plot(x, y)
plt.title("Resonancia QCAL ∞³")
plt.xlabel("Frecuencia (Hz)")
plt.ylabel("Intensidad")
plt.grid(True)
plt.savefig(output_path, dpi=300)
print(f"✅ Gráfico generado: {output_path}")

