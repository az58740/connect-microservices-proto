// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts+js+dts"
// @generated from file users/users.proto (package users, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ListUsersRequest, ListUsersResponse, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "./users_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Service for managing users (authentication, user details, and user roles).
 *
 * @generated from service users.UsersService
 */
export const UsersService = {
  typeName: "users.UsersService",
  methods: {
    /**
     * Auth-related methods
     *
     * Register a new user.
     *
     * @generated from rpc users.UsersService.RegisterUser
     */
    registerUser: {
      name: "RegisterUser",
      I: RegisterRequest,
      O: RegisterResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Log a user in.
     *
     * @generated from rpc users.UsersService.LoginUser
     */
    loginUser: {
      name: "LoginUser",
      I: LoginRequest,
      O: LoginResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List users with pagination and filtering.
     *
     * @generated from rpc users.UsersService.ListUsers
     */
    listUsers: {
      name: "ListUsers",
      I: ListUsersRequest,
      O: ListUsersResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

