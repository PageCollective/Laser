#!/usr/bin/env bash


set -a
source .config/.env
set +a


tunnel="${1:-$TUNNEL}"


ngrok http              \
    --subdomain=$tunnel \
    --region=eu         \
    8000
