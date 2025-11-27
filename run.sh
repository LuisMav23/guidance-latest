#!/bin/bash
set -e  # exit if any command fails

if docker ps -a --format '{{.Names}}' | grep -Eq '^server$'; then
    docker stop server
    docker rm server
fi

docker run -d \
  --name server \
  --restart=unless-stopped \
  -p 5000:5000 \
  -v guidance-data:/app/data \
  server