// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js+dts,import_extension=js,import_extension=ts"
// @generated from file users/users.proto (package users, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file users/users.proto.
 */
export const file_users_users: GenFile = /*@__PURE__*/
  fileDesc("ChF1c2Vycy91c2Vycy5wcm90bxIFdXNlcnMiMwoKUGVybWlzc2lvbhIVCg1wZXJtaXNzaW9uX2lkGAEgASgJEg4KBmFjdGlvbhgDIAEoCSI2CghSZXNvdXJjZRITCgtyZXNvdXJjZV9pZBgBIAEoCRIVCg1yZXNvdXJjZV9uYW1lGAIgASgJIooBCgRSb2xlEg8KB3JvbGVfaWQYASABKAkSEQoJcm9sZV9uYW1lGAIgASgJEiEKCHJlc291cmNlGAMgASgLMg8udXNlcnMuUmVzb3VyY2USEwoLZGVzY3JpcHRpb24YBCABKAkSJgoLcGVybWlzc2lvbnMYBSADKAsyES51c2Vycy5QZXJtaXNzaW9uIkIKEU9yZ2FuaXphdGlvbkdyb3VwEgoKAmlkGAEgASgJEgwKBG5hbWUYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkibwoQQ29udHJhY3RpbmdQYXJ0eRIXCg9vcmdhbml6YXRpb25faWQYASABKAkSGQoRb3JnYW5pemF0aW9uX25hbWUYAiABKAkSJwoFZ3JvdXAYAyABKAsyGC51c2Vycy5Pcmdhbml6YXRpb25Hcm91cCK4AQoLVXNlclByb2ZpbGUSEQoJZnVsbF9uYW1lGAEgASgJEg0KBWVtYWlsGAIgASgJEhQKDHBob25lX251bWJlchgDIAEoCRIPCgdjb3VudHJ5GAQgASgJEhAKCHByb3ZpbmNlGAUgASgJEgwKBGNpdHkYBiABKAkSFgoOYWRkcmVzc19saW5lXzEYByABKAkSFgoOYWRkcmVzc19saW5lXzIYCCABKAkSEAoIemlwX2NvZGUYCSABKAkiswIKBFVzZXISDwoHdXNlcl9pZBgBIAEoCRIjCgdwcm9maWxlGAIgASgLMhIudXNlcnMuVXNlclByb2ZpbGUSGgoFcm9sZXMYAyADKAsyCy51c2Vycy5Sb2xlEiEKBnN0YXR1cxgEIAEoDjIRLnVzZXJzLlVzZXJTdGF0dXMSLQoMb3JnYW5pemF0aW9uGAUgASgLMhcudXNlcnMuQ29udHJhY3RpbmdQYXJ0eRIQCgh1c2VybmFtZRgGIAEoCRIVCg1wYXNzd29yZF9oYXNoGAcgASgJEi4KCmNyZWF0ZWRfYXQYCCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi4KCnVwZGF0ZWRfYXQYCSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIlcKClBhZ2luYXRpb24SDAoEcGFnZRgBIAEoBRIRCglwYWdlX3NpemUYAiABKAUSDwoHc29ydF9ieRgDIAEoCRIXCg9zb3J0X2Rlc2NlbmRpbmcYBCABKAgiYgoKVXNlckZpbHRlchIPCgd1c2VyX2lkGAEgASgJEhAKCHVzZXJuYW1lGAIgASgJEhAKCHBhc3N3b3JkGAMgASgJEg0KBWVtYWlsGAQgASgJEhAKCHJvbGVfaWRzGAUgAygJIi8KClJvbGVGaWx0ZXISIQoIcmVzb3VyY2UYASABKAsyDy51c2Vycy5SZXNvdXJjZSJnCg9SZWdpc3RlclJlcXVlc3QSDAoEbmFtZRgBIAEoCRINCgVlbWFpbBgCIAEoCRITCgtwaG9uZW51bWJlchgDIAEoCRIQCgh1c2VybmFtZRgEIAEoCRIQCghwYXNzd29yZBgFIAEoCSI0ChBSZWdpc3RlclJlc3BvbnNlEg8KB3VzZXJfaWQYASABKAkSDwoHbWVzc2FnZRgCIAEoCSIyCgxMb2dpblJlcXVlc3QSEAoIdXNlcm5hbWUYASABKAkSEAoIcGFzc3dvcmQYAiABKAkiLwoNTG9naW5SZXNwb25zZRINCgV0b2tlbhgBIAEoCRIPCgdzdWNjZXNzGAIgASgIIiAKDUxvZ291dFJlcXVlc3QSDwoHdXNlcl9pZBgBIAEoCSIhCg5Mb2dvdXRSZXNwb25zZRIPCgdzdWNjZXNzGAEgASgIIiEKDkdldFVzZXJSZXF1ZXN0Eg8KB3VzZXJfaWQYASABKAkiLAoPR2V0VXNlclJlc3BvbnNlEhkKBHVzZXIYASABKAsyCy51c2Vycy5Vc2VyIj8KEVVwZGF0ZVVzZXJSZXF1ZXN0Eg8KB3VzZXJfaWQYASABKAkSGQoEdXNlchgCIAEoCzILLnVzZXJzLlVzZXIiJQoSVXBkYXRlVXNlclJlc3BvbnNlEg8KB21lc3NhZ2UYASABKAkiXAoQTGlzdFVzZXJzUmVxdWVzdBIlCgpwYWdpbmF0aW9uGAEgASgLMhEudXNlcnMuUGFnaW5hdGlvbhIhCgZmaWx0ZXIYAiABKAsyES51c2Vycy5Vc2VyRmlsdGVyIl0KEUxpc3RVc2Vyc1Jlc3BvbnNlEhoKBXVzZXJzGAEgAygLMgsudXNlcnMuVXNlchIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkSEwoLdG90YWxfY291bnQYAyABKAUqjwEKClVzZXJTdGF0dXMSGwoXVVNFUl9TVEFUVVNfVU5TUEVDSUZJRUQQABIWChJVU0VSX1NUQVRVU19BQ1RJVkUQARIYChRVU0VSX1NUQVRVU19JTkFDVElWRRACEhkKFVVTRVJfU1RBVFVTX1NVU1BFTkRFRBADEhcKE1VTRVJfU1RBVFVTX0RFTEVURUQQBDL/AgoMVXNlcnNTZXJ2aWNlEj8KDFJlZ2lzdGVyVXNlchIWLnVzZXJzLlJlZ2lzdGVyUmVxdWVzdBoXLnVzZXJzLlJlZ2lzdGVyUmVzcG9uc2USNgoJTG9naW5Vc2VyEhMudXNlcnMuTG9naW5SZXF1ZXN0GhQudXNlcnMuTG9naW5SZXNwb25zZRI5CgpMb2dvdXRVc2VyEhQudXNlcnMuTG9nb3V0UmVxdWVzdBoVLnVzZXJzLkxvZ291dFJlc3BvbnNlEjgKB0dldFVzZXISFS51c2Vycy5HZXRVc2VyUmVxdWVzdBoWLnVzZXJzLkdldFVzZXJSZXNwb25zZRJBCgpVcGRhdGVVc2VyEhgudXNlcnMuVXBkYXRlVXNlclJlcXVlc3QaGS51c2Vycy5VcGRhdGVVc2VyUmVzcG9uc2USPgoJTGlzdFVzZXJzEhcudXNlcnMuTGlzdFVzZXJzUmVxdWVzdBoYLnVzZXJzLkxpc3RVc2Vyc1Jlc3BvbnNlQkNaQWdpdGh1Yi5jb20vYXo1ODc0MC9jb25uZWN0LW1pY3Jvc2VydmljZXMtcHJvdG8vZ29sYW5nL3VzZXJzO3VzZXJzYgZwcm90bzM", [file_google_protobuf_timestamp]);

/**
 * Message for defining a permission related to user roles.
 *
 * @generated from message users.Permission
 */
export type Permission = Message<"users.Permission"> & {
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
export const PermissionSchema: GenMessage<Permission> = /*@__PURE__*/
  messageDesc(file_users_users, 0);

/**
 * Message for representing a resource (e.g., "user", "order", "payment") that roles can be associated with.
 *
 * @generated from message users.Resource
 */
export type Resource = Message<"users.Resource"> & {
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
export const ResourceSchema: GenMessage<Resource> = /*@__PURE__*/
  messageDesc(file_users_users, 1);

/**
 * Message for defining a user role.
 *
 * @generated from message users.Role
 */
export type Role = Message<"users.Role"> & {
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
export const RoleSchema: GenMessage<Role> = /*@__PURE__*/
  messageDesc(file_users_users, 2);

/**
 * Represents a group of organizations (could be departments or teams).
 *
 * @generated from message users.OrganizationGroup
 */
export type OrganizationGroup = Message<"users.OrganizationGroup"> & {
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
export const OrganizationGroupSchema: GenMessage<OrganizationGroup> = /*@__PURE__*/
  messageDesc(file_users_users, 3);

/**
 * Represents a contracting party or organization.
 *
 * @generated from message users.ContractingParty
 */
export type ContractingParty = Message<"users.ContractingParty"> & {
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
export const ContractingPartySchema: GenMessage<ContractingParty> = /*@__PURE__*/
  messageDesc(file_users_users, 4);

/**
 * Represents a user's profile, which contains personal and contact information.
 *
 * @generated from message users.UserProfile
 */
export type UserProfile = Message<"users.UserProfile"> & {
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
};

/**
 * Describes the message users.UserProfile.
 * Use `create(UserProfileSchema)` to create a new message.
 */
export const UserProfileSchema: GenMessage<UserProfile> = /*@__PURE__*/
  messageDesc(file_users_users, 5);

/**
 * Represents a user in the system, including their roles, status, and profile.
 *
 * @generated from message users.User
 */
export type User = Message<"users.User"> & {
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

  /**
   * Timestamp of when the user was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 8;
   */
  createdAt?: Timestamp;

  /**
   * Timestamp of the last update to the user's record.
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 9;
   */
  updatedAt?: Timestamp;
};

/**
 * Describes the message users.User.
 * Use `create(UserSchema)` to create a new message.
 */
export const UserSchema: GenMessage<User> = /*@__PURE__*/
  messageDesc(file_users_users, 6);

/**
 * Pagination options for listing users or roles.
 *
 * @generated from message users.Pagination
 */
export type Pagination = Message<"users.Pagination"> & {
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
export const PaginationSchema: GenMessage<Pagination> = /*@__PURE__*/
  messageDesc(file_users_users, 7);

/**
 * Filter criteria for listing users based on different parameters.
 *
 * @generated from message users.UserFilter
 */
export type UserFilter = Message<"users.UserFilter"> & {
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
   * @generated from field: repeated string role_ids = 5;
   */
  roleIds: string[];
};

/**
 * Describes the message users.UserFilter.
 * Use `create(UserFilterSchema)` to create a new message.
 */
export const UserFilterSchema: GenMessage<UserFilter> = /*@__PURE__*/
  messageDesc(file_users_users, 8);

/**
 * Filter criteria for listing roles by associated resource.
 *
 * @generated from message users.RoleFilter
 */
export type RoleFilter = Message<"users.RoleFilter"> & {
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
export const RoleFilterSchema: GenMessage<RoleFilter> = /*@__PURE__*/
  messageDesc(file_users_users, 9);

/**
 * Message for registering a new user (sign up).
 *
 * @generated from message users.RegisterRequest
 */
export type RegisterRequest = Message<"users.RegisterRequest"> & {
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
export const RegisterRequestSchema: GenMessage<RegisterRequest> = /*@__PURE__*/
  messageDesc(file_users_users, 10);

/**
 * Response after creating a new user.
 *
 * @generated from message users.RegisterResponse
 */
export type RegisterResponse = Message<"users.RegisterResponse"> & {
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
export const RegisterResponseSchema: GenMessage<RegisterResponse> = /*@__PURE__*/
  messageDesc(file_users_users, 11);

/**
 * Request to authenticate a user during login.
 *
 * @generated from message users.LoginRequest
 */
export type LoginRequest = Message<"users.LoginRequest"> & {
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
export const LoginRequestSchema: GenMessage<LoginRequest> = /*@__PURE__*/
  messageDesc(file_users_users, 12);

/**
 * Response after successful login with authentication token.
 *
 * @generated from message users.LoginResponse
 */
export type LoginResponse = Message<"users.LoginResponse"> & {
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
export const LoginResponseSchema: GenMessage<LoginResponse> = /*@__PURE__*/
  messageDesc(file_users_users, 13);

/**
 * Request to log out a user.
 *
 * @generated from message users.LogoutRequest
 */
export type LogoutRequest = Message<"users.LogoutRequest"> & {
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
export const LogoutRequestSchema: GenMessage<LogoutRequest> = /*@__PURE__*/
  messageDesc(file_users_users, 14);

/**
 * Response after logging out.
 *
 * @generated from message users.LogoutResponse
 */
export type LogoutResponse = Message<"users.LogoutResponse"> & {
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
export const LogoutResponseSchema: GenMessage<LogoutResponse> = /*@__PURE__*/
  messageDesc(file_users_users, 15);

/**
 * Request to retrieve user details by user ID.
 *
 * @generated from message users.GetUserRequest
 */
export type GetUserRequest = Message<"users.GetUserRequest"> & {
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
export const GetUserRequestSchema: GenMessage<GetUserRequest> = /*@__PURE__*/
  messageDesc(file_users_users, 16);

/**
 * Response containing the details of a user.
 *
 * @generated from message users.GetUserResponse
 */
export type GetUserResponse = Message<"users.GetUserResponse"> & {
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
export const GetUserResponseSchema: GenMessage<GetUserResponse> = /*@__PURE__*/
  messageDesc(file_users_users, 17);

/**
 * Request to update a user's details.
 *
 * @generated from message users.UpdateUserRequest
 */
export type UpdateUserRequest = Message<"users.UpdateUserRequest"> & {
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
export const UpdateUserRequestSchema: GenMessage<UpdateUserRequest> = /*@__PURE__*/
  messageDesc(file_users_users, 18);

/**
 * Response after updating a user's details.
 *
 * @generated from message users.UpdateUserResponse
 */
export type UpdateUserResponse = Message<"users.UpdateUserResponse"> & {
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
export const UpdateUserResponseSchema: GenMessage<UpdateUserResponse> = /*@__PURE__*/
  messageDesc(file_users_users, 19);

/**
 * Request to list users with pagination and filtering.
 *
 * @generated from message users.ListUsersRequest
 */
export type ListUsersRequest = Message<"users.ListUsersRequest"> & {
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
export const ListUsersRequestSchema: GenMessage<ListUsersRequest> = /*@__PURE__*/
  messageDesc(file_users_users, 20);

/**
 * Response for listing users.
 *
 * @generated from message users.ListUsersResponse
 */
export type ListUsersResponse = Message<"users.ListUsersResponse"> & {
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
   * @generated from field: int32 total_count = 3;
   */
  totalCount: number;
};

/**
 * Describes the message users.ListUsersResponse.
 * Use `create(ListUsersResponseSchema)` to create a new message.
 */
export const ListUsersResponseSchema: GenMessage<ListUsersResponse> = /*@__PURE__*/
  messageDesc(file_users_users, 21);

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
export const UserStatusSchema: GenEnum<UserStatus> = /*@__PURE__*/
  enumDesc(file_users_users, 0);

/**
 * Service for managing users (authentication, user details, and user roles).
 *
 * @generated from service users.UsersService
 */
export const UsersService: GenService<{
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
   * Log a user out.
   *
   * @generated from rpc users.UsersService.LogoutUser
   */
  logoutUser: {
    methodKind: "unary";
    input: typeof LogoutRequestSchema;
    output: typeof LogoutResponseSchema;
  },
  /**
   * User management methods
   *
   * Retrieve user details by ID.
   *
   * @generated from rpc users.UsersService.GetUser
   */
  getUser: {
    methodKind: "unary";
    input: typeof GetUserRequestSchema;
    output: typeof GetUserResponseSchema;
  },
  /**
   * Update a user's details.
   *
   * @generated from rpc users.UsersService.UpdateUser
   */
  updateUser: {
    methodKind: "unary";
    input: typeof UpdateUserRequestSchema;
    output: typeof UpdateUserResponseSchema;
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
}> = /*@__PURE__*/
  serviceDesc(file_users_users, 0);

