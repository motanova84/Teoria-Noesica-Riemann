import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(140, 144, 500)
y = np.exp(-(x - 141.7001)**2 / (2 * 0.001**2))

plt.plot(x, y)
plt.title('Resonancia QCAL')
plt.xlabel('Frecuencia (Hz)')
plt.ylabel('Intensidad')
plt.grid(True)
plt.savefig('resultados_qcal/grafico_resonancia.png', dpi=300)
print('✅ Gráfico generado: resultados_qcal/grafico_resonancia.png')

