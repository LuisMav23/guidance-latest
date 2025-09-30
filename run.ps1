Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# Run from script directory when available
if ($PSScriptRoot) { Set-Location -Path $PSScriptRoot }

Write-Host "Stopping and removing existing containers if present..."

if (docker ps -a --format '{{.Names}}' | Select-String -Pattern '^client$' -Quiet) {
    Write-Host "Stopping client..."
    docker stop client | Out-Null
    Write-Host "Removing client..."
    docker rm client | Out-Null
}

if (docker ps -a --format '{{.Names}}' | Select-String -Pattern '^server$' -Quiet) {
    Write-Host "Stopping server..."
    docker stop server | Out-Null
    Write-Host "Removing server..."
    docker rm server | Out-Null
}

Write-Host "Starting server container..."
docker run -d `
  --name server `
  --restart=unless-stopped `
  --network guidance-net `
  -p 5000:5000 `
  -v guidance-data:/app/data `
  server | Out-Null

Write-Host "Starting client container..."
docker run -d `
  --name client `
  --restart=unless-stopped `
  --network guidance-net `
  -p 3000:3000 `
  client:latest | Out-Null

Write-Host "Done."