module github.com/az58740/connect-microservices-proto

go 1.24.0

require google.golang.org/protobuf v1.36.11

require connectrpc.com/connect v1.19.2 // indirect

tool (
	connectrpc.com/connect/cmd/protoc-gen-connect-go
	google.golang.org/protobuf/cmd/protoc-gen-go
)
