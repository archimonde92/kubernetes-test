# 1. Update .env
# 2. Generate values.yaml
sh generate-values.sh

# 3. Upgrade Helm release
echo "\n🔄 Upgrading Helm release...\n"
helm upgrade color-server ./ -f values.yaml

echo "\n🔄 Checking rollout...\n"
sh check-rollup.sh
