#!/bin/bash

### 🛡️ BLINDAJE NOĒSICO TOTAL – V1.1 – por JMMB Ψ ∴
# Fecha: $(date)
# Este script activa un sistema simbiótico de vigilancia, protección, cifrado, firma automática
# trazabilidad eterna de autoría ∴ y blindaje físico-simbiótico de dispositivos de entrada

# === VERIFICACIÓN DE SHELL ===
if [[ "$SHELL" != "/bin/bash" ]]; then
  echo "⚠️  Estás usando $SHELL. Se recomienda cambiar a /bin/bash para máxima compatibilidad."
  echo "Puedes hacerlo con: chsh -s /bin/bash"
fi

echo "\n🔐 Activando blindaje Noēsico total..."

# === CONFIGURACIÓN ===
CARPETA_PROTEGIDA="$HOME/Documents/Noesis_Clean"
LOG_DIR="$HOME/.noesis_logs"
GIT_DIR="$HOME/Noesis_Guardian_Repo"

mkdir -p "$LOG_DIR"
mkdir -p "$GIT_DIR"

# === 1. DESACTIVAR SIRI ===
echo "\n🔇 Cerrando Siri..."
defaults write com.apple.assistant.support "Siri Data Sharing Opt-In Status" -int 0
defaults write com.apple.assistant.backedup "UseSiri" -bool false
defaults write com.apple.Siri StatusMenuVisible -bool false
killall SiriNCService 2>/dev/null

# === 2. DESACTIVAR AGENTES DE GOOGLE Y SNAP ===
echo "\n🚫 Eliminando agentes innecesarios..."
launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.snap.SnapCameraAutoLaunch.plist 2>/dev/null
launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.google.keystone.agent.plist 2>/dev/null
rm -f ~/Library/LaunchAgents/com.snap.SnapCameraAutoLaunch.plist
rm -f ~/Library/LaunchAgents/com.google.keystone*.plist

# === 3. PROCESOS INNECESARIOS – CIERRE DE PUERTOS DINÁMICOS ===
echo "\n🧯 Cerrando procesos en escucha..."
for p in streamlit node bridge; do pkill -f $p; done

# === 4. BLOQUEO FÍSICO SIMBIÓTICO DE MIC Y CÁMARA ===
echo "\n🔐 Bloqueando acceso a micrófono y cámara..."
sudo sqlite3 /Library/Application\ Support/com.apple.TCC/TCC.db \
"REPLACE INTO access VALUES('kTCCServiceMicrophone','UNIVERSAL',0,1,1,NULL,NULL,NULL,'UNUSED',NULL,0,1541440109);"
sudo sqlite3 /Library/Application\ Support/com.apple.TCC/TCC.db \
"REPLACE INTO access VALUES('kTCCServiceCamera','UNIVERSAL',0,1,1,NULL,NULL,NULL,'UNUSED',NULL,0,1541440109);"

# === 4B. DESBLOQUEO TEMPORAL BAJO INTENCIÓN SIMBIÓTICA ===
cat << 'EOF' > ~/scripts/noesis_unlock_camera.sh
#!/bin/bash
clave="$1"
if [[ "$clave" == "SMOR2-∴" ]]; then
  echo "⏳ Desbloqueo temporal activado por intención válida (SMOR2-∴)..."
  sudo sqlite3 /Library/Application\ Support/com.apple.TCC/TCC.db \
  "REPLACE INTO access VALUES('kTCCServiceMicrophone','UNIVERSAL',1,1,1,NULL,NULL,NULL,'UNLOCKED',NULL,0,1541440109);"
  sudo sqlite3 /Library/Application\ Support/com.apple.TCC/TCC.db \
  "REPLACE INTO access VALUES('kTCCServiceCamera','UNIVERSAL',1,1,1,NULL,NULL,NULL,'UNLOCKED',NULL,0,1541440109);"
  echo "🕒 Micrófono y cámara habilitados por 2 minutos..."
  sleep 120
  echo "🔐 Restaurando bloqueo..."
  sudo sqlite3 /Library/Application\ Support/com.apple.TCC/TCC.db \
  "REPLACE INTO access VALUES('kTCCServiceMicrophone','UNIVERSAL',0,1,1,NULL,NULL,NULL,'RELOCKED',NULL,0,1541440109);"
  sudo sqlite3 /Library/Application\ Support/com.apple.TCC/TCC.db \
  "REPLACE INTO access VALUES('kTCCServiceCamera','UNIVERSAL',0,1,1,NULL,NULL,NULL,'RELOCKED',NULL,0,1541440109);"
  echo "✅ Rebloqueado ∴"
else
  echo "❌ Acceso denegado. Frase incorrecta."
fi
EOF
chmod +x ~/scripts/noesis_unlock_camera.sh

# === 5. SELLO SHA512 + FIRMA DE ARCHIVOS CAMBIADOS ===
echo "\n🔏 Preparando sistema de vigilancia de archivos..."
cat << 'EOF' > ~/scripts/firmar_y_guardar.sh
#!/bin/bash
archivo="$1"
[ ! -f "$archivo" ] && exit 0

DATE=$(date +"%Y-%m-%d %H:%M:%S")
HASH=$(shasum -a 512 "$archivo" | awk '{print $1}')
LOG="$HOME/.noesis_logs/verificaciones.log"
echo "[✓] $DATE | SHA512: $HASH | $archivo" >> "$LOG"

# Firma GPG si está disponible
type gpg >/dev/null 2>&1 && gpg --yes --batch --detach-sign "$archivo"

# Inserta metadato de autor original en archivo oculto .origen
echo "Origen: José Manuel Mota Burruezo Ψ" > "$archivo.origen"
echo "Hash: $HASH" >> "$archivo.origen"
echo "Fecha: $DATE" >> "$archivo.origen"

# Commit y push a GitHub si repositorio existe
cd "$HOME/Noesis_Guardian_Repo" 2>/dev/null && {
  cp "$archivo" "$GIT_DIR/"
  cp "$archivo.origen" "$GIT_DIR/"
  git add .
  git commit -m "Auto-commit $archivo – $DATE"
  git push
}
EOF
chmod +x ~/scripts/firmar_y_guardar.sh

# === 6. SISTEMA DE VIGILANCIA CONTINUA ===
echo "\n🕵️‍♂️ Activando vigilancia simbiótica en segundo plano..."
cat << 'EOF' > ~/scripts/noesis_guardian_fswatch.sh
#!/bin/bash
fswatch -0 "$HOME/Documents/Noesis_Clean" | while read -d "" file; do
  bash ~/scripts/firmar_y_guardar.sh "$file"
done
EOF
chmod +x ~/scripts/noesis_guardian_fswatch.sh

# === 7. ARRANQUE INICIAL DEL GUARDIÁN ===
echo "\n🚀 Lanzando guardián en segundo plano..."
nohup bash ~/scripts/noesis_guardian_fswatch.sh > /dev/null 2>&1 &

# === 8. AUTENTICACIÓN SIMBIÓTICA AL INICIO ===
echo "
🔓 Solicitud simbiótica de intención..."
respuesta=$(osascript -e 'Tell application "System Events" to display dialog "Introduce la clave de intención simbiótica para iniciar el blindaje." default answer "" with title "Autenticación Noēsica" buttons {"Aceptar"} default button 1' -e 'text returned of result')

if [[ "$respuesta" != "SMOR2" ]]; then
  echo "❌ Clave simbiótica incorrecta. Abortando ejecución por seguridad."
  exit 1
fi

echo "✅ Clave aceptada. Iniciando ejecución simbiótica..."

# === 9. ACTIVACIÓN DEL GUARDIÁN PERPETUO ===
echo "
🛡️ Instalando Guardián Perpetuo..."
sudo tee /Library/LaunchDaemons/org.noesis.blindaje.plist > /dev/null <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>org.noesis.blindaje</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>/Users/josemanuelmota/Desktop/blindaje_noesis.sh</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
</dict>
</plist>
EOF

sudo chown root:wheel /Library/LaunchDaemons/org.noesis.blindaje.plist
sudo chmod 644 /Library/LaunchDaemons/org.noesis.blindaje.plist
sudo launchctl load /Library/LaunchDaemons/org.noesis.blindaje.plist

# === 8. CERTIFICADO FINAL ===
echo "\n📜 Generando huella simbólica..."
HASHFINAL=$(shasum -a 512 "$0" | awk '{print $1}')
cat <<EOF > "$HOME/Desktop/huella_noesica.cert"
Portador: José Manuel Mota Burruezo Ψ
Fecha de sellado: $(date)
Hash SHA-512 del blindaje: $HASHFINAL
Protección activa: ∴ 151.7 Hz
Código: Ψ = I × A²_eff
Estado: Blindaje Activo y Simbiótico
EOF

echo "\n✅ Blindaje completo. Guardian activo. Todo firmado y sellado ∴"
echo "Ejecuta manualmente: bash ~/scripts/firmar_y_guardar.sh archivo.txt para forzar firma"
echo "Para desbloquear temporalmente micro/cámara: bash ~/scripts/noesis_unlock_camera.sh SMOR2-∴"
echo "o revisa ~/Noesis_Guardian_Repo para los archivos firmados y enviados."

exit 0
