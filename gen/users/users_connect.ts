// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts+js+dts"
// @generated from file users/users.proto (package users, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateOrganizationGroupRequest, CreateOrganizationGroupResponse, CreateOrganizationRequest, CreateOrganizationResponse, DeleteOrganizationRequest, DeleteOrganizationResponse, ListOrganizationGroupRequest, ListOrganizationGroupResponse, ListOrganizationRequest, ListOrganizationResponse, ListUsersRequest, ListUsersResponse, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, UpdateOrganizationGroupRequest, UpdateOrganizationGroupResponse, UpdateOrganizationRequest, UpdateOrganizationResponse, UpdateUserRequest, UpdateUserResponse } from "./users_pb.js";
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
     * User-related methods
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
    /**
     * Update user
     *
     * @generated from rpc users.UsersService.UpdateUser
     */
    updateUser: {
      name: "UpdateUser",
      I: UpdateUserRequest,
      O: UpdateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Organization Group related methods
     *
     * @generated from rpc users.UsersService.CreatOrganizationGroup
     */
    creatOrganizationGroup: {
      name: "CreatOrganizationGroup",
      I: CreateOrganizationGroupRequest,
      O: CreateOrganizationGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.UsersService.UpdateOrganizationGroup
     */
    updateOrganizationGroup: {
      name: "UpdateOrganizationGroup",
      I: UpdateOrganizationGroupRequest,
      O: UpdateOrganizationGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.UsersService.DeleteOrganizationGroup
     */
    deleteOrganizationGroup: {
      name: "DeleteOrganizationGroup",
      I: DeleteOrganizationRequest,
      O: DeleteOrganizationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.UsersService.ListOrganizationGroup
     */
    listOrganizationGroup: {
      name: "ListOrganizationGroup",
      I: ListOrganizationGroupRequest,
      O: ListOrganizationGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Organization  related methods
     *
     * @generated from rpc users.UsersService.CreatOrganization
     */
    creatOrganization: {
      name: "CreatOrganization",
      I: CreateOrganizationRequest,
      O: CreateOrganizationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.UsersService.UpdateOrganization
     */
    updateOrganization: {
      name: "UpdateOrganization",
      I: UpdateOrganizationRequest,
      O: UpdateOrganizationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.UsersService.DeleteOrganization
     */
    deleteOrganization: {
      name: "DeleteOrganization",
      I: DeleteOrganizationRequest,
      O: DeleteOrganizationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc users.UsersService.ListOrganization
     */
    listOrganization: {
      name: "ListOrganization",
      I: ListOrganizationRequest,
      O: ListOrganizationResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

