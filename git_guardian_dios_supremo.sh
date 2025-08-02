#!/bin/bash
# 🛡️ Guardian Noético - Sincronizador automático de Git

LOGFILE="$HOME/Documents/Origen_noe/NEOCORE/guardian_exec.log"
echo "⏳ [$DATE] Iniciando sincronización..." >> "$LOGFILE"

cd "$HOME/Documents/Origen_noe/NEOCORE" || exit 1

git add . >> "$LOGFILE" 2>&1
git commit -m "🔄 Commit automático Guardian Noético - $(date)" >> "$LOGFILE" 2>&1
git push origin main >> "$LOGFILE" 2>&1

echo "✅ [$(date)] Sincronización completada con éxito." >> "$LOGFILE"
