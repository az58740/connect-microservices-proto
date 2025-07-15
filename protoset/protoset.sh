protoc \
  --descriptor_set_out=protoset.bin \
  --include_imports \
  --proto_path=../proto/reservations \
  --proto_path="C:/protoc-27.0-rc-1-win64/include" \
  reservation.proto