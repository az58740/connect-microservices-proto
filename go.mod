module github.com/az58740/connect-microservices-proto

go 1.26.0

require (
	google.golang.org/genproto v0.0.0-20260723215102-3fe39f3c1018
	google.golang.org/protobuf v1.36.11
)

require connectrpc.com/connect v1.19.2

tool (
	connectrpc.com/connect/cmd/protoc-gen-connect-go
	google.golang.org/protobuf/cmd/protoc-gen-go
)
