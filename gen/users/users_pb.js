// @generated by protoc-gen-es v2.2.3 with parameter "target=ts+js+dts,import_extension=js,import_extension=ts"
// @generated from file users/users.proto (package users, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, serviceDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file users/users.proto.
 */
export const file_users_users = /*@__PURE__*/
  fileDesc("ChF1c2Vycy91c2Vycy5wcm90bxIFdXNlcnMiMgoKUGVybWlzc2lvbhIUCgxwZXJtaXNzaW9uSWQYASABKAkSDgoGYWN0aW9uGAIgASgJIjQKCFJlc291cmNlEhIKCnJlc291cmNlSWQYASABKAkSFAoMcmVzb3VyY2VOYW1lGAIgASgJIogBCgRSb2xlEg4KBnJvbGVJZBgBIAEoCRIQCghyb2xlTmFtZRgCIAEoCRIhCghyZXNvdXJjZRgDIAEoCzIPLnVzZXJzLlJlc291cmNlEhMKC2Rlc2NyaXB0aW9uGAQgASgJEiYKC3Blcm1pc3Npb25zGAUgAygLMhEudXNlcnMuUGVybWlzc2lvbiKBAgoLVXNlclByb2ZpbGUSEAoIZnVsbE5hbWUYASABKAkSDQoFZW1haWwYAiABKAkSEwoLcGhvbmVOdW1iZXIYAyABKAkSDwoHY291bnRyeRgEIAEoCRIQCghwcm92aW5jZRgFIAEoCRIMCgRjaXR5GAYgASgJEhQKDGFkZHJlc3NMaW5lMRgHIAEoCRIUCgxhZGRyZXNzTGluZTIYCCABKAkSDwoHemlwQ29kZRgJIAEoCRILCgNpbWcYCiABKAkSIQoGZ2VuZGVyGAsgASgOMhEudXNlcnMuVXNlckdlbmRlchIeChZwaG9uZW51bWJlclJlc2VydmF0aW9uGAwgASgJIqsDCgRVc2VyEg4KBnVzZXJJZBgBIAEoCRIjCgdwcm9maWxlGAIgASgLMhIudXNlcnMuVXNlclByb2ZpbGUSGgoFcm9sZXMYAyADKAsyCy51c2Vycy5Sb2xlEiEKBnN0YXR1cxgEIAEoDjIRLnVzZXJzLlVzZXJTdGF0dXMSLQoMb3JnYW5pemF0aW9uGAUgASgLMhcudXNlcnMuQ29udHJhY3RpbmdQYXJ0eRIQCgh1c2VybmFtZRgGIAEoCRIUCgxwYXNzd29yZEhhc2gYByABKAkSHQoEdHlwZRgIIAEoDjIPLnVzZXJzLlVzZXJUeXBlEiYKDXVzZXJDb250cmFjdHMYCSADKAsyDy51c2Vycy5Db250cmFjdBIdCghlbXBsb3llchgKIAEoCzILLnVzZXJzLlVzZXISFAoMaXNTZWFyY2hhYmxlGAsgASgIEi0KCWNyZWF0ZWRBdBgMIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASLQoJZGVsZXRlZEF0GA0gASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCK8AgoKVXNlckZpbHRlchIOCgZ1c2VySWQYASABKAkSEAoIdXNlcm5hbWUYAiABKAkSDQoFZW1haWwYAyABKAkSDgoGcm9sZUlkGAQgASgJEhYKDm9yZ2FuaXphdGlvbklkGAUgASgJEhMKC3VzZXJTdGF0dXNlGAYgASgJEg8KB2NvdW50cnkYByABKAkSEAoIcHJvdmluY2UYCCABKAkSDAoEY2l0eRgJIAEoCRIQCgh1c2VyVHlwZRgKIAEoCRIPCgdncm91cElkGAsgASgJEhIKCmVtcGxveWVySWQYDCABKAkSFwoPb3Bwb3NpdGVTdGF0dXNlGA0gASgJEhQKDG9wcG9zaXRlVHlwZRgOIAEoCRIUCgxvcHBvc2l0ZVR5cDIYDyABKAkSEwoLcGhvbmVOdW1iZXIYECABKAkigQEKClBhZ2luYXRpb24SDAoEcGFnZRgBIAEoBRIRCglwYWdlX3NpemUYAiABKAUSFAoHc29ydF9ieRgDIAEoCUgAiAEBEhwKD3NvcnRfZGVzY2VuZGluZxgEIAEoCEgBiAEBQgoKCF9zb3J0X2J5QhIKEF9zb3J0X2Rlc2NlbmRpbmciigEKD1JlZ2lzdGVyUmVxdWVzdBIMCgRuYW1lGAEgASgJEg0KBWVtYWlsGAIgASgJEhMKC3Bob25lbnVtYmVyGAMgASgJEhAKCHVzZXJuYW1lGAQgASgJEhAKCHBhc3N3b3JkGAUgASgJEiEKBmdlbmRlchgGIAEoDjIRLnVzZXJzLlVzZXJHZW5kZXIiMwoQUmVnaXN0ZXJSZXNwb25zZRIOCgZ1c2VySWQYASABKAkSDwoHbWVzc2FnZRgCIAEoCSIyCgxMb2dpblJlcXVlc3QSEAoIdXNlcm5hbWUYASABKAkSEAoIcGFzc3dvcmQYAiABKAkiLwoNTG9naW5SZXNwb25zZRINCgV0b2tlbhgBIAEoCRIPCgdzdWNjZXNzGAIgASgIIpUBChVGb3Jnb3RQYXNzd29yZFJlcXVlc3QSEgoFZW1haWwYASABKAlIAIgBARIYCgtwaG9uZW51bWJlchgCIAEoCUgBiAEBEh4KEXJlc2V0cGFzc3dvcmRsaW5rGAMgASgJSAKIAQFCCAoGX2VtYWlsQg4KDF9waG9uZW51bWJlckIUChJfcmVzZXRwYXNzd29yZGxpbmsiOAoWRm9yZ290UGFzc3dvcmRSZXNwb25zZRINCgV0b2tlbhgBIAEoCRIPCgdzdWNjZXNzGAIgASgIIh8KDUxvZ291dFJlcXVlc3QSDgoGdXNlcklkGAEgASgJIiEKDkxvZ291dFJlc3BvbnNlEg8KB3N1Y2Nlc3MYASABKAgiLgoRVXBkYXRlVXNlclJlcXVlc3QSGQoEdXNlchgBIAEoCzILLnVzZXJzLlVzZXIiJQoSVXBkYXRlVXNlclJlc3BvbnNlEg8KB21lc3NhZ2UYASABKAkiXAoQTGlzdFVzZXJzUmVxdWVzdBIlCgpwYWdpbmF0aW9uGAEgASgLMhEudXNlcnMuUGFnaW5hdGlvbhIhCgZmaWx0ZXIYAiABKAsyES51c2Vycy5Vc2VyRmlsdGVyIl0KEUxpc3RVc2Vyc1Jlc3BvbnNlEhoKBXVzZXJzGAEgAygLMgsudXNlcnMuVXNlchIXCg9uZXh0X3BhZ2VfdG9rZW4YAiABKAkSEwoLdG90YWxfcGFnZXMYAyABKAUiZQoRT3JnYW5pemF0aW9uR3JvdXASCgoCaWQYASABKAkSDAoEbmFtZRgCIAEoCRITCgtkZXNjcmlwdGlvbhgDIAEoCRIhCgZzdGF0dXMYBCABKA4yES51c2Vycy5Vc2VyU3RhdHVzIo8BChdPcmdhbml6YXRpb25Hcm91cEZpbHRlchIUCgdncm91cElkGAEgASgJSACIAQESFgoJZ3JvdXBOYW1lGAIgASgJSAGIAQESGgoNZ3JvdXBfc3RhdHVzZRgDIAEoCUgCiAEBQgoKCF9ncm91cElkQgwKCl9ncm91cE5hbWVCEAoOX2dyb3VwX3N0YXR1c2UiZgoeQ3JlYXRlT3JnYW5pemF0aW9uR3JvdXBSZXF1ZXN0EgwKBG5hbWUYASABKAkSEwoLZGVzY3JpcHRpb24YAiABKAkSIQoGc3RhdHVzGAMgASgOMhEudXNlcnMuVXNlclN0YXR1cyIyCh9DcmVhdGVPcmdhbml6YXRpb25Hcm91cFJlc3BvbnNlEg8KB21lc3NhZ2UYASABKAkiSQoeVXBkYXRlT3JnYW5pemF0aW9uR3JvdXBSZXF1ZXN0EicKBWdyb3VwGAEgASgLMhgudXNlcnMuT3JnYW5pemF0aW9uR3JvdXAiMgofVXBkYXRlT3JnYW5pemF0aW9uR3JvdXBSZXNwb25zZRIPCgdtZXNzYWdlGAEgASgJIjEKHkRlbGV0ZU9yZ2FuaXphdGlvbkdyb3VwUmVxdWVzdBIPCgdncm91cElkGAEgASgJIjIKH0RlbGV0ZU9yZ2FuaXphdGlvbkdyb3VwUmVzcG9uc2USDwoHbWVzc2FnZRgBIAEoCSJOChxMaXN0T3JnYW5pemF0aW9uR3JvdXBSZXF1ZXN0Ei4KBmZpbHRlchgBIAEoCzIeLnVzZXJzLk9yZ2FuaXphdGlvbkdyb3VwRmlsdGVyIkkKHUxpc3RPcmdhbml6YXRpb25Hcm91cFJlc3BvbnNlEigKBmdyb3VwcxgBIAMoCzIYLnVzZXJzLk9yZ2FuaXphdGlvbkdyb3VwIswBChBDb250cmFjdGluZ1BhcnR5EhYKDm9yZ2FuaXphdGlvbklkGAEgASgJEhgKEG9yZ2FuaXphdGlvbk5hbWUYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkSJwoFZ3JvdXAYBCABKAsyGC51c2Vycy5Pcmdhbml6YXRpb25Hcm91cBIlCgR0eXBlGAUgASgOMhcudXNlcnMuT3JnYW5pemF0aW9uVHlwZRIhCgZzdGF0dXMYBiABKA4yES51c2Vycy5Vc2VyU3RhdHVzIuoBChJPcmdhbml6YXRpb25GaWx0ZXISGwoOb3JnYW5pemF0aW9uSWQYASABKAlIAIgBARIgChNvcmdhbml6YXRpb25ncm91cElkGAIgASgJSAGIAQESIAoTb3JnYW5pemF0aW9uU3RhdHVzZRgDIAEoCUgCiAEBEhwKD29wcG9zaXRlU3RhdHVzZRgEIAEoCUgDiAEBQhEKD19vcmdhbml6YXRpb25JZEIWChRfb3JnYW5pemF0aW9uZ3JvdXBJZEIWChRfb3JnYW5pemF0aW9uU3RhdHVzZUISChBfb3Bwb3NpdGVTdGF0dXNlIpkBChlDcmVhdGVPcmdhbml6YXRpb25SZXF1ZXN0EhgKEG9yZ2FuaXphdGlvbk5hbWUYASABKAkSIAoTb3JnYW5pemF0aW9uZ3JvdXBJZBgCIAEoCUgAiAEBEhgKC2Rlc2NyaXB0aW9uGAMgASgJSAGIAQFCFgoUX29yZ2FuaXphdGlvbmdyb3VwSWRCDgoMX2Rlc2NyaXB0aW9uIkUKGkNyZWF0ZU9yZ2FuaXphdGlvblJlc3BvbnNlEhYKDm9yZ2FuaXphdGlvbklkGAEgASgJEg8KB21lc3NhZ2UYAiABKAkiSgoZVXBkYXRlT3JnYW5pemF0aW9uUmVxdWVzdBItCgxvcmdhbml6YXRpb24YASABKAsyFy51c2Vycy5Db250cmFjdGluZ1BhcnR5Ii0KGlVwZGF0ZU9yZ2FuaXphdGlvblJlc3BvbnNlEg8KB21lc3NhZ2UYASABKAkiMwoZRGVsZXRlT3JnYW5pemF0aW9uUmVxdWVzdBIWCg5vcmdhbml6YXRpb25JZBgBIAEoCSItChpEZWxldGVPcmdhbml6YXRpb25SZXNwb25zZRIPCgdtZXNzYWdlGAEgASgJIkQKF0xpc3RPcmdhbml6YXRpb25SZXF1ZXN0EikKBmZpbHRlchgBIAEoCzIZLnVzZXJzLk9yZ2FuaXphdGlvbkZpbHRlciJKChhMaXN0T3JnYW5pemF0aW9uUmVzcG9uc2USLgoNb3JnYW5pemF0aW9ucxgBIAMoCzIXLnVzZXJzLkNvbnRyYWN0aW5nUGFydHki0QMKCENvbnRyYWN0EhIKCmNvbnRyYWN0SWQYASABKAkSHQoIZW1wbG95ZXIYAiABKAsyCy51c2Vycy5Vc2VyEh0KCGVtcGxveWVlGAMgASgLMgsudXNlcnMuVXNlchINCgV0aXRsZRgEIAEoCRITCgtkZXNjcmlwdGlvbhgFIAEoCRIOCgZhbW91bnQYBiABKAESEAoIY3VycmVuY3kYByABKAkSJQoGc3RhdHVzGAggASgOMhUudXNlcnMuQ29udHJhY3RTdGF0dXMSLQoJc3RhcnREYXRlGAkgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIrCgdlbmREYXRlGAogASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBINCgV0ZXJtcxgLIAEoCRItCgljcmVhdGVkQXQYDCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi0KCXVwZGF0ZWRBdBgNIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASHgoWY29udHJhY3RSZXF1ZXN0RmlsZVVybBgOIAEoCRIdChVzaWduZWRDb250cmFjdEZpbGVVcmwYDyABKAkiiAIKDkNvbnRyYWN0RmlsdGVyEhIKCmNvbnRyYWN0SWQYASABKAkSEgoKZW1wbG95ZXJJZBgCIAEoCRISCgplbXBsb3llZUlkGAMgASgJEi4KD2NvbnRyYWN0U3RhdHVzZRgEIAEoDjIVLnVzZXJzLkNvbnRyYWN0U3RhdHVzEi0KCXN0YXJ0RGF0ZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASKwoHZW5kRGF0ZRgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASLgoPb3Bwb3NpdGVTdGF0dXNlGAcgASgOMhUudXNlcnMuQ29udHJhY3RTdGF0dXMipAEKFUNyZWF0ZUNvbnRyYWN0UmVxdWVzdBISCgplbXBsb3llcklkGAEgASgJEhIKCmVtcGxveWVlSWQYAiABKAkSLgoPY29udHJhY3RTdGF0dXNlGAMgASgOMhUudXNlcnMuQ29udHJhY3RTdGF0dXMSEwoLZGVzY3JpcHRpb24YBCABKAkSHgoWY29udHJhY3RSZXF1ZXN0RmlsZVVybBgFIAEoCSI9ChZDcmVhdGVDb250cmFjdFJlc3BvbnNlEhIKCmNvbnRyYWN0SWQYASABKAkSDwoHbWVzc2FnZRgCIAEoCSI6ChVVcGRhdGVDb250cmFjdFJlcXVlc3QSIQoIY29udHJhY3QYASABKAsyDy51c2Vycy5Db250cmFjdCIpChZVcGRhdGVDb250cmFjdFJlc3BvbnNlEg8KB21lc3NhZ2UYASABKAkiKwoVRGVsZXRlQ29udHJhY3RSZXF1ZXN0EhIKCmNvbnRyYWN0SWQYASABKAkiKQoWRGVsZXRlQ29udHJhY3RSZXNwb25zZRIPCgdtZXNzYWdlGAEgASgJImMKE0xpc3RDb250cmFjdFJlcXVlc3QSJQoGZmlsdGVyGAEgASgLMhUudXNlcnMuQ29udHJhY3RGaWx0ZXISJQoKcGFnaW5hdGlvbhgCIAEoCzIRLnVzZXJzLlBhZ2luYXRpb24iTwoUTGlzdENvbnRyYWN0UmVzcG9uc2USIgoJY29udHJhY3RzGAEgAygLMg8udXNlcnMuQ29udHJhY3QSEwoLdG90YWxfcGFnZXMYAiABKAUiJQoLR2VvbG9jYXRpb24SCgoCZW4YASABKAkSCgoCZmEYAiABKAkiHwoRR2VvbG9jYXRpb25GaWx0ZXISCgoCZW4YASABKAkiQQoVR2V0R2VvbG9jYXRpb25SZXF1ZXN0EigKBmZpbHRlchgBIAEoCzIYLnVzZXJzLkdlb2xvY2F0aW9uRmlsdGVyIj8KFkdldEdlb2xvY2F0aW9uUmVzcG9uc2USJQoJbG9jYXRpb25zGAEgAygLMhIudXNlcnMuR2VvbG9jYXRpb24ikgIKB0pvYlBvc3QSEQoJam9iUG9zdElkGAEgASgJEhIKCmVtcGxveWVySWQYAiABKAkSDQoFdGl0bGUYAyABKAkSEwoLZGVzY3JpcHRpb24YBCABKAkSFgoOcmVxdWlyZWRTa2lsbHMYBSADKAkSDgoGc2FsYXJ5GAYgASgBEhAKCGN1cnJlbmN5GAcgASgJEiQKBnN0YXR1cxgIIAEoDjIULnVzZXJzLkpvYlBvc3RTdGF0dXMSLQoJY3JlYXRlZEF0GAkgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBItCgl1cGRhdGVkQXQYCiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wKo8BCgpVc2VyU3RhdHVzEhsKF1VTRVJfU1RBVFVTX1VOU1BFQ0lGSUVEEAASFgoSVVNFUl9TVEFUVVNfQUNUSVZFEAESGAoUVVNFUl9TVEFUVVNfSU5BQ1RJVkUQAhIZChVVU0VSX1NUQVRVU19TVVNQRU5ERUQQAxIXChNVU0VSX1NUQVRVU19ERUxFVEVEEAQquAEKCFVzZXJUeXBlEhUKEVVTRVJfVFlQRV9ERUZBVUxUEAASEwoPVVNFUl9UWVBFX0FETUlOEAESHAoYVVNFUl9UWVBFX0NPTlRSQUNUX1BBUlRZEAISHwobVVNFUl9UWVBFX0NPTlRSQUNUX0VNUExPWUVFEAMSHwobVVNFUl9UWVBFX0NPTlRSQUNUX0VNUExPWUVSEAQSIAocVVNFUl9UWVBFX0NPTlRSQUNUX0FQUExJQ0FOVBAFKlEKClVzZXJHZW5kZXISFAoQVVNFUl9HZW5kZXJfTWFsZRAAEhYKElVTRVJfR2VuZGVyX0ZlbWFsZRABEhUKEVVTRVJfR2VuZGVyX090aGVyEAIqfQoQT3JnYW5pemF0aW9uVHlwZRIUChBPUkdfVHlwZV9ERUZBVUxUEAASEAoMU1BPUlRTX0dST1VQEAESGAoUUkVDUkVBVElPTkFMX0NFTlRFUlMQAhIRCg1TQUxFU19DRU5URVJTEAMSFAoQTUVESUNBTF9TRVJWSUNFUxAEKqMCCg5Db250cmFjdFN0YXR1cxIfChtDT05UUkFDVF9TVEFUVVNfVU5TUEVDSUZJRUQQABIbChdDT05UUkFDVF9TVEFUVVNfUEVORElORxABEiAKHENPTlRSQUNUX1NUQVRVU19TRU5ERE9DVU1FTlQQAhIcChhDT05UUkFDVF9TVEFUVVNfQVBQUk9WRUQQAxIcChhDT05UUkFDVF9TVEFUVVNfUkVKRUNURUQQBBIaChZDT05UUkFDVF9TVEFUVVNfU0lHTkVEEAUSGgoWQ09OVFJBQ1RfU1RBVFVTX0FDVElWRRAGEh0KGUNPTlRSQUNUX1NUQVRVU19DT01QTEVURUQQBxIeChpDT05UUkFDVF9TVEFUVVNfVEVSTUlOQVRFRBAIKoUBCg1Kb2JQb3N0U3RhdHVzEh8KG0pPQl9QT1NUX1NUQVRVU19VTlNQRUNJRklFRBAAEhgKFEpPQl9QT1NUX1NUQVRVU19PUEVOEAESGgoWSk9CX1BPU1RfU1RBVFVTX0NMT1NFRBACEh0KGUpPQl9QT1NUX1NUQVRVU19DQU5DRUxMRUQQAzL7DAoMVXNlcnNTZXJ2aWNlEj8KDFJlZ2lzdGVyVXNlchIWLnVzZXJzLlJlZ2lzdGVyUmVxdWVzdBoXLnVzZXJzLlJlZ2lzdGVyUmVzcG9uc2USNgoJTG9naW5Vc2VyEhMudXNlcnMuTG9naW5SZXF1ZXN0GhQudXNlcnMuTG9naW5SZXNwb25zZRI+CglMaXN0VXNlcnMSFy51c2Vycy5MaXN0VXNlcnNSZXF1ZXN0GhgudXNlcnMuTGlzdFVzZXJzUmVzcG9uc2USQQoKVXBkYXRlVXNlchIYLnVzZXJzLlVwZGF0ZVVzZXJSZXF1ZXN0GhkudXNlcnMuVXBkYXRlVXNlclJlc3BvbnNlEk0KDkZvcmdvdFBhc3N3b3JkEhwudXNlcnMuRm9yZ290UGFzc3dvcmRSZXF1ZXN0Gh0udXNlcnMuRm9yZ290UGFzc3dvcmRSZXNwb25zZRJoChdDcmVhdGVPcmdhbml6YXRpb25Hcm91cBIlLnVzZXJzLkNyZWF0ZU9yZ2FuaXphdGlvbkdyb3VwUmVxdWVzdBomLnVzZXJzLkNyZWF0ZU9yZ2FuaXphdGlvbkdyb3VwUmVzcG9uc2USaAoXVXBkYXRlT3JnYW5pemF0aW9uR3JvdXASJS51c2Vycy5VcGRhdGVPcmdhbml6YXRpb25Hcm91cFJlcXVlc3QaJi51c2Vycy5VcGRhdGVPcmdhbml6YXRpb25Hcm91cFJlc3BvbnNlEmgKF0RlbGV0ZU9yZ2FuaXphdGlvbkdyb3VwEiUudXNlcnMuRGVsZXRlT3JnYW5pemF0aW9uR3JvdXBSZXF1ZXN0GiYudXNlcnMuRGVsZXRlT3JnYW5pemF0aW9uR3JvdXBSZXNwb25zZRJiChVMaXN0T3JnYW5pemF0aW9uR3JvdXASIy51c2Vycy5MaXN0T3JnYW5pemF0aW9uR3JvdXBSZXF1ZXN0GiQudXNlcnMuTGlzdE9yZ2FuaXphdGlvbkdyb3VwUmVzcG9uc2USWQoSQ3JlYXRlT3JnYW5pemF0aW9uEiAudXNlcnMuQ3JlYXRlT3JnYW5pemF0aW9uUmVxdWVzdBohLnVzZXJzLkNyZWF0ZU9yZ2FuaXphdGlvblJlc3BvbnNlElkKElVwZGF0ZU9yZ2FuaXphdGlvbhIgLnVzZXJzLlVwZGF0ZU9yZ2FuaXphdGlvblJlcXVlc3QaIS51c2Vycy5VcGRhdGVPcmdhbml6YXRpb25SZXNwb25zZRJZChJEZWxldGVPcmdhbml6YXRpb24SIC51c2Vycy5EZWxldGVPcmdhbml6YXRpb25SZXF1ZXN0GiEudXNlcnMuRGVsZXRlT3JnYW5pemF0aW9uUmVzcG9uc2USUwoQTGlzdE9yZ2FuaXphdGlvbhIeLnVzZXJzLkxpc3RPcmdhbml6YXRpb25SZXF1ZXN0Gh8udXNlcnMuTGlzdE9yZ2FuaXphdGlvblJlc3BvbnNlEk0KDkNyZWF0ZUNvbnRyYWN0EhwudXNlcnMuQ3JlYXRlQ29udHJhY3RSZXF1ZXN0Gh0udXNlcnMuQ3JlYXRlQ29udHJhY3RSZXNwb25zZRJNCg5VcGRhdGVDb250cmFjdBIcLnVzZXJzLlVwZGF0ZUNvbnRyYWN0UmVxdWVzdBodLnVzZXJzLlVwZGF0ZUNvbnRyYWN0UmVzcG9uc2USTQoORGVsZXRlQ29udHJhY3QSHC51c2Vycy5EZWxldGVDb250cmFjdFJlcXVlc3QaHS51c2Vycy5EZWxldGVDb250cmFjdFJlc3BvbnNlEkcKDExpc3RDb250cmFjdBIaLnVzZXJzLkxpc3RDb250cmFjdFJlcXVlc3QaGy51c2Vycy5MaXN0Q29udHJhY3RSZXNwb25zZRJLCgxHZXRDb3VudHJpZXMSHC51c2Vycy5HZXRHZW9sb2NhdGlvblJlcXVlc3QaHS51c2Vycy5HZXRHZW9sb2NhdGlvblJlc3BvbnNlEksKDEdldFByb3ZpbmNlcxIcLnVzZXJzLkdldEdlb2xvY2F0aW9uUmVxdWVzdBodLnVzZXJzLkdldEdlb2xvY2F0aW9uUmVzcG9uc2USSAoJR2V0Q2l0aWVzEhwudXNlcnMuR2V0R2VvbG9jYXRpb25SZXF1ZXN0Gh0udXNlcnMuR2V0R2VvbG9jYXRpb25SZXNwb25zZUJDWkFnaXRodWIuY29tL2F6NTg3NDAvY29ubmVjdC1taWNyb3NlcnZpY2VzLXByb3RvL2dvbGFuZy91c2Vyczt1c2Vyc2IGcHJvdG8z", [file_google_protobuf_timestamp]);

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
 * Describes the message users.UserProfile.
 * Use `create(UserProfileSchema)` to create a new message.
 */
export const UserProfileSchema = /*@__PURE__*/
  messageDesc(file_users_users, 3);

/**
 * Describes the message users.User.
 * Use `create(UserSchema)` to create a new message.
 */
export const UserSchema = /*@__PURE__*/
  messageDesc(file_users_users, 4);

/**
 * Describes the message users.UserFilter.
 * Use `create(UserFilterSchema)` to create a new message.
 */
export const UserFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 5);

/**
 * Describes the message users.Pagination.
 * Use `create(PaginationSchema)` to create a new message.
 */
export const PaginationSchema = /*@__PURE__*/
  messageDesc(file_users_users, 6);

/**
 * Describes the message users.RegisterRequest.
 * Use `create(RegisterRequestSchema)` to create a new message.
 */
export const RegisterRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 7);

/**
 * Describes the message users.RegisterResponse.
 * Use `create(RegisterResponseSchema)` to create a new message.
 */
export const RegisterResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 8);

/**
 * Describes the message users.LoginRequest.
 * Use `create(LoginRequestSchema)` to create a new message.
 */
export const LoginRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 9);

/**
 * Describes the message users.LoginResponse.
 * Use `create(LoginResponseSchema)` to create a new message.
 */
export const LoginResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 10);

/**
 * Describes the message users.ForgotPasswordRequest.
 * Use `create(ForgotPasswordRequestSchema)` to create a new message.
 */
export const ForgotPasswordRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 11);

/**
 * Describes the message users.ForgotPasswordResponse.
 * Use `create(ForgotPasswordResponseSchema)` to create a new message.
 */
export const ForgotPasswordResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 12);

/**
 * Describes the message users.LogoutRequest.
 * Use `create(LogoutRequestSchema)` to create a new message.
 */
export const LogoutRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 13);

/**
 * Describes the message users.LogoutResponse.
 * Use `create(LogoutResponseSchema)` to create a new message.
 */
export const LogoutResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 14);

/**
 * Describes the message users.UpdateUserRequest.
 * Use `create(UpdateUserRequestSchema)` to create a new message.
 */
export const UpdateUserRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 15);

/**
 * Describes the message users.UpdateUserResponse.
 * Use `create(UpdateUserResponseSchema)` to create a new message.
 */
export const UpdateUserResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 16);

/**
 * Describes the message users.ListUsersRequest.
 * Use `create(ListUsersRequestSchema)` to create a new message.
 */
export const ListUsersRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 17);

/**
 * Describes the message users.ListUsersResponse.
 * Use `create(ListUsersResponseSchema)` to create a new message.
 */
export const ListUsersResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 18);

/**
 * Describes the message users.OrganizationGroup.
 * Use `create(OrganizationGroupSchema)` to create a new message.
 */
export const OrganizationGroupSchema = /*@__PURE__*/
  messageDesc(file_users_users, 19);

/**
 * Describes the message users.OrganizationGroupFilter.
 * Use `create(OrganizationGroupFilterSchema)` to create a new message.
 */
export const OrganizationGroupFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 20);

/**
 * Describes the message users.CreateOrganizationGroupRequest.
 * Use `create(CreateOrganizationGroupRequestSchema)` to create a new message.
 */
export const CreateOrganizationGroupRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 21);

/**
 * Describes the message users.CreateOrganizationGroupResponse.
 * Use `create(CreateOrganizationGroupResponseSchema)` to create a new message.
 */
export const CreateOrganizationGroupResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 22);

/**
 * Describes the message users.UpdateOrganizationGroupRequest.
 * Use `create(UpdateOrganizationGroupRequestSchema)` to create a new message.
 */
export const UpdateOrganizationGroupRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 23);

/**
 * Describes the message users.UpdateOrganizationGroupResponse.
 * Use `create(UpdateOrganizationGroupResponseSchema)` to create a new message.
 */
export const UpdateOrganizationGroupResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 24);

/**
 * Describes the message users.DeleteOrganizationGroupRequest.
 * Use `create(DeleteOrganizationGroupRequestSchema)` to create a new message.
 */
export const DeleteOrganizationGroupRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 25);

/**
 * Describes the message users.DeleteOrganizationGroupResponse.
 * Use `create(DeleteOrganizationGroupResponseSchema)` to create a new message.
 */
export const DeleteOrganizationGroupResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 26);

/**
 * Describes the message users.ListOrganizationGroupRequest.
 * Use `create(ListOrganizationGroupRequestSchema)` to create a new message.
 */
export const ListOrganizationGroupRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 27);

/**
 * Describes the message users.ListOrganizationGroupResponse.
 * Use `create(ListOrganizationGroupResponseSchema)` to create a new message.
 */
export const ListOrganizationGroupResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 28);

/**
 * Describes the message users.ContractingParty.
 * Use `create(ContractingPartySchema)` to create a new message.
 */
export const ContractingPartySchema = /*@__PURE__*/
  messageDesc(file_users_users, 29);

/**
 * Describes the message users.OrganizationFilter.
 * Use `create(OrganizationFilterSchema)` to create a new message.
 */
export const OrganizationFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 30);

/**
 * Describes the message users.CreateOrganizationRequest.
 * Use `create(CreateOrganizationRequestSchema)` to create a new message.
 */
export const CreateOrganizationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 31);

/**
 * Describes the message users.CreateOrganizationResponse.
 * Use `create(CreateOrganizationResponseSchema)` to create a new message.
 */
export const CreateOrganizationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 32);

/**
 * Describes the message users.UpdateOrganizationRequest.
 * Use `create(UpdateOrganizationRequestSchema)` to create a new message.
 */
export const UpdateOrganizationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 33);

/**
 * Describes the message users.UpdateOrganizationResponse.
 * Use `create(UpdateOrganizationResponseSchema)` to create a new message.
 */
export const UpdateOrganizationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 34);

/**
 * Describes the message users.DeleteOrganizationRequest.
 * Use `create(DeleteOrganizationRequestSchema)` to create a new message.
 */
export const DeleteOrganizationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 35);

/**
 * Describes the message users.DeleteOrganizationResponse.
 * Use `create(DeleteOrganizationResponseSchema)` to create a new message.
 */
export const DeleteOrganizationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 36);

/**
 * Describes the message users.ListOrganizationRequest.
 * Use `create(ListOrganizationRequestSchema)` to create a new message.
 */
export const ListOrganizationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 37);

/**
 * Describes the message users.ListOrganizationResponse.
 * Use `create(ListOrganizationResponseSchema)` to create a new message.
 */
export const ListOrganizationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 38);

/**
 * Describes the message users.Contract.
 * Use `create(ContractSchema)` to create a new message.
 */
export const ContractSchema = /*@__PURE__*/
  messageDesc(file_users_users, 39);

/**
 * Describes the message users.ContractFilter.
 * Use `create(ContractFilterSchema)` to create a new message.
 */
export const ContractFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 40);

/**
 * Describes the message users.CreateContractRequest.
 * Use `create(CreateContractRequestSchema)` to create a new message.
 */
export const CreateContractRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 41);

/**
 * Describes the message users.CreateContractResponse.
 * Use `create(CreateContractResponseSchema)` to create a new message.
 */
export const CreateContractResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 42);

/**
 * Describes the message users.UpdateContractRequest.
 * Use `create(UpdateContractRequestSchema)` to create a new message.
 */
export const UpdateContractRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 43);

/**
 * Describes the message users.UpdateContractResponse.
 * Use `create(UpdateContractResponseSchema)` to create a new message.
 */
export const UpdateContractResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 44);

/**
 * Describes the message users.DeleteContractRequest.
 * Use `create(DeleteContractRequestSchema)` to create a new message.
 */
export const DeleteContractRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 45);

/**
 * Describes the message users.DeleteContractResponse.
 * Use `create(DeleteContractResponseSchema)` to create a new message.
 */
export const DeleteContractResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 46);

/**
 * Describes the message users.ListContractRequest.
 * Use `create(ListContractRequestSchema)` to create a new message.
 */
export const ListContractRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 47);

/**
 * Describes the message users.ListContractResponse.
 * Use `create(ListContractResponseSchema)` to create a new message.
 */
export const ListContractResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 48);

/**
 * Describes the message users.Geolocation.
 * Use `create(GeolocationSchema)` to create a new message.
 */
export const GeolocationSchema = /*@__PURE__*/
  messageDesc(file_users_users, 49);

/**
 * Describes the message users.GeolocationFilter.
 * Use `create(GeolocationFilterSchema)` to create a new message.
 */
export const GeolocationFilterSchema = /*@__PURE__*/
  messageDesc(file_users_users, 50);

/**
 * Describes the message users.GetGeolocationRequest.
 * Use `create(GetGeolocationRequestSchema)` to create a new message.
 */
export const GetGeolocationRequestSchema = /*@__PURE__*/
  messageDesc(file_users_users, 51);

/**
 * Describes the message users.GetGeolocationResponse.
 * Use `create(GetGeolocationResponseSchema)` to create a new message.
 */
export const GetGeolocationResponseSchema = /*@__PURE__*/
  messageDesc(file_users_users, 52);

/**
 * Describes the message users.JobPost.
 * Use `create(JobPostSchema)` to create a new message.
 */
export const JobPostSchema = /*@__PURE__*/
  messageDesc(file_users_users, 53);

/**
 * Describes the enum users.UserStatus.
 */
export const UserStatusSchema = /*@__PURE__*/
  enumDesc(file_users_users, 0);

/**
 * ==================== ENUMS ====================
 * Enum for user status.
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
 * Enum for user types.
 *
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
 * Enum for user gender.
 *
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
 * Enum for organization types.
 *
 * @generated from enum users.OrganizationType
 */
export const OrganizationType = /*@__PURE__*/
  tsEnum(OrganizationTypeSchema);

/**
 * Describes the enum users.ContractStatus.
 */
export const ContractStatusSchema = /*@__PURE__*/
  enumDesc(file_users_users, 4);

/**
 * Enum for contract statuses.
 *
 * @generated from enum users.ContractStatus
 */
export const ContractStatus = /*@__PURE__*/
  tsEnum(ContractStatusSchema);

/**
 * Describes the enum users.JobPostStatus.
 */
export const JobPostStatusSchema = /*@__PURE__*/
  enumDesc(file_users_users, 5);

/**
 * Enum for job post statuses.
 *
 * @generated from enum users.JobPostStatus
 */
export const JobPostStatus = /*@__PURE__*/
  tsEnum(JobPostStatusSchema);

/**
 * ==================== SERVICE DEFINITIONS ====================
 *
 * @generated from service users.UsersService
 */
export const UsersService = /*@__PURE__*/
  serviceDesc(file_users_users, 0);

