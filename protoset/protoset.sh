/c/protoc/bin/protoc.exe \
  --descriptor_set_out=protoset.bin \
  --include_imports \
  --proto_path=../proto/sessions \
  --proto_path="/c/protoc/include" \
  session.proto