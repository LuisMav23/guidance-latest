#!/bin/bash
set -e  # exit if any command fails

if docker ps -a --format '{{.Names}}' | grep -Eq '^client$'; then
    docker stop client
    docker rm client
fi

# Start the client container
docker run --name client -d -p 80:3000 client:latest

# Start the Flask backend
cd guidance-application
source venv/bin/activate
python app.py
