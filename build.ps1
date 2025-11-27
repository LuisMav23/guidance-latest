Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# Run from script directory when available
if ($PSScriptRoot) { Set-Location -Path $PSScriptRoot }

Write-Host "Building server image..."
Set-Location -Path "guidance-application"
docker build -t server .

Set-Location -Path ..

# Create docker volume if it doesn't exist
if (-not (docker volume ls --format '{{.Name}}' | Select-String -Pattern '^guidance-data$' -Quiet)) {
    Write-Host "Creating docker volume 'guidance-data'..."
    docker volume create guidance-data | Out-Null
}

# Create docker network if it doesn't exist
if (-not (docker network ls --format '{{.Name}}' | Select-String -Pattern '^guidance-net$' -Quiet)) {
    Write-Host "Creating docker network 'guidance-net'..."
    docker network create guidance-net | Out-Null
}