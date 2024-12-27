#!/bin/bash

# Check if we're using npx buf generate
if [[ "$1" == "npx" && "$2" == "buf" && "$3" == "generate" ]]; then
    echo "Using npx buf generate, using buf.gen.es.yaml"
    buf generate --template buf.gen.es.yaml
else
    echo "Using buf generate, using buf.gen.go.yaml"
    buf generate --template buf.gen.go.yaml
fi
