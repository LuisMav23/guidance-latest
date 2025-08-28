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
