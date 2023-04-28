package mb

import (
	"encoding/binary"
	"github.com/jt05610/loppu/comm"
)

func NewMBAddress(v byte) comm.Addr {
	return []byte{v}
}

type SerialPDU struct {
	Address comm.Addr
	PDU     *MBusPDU
	CRC     uint16
}

func (s *SerialPDU) Read(p []byte) (n int, err error) {
	p[0] = s.Address.Byte()
	n, err = s.PDU.Read(p[1 : len(p)-2])
	binary.LittleEndian.PutUint16(p[len(p)-2:], s.CRC)
	return n + 3, err
}

func (s *SerialPDU) Write(p []byte) (n int, err error) {
	s.Address = NewMBAddress(p[0])
	s.PDU = &MBusPDU{}
	n, err = s.PDU.Write(p[1 : len(p)-2])
	s.CRC = binary.LittleEndian.Uint16(p[len(p)-2:])
	return n + 3, err
}

func NewSerialPDU(addr byte, pdu *MBusPDU) *SerialPDU {
	tmp := make([]byte, len(pdu.Data())+2)
	tmp[0] = addr
	_, _ = pdu.Read(tmp[1:])
	return &SerialPDU{
		Address: NewMBAddress(addr),
		PDU:     pdu,
		CRC:     CRC16(tmp),
	}
}
