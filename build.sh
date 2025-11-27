#!/bin/bash
set -e  # exit immediately on error

cd guidance-application

# Build Docker image
docker build -t server .

if ! docker volume ls --format '{{.Name}}' | grep -q '^guidance-data$'; then
    docker volume create guidance-data
fi