import os
from datetime import datetime

# Ruta al directorio donde están los gráficos
directorio = "resultados_qcal"
archivos = sorted([
    f for f in os.listdir(directorio) if f.endswith(".png")
])

# Contenido HTML dinámico
html = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>🌊 Galería de Resonancia QCAL ∞³</title>
  <style>
    body { font-family: sans-serif; background: #f5f5f5; padding: 2em; }
    h1 { color: #2c3e50; text-align: center; }
    .gallery { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
    .item { background: white; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); padding: 1em; }
    img { max-width: 300px; height: auto; display: block; margin: 0 auto; }
    p { text-align: center; font-size: 0.9em; color: #555; }
  </style>
</head>
<body>
  <h1>🌊 Galería de Resonancia QCAL ∞³</h1>
  <div class="gallery">
"""

for archivo in archivos:
    fecha = archivo.split("_")[-1].replace(".png", "")
    html += f"""
    <div class="item">
      <img src="{archivo}" alt="Resonancia {fecha}">
      <p>{fecha}</p>
    </div>
    """

html += """
  </div>
</body>
</html>
"""

# Guardar
with open(os.path.join(directorio, "index.html"), "w", encoding="utf-8") as f:
    f.write(html)

print("✅ Galería HTML actualizada.")


