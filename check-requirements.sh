# Check if Helm is installed
if ! command -v helm >/dev/null 2>&1; then
  echo "🚫 Helm is not installed. Please install Helm manually."
  exit 1
else
  echo "✅ Helm is installed: $(helm version --short)"
fi