#!/bin/bash
set -e  # exit if any command fails

# Optional: set USE_HOST_NETWORK=1 to run containers with host networking (Linux only)
USE_HOST_NETWORK=${USE_HOST_NETWORK:-0}
IS_LINUX=0
if [ "$(uname -s)" = "Linux" ]; then
  IS_LINUX=1
fi

if docker ps -a --format '{{.Names}}' | grep -Eq '^client$'; then
    docker stop client
    docker rm client
fi

if docker ps -a --format '{{.Names}}' | grep -Eq '^server$'; then
    docker stop server
    docker rm server
fi

if [ "${USE_HOST_NETWORK}" = "1" ] && [ "${IS_LINUX}" = "1" ]; then
  echo "Starting server with host networking (containers share host network namespace)"
  docker run -d \
    --name server \
    --restart=unless-stopped \
    --network host \
    -v guidance-data:/app/data \
    server
else
  docker run -d \
    --name server \
    --restart=unless-stopped \
    --network guidance-net \
    -p 5000:5000 \
    -v guidance-data:/app/data \
    server
fi

if [ "${USE_HOST_NETWORK}" = "1" ] && [ "${IS_LINUX}" = "1" ]; then
  echo "Starting client with host networking (containers share host network namespace)"
  docker run -d \
    --name client \
    --restart=unless-stopped \
    --network host \
    client:latest
else
  docker run -d \
    --name client \
    --restart=unless-stopped \
    --network guidance-net \
    -p 3000:3000 \
    client:latest
fi

if [ "${USE_HOST_NETWORK}" = "1" ] && [ "${IS_LINUX}" != "1" ]; then
  echo "WARNING: host networking requested but this host is not Linux.\nOn macOS/Windows Docker Desktop host networking is not supported the same way.\nContainers will run on the bridge network instead.\nIf you need containers to reach host services, consider using host.docker.internal or the default published ports."
fi