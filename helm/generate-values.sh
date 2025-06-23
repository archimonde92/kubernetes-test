#!/bin/bash

# Ensure .env is present
if [ ! -f .env ]; then
  echo "❌ .env file not found!"
  exit 1
fi

# Load env vars
set -a
source .env
set +a

# Generate values.yaml
envsubst <values-template.yaml > values.yaml

echo "✅ Generated values.yaml"
