// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js+dts,import_extension=js,import_extension=ts"
// @generated from file users/users.proto (package users, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, serviceDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file users/users.proto.
 */
export const file_users_users = /*@__PURE__*/
  fileDesc("ChF1c2Vycy91c2Vycy5wcm90bxIFdXNlcnMiMwoKUGVybWlzc2lvbhIVCg1wZXJtaXNzaW9uX2lkGAEgASgJEg4KBmFjdGlvbhgCIAEoCSI2CghSZXNvdXJjZRITCgtyZXNvdXJjZV9pZBgBIAEoCRIVCg1yZXNvdXJjZV9uYW1lGAIgASgJIooBCgRSb2xlEg8KB3JvbGVfaWQYASABKAkSEQoJcm9sZV9uYW1lGAIgASgJEiEKCHJlc291cmNlGAMgASgLMg8udXNlcnMuUmVzb3VyY2USEwoLZGVzY3JpcHRpb24YBCABKAkSJgoLcGVybWlzc2lvbnMYBSADKAsyES51c2Vycy5QZXJtaXNzaW9uIkIKEU9yZ2FuaXphdGlvbkdyb3VwEgoKAmlkGAEgASgJEgwKBG5hbWUYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkihAEKEENvbnRyYWN0aW5nUGFydHkSFwoPb3JnYW5pemF0aW9uX2lkGAEgASgJEhkKEW9yZ2FuaXphdGlvbl9uYW1lGAIgASgJEhMKC2Rlc2NyaXB0aW9uGAMgASgJEicKBWdyb3VwGAQgASgLMhgudXNlcnMuT3JnYW5pemF0aW9uR3JvdXAi1QEKC1VzZXJQcm9maWxlEhEKCWZ1bGxfbmFtZRgBIAEoCRINCgVlbWFpbBgCIAEoCRIUCgxwaG9uZV9udW1iZXIYAyABKAkSDwoHY291bnRyeRgEIAEoCRIQCghwcm92aW5jZRgFIAEoCRIMCgRjaXR5GAYgASgJEhYKDmFkZHJlc3NfbGluZV8xGAcgASgJEhYKDmFkZHJlc3NfbGluZV8yGAggASgJEhAKCHppcF9jb2RlGAkgASgJEg4KBmdlbmRlchgKIAEoCRILCgNpbWcYCyABKAki8gEKBFVzZXISDwoHdXNlcl9pZBgBIAEoCRIjCgdwcm9maWxlGAIgASgLMhIudXNlcnMuVXNlclByb2ZpbGUSGgoFcm9sZXMYAyADKAsyCy51c2Vycy5Sb2xlEiEKBnN0YXR1cxgEIAEoDjIRLnVzZXJzLlVzZXJTdGF0dXMSLQoMb3JnYW5pemF0aW9uGAUgASgLMhcudXNlcnMuQ29udHJhY3RpbmdQYXJ0eRIQCgh1c2VybmFtZRgGIAEoCRIVCg1wYXNzd29yZF9oYXNoGAcgASgJEh0KBHR5cGUYCCABKA4yDy51c2Vycy5Vc2VyVHlwZSKBAQoKUGFnaW5hdGlvbhIMCgRwYWdlGAEgASgFEhEKCXBhZ2Vfc2l6ZRgCIAEoBRIUCgdzb3J0X2J5GAMgASgJSACIAQESHAoPc29ydF9kZXNjZW5kaW5nGAQgASgISAGIAQFCCgoIX3NvcnRfYnlCEgoQX3NvcnRfZGVzY2VuZGluZyLDAQoKVXNlckZpbHRlchIPCgd1c2VyX2lkGAEgASgJEhAKCHVzZXJuYW1lGAIgASgJEg0KBWVtYWlsGAMgASgJEhAKCHJvbGVfaWRzGAQgASgJEhcKD29yZ2FuaXphdGlvbl9pZBgFIAEoCRIUCgx1c2VyX3N0YXR1c2UYBiABKAkSDwoHY291bnRyeRgHIAEoCRIQCghwcm92aW5jZRgIIAEoCRIMCgRjaXR5GAkgASgJEhEKCXVzZXJfdHlwZRgKIAEoCSIvCgpSb2xlRmlsdGVyEiEKCHJlc291cmNlGAEgASgLMg8udXNlcnMuUmVzb3VyY2UiZQoXT3JnYW5pemF0aW9uR3JvdXBGaWx0ZXISFQoIZ3JvdXBfaWQYASABKAlIAIgBARIXCgpncm91cF9uYW1lGAIgASgJSAGIAQFCCwoJX2dyb3VwX2lkQg0KC19ncm91cF9uYW1lIoIBChJPcmdhbml6YXRpb25GaWx0ZXISHAoPb3JnYW5pemF0aW9uX2lkGAEgASgJSACIAQESIQoUb3JnYW5pemF0aW9uZ3JvdXBfaWQYAiABKAlIAYgBAUISChBfb3JnYW5pemF0aW9uX2lkQhcKFV9vcmdhbml6YXRpb25ncm91cF9pZCJ3Cg9SZWdpc3RlclJlcXVlc3QSDAoEbmFtZRgBIAEoCRINCgVlbWFpbBgCIAEoCRITCgtwaG9uZW51bWJlchgDIAEoCRIQCgh1c2VybmFtZRgEIAEoCRIQCghwYXNzd29yZBgFIAEoCRIOCgZnZW5kZXIYBiABKAkiNAoQUmVnaXN0ZXJSZXNwb25zZRIPCgd1c2VyX2lkGAEgASgJEg8KB21lc3NhZ2UYAiABKAkiMgoMTG9naW5SZXF1ZXN0EhAKCHVzZXJuYW1lGAEgASgJEhAKCHBhc3N3b3JkGAIgASgJIi8KDUxvZ2luUmVzcG9uc2USDQoFdG9rZW4YASABKAkSDwoHc3VjY2VzcxgCIAEoCCIgCg1Mb2dvdXRSZXF1ZXN0Eg8KB3VzZXJfaWQYASABKAkiIQoOTG9nb3V0UmVzcG9uc2USDwoHc3VjY2VzcxgBIAEoCCIuChFVcGRhdGVVc2VyUmVxdWVzdBIZCgR1c2VyGAEgASgLMgsudXNlcnMuVXNlciIlChJVcGRhdGVVc2VyUmVzcG9uc2USDwoHbWVzc2FnZRgBIAEoCSJcChBMaXN0VXNlcnNSZXF1ZXN0EiUKCnBhZ2luYXRpb24YASABKAsyES51c2Vycy5QYWdpbmF0aW9uEiEKBmZpbHRlchgCIAEoCzIRLnVzZXJzLlVzZXJGaWx0ZXIiXQoRTGlzdFVzZXJzUmVzcG9uc2USGgoFdXNlcnMYASADKAsyCy51c2Vycy5Vc2VyEhcKD25leHRfcGFnZV90b2tlbhgCIAEoCRITCgt0b3RhbF9wYWdlcxgDIAEoBSJDCh5DcmVhdGVPcmdhbml6YXRpb25Hcm91cFJlcXVlc3QSDAoEbmFtZRgBIAEoCRITCgtkZXNjcmlwdGlvbhgCIAEoCSIyCh9DcmVhdGVPcmdhbml6YXRpb25Hcm91cFJlc3BvbnNlEg8KB21lc3NhZ2UYASABKAkiSQoeVXBkYXRlT3JnYW5pemF0aW9uR3JvdXBSZXF1ZXN0EicKBWdyb3VwGAEgASgLMhgudXNlcnMuT3JnYW5pemF0aW9uR3JvdXAiMgofVXBkYXRlT3JnYW5pemF0aW9uR3JvdXBSZXNwb25zZRIPCgdtZXNzYWdlGAEgASgJIjIKHkRlbGV0ZU9yZ2FuaXphdGlvbkdyb3VwUmVxdWVzdBIQCghncm91cF9pZBgBIAEoCSIyCh9EZWxldGVPcmdhbml6YXRpb25Hcm91cFJlc3BvbnNlEg8KB21lc3NhZ2UYASABKAkiTgocTGlzdE9yZ2FuaXphdGlvbkdyb3VwUmVxdWVzdBIuCgZmaWx0ZXIYASABKAsyHi51c2Vycy5Pcmdhbml6YXRpb25Hcm91cEZpbHRlciJJCh1MaXN0T3JnYW5pemF0aW9uR3JvdXBSZXNwb25zZRIoCgZncm91cHMYASADKAsyGC51c2Vycy5Pcmdhbml6YXRpb25Hcm91cCKcAQoZQ3JlYXRlT3JnYW5pemF0aW9uUmVxdWVzdBIZChFvcmdhbml6YXRpb25fbmFtZRgBIAEoCRIhChRvcmdhbml6YXRpb25ncm91cF9pZBgCIAEoCUgAiAEBEhgKC2Rlc2NyaXB0aW9uGAMgASgJSAGIAQFCFwoVX29yZ2FuaXphdGlvbmdyb3VwX2lkQg4KDF9kZXNjcmlwdGlvbiJGChpDcmVhdGVPcmdhbml6YXRpb25SZXNwb25zZRIXCg9vcmdhbml6YXRpb25faWQYASABKAkSDwoHbWVzc2FnZRgCIAEoCSJKChlVcGRhdGVPcmdhbml6YXRpb25SZXF1ZXN0Ei0KDG9yZ2FuaXphdGlvbhgBIAEoCzIXLnVzZXJzLkNvbnRyYWN0aW5nUGFydHkiLQoaVXBkYXRlT3JnYW5pemF0aW9uUmVzcG9uc2USDwoHbWVzc2FnZRgCIAEoCSI0ChlEZWxldGVPcmdhbml6YXRpb25SZXF1ZXN0EhcKD29yZ2FuaXphdGlvbl9pZBgBIAEoCSItChpEZWxldGVPcmdhbml6YXRpb25SZXNwb25zZRIPCgdtZXNzYWdlGAEgASgJIkQKF0xpc3RPcmdhbml6YXRpb25SZXF1ZXN0EikKBmZpbHRlchgBIAEoCzIZLnVzZXJzLk9yZ2FuaXphdGlvbkZpbHRlciJKChhMaXN0T3JnYW5pemF0aW9uUmVzcG9uc2USLgoNb3JnYW5pemF0aW9ucxgBIAMoCzIXLnVzZXJzLkNvbnRyYWN0aW5nUGFydHkqjwEKClVzZXJTdGF0dXMSGwoXVVNFUl9TVEFUVVNfVU5TUEVDSUZJRUQQABIWChJVU0VSX1NUQVRVU19BQ1RJVkUQARIYChRVU0VSX1NUQVRVU19JTkFDVElWRRACEhkKFVVTRVJfU1RBVFVTX1NVU1BFTkRFRBADEhcKE1VTRVJfU1RBVFVTX0RFTEVURUQQBCo+CghVc2VyVHlwZRIVChFVU0VSX1R5cGVfREVGQVVMVBAAEhsKF1VTRVJfVHlwZV9DT05UUkFDVFBBUlRZEAEykAgKDFVzZXJzU2VydmljZRI/CgxSZWdpc3RlclVzZXISFi51c2Vycy5SZWdpc3RlclJlcXVlc3QaFy51c2Vycy5SZWdpc3RlclJlc3BvbnNlEjYKCUxvZ2luVXNlchITLnVzZXJzLkxvZ2luUmVxdWVzdBoULnVzZXJzLkxvZ2luUmVzcG9uc2USPgoJTGlzdFVzZXJzEhcudXNlcnMuTGlzdFVzZXJzUmVxdWVzdBoYLnVzZXJzLkxpc3RVc2Vyc1Jlc3BvbnNlEkEKClVwZGF0ZVVzZXISGC51c2Vycy5VcGRhdGVVc2VyUmVxdWVzdBoZLnVzZXJzLlVwZGF0ZVVzZXJSZXNwb25zZRJnChZDcmVhdE9yZ2FuaXphdGlvbkdyb3VwEiUudXNlcnMuQ3JlYXRlT3JnYW5pemF0aW9uR3JvdXBSZXF1ZXN0GiYudXNlcnMuQ3JlYXRlT3JnYW5pemF0aW9uR3JvdXBSZXNwb25zZRJoChdVcGRhdGVPcmdhbml6YXRpb25Hcm91cBIlLnVzZXJzLlVwZGF0ZU9yZ2FuaXphdGlvbkdyb3VwUmVxdWVzdBomLnVzZXJzLlVwZGF0ZU9yZ2FuaXphdGlvbkdyb3VwUmVzcG9uc2USXgoXRGVsZXRlT3JnYW5pemF0aW9uR3JvdXASIC51c2Vycy5EZWxldGVPcmdhbml6YXRpb25SZXF1ZXN0GiEudXNlcnMuRGVsZXRlT3JnYW5pemF0aW9uUmVzcG9uc2USYgoVTGlzdE9yZ2FuaXphdGlvbkdyb3VwEiMudXNlcnMuTGlzdE9yZ2FuaXphdGlvbkdyb3VwUmVxdWVzdBokLnVzZXJzLkxpc3RPcmdhbml6YXRpb25Hcm91cFJlc3BvbnNlElgKEUNyZWF0T3JnYW5pemF0aW9uEiAudXNlcnMuQ3JlYXRlT3JnYW5pemF0aW9uUmVxdWVzdBohLnVzZXJzLkNyZWF0ZU9yZ2FuaXphdGlvblJlc3BvbnNlElkKElVwZGF0ZU9yZ2FuaXphdGlvbhIgLnVzZXJzLlVwZGF0ZU9yZ2FuaXphdGlvblJlcXVlc3QaIS51c2Vycy5VcGRhdGVPcmdhbml6YXRpb25SZXNwb25zZRJjChJEZWxldGVPcmdhbml6YXRpb24SJS51c2Vycy5EZWxldGVPcmdhbml6YXRpb25Hcm91cFJlcXVlc3QaJi51c2Vycy5EZWxldGVPcmdhbml6YXRpb25Hcm91cFJlc3BvbnNlElMKEExpc3RPcmdhbml6YXRpb24SHi51c2Vycy5MaXN0T3JnYW5pemF0aW9uUmVxdWVzdBofLnVzZXJzLkxpc3RPcmdhbml6YXRpb25SZXNwb25zZUJDWkFnaXRodWIuY29tL2F6NTg3NDAvY29ubmVjdC1taWNyb3NlcnZpY2VzLXByb3RvL2dvbGFuZy91c2Vyczt1c2Vyc2IGcHJvdG8z");

/**
 * Describes the message users.Permission.
 * Use `create(PermissionSchema)` to create a new message.
 */
export const PermissionSchema = /*@__PURE__*/
  messageDesc(file_users_users, 0);

/**
 * Describes the message users.Resource.
 * Use `create(ResourceSchema)` to create a new message.
 */
export const ResourceSchema = /*@__PURE__*/
  messageDesc(file_users_users, 1);

/**
 * Describes the message users.Role.
 * Use `create(RoleSchema)` to create a new message.
 */
export const RoleSchema = /*@__PURE__*/
  messageDesc(file_users_users, 2);

/**
 * Describes the message users.OrganizationGroup.
 * Use `create(OrganizationGroupSchema)` to create a new message.
 */
export const OrganizationGroupSchema = /*@__PURE__*/
  messageDesc(file_users_users, 3);

/**
 * Describes the message users.ContractingParty.
 * Use `create(ContractingPartySchema)` to create a new message.
 */
export const ContractingPartySchema = /*@__PURE__*/
  messageDesc(file_users_users, 4);

/**
 * Describes the message users.UserProfile.
 * Use `create(UserProfileSchema)` to create a new message.
 */
export const UserProfileSchema = /*@__PURE__*/
  messageDesc(file_users_users, 5);

/**
 * Describes the message users.User.
 * Use `create(UserSchema)` to create a new message.
 */
export const UserSchema = /*@__PURE__*/
  messageDesc(file_users_users, 6);

/**
 * Describes the message users.Pagination.
 * Use `create(PaginationSchema)` to create a new message.
 */
export const PaginationSchema = /*@__PURE__*/
  messageDesc(file_users_users, 7);

/**
 * Describes the message users.UserFilter.
 * Use `create(UserFilterSchema)` to create a new message.
 */
export const UserFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 8);

/**
 * Describes the message users.RoleFilter.
 * Use `create(RoleFilterSchema)` to create a new message.
 */
export const RoleFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 9);

/**
 * Describes the message users.OrganizationGroupFilter.
 * Use `create(OrganizationGroupFilterSchema)` to create a new message.
 */
export const OrganizationGroupFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 10);

/**
 * Describes the message users.OrganizationFilter.
 * Use `create(OrganizationFilterSchema)` to create a new message.
 */
export const OrganizationFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 11);

/**
 * Describes the message users.RegisterRequest.
 * Use `create(RegisterRequestSchema)` to create a new message.
 */
export const RegisterRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 12);

/**
 * Describes the message users.RegisterResponse.
 * Use `create(RegisterResponseSchema)` to create a new message.
 */
export const RegisterResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 13);

/**
 * Describes the message users.LoginRequest.
 * Use `create(LoginRequestSchema)` to create a new message.
 */
export const LoginRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 14);

/**
 * Describes the message users.LoginResponse.
 * Use `create(LoginResponseSchema)` to create a new message.
 */
export const LoginResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 15);

/**
 * Describes the message users.LogoutRequest.
 * Use `create(LogoutRequestSchema)` to create a new message.
 */
export const LogoutRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 16);

/**
 * Describes the message users.LogoutResponse.
 * Use `create(LogoutResponseSchema)` to create a new message.
 */
export const LogoutResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 17);

/**
 * Describes the message users.UpdateUserRequest.
 * Use `create(UpdateUserRequestSchema)` to create a new message.
 */
export const UpdateUserRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 18);

/**
 * Describes the message users.UpdateUserResponse.
 * Use `create(UpdateUserResponseSchema)` to create a new message.
 */
export const UpdateUserResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 19);

/**
 * Describes the message users.ListUsersRequest.
 * Use `create(ListUsersRequestSchema)` to create a new message.
 */
export const ListUsersRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 20);

/**
 * Describes the message users.ListUsersResponse.
 * Use `create(ListUsersResponseSchema)` to create a new message.
 */
export const ListUsersResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 21);

/**
 * Describes the message users.CreateOrganizationGroupRequest.
 * Use `create(CreateOrganizationGroupRequestSchema)` to create a new message.
 */
export const CreateOrganizationGroupRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 22);

/**
 * Describes the message users.CreateOrganizationGroupResponse.
 * Use `create(CreateOrganizationGroupResponseSchema)` to create a new message.
 */
export const CreateOrganizationGroupResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 23);

/**
 * Describes the message users.UpdateOrganizationGroupRequest.
 * Use `create(UpdateOrganizationGroupRequestSchema)` to create a new message.
 */
export const UpdateOrganizationGroupRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 24);

/**
 * Describes the message users.UpdateOrganizationGroupResponse.
 * Use `create(UpdateOrganizationGroupResponseSchema)` to create a new message.
 */
export const UpdateOrganizationGroupResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 25);

/**
 * Describes the message users.DeleteOrganizationGroupRequest.
 * Use `create(DeleteOrganizationGroupRequestSchema)` to create a new message.
 */
export const DeleteOrganizationGroupRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 26);

/**
 * Describes the message users.DeleteOrganizationGroupResponse.
 * Use `create(DeleteOrganizationGroupResponseSchema)` to create a new message.
 */
export const DeleteOrganizationGroupResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 27);

/**
 * Describes the message users.ListOrganizationGroupRequest.
 * Use `create(ListOrganizationGroupRequestSchema)` to create a new message.
 */
export const ListOrganizationGroupRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 28);

/**
 * Describes the message users.ListOrganizationGroupResponse.
 * Use `create(ListOrganizationGroupResponseSchema)` to create a new message.
 */
export const ListOrganizationGroupResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 29);

/**
 * Describes the message users.CreateOrganizationRequest.
 * Use `create(CreateOrganizationRequestSchema)` to create a new message.
 */
export const CreateOrganizationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 30);

/**
 * Describes the message users.CreateOrganizationResponse.
 * Use `create(CreateOrganizationResponseSchema)` to create a new message.
 */
export const CreateOrganizationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 31);

/**
 * Describes the message users.UpdateOrganizationRequest.
 * Use `create(UpdateOrganizationRequestSchema)` to create a new message.
 */
export const UpdateOrganizationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 32);

/**
 * Describes the message users.UpdateOrganizationResponse.
 * Use `create(UpdateOrganizationResponseSchema)` to create a new message.
 */
export const UpdateOrganizationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 33);

/**
 * Describes the message users.DeleteOrganizationRequest.
 * Use `create(DeleteOrganizationRequestSchema)` to create a new message.
 */
export const DeleteOrganizationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 34);

/**
 * Describes the message users.DeleteOrganizationResponse.
 * Use `create(DeleteOrganizationResponseSchema)` to create a new message.
 */
export const DeleteOrganizationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 35);

/**
 * Describes the message users.ListOrganizationRequest.
 * Use `create(ListOrganizationRequestSchema)` to create a new message.
 */
export const ListOrganizationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 36);

/**
 * Describes the message users.ListOrganizationResponse.
 * Use `create(ListOrganizationResponseSchema)` to create a new message.
 */
export const ListOrganizationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 37);

/**
 * Describes the enum users.UserStatus.
 */
export const UserStatusSchema = /*@__PURE__*/
  enumDesc(file_users_users, 0);

/**
 * Enum for user status, which can be one of several states for the user account.
 *
 * @generated from enum users.UserStatus
 */
export const UserStatus = /*@__PURE__*/
  tsEnum(UserStatusSchema);

/**
 * Describes the enum users.UserType.
 */
export const UserTypeSchema = /*@__PURE__*/
  enumDesc(file_users_users, 1);

/**
 * @generated from enum users.UserType
 */
export const UserType = /*@__PURE__*/
  tsEnum(UserTypeSchema);

/**
 * Service for managing users (authentication, user details, and user roles).
 *
 * @generated from service users.UsersService
 */
export const UsersService = /*@__PURE__*/
  serviceDesc(file_users_users, 0);

