// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js+dts,import_extension=js,import_extension=ts"
// @generated from file users/users.proto (package users, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, serviceDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file users/users.proto.
 */
export const file_users_users = /*@__PURE__*/
  fileDesc("ChF1c2Vycy91c2Vycy5wcm90bxIFdXNlcnMiMwoKUGVybWlzc2lvbhIVCg1wZXJtaXNzaW9uX2lkGAEgASgJEg4KBmFjdGlvbhgCIAEoCSI2CghSZXNvdXJjZRITCgtyZXNvdXJjZV9pZBgBIAEoCRIVCg1yZXNvdXJjZV9uYW1lGAIgASgJIooBCgRSb2xlEg8KB3JvbGVfaWQYASABKAkSEQoJcm9sZV9uYW1lGAIgASgJEiEKCHJlc291cmNlGAMgASgLMg8udXNlcnMuUmVzb3VyY2USEwoLZGVzY3JpcHRpb24YBCABKAkSJgoLcGVybWlzc2lvbnMYBSADKAsyES51c2Vycy5QZXJtaXNzaW9uImUKEU9yZ2FuaXphdGlvbkdyb3VwEgoKAmlkGAEgASgJEgwKBG5hbWUYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkSIQoGc3RhdHVzGAQgASgOMhEudXNlcnMuVXNlclN0YXR1cyLOAQoQQ29udHJhY3RpbmdQYXJ0eRIXCg9vcmdhbml6YXRpb25faWQYASABKAkSGQoRb3JnYW5pemF0aW9uX25hbWUYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkSJwoFZ3JvdXAYBCABKAsyGC51c2Vycy5Pcmdhbml6YXRpb25Hcm91cBIlCgR0eXBlGAUgASgOMhcudXNlcnMuT3JnYW5pemF0aW9uVHlwZRIhCgZzdGF0dXMYBiABKA4yES51c2Vycy5Vc2VyU3RhdHVzItYBCgtVc2VyUHJvZmlsZRIPCgd1c2VyX2lkGAEgASgJEhEKCWZ1bGxfbmFtZRgCIAEoCRINCgVlbWFpbBgDIAEoCRIUCgxwaG9uZV9udW1iZXIYBCABKAkSDwoHY291bnRyeRgFIAEoCRIQCghwcm92aW5jZRgGIAEoCRIMCgRjaXR5GAcgASgJEhYKDmFkZHJlc3NfbGluZV8xGAggASgJEhYKDmFkZHJlc3NfbGluZV8yGAkgASgJEhAKCHppcF9jb2RlGAogASgJEgsKA2ltZxgLIAEoCSKKAwoEVXNlchIPCgd1c2VyX2lkGAEgASgJEiMKB3Byb2ZpbGUYAiABKAsyEi51c2Vycy5Vc2VyUHJvZmlsZRIaCgVyb2xlcxgDIAMoCzILLnVzZXJzLlJvbGUSIQoGc3RhdHVzGAQgASgOMhEudXNlcnMuVXNlclN0YXR1cxItCgxvcmdhbml6YXRpb24YBSABKAsyFy51c2Vycy5Db250cmFjdGluZ1BhcnR5EhAKCHVzZXJuYW1lGAYgASgJEhUKDXBhc3N3b3JkX2hhc2gYByABKAkSHQoEdHlwZRgIIAEoDjIPLnVzZXJzLlVzZXJUeXBlEhMKC2Rlc2NyaXB0aW9uGAkgASgJEi4KCmNyZWF0ZWRfYXQYCiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi4KCmRlbGV0ZWRfYXQYCyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEiEKBmdlbmRlchgMIAEoDjIRLnVzZXJzLlVzZXJHZW5kZXIiJQoLR2VvbG9jYXRpb24SCgoCZW4YASABKAkSCgoCZmEYAiABKAkiHwoRR2VvbG9jYXRpb25GaWx0ZXISCgoCZW4YASABKAkiQQoVR2V0R2VvbG9jYXRpb25SZXF1ZXN0EigKBmZpbHRlchgBIAEoCzIYLnVzZXJzLkdlb2xvY2F0aW9uRmlsdGVyIj8KFkdldEdlb2xvY2F0aW9uUmVzcG9uc2USJQoJbG9jYXRpb25zGAEgAygLMhIudXNlcnMuR2VvbG9jYXRpb24igQEKClBhZ2luYXRpb24SDAoEcGFnZRgBIAEoBRIRCglwYWdlX3NpemUYAiABKAUSFAoHc29ydF9ieRgDIAEoCUgAiAEBEhwKD3NvcnRfZGVzY2VuZGluZxgEIAEoCEgBiAEBQgoKCF9zb3J0X2J5QhIKEF9zb3J0X2Rlc2NlbmRpbmci1QEKClVzZXJGaWx0ZXISDwoHdXNlcl9pZBgBIAEoCRIQCgh1c2VybmFtZRgCIAEoCRINCgVlbWFpbBgDIAEoCRIQCghyb2xlX2lkcxgEIAEoCRIXCg9vcmdhbml6YXRpb25faWQYBSABKAkSFAoMdXNlcl9zdGF0dXNlGAYgASgJEg8KB2NvdW50cnkYByABKAkSEAoIcHJvdmluY2UYCCABKAkSDAoEY2l0eRgJIAEoCRIRCgl1c2VyX3R5cGUYCiABKAkSEAoIZ3JvdXBfaWQYCyABKAkiLwoKUm9sZUZpbHRlchIhCghyZXNvdXJjZRgBIAEoCzIPLnVzZXJzLlJlc291cmNlIpMBChdPcmdhbml6YXRpb25Hcm91cEZpbHRlchIVCghncm91cF9pZBgBIAEoCUgAiAEBEhcKCmdyb3VwX25hbWUYAiABKAlIAYgBARIaCg1ncm91cF9zdGF0dXNlGAMgASgJSAKIAQFCCwoJX2dyb3VwX2lkQg0KC19ncm91cF9uYW1lQhAKDl9ncm91cF9zdGF0dXNlIr4BChJPcmdhbml6YXRpb25GaWx0ZXISHAoPb3JnYW5pemF0aW9uX2lkGAEgASgJSACIAQESIQoUb3JnYW5pemF0aW9uZ3JvdXBfaWQYAiABKAlIAYgBARIhChRvcmdhbml6YXRpb25fc3RhdHVzZRgDIAEoCUgCiAEBQhIKEF9vcmdhbml6YXRpb25faWRCFwoVX29yZ2FuaXphdGlvbmdyb3VwX2lkQhcKFV9vcmdhbml6YXRpb25fc3RhdHVzZSKKAQoPUmVnaXN0ZXJSZXF1ZXN0EgwKBG5hbWUYASABKAkSDQoFZW1haWwYAiABKAkSEwoLcGhvbmVudW1iZXIYAyABKAkSEAoIdXNlcm5hbWUYBCABKAkSEAoIcGFzc3dvcmQYBSABKAkSIQoGZ2VuZGVyGAYgASgOMhEudXNlcnMuVXNlckdlbmRlciI0ChBSZWdpc3RlclJlc3BvbnNlEg8KB3VzZXJfaWQYASABKAkSDwoHbWVzc2FnZRgCIAEoCSIyCgxMb2dpblJlcXVlc3QSEAoIdXNlcm5hbWUYASABKAkSEAoIcGFzc3dvcmQYAiABKAkiLwoNTG9naW5SZXNwb25zZRINCgV0b2tlbhgBIAEoCRIPCgdzdWNjZXNzGAIgASgIIiAKDUxvZ291dFJlcXVlc3QSDwoHdXNlcl9pZBgBIAEoCSIhCg5Mb2dvdXRSZXNwb25zZRIPCgdzdWNjZXNzGAEgASgIIi4KEVVwZGF0ZVVzZXJSZXF1ZXN0EhkKBHVzZXIYASABKAsyCy51c2Vycy5Vc2VyIiUKElVwZGF0ZVVzZXJSZXNwb25zZRIPCgdtZXNzYWdlGAEgASgJIlwKEExpc3RVc2Vyc1JlcXVlc3QSJQoKcGFnaW5hdGlvbhgBIAEoCzIRLnVzZXJzLlBhZ2luYXRpb24SIQoGZmlsdGVyGAIgASgLMhEudXNlcnMuVXNlckZpbHRlciJdChFMaXN0VXNlcnNSZXNwb25zZRIaCgV1c2VycxgBIAMoCzILLnVzZXJzLlVzZXISFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJEhMKC3RvdGFsX3BhZ2VzGAMgASgFImYKHkNyZWF0ZU9yZ2FuaXphdGlvbkdyb3VwUmVxdWVzdBIMCgRuYW1lGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJEiEKBnN0YXR1cxgDIAEoDjIRLnVzZXJzLlVzZXJTdGF0dXMiMgofQ3JlYXRlT3JnYW5pemF0aW9uR3JvdXBSZXNwb25zZRIPCgdtZXNzYWdlGAEgASgJIkkKHlVwZGF0ZU9yZ2FuaXphdGlvbkdyb3VwUmVxdWVzdBInCgVncm91cBgBIAEoCzIYLnVzZXJzLk9yZ2FuaXphdGlvbkdyb3VwIjIKH1VwZGF0ZU9yZ2FuaXphdGlvbkdyb3VwUmVzcG9uc2USDwoHbWVzc2FnZRgBIAEoCSIyCh5EZWxldGVPcmdhbml6YXRpb25Hcm91cFJlcXVlc3QSEAoIZ3JvdXBfaWQYASABKAkiMgofRGVsZXRlT3JnYW5pemF0aW9uR3JvdXBSZXNwb25zZRIPCgdtZXNzYWdlGAEgASgJIk4KHExpc3RPcmdhbml6YXRpb25Hcm91cFJlcXVlc3QSLgoGZmlsdGVyGAEgASgLMh4udXNlcnMuT3JnYW5pemF0aW9uR3JvdXBGaWx0ZXIiSQodTGlzdE9yZ2FuaXphdGlvbkdyb3VwUmVzcG9uc2USKAoGZ3JvdXBzGAEgAygLMhgudXNlcnMuT3JnYW5pemF0aW9uR3JvdXAinAEKGUNyZWF0ZU9yZ2FuaXphdGlvblJlcXVlc3QSGQoRb3JnYW5pemF0aW9uX25hbWUYASABKAkSIQoUb3JnYW5pemF0aW9uZ3JvdXBfaWQYAiABKAlIAIgBARIYCgtkZXNjcmlwdGlvbhgDIAEoCUgBiAEBQhcKFV9vcmdhbml6YXRpb25ncm91cF9pZEIOCgxfZGVzY3JpcHRpb24iRgoaQ3JlYXRlT3JnYW5pemF0aW9uUmVzcG9uc2USFwoPb3JnYW5pemF0aW9uX2lkGAEgASgJEg8KB21lc3NhZ2UYAiABKAkiSgoZVXBkYXRlT3JnYW5pemF0aW9uUmVxdWVzdBItCgxvcmdhbml6YXRpb24YASABKAsyFy51c2Vycy5Db250cmFjdGluZ1BhcnR5Ii0KGlVwZGF0ZU9yZ2FuaXphdGlvblJlc3BvbnNlEg8KB21lc3NhZ2UYAiABKAkiNAoZRGVsZXRlT3JnYW5pemF0aW9uUmVxdWVzdBIXCg9vcmdhbml6YXRpb25faWQYASABKAkiLQoaRGVsZXRlT3JnYW5pemF0aW9uUmVzcG9uc2USDwoHbWVzc2FnZRgBIAEoCSJEChdMaXN0T3JnYW5pemF0aW9uUmVxdWVzdBIpCgZmaWx0ZXIYASABKAsyGS51c2Vycy5Pcmdhbml6YXRpb25GaWx0ZXIiSgoYTGlzdE9yZ2FuaXphdGlvblJlc3BvbnNlEi4KDW9yZ2FuaXphdGlvbnMYASADKAsyFy51c2Vycy5Db250cmFjdGluZ1BhcnR5Ko8BCgpVc2VyU3RhdHVzEhsKF1VTRVJfU1RBVFVTX1VOU1BFQ0lGSUVEEAASFgoSVVNFUl9TVEFUVVNfQUNUSVZFEAESGAoUVVNFUl9TVEFUVVNfSU5BQ1RJVkUQAhIZChVVU0VSX1NUQVRVU19TVVNQRU5ERUQQAxIXChNVU0VSX1NUQVRVU19ERUxFVEVEEAQqPgoIVXNlclR5cGUSFQoRVVNFUl9UeXBlX0RFRkFVTFQQABIbChdVU0VSX1R5cGVfQ09OVFJBQ1RQQVJUWRABKjoKClVzZXJHZW5kZXISFAoQVVNFUl9HZW5kZXJfTWFsZRAAEhYKElVTRVJfR2VuZGVyX0ZlbWFsZRABKn0KEE9yZ2FuaXphdGlvblR5cGUSFAoQT1JHX1R5cGVfREVGQVVMVBAAEhAKDFNQT1JUU19HUk9VUBABEhgKFFJFQ1JFQVRJT05BTF9DRU5URVJTEAISEQoNU0FMRVNfQ0VOVEVSUxADEhQKEE1FRElDQUxfU0VSVklDRVMQBDL2CQoMVXNlcnNTZXJ2aWNlEj8KDFJlZ2lzdGVyVXNlchIWLnVzZXJzLlJlZ2lzdGVyUmVxdWVzdBoXLnVzZXJzLlJlZ2lzdGVyUmVzcG9uc2USNgoJTG9naW5Vc2VyEhMudXNlcnMuTG9naW5SZXF1ZXN0GhQudXNlcnMuTG9naW5SZXNwb25zZRI+CglMaXN0VXNlcnMSFy51c2Vycy5MaXN0VXNlcnNSZXF1ZXN0GhgudXNlcnMuTGlzdFVzZXJzUmVzcG9uc2USQQoKVXBkYXRlVXNlchIYLnVzZXJzLlVwZGF0ZVVzZXJSZXF1ZXN0GhkudXNlcnMuVXBkYXRlVXNlclJlc3BvbnNlEmgKF0NyZWF0ZU9yZ2FuaXphdGlvbkdyb3VwEiUudXNlcnMuQ3JlYXRlT3JnYW5pemF0aW9uR3JvdXBSZXF1ZXN0GiYudXNlcnMuQ3JlYXRlT3JnYW5pemF0aW9uR3JvdXBSZXNwb25zZRJoChdVcGRhdGVPcmdhbml6YXRpb25Hcm91cBIlLnVzZXJzLlVwZGF0ZU9yZ2FuaXphdGlvbkdyb3VwUmVxdWVzdBomLnVzZXJzLlVwZGF0ZU9yZ2FuaXphdGlvbkdyb3VwUmVzcG9uc2USaAoXRGVsZXRlT3JnYW5pemF0aW9uR3JvdXASJS51c2Vycy5EZWxldGVPcmdhbml6YXRpb25Hcm91cFJlcXVlc3QaJi51c2Vycy5EZWxldGVPcmdhbml6YXRpb25Hcm91cFJlc3BvbnNlEmIKFUxpc3RPcmdhbml6YXRpb25Hcm91cBIjLnVzZXJzLkxpc3RPcmdhbml6YXRpb25Hcm91cFJlcXVlc3QaJC51c2Vycy5MaXN0T3JnYW5pemF0aW9uR3JvdXBSZXNwb25zZRJZChJDcmVhdGVPcmdhbml6YXRpb24SIC51c2Vycy5DcmVhdGVPcmdhbml6YXRpb25SZXF1ZXN0GiEudXNlcnMuQ3JlYXRlT3JnYW5pemF0aW9uUmVzcG9uc2USWQoSVXBkYXRlT3JnYW5pemF0aW9uEiAudXNlcnMuVXBkYXRlT3JnYW5pemF0aW9uUmVxdWVzdBohLnVzZXJzLlVwZGF0ZU9yZ2FuaXphdGlvblJlc3BvbnNlElkKEkRlbGV0ZU9yZ2FuaXphdGlvbhIgLnVzZXJzLkRlbGV0ZU9yZ2FuaXphdGlvblJlcXVlc3QaIS51c2Vycy5EZWxldGVPcmdhbml6YXRpb25SZXNwb25zZRJTChBMaXN0T3JnYW5pemF0aW9uEh4udXNlcnMuTGlzdE9yZ2FuaXphdGlvblJlcXVlc3QaHy51c2Vycy5MaXN0T3JnYW5pemF0aW9uUmVzcG9uc2USSwoMR2V0Q291bnRyaWVzEhwudXNlcnMuR2V0R2VvbG9jYXRpb25SZXF1ZXN0Gh0udXNlcnMuR2V0R2VvbG9jYXRpb25SZXNwb25zZRJLCgxHZXRQcm92aW5jZXMSHC51c2Vycy5HZXRHZW9sb2NhdGlvblJlcXVlc3QaHS51c2Vycy5HZXRHZW9sb2NhdGlvblJlc3BvbnNlEkgKCUdldENpdGllcxIcLnVzZXJzLkdldEdlb2xvY2F0aW9uUmVxdWVzdBodLnVzZXJzLkdldEdlb2xvY2F0aW9uUmVzcG9uc2VCQ1pBZ2l0aHViLmNvbS9hejU4NzQwL2Nvbm5lY3QtbWljcm9zZXJ2aWNlcy1wcm90by9nb2xhbmcvdXNlcnM7dXNlcnNiBnByb3RvMw", [file_google_protobuf_timestamp]);

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
 * Describes the message users.Geolocation.
 * Use `create(GeolocationSchema)` to create a new message.
 */
export const GeolocationSchema = /*@__PURE__*/
  messageDesc(file_users_users, 7);

/**
 * Describes the message users.GeolocationFilter.
 * Use `create(GeolocationFilterSchema)` to create a new message.
 */
export const GeolocationFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 8);

/**
 * Describes the message users.GetGeolocationRequest.
 * Use `create(GetGeolocationRequestSchema)` to create a new message.
 */
export const GetGeolocationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 9);

/**
 * Describes the message users.GetGeolocationResponse.
 * Use `create(GetGeolocationResponseSchema)` to create a new message.
 */
export const GetGeolocationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 10);

/**
 * Describes the message users.Pagination.
 * Use `create(PaginationSchema)` to create a new message.
 */
export const PaginationSchema = /*@__PURE__*/
  messageDesc(file_users_users, 11);

/**
 * Describes the message users.UserFilter.
 * Use `create(UserFilterSchema)` to create a new message.
 */
export const UserFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 12);

/**
 * Describes the message users.RoleFilter.
 * Use `create(RoleFilterSchema)` to create a new message.
 */
export const RoleFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 13);

/**
 * Describes the message users.OrganizationGroupFilter.
 * Use `create(OrganizationGroupFilterSchema)` to create a new message.
 */
export const OrganizationGroupFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 14);

/**
 * Describes the message users.OrganizationFilter.
 * Use `create(OrganizationFilterSchema)` to create a new message.
 */
export const OrganizationFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 15);

/**
 * Describes the message users.RegisterRequest.
 * Use `create(RegisterRequestSchema)` to create a new message.
 */
export const RegisterRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 16);

/**
 * Describes the message users.RegisterResponse.
 * Use `create(RegisterResponseSchema)` to create a new message.
 */
export const RegisterResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 17);

/**
 * Describes the message users.LoginRequest.
 * Use `create(LoginRequestSchema)` to create a new message.
 */
export const LoginRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 18);

/**
 * Describes the message users.LoginResponse.
 * Use `create(LoginResponseSchema)` to create a new message.
 */
export const LoginResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 19);

/**
 * Describes the message users.LogoutRequest.
 * Use `create(LogoutRequestSchema)` to create a new message.
 */
export const LogoutRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 20);

/**
 * Describes the message users.LogoutResponse.
 * Use `create(LogoutResponseSchema)` to create a new message.
 */
export const LogoutResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 21);

/**
 * Describes the message users.UpdateUserRequest.
 * Use `create(UpdateUserRequestSchema)` to create a new message.
 */
export const UpdateUserRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 22);

/**
 * Describes the message users.UpdateUserResponse.
 * Use `create(UpdateUserResponseSchema)` to create a new message.
 */
export const UpdateUserResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 23);

/**
 * Describes the message users.ListUsersRequest.
 * Use `create(ListUsersRequestSchema)` to create a new message.
 */
export const ListUsersRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 24);

/**
 * Describes the message users.ListUsersResponse.
 * Use `create(ListUsersResponseSchema)` to create a new message.
 */
export const ListUsersResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 25);

/**
 * Describes the message users.CreateOrganizationGroupRequest.
 * Use `create(CreateOrganizationGroupRequestSchema)` to create a new message.
 */
export const CreateOrganizationGroupRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 26);

/**
 * Describes the message users.CreateOrganizationGroupResponse.
 * Use `create(CreateOrganizationGroupResponseSchema)` to create a new message.
 */
export const CreateOrganizationGroupResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 27);

/**
 * Describes the message users.UpdateOrganizationGroupRequest.
 * Use `create(UpdateOrganizationGroupRequestSchema)` to create a new message.
 */
export const UpdateOrganizationGroupRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 28);

/**
 * Describes the message users.UpdateOrganizationGroupResponse.
 * Use `create(UpdateOrganizationGroupResponseSchema)` to create a new message.
 */
export const UpdateOrganizationGroupResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 29);

/**
 * Describes the message users.DeleteOrganizationGroupRequest.
 * Use `create(DeleteOrganizationGroupRequestSchema)` to create a new message.
 */
export const DeleteOrganizationGroupRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 30);

/**
 * Describes the message users.DeleteOrganizationGroupResponse.
 * Use `create(DeleteOrganizationGroupResponseSchema)` to create a new message.
 */
export const DeleteOrganizationGroupResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 31);

/**
 * Describes the message users.ListOrganizationGroupRequest.
 * Use `create(ListOrganizationGroupRequestSchema)` to create a new message.
 */
export const ListOrganizationGroupRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 32);

/**
 * Describes the message users.ListOrganizationGroupResponse.
 * Use `create(ListOrganizationGroupResponseSchema)` to create a new message.
 */
export const ListOrganizationGroupResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 33);

/**
 * Describes the message users.CreateOrganizationRequest.
 * Use `create(CreateOrganizationRequestSchema)` to create a new message.
 */
export const CreateOrganizationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 34);

/**
 * Describes the message users.CreateOrganizationResponse.
 * Use `create(CreateOrganizationResponseSchema)` to create a new message.
 */
export const CreateOrganizationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 35);

/**
 * Describes the message users.UpdateOrganizationRequest.
 * Use `create(UpdateOrganizationRequestSchema)` to create a new message.
 */
export const UpdateOrganizationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 36);

/**
 * Describes the message users.UpdateOrganizationResponse.
 * Use `create(UpdateOrganizationResponseSchema)` to create a new message.
 */
export const UpdateOrganizationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 37);

/**
 * Describes the message users.DeleteOrganizationRequest.
 * Use `create(DeleteOrganizationRequestSchema)` to create a new message.
 */
export const DeleteOrganizationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 38);

/**
 * Describes the message users.DeleteOrganizationResponse.
 * Use `create(DeleteOrganizationResponseSchema)` to create a new message.
 */
export const DeleteOrganizationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 39);

/**
 * Describes the message users.ListOrganizationRequest.
 * Use `create(ListOrganizationRequestSchema)` to create a new message.
 */
export const ListOrganizationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 40);

/**
 * Describes the message users.ListOrganizationResponse.
 * Use `create(ListOrganizationResponseSchema)` to create a new message.
 */
export const ListOrganizationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 41);

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
 * Describes the enum users.UserGender.
 */
export const UserGenderSchema = /*@__PURE__*/
  enumDesc(file_users_users, 2);

/**
 * @generated from enum users.UserGender
 */
export const UserGender = /*@__PURE__*/
  tsEnum(UserGenderSchema);

/**
 * Describes the enum users.OrganizationType.
 */
export const OrganizationTypeSchema = /*@__PURE__*/
  enumDesc(file_users_users, 3);

/**
 * @generated from enum users.OrganizationType
 */
export const OrganizationType = /*@__PURE__*/
  tsEnum(OrganizationTypeSchema);

/**
 * Service for managing users (authentication, user details, and user roles).
 *
 * @generated from service users.UsersService
 */
export const UsersService = /*@__PURE__*/
  serviceDesc(file_users_users, 0);

