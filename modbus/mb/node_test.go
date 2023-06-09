package mb_test

import (
	"github.com/jt05610/loppu-core/modbus/mb"
	"github.com/jt05610/loppu/yaml"
	"testing"
)

func TestLoadFlushMBusNode(t *testing.T) {
	testNode := mb.NewMBusNode("fakeNode", 0xFE)
	fName := "fake_node.yaml"
	err := yaml.FlushFile[mb.MBusNode](fName, true, true, testNode)
	if err != nil {
		t.Error(err)
	}
	load, err := yaml.LoadFile[mb.MBusNode](fName)
	if err != nil {
		t.Error(err)
	}
	if load.Meta() == nil {
		t.Fail()
	}
	if len(load.Endpoints("")) != len(testNode.Endpoints("")) {
		t.Fail()
	}
}
