# Guidance System

This repository contains a Dockerized web application composed of a client and a server. End users can build and run the application locally using the provided shell scripts.

## Prerequisites
- [Docker](https://www.docker.com/get-started) 20.10 or later
- [Git](https://git-scm.com/downloads) (optional, for cloning the repository)

## Getting Started
1. **Clone the repository**
   ```bash
   git clone https://github.com/LuisMav23/guidance-project.git
   cd guidance-project
   ```
2. **Build the Docker images**
   ```bash
   ./build.sh
   ```
   This script builds the client and server images and creates a `guidance-data` Docker volume for persistent data.
3. **Run the application**
   ```bash
   ./run.sh
   ```
   The client will be available at [http://localhost](http://localhost) and the server will listen on port `5000`.

## Stopping the Application
The `run.sh` script stops any existing containers named `client` or `guidance-application` before starting fresh ones. To manually stop the running containers later, use:
```bash
docker stop client guidance-application
```

## Data Persistence
User data is stored in the `guidance-data` Docker volume. Removing this volume will delete all stored data:
```bash
docker volume rm guidance-data
```

## Additional Information
- To rebuild the images after making changes, run `./build.sh` again.
- Ensure Docker is running before executing the scripts.

