// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: users/users.proto

package usersconnect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	users "github.com/az58740/connect-microservices-proto/golang/users"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect.IsAtLeastVersion1_13_0

const (
	// UsersServiceName is the fully-qualified name of the UsersService service.
	UsersServiceName = "users.UsersService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// UsersServiceGetUserProcedure is the fully-qualified name of the UsersService's GetUser RPC.
	UsersServiceGetUserProcedure = "/users.UsersService/GetUser"
	// UsersServiceCreateUserProcedure is the fully-qualified name of the UsersService's CreateUser RPC.
	UsersServiceCreateUserProcedure = "/users.UsersService/CreateUser"
	// UsersServiceUpdateUserProcedure is the fully-qualified name of the UsersService's UpdateUser RPC.
	UsersServiceUpdateUserProcedure = "/users.UsersService/UpdateUser"
	// UsersServiceUsersListProcedure is the fully-qualified name of the UsersService's UsersList RPC.
	UsersServiceUsersListProcedure = "/users.UsersService/UsersList"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	usersServiceServiceDescriptor          = users.File_users_users_proto.Services().ByName("UsersService")
	usersServiceGetUserMethodDescriptor    = usersServiceServiceDescriptor.Methods().ByName("GetUser")
	usersServiceCreateUserMethodDescriptor = usersServiceServiceDescriptor.Methods().ByName("CreateUser")
	usersServiceUpdateUserMethodDescriptor = usersServiceServiceDescriptor.Methods().ByName("UpdateUser")
	usersServiceUsersListMethodDescriptor  = usersServiceServiceDescriptor.Methods().ByName("UsersList")
)

// UsersServiceClient is a client for the users.UsersService service.
type UsersServiceClient interface {
	GetUser(context.Context, *connect.Request[users.GetUserRequest]) (*connect.Response[users.GetUserResponse], error)
	CreateUser(context.Context) *connect.ClientStreamForClient[users.CreateUserRequest, users.CreateUserResponse]
	UpdateUser(context.Context) *connect.ClientStreamForClient[users.UpdateUserRequest, users.UpdateUserResponse]
	UsersList(context.Context, *connect.Request[users.UsersListRequest]) (*connect.ServerStreamForClient[users.UsersListResponse], error)
}

// NewUsersServiceClient constructs a client for the users.UsersService service. By default, it uses
// the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewUsersServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) UsersServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &usersServiceClient{
		getUser: connect.NewClient[users.GetUserRequest, users.GetUserResponse](
			httpClient,
			baseURL+UsersServiceGetUserProcedure,
			connect.WithSchema(usersServiceGetUserMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		createUser: connect.NewClient[users.CreateUserRequest, users.CreateUserResponse](
			httpClient,
			baseURL+UsersServiceCreateUserProcedure,
			connect.WithSchema(usersServiceCreateUserMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		updateUser: connect.NewClient[users.UpdateUserRequest, users.UpdateUserResponse](
			httpClient,
			baseURL+UsersServiceUpdateUserProcedure,
			connect.WithSchema(usersServiceUpdateUserMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		usersList: connect.NewClient[users.UsersListRequest, users.UsersListResponse](
			httpClient,
			baseURL+UsersServiceUsersListProcedure,
			connect.WithSchema(usersServiceUsersListMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// usersServiceClient implements UsersServiceClient.
type usersServiceClient struct {
	getUser    *connect.Client[users.GetUserRequest, users.GetUserResponse]
	createUser *connect.Client[users.CreateUserRequest, users.CreateUserResponse]
	updateUser *connect.Client[users.UpdateUserRequest, users.UpdateUserResponse]
	usersList  *connect.Client[users.UsersListRequest, users.UsersListResponse]
}

// GetUser calls users.UsersService.GetUser.
func (c *usersServiceClient) GetUser(ctx context.Context, req *connect.Request[users.GetUserRequest]) (*connect.Response[users.GetUserResponse], error) {
	return c.getUser.CallUnary(ctx, req)
}

// CreateUser calls users.UsersService.CreateUser.
func (c *usersServiceClient) CreateUser(ctx context.Context) *connect.ClientStreamForClient[users.CreateUserRequest, users.CreateUserResponse] {
	return c.createUser.CallClientStream(ctx)
}

// UpdateUser calls users.UsersService.UpdateUser.
func (c *usersServiceClient) UpdateUser(ctx context.Context) *connect.ClientStreamForClient[users.UpdateUserRequest, users.UpdateUserResponse] {
	return c.updateUser.CallClientStream(ctx)
}

// UsersList calls users.UsersService.UsersList.
func (c *usersServiceClient) UsersList(ctx context.Context, req *connect.Request[users.UsersListRequest]) (*connect.ServerStreamForClient[users.UsersListResponse], error) {
	return c.usersList.CallServerStream(ctx, req)
}

// UsersServiceHandler is an implementation of the users.UsersService service.
type UsersServiceHandler interface {
	GetUser(context.Context, *connect.Request[users.GetUserRequest]) (*connect.Response[users.GetUserResponse], error)
	CreateUser(context.Context, *connect.ClientStream[users.CreateUserRequest]) (*connect.Response[users.CreateUserResponse], error)
	UpdateUser(context.Context, *connect.ClientStream[users.UpdateUserRequest]) (*connect.Response[users.UpdateUserResponse], error)
	UsersList(context.Context, *connect.Request[users.UsersListRequest], *connect.ServerStream[users.UsersListResponse]) error
}

// NewUsersServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewUsersServiceHandler(svc UsersServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	usersServiceGetUserHandler := connect.NewUnaryHandler(
		UsersServiceGetUserProcedure,
		svc.GetUser,
		connect.WithSchema(usersServiceGetUserMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	usersServiceCreateUserHandler := connect.NewClientStreamHandler(
		UsersServiceCreateUserProcedure,
		svc.CreateUser,
		connect.WithSchema(usersServiceCreateUserMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	usersServiceUpdateUserHandler := connect.NewClientStreamHandler(
		UsersServiceUpdateUserProcedure,
		svc.UpdateUser,
		connect.WithSchema(usersServiceUpdateUserMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	usersServiceUsersListHandler := connect.NewServerStreamHandler(
		UsersServiceUsersListProcedure,
		svc.UsersList,
		connect.WithSchema(usersServiceUsersListMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/users.UsersService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case UsersServiceGetUserProcedure:
			usersServiceGetUserHandler.ServeHTTP(w, r)
		case UsersServiceCreateUserProcedure:
			usersServiceCreateUserHandler.ServeHTTP(w, r)
		case UsersServiceUpdateUserProcedure:
			usersServiceUpdateUserHandler.ServeHTTP(w, r)
		case UsersServiceUsersListProcedure:
			usersServiceUsersListHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedUsersServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedUsersServiceHandler struct{}

func (UnimplementedUsersServiceHandler) GetUser(context.Context, *connect.Request[users.GetUserRequest]) (*connect.Response[users.GetUserResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("users.UsersService.GetUser is not implemented"))
}

func (UnimplementedUsersServiceHandler) CreateUser(context.Context, *connect.ClientStream[users.CreateUserRequest]) (*connect.Response[users.CreateUserResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("users.UsersService.CreateUser is not implemented"))
}

func (UnimplementedUsersServiceHandler) UpdateUser(context.Context, *connect.ClientStream[users.UpdateUserRequest]) (*connect.Response[users.UpdateUserResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("users.UsersService.UpdateUser is not implemented"))
}

func (UnimplementedUsersServiceHandler) UsersList(context.Context, *connect.Request[users.UsersListRequest], *connect.ServerStream[users.UsersListResponse]) error {
	return connect.NewError(connect.CodeUnimplemented, errors.New("users.UsersService.UsersList is not implemented"))
}