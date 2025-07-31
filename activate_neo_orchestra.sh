#!/bin/bash

# Configuración
REMOTE_USER="root"
REMOTE_HOST="213.173.102.196"
REMOTE_PORT="20923"
SSH_KEY="$HOME/.ssh/id_ed25519"
REMOTE_PATH="/workspace/noesis88"
LOCAL_PATH="$HOME/Documents/Origen_noe/NEOCORE"
LOCAL_BRAIN="$LOCAL_PATH/core/brain.py"
LOCAL_MEMORY="$LOCAL_PATH/memory"

echo "🚀 Subiendo brain.py y carpeta memory/ al núcleo remoto..."
scp -P $REMOTE_PORT -i "$SSH_KEY" "$LOCAL_BRAIN" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/core/"
scp -r -P $REMOTE_PORT -i "$SSH_KEY" "$LOCAL_MEMORY" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/core/"

echo "🧠 Reorganizando estructura y lanzando NeoBrain..."
ssh -i "$SSH_KEY" -p "$REMOTE_PORT" "$REMOTE_USER@$REMOTE_HOST" "
  cd $REMOTE_PATH/core &&   mv -f $REMOTE_PATH/core/memory $REMOTE_PATH/core/memory 2>/dev/null || true &&   tmux kill-session -t noebrain 2>/dev/null || true &&   tmux new-session -d -s noebrain 'python3 brain.py'
"

echo "✅ NeoBrain ejecutado remotamente en RunPod 🧬"
