#!/usr/bin/env bash


set -a
source .config/.env
set +a


# --allow-read=.,./Source,$HOME/.deno/bin/deno    \
    # --allow-net=0.0.0.0:3000,*.myshopify.com          \

deno run                                            \
    --allow-read                                    \
    --allow-net                                     \
    --allow-env='Config,MODULES_CACHE_DIR,ALEPH_PKG_URI,DENO_DEPLOYMENT_ID,ALEPH_RELOAD_FLAG'          \
    --allow-run=$HOME/.deno/bin/deno                \
    Source/server.ts
