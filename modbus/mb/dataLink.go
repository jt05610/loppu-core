package mb

type DataLink struct {
	serial *Serial
	buf    []byte
}

func (d *DataLink) Send(pdu *SerialPDU) (int, error) {
	bytes := make([]byte, len(pdu.PDU.Data())+4)
	_, err := pdu.Read(bytes)
	if err != nil {
		panic(err)
	}
	return d.serial.Write(bytes)
}

func (d *DataLink) Recv(pdu *SerialPDU) (int, error) {
	n, err := d.serial.Read(d.buf)
	if err != nil {
		panic(err)
	}
	return pdu.Write(d.buf[:n])
}

func NewDataLink(ser *Serial) *DataLink {
	return &DataLink{serial: ser, buf: make([]byte, 256)}
}
