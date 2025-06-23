#!/bin/bash

# Generate values.yaml
sh generate-values.sh

#Make sure remove old deployment
echo "🔄 Removing old deployment..."
helm delete color-server

# Deploy
echo "🔄 Deploying new deployment..."
helm upgrade --install color-server ./

echo "✅ Deployment completed"