// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nft/query.proto

package types

import (
	context "context"
	fmt "fmt"
	query "github.com/cosmos/cosmos-sdk/types/query"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// this line is used by starport scaffolding # 3
type QueryGetNftRequest struct {
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (m *QueryGetNftRequest) Reset()         { *m = QueryGetNftRequest{} }
func (m *QueryGetNftRequest) String() string { return proto.CompactTextString(m) }
func (*QueryGetNftRequest) ProtoMessage()    {}
func (*QueryGetNftRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{0}
}
func (m *QueryGetNftRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryGetNftRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryGetNftRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryGetNftRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryGetNftRequest.Merge(m, src)
}
func (m *QueryGetNftRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryGetNftRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryGetNftRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryGetNftRequest proto.InternalMessageInfo

func (m *QueryGetNftRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type QueryGetNftResponse struct {
	Nft *Nft `protobuf:"bytes,1,opt,name=Nft,proto3" json:"Nft,omitempty"`
}

func (m *QueryGetNftResponse) Reset()         { *m = QueryGetNftResponse{} }
func (m *QueryGetNftResponse) String() string { return proto.CompactTextString(m) }
func (*QueryGetNftResponse) ProtoMessage()    {}
func (*QueryGetNftResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{1}
}
func (m *QueryGetNftResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryGetNftResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryGetNftResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryGetNftResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryGetNftResponse.Merge(m, src)
}
func (m *QueryGetNftResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryGetNftResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryGetNftResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryGetNftResponse proto.InternalMessageInfo

func (m *QueryGetNftResponse) GetNft() *Nft {
	if m != nil {
		return m.Nft
	}
	return nil
}

type QueryAllNftRequest struct {
	Pagination *query.PageRequest `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllNftRequest) Reset()         { *m = QueryAllNftRequest{} }
func (m *QueryAllNftRequest) String() string { return proto.CompactTextString(m) }
func (*QueryAllNftRequest) ProtoMessage()    {}
func (*QueryAllNftRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{2}
}
func (m *QueryAllNftRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllNftRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllNftRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllNftRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllNftRequest.Merge(m, src)
}
func (m *QueryAllNftRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllNftRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllNftRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllNftRequest proto.InternalMessageInfo

func (m *QueryAllNftRequest) GetPagination() *query.PageRequest {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryAllNftResponse struct {
	Nft        []*Nft              `protobuf:"bytes,1,rep,name=Nft,proto3" json:"Nft,omitempty"`
	Pagination *query.PageResponse `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllNftResponse) Reset()         { *m = QueryAllNftResponse{} }
func (m *QueryAllNftResponse) String() string { return proto.CompactTextString(m) }
func (*QueryAllNftResponse) ProtoMessage()    {}
func (*QueryAllNftResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{3}
}
func (m *QueryAllNftResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllNftResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllNftResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllNftResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllNftResponse.Merge(m, src)
}
func (m *QueryAllNftResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllNftResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllNftResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllNftResponse proto.InternalMessageInfo

func (m *QueryAllNftResponse) GetNft() []*Nft {
	if m != nil {
		return m.Nft
	}
	return nil
}

func (m *QueryAllNftResponse) GetPagination() *query.PageResponse {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryIsNftFullyReplicatedRequest struct {
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (m *QueryIsNftFullyReplicatedRequest) Reset()         { *m = QueryIsNftFullyReplicatedRequest{} }
func (m *QueryIsNftFullyReplicatedRequest) String() string { return proto.CompactTextString(m) }
func (*QueryIsNftFullyReplicatedRequest) ProtoMessage()    {}
func (*QueryIsNftFullyReplicatedRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{4}
}
func (m *QueryIsNftFullyReplicatedRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryIsNftFullyReplicatedRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryIsNftFullyReplicatedRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryIsNftFullyReplicatedRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryIsNftFullyReplicatedRequest.Merge(m, src)
}
func (m *QueryIsNftFullyReplicatedRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryIsNftFullyReplicatedRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryIsNftFullyReplicatedRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryIsNftFullyReplicatedRequest proto.InternalMessageInfo

func (m *QueryIsNftFullyReplicatedRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type QueryIsNftFullyReplicatedResponse struct {
	IsReplicated bool `protobuf:"varint,1,opt,name=isReplicated,proto3" json:"isReplicated,omitempty"`
}

func (m *QueryIsNftFullyReplicatedResponse) Reset()         { *m = QueryIsNftFullyReplicatedResponse{} }
func (m *QueryIsNftFullyReplicatedResponse) String() string { return proto.CompactTextString(m) }
func (*QueryIsNftFullyReplicatedResponse) ProtoMessage()    {}
func (*QueryIsNftFullyReplicatedResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ce02d034d3adf2e9, []int{5}
}
func (m *QueryIsNftFullyReplicatedResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryIsNftFullyReplicatedResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryIsNftFullyReplicatedResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryIsNftFullyReplicatedResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryIsNftFullyReplicatedResponse.Merge(m, src)
}
func (m *QueryIsNftFullyReplicatedResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryIsNftFullyReplicatedResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryIsNftFullyReplicatedResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryIsNftFullyReplicatedResponse proto.InternalMessageInfo

func (m *QueryIsNftFullyReplicatedResponse) GetIsReplicated() bool {
	if m != nil {
		return m.IsReplicated
	}
	return false
}

func init() {
	proto.RegisterType((*QueryGetNftRequest)(nil), "bluzelle.curium.nft.QueryGetNftRequest")
	proto.RegisterType((*QueryGetNftResponse)(nil), "bluzelle.curium.nft.QueryGetNftResponse")
	proto.RegisterType((*QueryAllNftRequest)(nil), "bluzelle.curium.nft.QueryAllNftRequest")
	proto.RegisterType((*QueryAllNftResponse)(nil), "bluzelle.curium.nft.QueryAllNftResponse")
	proto.RegisterType((*QueryIsNftFullyReplicatedRequest)(nil), "bluzelle.curium.nft.QueryIsNftFullyReplicatedRequest")
	proto.RegisterType((*QueryIsNftFullyReplicatedResponse)(nil), "bluzelle.curium.nft.QueryIsNftFullyReplicatedResponse")
}

func init() { proto.RegisterFile("nft/query.proto", fileDescriptor_ce02d034d3adf2e9) }

var fileDescriptor_ce02d034d3adf2e9 = []byte{
	// 468 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x93, 0x4f, 0x6f, 0xd3, 0x30,
	0x18, 0xc6, 0x9b, 0x56, 0x4c, 0x60, 0xfe, 0x49, 0x1e, 0x87, 0x2a, 0x82, 0x50, 0x22, 0xd8, 0xc6,
	0x90, 0x6c, 0xb5, 0x08, 0xce, 0x94, 0xc3, 0x2a, 0x2e, 0x15, 0xe4, 0x88, 0xb8, 0x24, 0xad, 0x13,
	0x2c, 0xb9, 0x76, 0x56, 0xbf, 0x41, 0x14, 0x34, 0x21, 0x71, 0xe4, 0x84, 0xc4, 0x97, 0xe1, 0xcc,
	0x89, 0xe3, 0x24, 0x2e, 0x1c, 0x51, 0xcb, 0x07, 0x41, 0xb1, 0x3d, 0x6d, 0x61, 0x69, 0xaa, 0x1d,
	0x63, 0x3d, 0xcf, 0xf3, 0xfe, 0x1e, 0xbf, 0x0e, 0xba, 0x29, 0x53, 0xa0, 0x87, 0x05, 0x9b, 0x2f,
	0x48, 0x3e, 0x57, 0xa0, 0xf0, 0x76, 0x22, 0x8a, 0x0f, 0x4c, 0x08, 0x46, 0x26, 0xc5, 0x9c, 0x17,
	0x33, 0x22, 0x53, 0xf0, 0x6f, 0x67, 0x4a, 0x65, 0x82, 0xd1, 0x38, 0xe7, 0x34, 0x96, 0x52, 0x41,
	0x0c, 0x5c, 0x49, 0x6d, 0x2d, 0xfe, 0xfe, 0x44, 0xe9, 0x99, 0xd2, 0x34, 0x89, 0x35, 0xb3, 0x59,
	0xf4, 0x5d, 0x3f, 0x61, 0x10, 0xf7, 0x69, 0x1e, 0x67, 0x5c, 0x1a, 0xb1, 0xd3, 0x5e, 0x2f, 0xe7,
	0xc9, 0x14, 0xec, 0x67, 0x78, 0x1f, 0xe1, 0x57, 0xa5, 0x61, 0xc4, 0x60, 0x9c, 0x42, 0xc4, 0x0e,
	0x0b, 0xa6, 0x01, 0xdf, 0x40, 0x6d, 0x3e, 0xed, 0x7a, 0x3d, 0x6f, 0xef, 0x4a, 0xd4, 0xe6, 0xd3,
	0x70, 0x88, 0xb6, 0x2b, 0x2a, 0x9d, 0x2b, 0xa9, 0x19, 0xde, 0x47, 0x9d, 0x71, 0x0a, 0x46, 0x77,
	0x75, 0xd0, 0x25, 0x35, 0xe0, 0xa4, 0x94, 0x97, 0xa2, 0xf0, 0x8d, 0x1b, 0x34, 0x14, 0xe2, 0xcc,
	0xa0, 0x03, 0x84, 0x4e, 0x09, 0x5d, 0xd0, 0x0e, 0xb1, 0x75, 0x48, 0x59, 0x87, 0xd8, 0xab, 0x71,
	0x75, 0xc8, 0xcb, 0x38, 0x63, 0xce, 0x1b, 0x9d, 0x71, 0x86, 0x5f, 0x3c, 0x47, 0x78, 0x12, 0xff,
	0x3f, 0x61, 0x67, 0x23, 0x21, 0x1e, 0x55, 0x58, 0xda, 0x86, 0x65, 0x77, 0x23, 0x8b, 0x1d, 0x54,
	0x81, 0x19, 0xa0, 0x9e, 0x61, 0x79, 0xa1, 0xc7, 0x29, 0x1c, 0x14, 0x42, 0x2c, 0x22, 0x96, 0x0b,
	0x3e, 0x89, 0x81, 0x4d, 0xd7, 0xdd, 0xf0, 0x08, 0xdd, 0x6b, 0xf0, 0xb8, 0x36, 0x21, 0xba, 0xc6,
	0xf5, 0xe9, 0xb9, 0xb1, 0x5f, 0x8e, 0x2a, 0x67, 0x83, 0x1f, 0x1d, 0x74, 0xc9, 0x24, 0xe1, 0x4f,
	0xa6, 0x3b, 0xde, 0xad, 0x6d, 0x7d, 0x7e, 0xe9, 0xfe, 0xde, 0x66, 0xa1, 0xe5, 0x08, 0x1f, 0x7c,
	0xfe, 0xf5, 0xf7, 0x5b, 0xfb, 0x2e, 0xbe, 0x43, 0x4f, 0x1c, 0xd4, 0x3a, 0xa8, 0x7b, 0x5c, 0xf4,
	0x23, 0x9f, 0x1e, 0xe1, 0x23, 0xb4, 0x35, 0x4e, 0x61, 0x28, 0x44, 0x13, 0x43, 0xe5, 0x3d, 0x34,
	0x31, 0x54, 0x37, 0x1b, 0xf6, 0x0c, 0x83, 0x8f, 0xbb, 0xeb, 0x18, 0xf0, 0x77, 0x0f, 0xdd, 0xaa,
	0xbb, 0x4e, 0xfc, 0x64, 0xfd, 0x90, 0x86, 0x95, 0xf9, 0x4f, 0x2f, 0x6a, 0x73, 0xa4, 0x7d, 0x43,
	0xfa, 0x08, 0x3f, 0xac, 0x25, 0xe5, 0x35, 0xd6, 0xe7, 0xcf, 0x7e, 0x2e, 0x03, 0xef, 0x78, 0x19,
	0x78, 0x7f, 0x96, 0x81, 0xf7, 0x75, 0x15, 0xb4, 0x8e, 0x57, 0x41, 0xeb, 0xf7, 0x2a, 0x68, 0xbd,
	0xde, 0xc9, 0x38, 0xbc, 0x2d, 0x12, 0x32, 0x51, 0xb3, 0x73, 0x71, 0xef, 0x4d, 0x20, 0x2c, 0x72,
	0xa6, 0x93, 0x2d, 0xf3, 0x7b, 0x3f, 0xfe, 0x17, 0x00, 0x00, 0xff, 0xff, 0x39, 0x1b, 0x4b, 0x1f,
	0x5f, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// this line is used by starport scaffolding # 2
	Nft(ctx context.Context, in *QueryGetNftRequest, opts ...grpc.CallOption) (*QueryGetNftResponse, error)
	NftAll(ctx context.Context, in *QueryAllNftRequest, opts ...grpc.CallOption) (*QueryAllNftResponse, error)
	IsNftFullyReplicated(ctx context.Context, in *QueryIsNftFullyReplicatedRequest, opts ...grpc.CallOption) (*QueryIsNftFullyReplicatedResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Nft(ctx context.Context, in *QueryGetNftRequest, opts ...grpc.CallOption) (*QueryGetNftResponse, error) {
	out := new(QueryGetNftResponse)
	err := c.cc.Invoke(ctx, "/bluzelle.curium.nft.Query/Nft", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) NftAll(ctx context.Context, in *QueryAllNftRequest, opts ...grpc.CallOption) (*QueryAllNftResponse, error) {
	out := new(QueryAllNftResponse)
	err := c.cc.Invoke(ctx, "/bluzelle.curium.nft.Query/NftAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) IsNftFullyReplicated(ctx context.Context, in *QueryIsNftFullyReplicatedRequest, opts ...grpc.CallOption) (*QueryIsNftFullyReplicatedResponse, error) {
	out := new(QueryIsNftFullyReplicatedResponse)
	err := c.cc.Invoke(ctx, "/bluzelle.curium.nft.Query/IsNftFullyReplicated", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// this line is used by starport scaffolding # 2
	Nft(context.Context, *QueryGetNftRequest) (*QueryGetNftResponse, error)
	NftAll(context.Context, *QueryAllNftRequest) (*QueryAllNftResponse, error)
	IsNftFullyReplicated(context.Context, *QueryIsNftFullyReplicatedRequest) (*QueryIsNftFullyReplicatedResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Nft(ctx context.Context, req *QueryGetNftRequest) (*QueryGetNftResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Nft not implemented")
}
func (*UnimplementedQueryServer) NftAll(ctx context.Context, req *QueryAllNftRequest) (*QueryAllNftResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method NftAll not implemented")
}
func (*UnimplementedQueryServer) IsNftFullyReplicated(ctx context.Context, req *QueryIsNftFullyReplicatedRequest) (*QueryIsNftFullyReplicatedResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IsNftFullyReplicated not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Nft_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryGetNftRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Nft(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bluzelle.curium.nft.Query/Nft",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Nft(ctx, req.(*QueryGetNftRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_NftAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAllNftRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).NftAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bluzelle.curium.nft.Query/NftAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).NftAll(ctx, req.(*QueryAllNftRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_IsNftFullyReplicated_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryIsNftFullyReplicatedRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).IsNftFullyReplicated(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bluzelle.curium.nft.Query/IsNftFullyReplicated",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).IsNftFullyReplicated(ctx, req.(*QueryIsNftFullyReplicatedRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "bluzelle.curium.nft.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Nft",
			Handler:    _Query_Nft_Handler,
		},
		{
			MethodName: "NftAll",
			Handler:    _Query_NftAll_Handler,
		},
		{
			MethodName: "IsNftFullyReplicated",
			Handler:    _Query_IsNftFullyReplicated_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "nft/query.proto",
}

func (m *QueryGetNftRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryGetNftRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryGetNftRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Id) > 0 {
		i -= len(m.Id)
		copy(dAtA[i:], m.Id)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.Id)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryGetNftResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryGetNftResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryGetNftResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Nft != nil {
		{
			size, err := m.Nft.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAllNftRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllNftRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllNftRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAllNftResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllNftResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllNftResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.Nft) > 0 {
		for iNdEx := len(m.Nft) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Nft[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintQuery(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func (m *QueryIsNftFullyReplicatedRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryIsNftFullyReplicatedRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryIsNftFullyReplicatedRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Id) > 0 {
		i -= len(m.Id)
		copy(dAtA[i:], m.Id)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.Id)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryIsNftFullyReplicatedResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryIsNftFullyReplicatedResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryIsNftFullyReplicatedResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.IsReplicated {
		i--
		if m.IsReplicated {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryGetNftRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Id)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryGetNftResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Nft != nil {
		l = m.Nft.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAllNftRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAllNftResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Nft) > 0 {
		for _, e := range m.Nft {
			l = e.Size()
			n += 1 + l + sovQuery(uint64(l))
		}
	}
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryIsNftFullyReplicatedRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Id)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryIsNftFullyReplicatedResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.IsReplicated {
		n += 2
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryGetNftRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryGetNftRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryGetNftRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Id = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryGetNftResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryGetNftResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryGetNftResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Nft", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Nft == nil {
				m.Nft = &Nft{}
			}
			if err := m.Nft.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryAllNftRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryAllNftRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllNftRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageRequest{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryAllNftResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryAllNftResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllNftResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Nft", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Nft = append(m.Nft, &Nft{})
			if err := m.Nft[len(m.Nft)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageResponse{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryIsNftFullyReplicatedRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryIsNftFullyReplicatedRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryIsNftFullyReplicatedRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Id = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryIsNftFullyReplicatedResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryIsNftFullyReplicatedResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryIsNftFullyReplicatedResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field IsReplicated", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.IsReplicated = bool(v != 0)
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
