#!/bin/bash

# Check if we're using npx buf generate
if [[ "$1" == "npx" && "$2" == "buf" && "$3" == "generate" ]]; then
    echo "Using npx buf generate, using buf.gen.es.yaml"
    buf generate --template buf.gen.es.yaml
else
    echo "Using buf generate, using buf.gen.go.yaml"
    buf generate --template buf.gen.go.yaml
fi

# bash 
#./generate.sh npx buf generate
#./generate.sh buf generate

#npm install --save-dev @bufbuild/protoc-gen-es @connectrpc/protoc-gen-connect-es

# Install protoc-gen-go
#go install google.golang.org/protobuf/cmd/protoc-gen-go@latest

# Install protoc-gen-connect-go
#go install connectrpc.com/connect/cmd/protoc-gen-connect-go@latest
# Check if GOPATH/bin is in PATH
#echo $PATH | grep $(go env GOPATH)/bin

# If not, add it (add this to your ~/.bashrc or ~/.zshrc for permanence)
#export PATH=$PATH:$(go env GOPATH)/bin



# D:\User-Managment\connect-microservices-proto
#اجرای Next.js بدون fetch نسخه
#NEXT_TELEMETRY_DISABLED=1 pnpm dev
#setx NEXT_TELEMETRY_DISABLED 1
#pnpm dev
# خاموش کردن پروکسی در گولنق go env -w GOPROXY=off
# کاملا فقط لوکال   go env -w GOPROXY=direct
#go clean -modcache
#$env:GOPROXY = "https://goproxy.io,direct"
#$env:GOPROXY="https://proxy.golang.org,direct"
#github.com/az58740/connect-microservices-proto/golang/reservations/reservationsconnect 
  