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

# Start the client container
docker run --name client -d -p 80:3000 client:latest
docker run \
  -p 5000:5000 \
  -v guidance-data:/app/data \
  --name guidance-application \
  guidance-flask
