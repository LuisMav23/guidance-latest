Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# Run from script directory when available
if ($PSScriptRoot) { Set-Location -Path $PSScriptRoot }

Write-Host "Stopping and removing existing containers if present..."

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

Write-Host "Done."