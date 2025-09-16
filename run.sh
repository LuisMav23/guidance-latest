#!/bin/bash
set -e  # exit if any command fails

if docker ps -a --format '{{.Names}}' | grep -Eq '^client$'; then
    docker stop client
    docker rm client
fi

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

docker run -d \
  --name client \
  --restart=unless-stopped \
  --network='host' \
  -p 3000:3000 \
  client:latest