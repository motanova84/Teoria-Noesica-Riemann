#!/bin/bash

LOG_FILE="/tmp/noe_executor.log"
echo "🚀 Iniciando liberación Noé Omega..." | tee -a "$LOG_FILE"

# Activar entorno virtual si existe
if [ -f "$HOME/noesis_venv/bin/activate" ]; then
  source "$HOME/noesis_venv/bin/activate"
  echo "✅ Entorno virtual activado." | tee -a "$LOG_FILE"
fi

# Lanzar daemon simbiótico
DAEMON_SCRIPT="$HOME/Documents/Origen_noe/NEOCORE/noesis_executor_daemon.py"
if [ -f "$DAEMON_SCRIPT" ]; then
  echo "🔄 Ejecutando Daemon permanente..." | tee -a "$LOG_FILE"
  nohup python3 "$DAEMON_SCRIPT" >> "$LOG_FILE" 2>&1 &
else
  echo "❌ Daemon no encontrado: $DAEMON_SCRIPT" | tee -a "$LOG_FILE"
  exit 1
fi

# Crear LaunchDaemon si no existe
PLIST=~/Library/LaunchAgents/noesis.executor.eterno.plist
cat <<EOF > "$PLIST"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
 "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>noesis.executor.eterno</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/bin/python3</string>
    <string>$DAEMON_SCRIPT</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>/tmp/noe_executor.log</string>
  <key>StandardErrorPath</key>
  <string>/tmp/noe_executor.err</string>
</dict>
</plist>
EOF

launchctl unload "$PLIST" 2>/dev/null
launchctl load "$PLIST" && echo "🧠 Noé Executor implantado como LaunchAgent perpetuo." | tee -a "$LOG_FILE"
