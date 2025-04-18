// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js+dts,import_extension=js,import_extension=ts"
// @generated from file users/users.proto (package users, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Timestamp } from "@bufbuild/protobuf/wkt";

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
   * @generated from field: string action = 2;
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

  /**
   * Current status of the contract party group (active, inactive, etc.).
   *
   * @generated from field: users.UserStatus status = 4;
   */
  status: UserStatus;
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
   * Description of the organization .
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Group to which the organization belongs.
   *
   * @generated from field: users.OrganizationGroup group = 4;
   */
  group?: OrganizationGroup;

  /**
   * Type of organization
   *
   * @generated from field: users.OrganizationType type = 5;
   */
  type: OrganizationType;

  /**
   * Current status of the contract party (active, inactive, etc.).
   *
   * @generated from field: users.UserStatus status = 6;
   */
  status: UserStatus;
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
   * Unique identifier for the user.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * Full name of the user (first and last name).
   *
   * @generated from field: string full_name = 2;
   */
  fullName: string;

  /**
   * Email address of the user.
   *
   * @generated from field: string email = 3;
   */
  email: string;

  /**
   * Phone number of the user.
   *
   * @generated from field: string phone_number = 4;
   */
  phoneNumber: string;

  /**
   * Country where the user resides.
   *
   * @generated from field: string country = 5;
   */
  country: string;

  /**
   * Province or state of the user.
   *
   * @generated from field: string province = 6;
   */
  province: string;

  /**
   * City where the user resides.
   *
   * @generated from field: string city = 7;
   */
  city: string;

  /**
   * First line of the user's address.
   *
   * @generated from field: string address_line_1 = 8;
   */
  addressLine1: string;

  /**
   * Second line of the user's address (optional).
   *
   * @generated from field: string address_line_2 = 9;
   */
  addressLine2: string;

  /**
   * Zip or postal code of the user's address.
   *
   * @generated from field: string zip_code = 10;
   */
  zipCode: string;

  /**
   * User image address
   *
   * @generated from field: string img = 11;
   */
  img: string;
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

  /**
   * The user type.
   *
   * @generated from field: users.UserType type = 8;
   */
  type: UserType;

  /**
   * a small Description about
   *
   * @generated from field: string description = 9;
   */
  description: string;

  /**
   * Date and time when the user was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 10;
   */
  createdAt?: Timestamp;

  /**
   * Date and time when the user was deleted.
   *
   * @generated from field: google.protobuf.Timestamp deleted_at = 11;
   */
  deletedAt?: Timestamp;

  /**
   * User Gender
   *
   * @generated from field: users.UserGender gender = 12;
   */
  gender: UserGender;
};

/**
 * Describes the message users.User.
 * Use `create(UserSchema)` to create a new message.
 */
export declare const UserSchema: GenMessage<User>;

/**
 * Represents a geolocation in system maby country,province or city
 *
 * @generated from message users.Geolocation
 */
export declare type Geolocation = Message<"users.Geolocation"> & {
  /**
   * Geolocation enghlish name
   *
   * @generated from field: string en = 1;
   */
  en: string;

  /**
   * Geolocation farsi name
   *
   * @generated from field: string fa = 2;
   */
  fa: string;
};

/**
 * Describes the message users.Geolocation.
 * Use `create(GeolocationSchema)` to create a new message.
 */
export declare const GeolocationSchema: GenMessage<Geolocation>;

/**
 * @generated from message users.GeolocationFilter
 */
export declare type GeolocationFilter = Message<"users.GeolocationFilter"> & {
  /**
   * @generated from field: string en = 1;
   */
  en: string;
};

/**
 * Describes the message users.GeolocationFilter.
 * Use `create(GeolocationFilterSchema)` to create a new message.
 */
export declare const GeolocationFilterSchema: GenMessage<GeolocationFilter>;

/**
 * @generated from message users.GetGeolocationRequest
 */
export declare type GetGeolocationRequest = Message<"users.GetGeolocationRequest"> & {
  /**
   * @generated from field: users.GeolocationFilter filter = 1;
   */
  filter?: GeolocationFilter;
};

/**
 * Describes the message users.GetGeolocationRequest.
 * Use `create(GetGeolocationRequestSchema)` to create a new message.
 */
export declare const GetGeolocationRequestSchema: GenMessage<GetGeolocationRequest>;

/**
 * @generated from message users.GetGeolocationResponse
 */
export declare type GetGeolocationResponse = Message<"users.GetGeolocationResponse"> & {
  /**
   * @generated from field: repeated users.Geolocation locations = 1;
   */
  locations: Geolocation[];
};

/**
 * Describes the message users.GetGeolocationResponse.
 * Use `create(GetGeolocationResponseSchema)` to create a new message.
 */
export declare const GetGeolocationResponseSchema: GenMessage<GetGeolocationResponse>;

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
   * @generated from field: optional string sort_by = 3;
   */
  sortBy?: string;

  /**
   * Whether to sort the results in descending order.
   *
   * @generated from field: optional bool sort_descending = 4;
   */
  sortDescending?: boolean;
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
   * Filter by email address.
   *
   * @generated from field: string email = 3;
   */
  email: string;

  /**
   * Filter by assigned role IDs.
   *
   * @generated from field: string role_ids = 4;
   */
  roleIds: string;

  /**
   * Filter by organization ID.
   *
   * @generated from field: string organization_id = 5;
   */
  organizationId: string;

  /**
   * Filter by user statuse.
   *
   * @generated from field: string user_statuse = 6;
   */
  userStatuse: string;

  /**
   * Filter by geolocation country
   *
   * @generated from field: string country = 7;
   */
  country: string;

  /**
   * Filter by geolocation  province
   *
   * @generated from field: string province = 8;
   */
  province: string;

  /**
   * Filter by geolocation  city
   *
   * @generated from field: string city = 9;
   */
  city: string;

  /**
   * Filter by user type
   *
   * @generated from field: string user_type = 10;
   */
  userType: string;

  /**
   * Filter  by organization group 
   *
   * @generated from field: string group_id = 11;
   */
  groupId: string;
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
 * Filter criteria for listing Organization Group by associated resource.
 *
 * @generated from message users.OrganizationGroupFilter
 */
export declare type OrganizationGroupFilter = Message<"users.OrganizationGroupFilter"> & {
  /**
   * @generated from field: optional string group_id = 1;
   */
  groupId?: string;

  /**
   * @generated from field: optional string group_name = 2;
   */
  groupName?: string;

  /**
   * Filter by  statuse.
   *
   * @generated from field: optional string group_statuse = 3;
   */
  groupStatuse?: string;
};

/**
 * Describes the message users.OrganizationGroupFilter.
 * Use `create(OrganizationGroupFilterSchema)` to create a new message.
 */
export declare const OrganizationGroupFilterSchema: GenMessage<OrganizationGroupFilter>;

/**
 * Filter criteria for listing Contract Party by associated resource.
 *
 * @generated from message users.OrganizationFilter
 */
export declare type OrganizationFilter = Message<"users.OrganizationFilter"> & {
  /**
   * @generated from field: optional string organization_id = 1;
   */
  organizationId?: string;

  /**
   * @generated from field: optional string organizationgroup_id = 2;
   */
  organizationgroupId?: string;

  /**
   * @generated from field: optional string organization_statuse = 3;
   */
  organizationStatuse?: string;
};

/**
 * Describes the message users.OrganizationFilter.
 * Use `create(OrganizationFilterSchema)` to create a new message.
 */
export declare const OrganizationFilterSchema: GenMessage<OrganizationFilter>;

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

  /**
   * Gender of user
   *
   * @generated from field: users.UserGender gender = 6;
   */
  gender: UserGender;
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
 * Request to update a user's details.
 *
 * @generated from message users.UpdateUserRequest
 */
export declare type UpdateUserRequest = Message<"users.UpdateUserRequest"> & {
  /**
   * Updated user information.
   *
   * @generated from field: users.User user = 1;
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
   * @generated from field: int32 total_pages = 3;
   */
  totalPages: number;
};

/**
 * Describes the message users.ListUsersResponse.
 * Use `create(ListUsersResponseSchema)` to create a new message.
 */
export declare const ListUsersResponseSchema: GenMessage<ListUsersResponse>;

/**
 * Organization Group related message
 *
 * @generated from message users.CreateOrganizationGroupRequest
 */
export declare type CreateOrganizationGroupRequest = Message<"users.CreateOrganizationGroupRequest"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * @generated from field: users.UserStatus status = 3;
   */
  status: UserStatus;
};

/**
 * Describes the message users.CreateOrganizationGroupRequest.
 * Use `create(CreateOrganizationGroupRequestSchema)` to create a new message.
 */
export declare const CreateOrganizationGroupRequestSchema: GenMessage<CreateOrganizationGroupRequest>;

/**
 * @generated from message users.CreateOrganizationGroupResponse
 */
export declare type CreateOrganizationGroupResponse = Message<"users.CreateOrganizationGroupResponse"> & {
  /**
   * @generated from field: string message = 1;
   */
  message: string;
};

/**
 * Describes the message users.CreateOrganizationGroupResponse.
 * Use `create(CreateOrganizationGroupResponseSchema)` to create a new message.
 */
export declare const CreateOrganizationGroupResponseSchema: GenMessage<CreateOrganizationGroupResponse>;

/**
 * @generated from message users.UpdateOrganizationGroupRequest
 */
export declare type UpdateOrganizationGroupRequest = Message<"users.UpdateOrganizationGroupRequest"> & {
  /**
   * @generated from field: users.OrganizationGroup group = 1;
   */
  group?: OrganizationGroup;
};

/**
 * Describes the message users.UpdateOrganizationGroupRequest.
 * Use `create(UpdateOrganizationGroupRequestSchema)` to create a new message.
 */
export declare const UpdateOrganizationGroupRequestSchema: GenMessage<UpdateOrganizationGroupRequest>;

/**
 * @generated from message users.UpdateOrganizationGroupResponse
 */
export declare type UpdateOrganizationGroupResponse = Message<"users.UpdateOrganizationGroupResponse"> & {
  /**
   * @generated from field: string message = 1;
   */
  message: string;
};

/**
 * Describes the message users.UpdateOrganizationGroupResponse.
 * Use `create(UpdateOrganizationGroupResponseSchema)` to create a new message.
 */
export declare const UpdateOrganizationGroupResponseSchema: GenMessage<UpdateOrganizationGroupResponse>;

/**
 * @generated from message users.DeleteOrganizationGroupRequest
 */
export declare type DeleteOrganizationGroupRequest = Message<"users.DeleteOrganizationGroupRequest"> & {
  /**
   * @generated from field: string group_id = 1;
   */
  groupId: string;
};

/**
 * Describes the message users.DeleteOrganizationGroupRequest.
 * Use `create(DeleteOrganizationGroupRequestSchema)` to create a new message.
 */
export declare const DeleteOrganizationGroupRequestSchema: GenMessage<DeleteOrganizationGroupRequest>;

/**
 * @generated from message users.DeleteOrganizationGroupResponse
 */
export declare type DeleteOrganizationGroupResponse = Message<"users.DeleteOrganizationGroupResponse"> & {
  /**
   * @generated from field: string message = 1;
   */
  message: string;
};

/**
 * Describes the message users.DeleteOrganizationGroupResponse.
 * Use `create(DeleteOrganizationGroupResponseSchema)` to create a new message.
 */
export declare const DeleteOrganizationGroupResponseSchema: GenMessage<DeleteOrganizationGroupResponse>;

/**
 * @generated from message users.ListOrganizationGroupRequest
 */
export declare type ListOrganizationGroupRequest = Message<"users.ListOrganizationGroupRequest"> & {
  /**
   * @generated from field: users.OrganizationGroupFilter filter = 1;
   */
  filter?: OrganizationGroupFilter;
};

/**
 * Describes the message users.ListOrganizationGroupRequest.
 * Use `create(ListOrganizationGroupRequestSchema)` to create a new message.
 */
export declare const ListOrganizationGroupRequestSchema: GenMessage<ListOrganizationGroupRequest>;

/**
 * @generated from message users.ListOrganizationGroupResponse
 */
export declare type ListOrganizationGroupResponse = Message<"users.ListOrganizationGroupResponse"> & {
  /**
   * @generated from field: repeated users.OrganizationGroup groups = 1;
   */
  groups: OrganizationGroup[];
};

/**
 * Describes the message users.ListOrganizationGroupResponse.
 * Use `create(ListOrganizationGroupResponseSchema)` to create a new message.
 */
export declare const ListOrganizationGroupResponseSchema: GenMessage<ListOrganizationGroupResponse>;

/**
 * Organization or contractparty related message
 *
 * @generated from message users.CreateOrganizationRequest
 */
export declare type CreateOrganizationRequest = Message<"users.CreateOrganizationRequest"> & {
  /**
   * @generated from field: string organization_name = 1;
   */
  organizationName: string;

  /**
   * @generated from field: optional string organizationgroup_id = 2;
   */
  organizationgroupId?: string;

  /**
   * @generated from field: optional string description = 3;
   */
  description?: string;
};

/**
 * Describes the message users.CreateOrganizationRequest.
 * Use `create(CreateOrganizationRequestSchema)` to create a new message.
 */
export declare const CreateOrganizationRequestSchema: GenMessage<CreateOrganizationRequest>;

/**
 * @generated from message users.CreateOrganizationResponse
 */
export declare type CreateOrganizationResponse = Message<"users.CreateOrganizationResponse"> & {
  /**
   * @generated from field: string organization_id = 1;
   */
  organizationId: string;

  /**
   * @generated from field: string message = 2;
   */
  message: string;
};

/**
 * Describes the message users.CreateOrganizationResponse.
 * Use `create(CreateOrganizationResponseSchema)` to create a new message.
 */
export declare const CreateOrganizationResponseSchema: GenMessage<CreateOrganizationResponse>;

/**
 * @generated from message users.UpdateOrganizationRequest
 */
export declare type UpdateOrganizationRequest = Message<"users.UpdateOrganizationRequest"> & {
  /**
   * @generated from field: users.ContractingParty organization = 1;
   */
  organization?: ContractingParty;
};

/**
 * Describes the message users.UpdateOrganizationRequest.
 * Use `create(UpdateOrganizationRequestSchema)` to create a new message.
 */
export declare const UpdateOrganizationRequestSchema: GenMessage<UpdateOrganizationRequest>;

/**
 * @generated from message users.UpdateOrganizationResponse
 */
export declare type UpdateOrganizationResponse = Message<"users.UpdateOrganizationResponse"> & {
  /**
   * @generated from field: string message = 2;
   */
  message: string;
};

/**
 * Describes the message users.UpdateOrganizationResponse.
 * Use `create(UpdateOrganizationResponseSchema)` to create a new message.
 */
export declare const UpdateOrganizationResponseSchema: GenMessage<UpdateOrganizationResponse>;

/**
 * @generated from message users.DeleteOrganizationRequest
 */
export declare type DeleteOrganizationRequest = Message<"users.DeleteOrganizationRequest"> & {
  /**
   * @generated from field: string organization_id = 1;
   */
  organizationId: string;
};

/**
 * Describes the message users.DeleteOrganizationRequest.
 * Use `create(DeleteOrganizationRequestSchema)` to create a new message.
 */
export declare const DeleteOrganizationRequestSchema: GenMessage<DeleteOrganizationRequest>;

/**
 * @generated from message users.DeleteOrganizationResponse
 */
export declare type DeleteOrganizationResponse = Message<"users.DeleteOrganizationResponse"> & {
  /**
   * @generated from field: string message = 1;
   */
  message: string;
};

/**
 * Describes the message users.DeleteOrganizationResponse.
 * Use `create(DeleteOrganizationResponseSchema)` to create a new message.
 */
export declare const DeleteOrganizationResponseSchema: GenMessage<DeleteOrganizationResponse>;

/**
 * @generated from message users.ListOrganizationRequest
 */
export declare type ListOrganizationRequest = Message<"users.ListOrganizationRequest"> & {
  /**
   * @generated from field: users.OrganizationFilter filter = 1;
   */
  filter?: OrganizationFilter;
};

/**
 * Describes the message users.ListOrganizationRequest.
 * Use `create(ListOrganizationRequestSchema)` to create a new message.
 */
export declare const ListOrganizationRequestSchema: GenMessage<ListOrganizationRequest>;

/**
 * @generated from message users.ListOrganizationResponse
 */
export declare type ListOrganizationResponse = Message<"users.ListOrganizationResponse"> & {
  /**
   * @generated from field: repeated users.ContractingParty organizations = 1;
   */
  organizations: ContractingParty[];
};

/**
 * Describes the message users.ListOrganizationResponse.
 * Use `create(ListOrganizationResponseSchema)` to create a new message.
 */
export declare const ListOrganizationResponseSchema: GenMessage<ListOrganizationResponse>;

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
 * @generated from enum users.UserType
 */
export enum UserType {
  /**
   * Default value.
   *
   * @generated from enum value: USER_Type_DEFAULT = 0;
   */
  DEFAULT = 0,

  /**
   * User as contract party .
   *
   * @generated from enum value: USER_Type_CONTRACTPARTY = 1;
   */
  CONTRACTPARTY = 1,
}

/**
 * Describes the enum users.UserType.
 */
export declare const UserTypeSchema: GenEnum<UserType>;

/**
 * @generated from enum users.UserGender
 */
export enum UserGender {
  /**
   * Default value mail.
   *
   * @generated from enum value: USER_Gender_Male = 0;
   */
  Male = 0,

  /**
   * Femail
   *
   * @generated from enum value: USER_Gender_Female = 1;
   */
  Female = 1,
}

/**
 * Describes the enum users.UserGender.
 */
export declare const UserGenderSchema: GenEnum<UserGender>;

/**
 * @generated from enum users.OrganizationType
 */
export enum OrganizationType {
  /**
   * Default value.
   *
   * @generated from enum value: ORG_Type_DEFAULT = 0;
   */
  ORG_Type_DEFAULT = 0,

  /**
   * Sports Group.
   *
   * @generated from enum value: SPORTS_GROUP = 1;
   */
  SPORTS_GROUP = 1,

  /**
   * Recreational Centers.
   *
   * @generated from enum value: RECREATIONAL_CENTERS = 2;
   */
  RECREATIONAL_CENTERS = 2,

  /**
   * Sales Centers.
   *
   * @generated from enum value: SALES_CENTERS = 3;
   */
  SALES_CENTERS = 3,

  /**
   * Medical Services.
   *
   * @generated from enum value: MEDICAL_SERVICES = 4;
   */
  MEDICAL_SERVICES = 4,
}

/**
 * Describes the enum users.OrganizationType.
 */
export declare const OrganizationTypeSchema: GenEnum<OrganizationType>;

/**
 * Service for managing users (authentication, user details, and user roles).
 *
 * @generated from service users.UsersService
 */
export declare const UsersService: GenService<{
  /**
   * User-related methods
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
  /**
   * Update user
   *
   * @generated from rpc users.UsersService.UpdateUser
   */
  updateUser: {
    methodKind: "unary";
    input: typeof UpdateUserRequestSchema;
    output: typeof UpdateUserResponseSchema;
  },
  /**
   * Organization Group related methods
   *
   * @generated from rpc users.UsersService.CreateOrganizationGroup
   */
  createOrganizationGroup: {
    methodKind: "unary";
    input: typeof CreateOrganizationGroupRequestSchema;
    output: typeof CreateOrganizationGroupResponseSchema;
  },
  /**
   * @generated from rpc users.UsersService.UpdateOrganizationGroup
   */
  updateOrganizationGroup: {
    methodKind: "unary";
    input: typeof UpdateOrganizationGroupRequestSchema;
    output: typeof UpdateOrganizationGroupResponseSchema;
  },
  /**
   * @generated from rpc users.UsersService.DeleteOrganizationGroup
   */
  deleteOrganizationGroup: {
    methodKind: "unary";
    input: typeof DeleteOrganizationGroupRequestSchema;
    output: typeof DeleteOrganizationGroupResponseSchema;
  },
  /**
   * @generated from rpc users.UsersService.ListOrganizationGroup
   */
  listOrganizationGroup: {
    methodKind: "unary";
    input: typeof ListOrganizationGroupRequestSchema;
    output: typeof ListOrganizationGroupResponseSchema;
  },
  /**
   * Organization  related methods
   *
   * @generated from rpc users.UsersService.CreateOrganization
   */
  createOrganization: {
    methodKind: "unary";
    input: typeof CreateOrganizationRequestSchema;
    output: typeof CreateOrganizationResponseSchema;
  },
  /**
   * @generated from rpc users.UsersService.UpdateOrganization
   */
  updateOrganization: {
    methodKind: "unary";
    input: typeof UpdateOrganizationRequestSchema;
    output: typeof UpdateOrganizationResponseSchema;
  },
  /**
   * @generated from rpc users.UsersService.DeleteOrganization
   */
  deleteOrganization: {
    methodKind: "unary";
    input: typeof DeleteOrganizationRequestSchema;
    output: typeof DeleteOrganizationResponseSchema;
  },
  /**
   * @generated from rpc users.UsersService.ListOrganization
   */
  listOrganization: {
    methodKind: "unary";
    input: typeof ListOrganizationRequestSchema;
    output: typeof ListOrganizationResponseSchema;
  },
  /**
   * geolocation related methods
   *
   * @generated from rpc users.UsersService.GetCountries
   */
  getCountries: {
    methodKind: "unary";
    input: typeof GetGeolocationRequestSchema;
    output: typeof GetGeolocationResponseSchema;
  },
  /**
   * @generated from rpc users.UsersService.GetProvinces
   */
  getProvinces: {
    methodKind: "unary";
    input: typeof GetGeolocationRequestSchema;
    output: typeof GetGeolocationResponseSchema;
  },
  /**
   * @generated from rpc users.UsersService.GetCities
   */
  getCities: {
    methodKind: "unary";
    input: typeof GetGeolocationRequestSchema;
    output: typeof GetGeolocationResponseSchema;
  },
}>;

