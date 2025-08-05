import matplotlib.pyplot as plt
import numpy as np
from datetime import datetime
import os

f0 = 141.7001
t = np.linspace(0, 1, 1000)
y = np.sin(2 * np.pi * f0 * t)

os.makedirs("resultados_qcal", exist_ok=True)

fecha = datetime.now().strftime("%Y-%m-%d")
filename = f"grafico_resonancia_{fecha}.png"
ruta = os.path.join("resultados_qcal", filename)

plt.plot(t, y)
plt.title(f"Resonancia Viva QCAL ∞³ — f₀ = {f0} Hz")
plt.xlabel("Tiempo (s)")
plt.ylabel("Amplitud")
plt.savefig(ruta)

