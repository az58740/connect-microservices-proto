// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js+dts,import_extension=js,import_extension=ts"
// @generated from file users/users.proto (package users, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file users/users.proto.
 */
export declare const file_users_users: GenFile;

/**
 * Message for defining a permission related to user roles.
 *
 * @generated from message users.Permission
 */
export declare type Permission = Message<"users.Permission"> & {
  /**
   * Unique identifier for the permission.
   *
   * @generated from field: string permission_id = 1;
   */
  permissionId: string;

  /**
   * The action that this permission grants (e.g., "create", "read", "update", "delete").
   *
   * @generated from field: string action = 3;
   */
  action: string;
};

/**
 * Describes the message users.Permission.
 * Use `create(PermissionSchema)` to create a new message.
 */
export declare const PermissionSchema: GenMessage<Permission>;

/**
 * Message for representing a resource (e.g., "user", "order", "payment") that roles can be associated with.
 *
 * @generated from message users.Resource
 */
export declare type Resource = Message<"users.Resource"> & {
  /**
   * Unique identifier for the resource.
   *
   * @generated from field: string resource_id = 1;
   */
  resourceId: string;

  /**
   * Name of the resource.
   *
   * @generated from field: string resource_name = 2;
   */
  resourceName: string;
};

/**
 * Describes the message users.Resource.
 * Use `create(ResourceSchema)` to create a new message.
 */
export declare const ResourceSchema: GenMessage<Resource>;

/**
 * Message for defining a user role.
 *
 * @generated from message users.Role
 */
export declare type Role = Message<"users.Role"> & {
  /**
   * Unique identifier for the user role.
   *
   * @generated from field: string role_id = 1;
   */
  roleId: string;

  /**
   * Name of the role (e.g., "Admin", "User").
   *
   * @generated from field: string role_name = 2;
   */
  roleName: string;

  /**
   * The resource that the role applies to (e.g., "user", "order").
   *
   * @generated from field: users.Resource resource = 3;
   */
  resource?: Resource;

  /**
   * Description of the role and its responsibilities.
   *
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * List of permissions associated with this role.
   *
   * @generated from field: repeated users.Permission permissions = 5;
   */
  permissions: Permission[];
};

/**
 * Describes the message users.Role.
 * Use `create(RoleSchema)` to create a new message.
 */
export declare const RoleSchema: GenMessage<Role>;

/**
 * Represents a group of organizations (could be departments or teams).
 *
 * @generated from message users.OrganizationGroup
 */
export declare type OrganizationGroup = Message<"users.OrganizationGroup"> & {
  /**
   * Unique identifier for the group.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Name of the organization group.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * Description of the organization group.
   *
   * @generated from field: string description = 3;
   */
  description: string;
};

/**
 * Describes the message users.OrganizationGroup.
 * Use `create(OrganizationGroupSchema)` to create a new message.
 */
export declare const OrganizationGroupSchema: GenMessage<OrganizationGroup>;

/**
 * Represents a contracting party or organization.
 *
 * @generated from message users.ContractingParty
 */
export declare type ContractingParty = Message<"users.ContractingParty"> & {
  /**
   * Unique identifier for the organization.
   *
   * @generated from field: string organization_id = 1;
   */
  organizationId: string;

  /**
   * Name of the organization.
   *
   * @generated from field: string organization_name = 2;
   */
  organizationName: string;

  /**
   * Group to which the organization belongs.
   *
   * @generated from field: users.OrganizationGroup group = 3;
   */
  group?: OrganizationGroup;
};

/**
 * Describes the message users.ContractingParty.
 * Use `create(ContractingPartySchema)` to create a new message.
 */
export declare const ContractingPartySchema: GenMessage<ContractingParty>;

/**
 * Represents a user's profile, which contains personal and contact information.
 *
 * @generated from message users.UserProfile
 */
export declare type UserProfile = Message<"users.UserProfile"> & {
  /**
   * Full name of the user (first and last name).
   *
   * @generated from field: string full_name = 1;
   */
  fullName: string;

  /**
   * Email address of the user.
   *
   * @generated from field: string email = 2;
   */
  email: string;

  /**
   * Phone number of the user.
   *
   * @generated from field: string phone_number = 3;
   */
  phoneNumber: string;

  /**
   * Country where the user resides.
   *
   * @generated from field: string country = 4;
   */
  country: string;

  /**
   * Province or state of the user.
   *
   * @generated from field: string province = 5;
   */
  province: string;

  /**
   * City where the user resides.
   *
   * @generated from field: string city = 6;
   */
  city: string;

  /**
   * First line of the user's address.
   *
   * @generated from field: string address_line_1 = 7;
   */
  addressLine1: string;

  /**
   * Second line of the user's address (optional).
   *
   * @generated from field: string address_line_2 = 8;
   */
  addressLine2: string;

  /**
   * Zip or postal code of the user's address.
   *
   * @generated from field: string zip_code = 9;
   */
  zipCode: string;

  /**
   * Gender of the user
   *
   * @generated from field: string gender = 10;
   */
  gender: string;
};

/**
 * Describes the message users.UserProfile.
 * Use `create(UserProfileSchema)` to create a new message.
 */
export declare const UserProfileSchema: GenMessage<UserProfile>;

/**
 * Represents a user in the system, including their roles, status, and profile.
 *
 * @generated from message users.User
 */
export declare type User = Message<"users.User"> & {
  /**
   * Unique identifier for the user.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * The user's profile details.
   *
   * @generated from field: users.UserProfile profile = 2;
   */
  profile?: UserProfile;

  /**
   * List of roles assigned to the user.
   *
   * @generated from field: repeated users.Role roles = 3;
   */
  roles: Role[];

  /**
   * Current status of the user (active, inactive, etc.).
   *
   * @generated from field: users.UserStatus status = 4;
   */
  status: UserStatus;

  /**
   * Organization or contracting party the user belongs to.
   *
   * @generated from field: users.ContractingParty organization = 5;
   */
  organization?: ContractingParty;

  /**
   * Username (could be the email address).
   *
   * @generated from field: string username = 6;
   */
  username: string;

  /**
   * The hashed password (for security).
   *
   * @generated from field: string password_hash = 7;
   */
  passwordHash: string;
};

/**
 * Describes the message users.User.
 * Use `create(UserSchema)` to create a new message.
 */
export declare const UserSchema: GenMessage<User>;

/**
 * Pagination options for listing users or roles.
 *
 * @generated from message users.Pagination
 */
export declare type Pagination = Message<"users.Pagination"> & {
  /**
   * Page number (starting from 1).
   *
   * @generated from field: int32 page = 1;
   */
  page: number;

  /**
   * Number of items to return per page.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Field by which to sort the results (e.g., "username").
   *
   * @generated from field: string sort_by = 3;
   */
  sortBy: string;

  /**
   * Whether to sort the results in descending order.
   *
   * @generated from field: bool sort_descending = 4;
   */
  sortDescending: boolean;
};

/**
 * Describes the message users.Pagination.
 * Use `create(PaginationSchema)` to create a new message.
 */
export declare const PaginationSchema: GenMessage<Pagination>;

/**
 * Filter criteria for listing users based on different parameters.
 *
 * @generated from message users.UserFilter
 */
export declare type UserFilter = Message<"users.UserFilter"> & {
  /**
   * Filter by user ID.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * Filter by username (e.g., login name).
   *
   * @generated from field: string username = 2;
   */
  username: string;

  /**
   * Filter by password (not recommended for real-world use).
   *
   * @generated from field: string password = 3;
   */
  password: string;

  /**
   * Filter by email address.
   *
   * @generated from field: string email = 4;
   */
  email: string;

  /**
   * Filter by assigned role IDs.
   *
   * @generated from field: string role_ids = 5;
   */
  roleIds: string;

  /**
   * Filter by organization ID.
   *
   * @generated from field: string organization_id = 6;
   */
  organizationId: string;

  /**
   * Filter by user statuse.
   *
   * @generated from field: string user_statuse = 7;
   */
  userStatuse: string;
};

/**
 * Describes the message users.UserFilter.
 * Use `create(UserFilterSchema)` to create a new message.
 */
export declare const UserFilterSchema: GenMessage<UserFilter>;

/**
 * Filter criteria for listing roles by associated resource.
 *
 * @generated from message users.RoleFilter
 */
export declare type RoleFilter = Message<"users.RoleFilter"> & {
  /**
   * Filter by resource associated with the role (e.g., "user", "order").
   *
   * @generated from field: users.Resource resource = 1;
   */
  resource?: Resource;
};

/**
 * Describes the message users.RoleFilter.
 * Use `create(RoleFilterSchema)` to create a new message.
 */
export declare const RoleFilterSchema: GenMessage<RoleFilter>;

/**
 * Message for registering a new user (sign up).
 *
 * @generated from message users.RegisterRequest
 */
export declare type RegisterRequest = Message<"users.RegisterRequest"> & {
  /**
   * Full name of the user.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Email address of the user.
   *
   * @generated from field: string email = 2;
   */
  email: string;

  /**
   * User's phone number.
   *
   * @generated from field: string phonenumber = 3;
   */
  phonenumber: string;

  /**
   * Chosen username for the user.
   *
   * @generated from field: string username = 4;
   */
  username: string;

  /**
   * Plaintext password (which will be hashed before storing).
   *
   * @generated from field: string password = 5;
   */
  password: string;
};

/**
 * Describes the message users.RegisterRequest.
 * Use `create(RegisterRequestSchema)` to create a new message.
 */
export declare const RegisterRequestSchema: GenMessage<RegisterRequest>;

/**
 * Response after creating a new user.
 *
 * @generated from message users.RegisterResponse
 */
export declare type RegisterResponse = Message<"users.RegisterResponse"> & {
  /**
   * ID of the newly created user.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * Confirmation message.
   *
   * @generated from field: string message = 2;
   */
  message: string;
};

/**
 * Describes the message users.RegisterResponse.
 * Use `create(RegisterResponseSchema)` to create a new message.
 */
export declare const RegisterResponseSchema: GenMessage<RegisterResponse>;

/**
 * Request to authenticate a user during login.
 *
 * @generated from message users.LoginRequest
 */
export declare type LoginRequest = Message<"users.LoginRequest"> & {
  /**
   * Username (email or username) to login.
   *
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * Password to authenticate the user.
   *
   * @generated from field: string password = 2;
   */
  password: string;
};

/**
 * Describes the message users.LoginRequest.
 * Use `create(LoginRequestSchema)` to create a new message.
 */
export declare const LoginRequestSchema: GenMessage<LoginRequest>;

/**
 * Response after successful login with authentication token.
 *
 * @generated from message users.LoginResponse
 */
export declare type LoginResponse = Message<"users.LoginResponse"> & {
  /**
   * Authentication token that can be used for subsequent requests.
   *
   * @generated from field: string token = 1;
   */
  token: string;

  /**
   * Whether the login was successful or not.
   *
   * @generated from field: bool success = 2;
   */
  success: boolean;
};

/**
 * Describes the message users.LoginResponse.
 * Use `create(LoginResponseSchema)` to create a new message.
 */
export declare const LoginResponseSchema: GenMessage<LoginResponse>;

/**
 * Request to log out a user.
 *
 * @generated from message users.LogoutRequest
 */
export declare type LogoutRequest = Message<"users.LogoutRequest"> & {
  /**
   * ID of the user who is logging out.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;
};

/**
 * Describes the message users.LogoutRequest.
 * Use `create(LogoutRequestSchema)` to create a new message.
 */
export declare const LogoutRequestSchema: GenMessage<LogoutRequest>;

/**
 * Response after logging out.
 *
 * @generated from message users.LogoutResponse
 */
export declare type LogoutResponse = Message<"users.LogoutResponse"> & {
  /**
   * Whether the logout operation was successful.
   *
   * @generated from field: bool success = 1;
   */
  success: boolean;
};

/**
 * Describes the message users.LogoutResponse.
 * Use `create(LogoutResponseSchema)` to create a new message.
 */
export declare const LogoutResponseSchema: GenMessage<LogoutResponse>;

/**
 * Request to retrieve user details by user ID.
 *
 * @generated from message users.GetUserRequest
 */
export declare type GetUserRequest = Message<"users.GetUserRequest"> & {
  /**
   * ID of the user to retrieve.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;
};

/**
 * Describes the message users.GetUserRequest.
 * Use `create(GetUserRequestSchema)` to create a new message.
 */
export declare const GetUserRequestSchema: GenMessage<GetUserRequest>;

/**
 * Response containing the details of a user.
 *
 * @generated from message users.GetUserResponse
 */
export declare type GetUserResponse = Message<"users.GetUserResponse"> & {
  /**
   * The user information retrieved from the system.
   *
   * @generated from field: users.User user = 1;
   */
  user?: User;
};

/**
 * Describes the message users.GetUserResponse.
 * Use `create(GetUserResponseSchema)` to create a new message.
 */
export declare const GetUserResponseSchema: GenMessage<GetUserResponse>;

/**
 * Request to update a user's details.
 *
 * @generated from message users.UpdateUserRequest
 */
export declare type UpdateUserRequest = Message<"users.UpdateUserRequest"> & {
  /**
   * ID of the user to update.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * Updated user information.
   *
   * @generated from field: users.User user = 2;
   */
  user?: User;
};

/**
 * Describes the message users.UpdateUserRequest.
 * Use `create(UpdateUserRequestSchema)` to create a new message.
 */
export declare const UpdateUserRequestSchema: GenMessage<UpdateUserRequest>;

/**
 * Response after updating a user's details.
 *
 * @generated from message users.UpdateUserResponse
 */
export declare type UpdateUserResponse = Message<"users.UpdateUserResponse"> & {
  /**
   * Confirmation message.
   *
   * @generated from field: string message = 1;
   */
  message: string;
};

/**
 * Describes the message users.UpdateUserResponse.
 * Use `create(UpdateUserResponseSchema)` to create a new message.
 */
export declare const UpdateUserResponseSchema: GenMessage<UpdateUserResponse>;

/**
 * Request to list users with pagination and filtering.
 *
 * @generated from message users.ListUsersRequest
 */
export declare type ListUsersRequest = Message<"users.ListUsersRequest"> & {
  /**
   * Pagination options.
   *
   * @generated from field: users.Pagination pagination = 1;
   */
  pagination?: Pagination;

  /**
   * Filter criteria to apply.
   *
   * @generated from field: users.UserFilter filter = 2;
   */
  filter?: UserFilter;
};

/**
 * Describes the message users.ListUsersRequest.
 * Use `create(ListUsersRequestSchema)` to create a new message.
 */
export declare const ListUsersRequestSchema: GenMessage<ListUsersRequest>;

/**
 * Response for listing users.
 *
 * @generated from message users.ListUsersResponse
 */
export declare type ListUsersResponse = Message<"users.ListUsersResponse"> & {
  /**
   * List of users retrieved.
   *
   * @generated from field: repeated users.User users = 1;
   */
  users: User[];

  /**
   * Token for the next page of results (optional).
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * Total number of users in the system.
   *
   * @generated from field: int32 totalPages = 3;
   */
  totalPages: number;
};

/**
 * Describes the message users.ListUsersResponse.
 * Use `create(ListUsersResponseSchema)` to create a new message.
 */
export declare const ListUsersResponseSchema: GenMessage<ListUsersResponse>;

/**
 * Enum for user status, which can be one of several states for the user account.
 *
 * @generated from enum users.UserStatus
 */
export enum UserStatus {
  /**
   * Default value, used when no status is provided.
   *
   * @generated from enum value: USER_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * User is active and can log in.
   *
   * @generated from enum value: USER_STATUS_ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * User has been deactivated and cannot log in.
   *
   * @generated from enum value: USER_STATUS_INACTIVE = 2;
   */
  INACTIVE = 2,

  /**
   * User is temporarily suspended.
   *
   * @generated from enum value: USER_STATUS_SUSPENDED = 3;
   */
  SUSPENDED = 3,

  /**
   * User account has been deleted.
   *
   * @generated from enum value: USER_STATUS_DELETED = 4;
   */
  DELETED = 4,
}

/**
 * Describes the enum users.UserStatus.
 */
export declare const UserStatusSchema: GenEnum<UserStatus>;

/**
 * Service for managing users (authentication, user details, and user roles).
 *
 * @generated from service users.UsersService
 */
export declare const UsersService: GenService<{
  /**
   * Auth-related methods
   *
   * Register a new user.
   *
   * @generated from rpc users.UsersService.RegisterUser
   */
  registerUser: {
    methodKind: "unary";
    input: typeof RegisterRequestSchema;
    output: typeof RegisterResponseSchema;
  },
  /**
   * Log a user in.
   *
   * @generated from rpc users.UsersService.LoginUser
   */
  loginUser: {
    methodKind: "unary";
    input: typeof LoginRequestSchema;
    output: typeof LoginResponseSchema;
  },
  /**
   * List users with pagination and filtering.
   *
   * @generated from rpc users.UsersService.ListUsers
   */
  listUsers: {
    methodKind: "unary";
    input: typeof ListUsersRequestSchema;
    output: typeof ListUsersResponseSchema;
  },
}>;

