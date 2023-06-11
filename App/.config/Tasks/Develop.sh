#!/usr/bin/env bash


set -a
source .config/.env
set +a


deno run            \
    --watch         \
    --allow-all     \
    --unstable      \
    Source/dev.ts
