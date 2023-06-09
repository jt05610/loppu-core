package mb_test

import (
	pdu "github.com/jt05610/loppu-core/modbus/mb"
	"testing"
)

func TestNewSerialPDU(t *testing.T) {
	mPDU := pdu.ReadCoils(0xFEED, 0xBEAD)
	sPDU := pdu.NewSerialPDU(0x01, mPDU)
	expected := []byte{0x01, 0x01, 0xFE, 0xED, 0xBE, 0xAD, 0x2D, 0xCA}
	actual := make([]byte, len(expected))
	n, err := sPDU.Read(actual)
	if err != nil {
		t.Error(err)
	}
	if n != len(expected) {
		t.Logf("expected %v bytes but got %v", len(expected), n)
		t.Fail()
	}
	for i := 0; i < n; i++ {
		if expected[i] != actual[i] {
			t.Logf("mismatch at %v: expected %v but got %v", i, expected[i], actual[i])
			t.Fail()
		}
	}

	actualPDU := &pdu.SerialPDU{}
	_, err = actualPDU.Write(expected)
	if err != nil {
		panic(err)
	}

	if sPDU.Address.String() != actualPDU.Address.String() {
		t.Fail()
	}
	if sPDU.CRC != actualPDU.CRC {
		t.Fail()
	}
}
