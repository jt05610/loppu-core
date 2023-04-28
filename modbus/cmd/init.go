/*
Copyright © 2023 Jonathan Taylor <jonrtaylor12@gmail.com>
*/

package cmd

import (
	"github.com/jt05610/loppu-core/modbus/mb"
	"os"
	"path/filepath"

	"github.com/spf13/cobra"
)

// initCmd represents the init command
var (
	name    string
	addr    string
	initCmd = &cobra.Command{
		Use:   "init",
		Short: "initialize the modbus node",
		Long:  `generates a config file for your node`,
		Run: func(cmd *cobra.Command, args []string) {
			n := mb.NewMBus().(*mb.MBusServer)
			f := filepath.Join("nodes", "modbus.yaml")
			df, err := os.Create(f)
			if err != nil {
				panic(err)
			}
			err = n.Flush(df)
			if err != nil {
				panic(err)
			}
		},
	}
)

func init() {
	rootCmd.AddCommand(initCmd)
}
