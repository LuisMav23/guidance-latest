#!/bin/bash
set -e  # exit immediately on error

# Go back up and into guidance-client
cd guidance-client

# Build Docker image
docker build -t client .

cd ..

cd guidance-application

# Build Docker image
docker build -t server .

if ! docker volume ls --format '{{.Name}}' | grep -q '^guidance-data$'; then
    docker volume create guidance-data
fi

if ! docker network ls --format '{{.Name}}' | grep -q '^guidance-net$'; then
    docker network create guidance-net
fi

echo "Tip: to run containers on the host network (Linux only) use:"
echo "  USE_HOST_NETWORK=1 ./run.sh"