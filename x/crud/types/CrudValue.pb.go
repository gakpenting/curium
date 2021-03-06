// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: crud/CrudValue.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
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

type CrudValue struct {
	Creator  string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Uuid     string `protobuf:"bytes,2,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Key      string `protobuf:"bytes,3,opt,name=key,proto3" json:"key,omitempty"`
	Value    []byte `protobuf:"bytes,4,opt,name=value,proto3" json:"value,omitempty"`
	Lease    *Lease `protobuf:"bytes,5,opt,name=lease,proto3" json:"lease,omitempty"`
	Height   int64  `protobuf:"varint,6,opt,name=height,proto3" json:"height,omitempty"`
	Metadata []byte `protobuf:"bytes,7,opt,name=metadata,proto3" json:"metadata,omitempty"`
}

func (m *CrudValue) Reset()         { *m = CrudValue{} }
func (m *CrudValue) String() string { return proto.CompactTextString(m) }
func (*CrudValue) ProtoMessage()    {}
func (*CrudValue) Descriptor() ([]byte, []int) {
	return fileDescriptor_128e7976086c15e0, []int{0}
}
func (m *CrudValue) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CrudValue) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CrudValue.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CrudValue) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CrudValue.Merge(m, src)
}
func (m *CrudValue) XXX_Size() int {
	return m.Size()
}
func (m *CrudValue) XXX_DiscardUnknown() {
	xxx_messageInfo_CrudValue.DiscardUnknown(m)
}

var xxx_messageInfo_CrudValue proto.InternalMessageInfo

func (m *CrudValue) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *CrudValue) GetUuid() string {
	if m != nil {
		return m.Uuid
	}
	return ""
}

func (m *CrudValue) GetKey() string {
	if m != nil {
		return m.Key
	}
	return ""
}

func (m *CrudValue) GetValue() []byte {
	if m != nil {
		return m.Value
	}
	return nil
}

func (m *CrudValue) GetLease() *Lease {
	if m != nil {
		return m.Lease
	}
	return nil
}

func (m *CrudValue) GetHeight() int64 {
	if m != nil {
		return m.Height
	}
	return 0
}

func (m *CrudValue) GetMetadata() []byte {
	if m != nil {
		return m.Metadata
	}
	return nil
}

func init() {
	proto.RegisterType((*CrudValue)(nil), "bluzelle.curium.crud.CrudValue")
}

func init() { proto.RegisterFile("crud/CrudValue.proto", fileDescriptor_128e7976086c15e0) }

var fileDescriptor_128e7976086c15e0 = []byte{
	// 264 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x90, 0xb1, 0x4e, 0xc3, 0x30,
	0x10, 0x86, 0x6b, 0xd2, 0xa4, 0xd4, 0x30, 0x54, 0x56, 0x84, 0xac, 0x22, 0x59, 0x11, 0x0b, 0x99,
	0x6c, 0x01, 0x4f, 0x00, 0xac, 0x4c, 0x19, 0x18, 0xd8, 0x9c, 0xe4, 0xd4, 0x44, 0x38, 0x4a, 0xe5,
	0xfa, 0x10, 0xe5, 0x29, 0x78, 0xac, 0x8e, 0x1d, 0x19, 0x51, 0xf2, 0x22, 0x28, 0x4e, 0xdb, 0x89,
	0xed, 0xfe, 0xd3, 0x67, 0x7f, 0xa7, 0x9f, 0xc6, 0x85, 0xc5, 0x52, 0x3d, 0x5b, 0x2c, 0x5f, 0xb5,
	0x41, 0x90, 0x6b, 0xdb, 0xba, 0x96, 0xc5, 0xb9, 0xc1, 0x2f, 0x30, 0x06, 0x64, 0x81, 0xb6, 0xc6,
	0x46, 0x0e, 0xd4, 0x72, 0xe1, 0x59, 0x03, 0x7a, 0x73, 0xe0, 0x6e, 0x76, 0x84, 0xce, 0x4f, 0x6f,
	0x19, 0xa7, 0xb3, 0xc2, 0x82, 0x76, 0xad, 0xe5, 0x24, 0x21, 0xe9, 0x3c, 0x3b, 0x46, 0xc6, 0xe8,
	0x14, 0xb1, 0x2e, 0xf9, 0x99, 0x5f, 0xfb, 0x99, 0x2d, 0x68, 0xf0, 0x0e, 0x5b, 0x1e, 0xf8, 0xd5,
	0x30, 0xb2, 0x98, 0x86, 0x1f, 0xc3, 0x47, 0x7c, 0x9a, 0x90, 0xf4, 0x32, 0x1b, 0x03, 0xbb, 0xa3,
	0xa1, 0x57, 0xf2, 0x30, 0x21, 0xe9, 0xc5, 0xfd, 0xb5, 0xfc, 0xef, 0x36, 0xf9, 0x32, 0x20, 0xd9,
	0x48, 0xb2, 0x2b, 0x1a, 0x55, 0x50, 0xaf, 0x2a, 0xc7, 0xa3, 0x84, 0xa4, 0x41, 0x76, 0x48, 0x6c,
	0x49, 0xcf, 0x1b, 0x70, 0xba, 0xd4, 0x4e, 0xf3, 0x99, 0x77, 0x9c, 0xf2, 0xd3, 0xe3, 0xae, 0x13,
	0x64, 0xdf, 0x09, 0xf2, 0xdb, 0x09, 0xf2, 0xdd, 0x8b, 0xc9, 0xbe, 0x17, 0x93, 0x9f, 0x5e, 0x4c,
	0xde, 0x6e, 0x57, 0xb5, 0xab, 0x30, 0x97, 0x45, 0xdb, 0xa8, 0xa3, 0x5b, 0x8d, 0x6e, 0xf5, 0xa9,
	0x7c, 0x27, 0x6e, 0xbb, 0x86, 0x4d, 0x1e, 0xf9, 0x52, 0x1e, 0xfe, 0x02, 0x00, 0x00, 0xff, 0xff,
	0xc5, 0x01, 0x51, 0x54, 0x54, 0x01, 0x00, 0x00,
}

func (m *CrudValue) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CrudValue) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CrudValue) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Metadata) > 0 {
		i -= len(m.Metadata)
		copy(dAtA[i:], m.Metadata)
		i = encodeVarintCrudValue(dAtA, i, uint64(len(m.Metadata)))
		i--
		dAtA[i] = 0x3a
	}
	if m.Height != 0 {
		i = encodeVarintCrudValue(dAtA, i, uint64(m.Height))
		i--
		dAtA[i] = 0x30
	}
	if m.Lease != nil {
		{
			size, err := m.Lease.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintCrudValue(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Value) > 0 {
		i -= len(m.Value)
		copy(dAtA[i:], m.Value)
		i = encodeVarintCrudValue(dAtA, i, uint64(len(m.Value)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Key) > 0 {
		i -= len(m.Key)
		copy(dAtA[i:], m.Key)
		i = encodeVarintCrudValue(dAtA, i, uint64(len(m.Key)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Uuid) > 0 {
		i -= len(m.Uuid)
		copy(dAtA[i:], m.Uuid)
		i = encodeVarintCrudValue(dAtA, i, uint64(len(m.Uuid)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintCrudValue(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintCrudValue(dAtA []byte, offset int, v uint64) int {
	offset -= sovCrudValue(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *CrudValue) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovCrudValue(uint64(l))
	}
	l = len(m.Uuid)
	if l > 0 {
		n += 1 + l + sovCrudValue(uint64(l))
	}
	l = len(m.Key)
	if l > 0 {
		n += 1 + l + sovCrudValue(uint64(l))
	}
	l = len(m.Value)
	if l > 0 {
		n += 1 + l + sovCrudValue(uint64(l))
	}
	if m.Lease != nil {
		l = m.Lease.Size()
		n += 1 + l + sovCrudValue(uint64(l))
	}
	if m.Height != 0 {
		n += 1 + sovCrudValue(uint64(m.Height))
	}
	l = len(m.Metadata)
	if l > 0 {
		n += 1 + l + sovCrudValue(uint64(l))
	}
	return n
}

func sovCrudValue(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCrudValue(x uint64) (n int) {
	return sovCrudValue(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *CrudValue) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCrudValue
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
			return fmt.Errorf("proto: CrudValue: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CrudValue: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrudValue
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
				return ErrInvalidLengthCrudValue
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCrudValue
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Uuid", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrudValue
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
				return ErrInvalidLengthCrudValue
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCrudValue
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Uuid = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Key", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrudValue
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
				return ErrInvalidLengthCrudValue
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCrudValue
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Key = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Value", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrudValue
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthCrudValue
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthCrudValue
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Value = append(m.Value[:0], dAtA[iNdEx:postIndex]...)
			if m.Value == nil {
				m.Value = []byte{}
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Lease", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrudValue
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
				return ErrInvalidLengthCrudValue
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCrudValue
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Lease == nil {
				m.Lease = &Lease{}
			}
			if err := m.Lease.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Height", wireType)
			}
			m.Height = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrudValue
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Height |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Metadata", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCrudValue
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthCrudValue
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthCrudValue
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Metadata = append(m.Metadata[:0], dAtA[iNdEx:postIndex]...)
			if m.Metadata == nil {
				m.Metadata = []byte{}
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCrudValue(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCrudValue
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
func skipCrudValue(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCrudValue
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
					return 0, ErrIntOverflowCrudValue
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
					return 0, ErrIntOverflowCrudValue
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
				return 0, ErrInvalidLengthCrudValue
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCrudValue
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCrudValue
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCrudValue        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCrudValue          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCrudValue = fmt.Errorf("proto: unexpected end of group")
)
