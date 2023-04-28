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

// runCmd represents the run command
var runCmd = &cobra.Command{
	Use:   "run",
	Short: "run the modbus node",
	Long:  `make sure you first initialized the node`,
	Run: func(cmd *cobra.Command, args []string) {
		m := mb.MBusServer{}
		fName := filepath.Join("nodes", "modbus.yaml")
		df, err := os.OpenFile(fName, os.O_RDONLY, os.ModePerm)
		if err != nil {
			panic(err)
		}
		err = m.Load(df)
		if err != nil {
			panic(err)
		}
		err = m.Run()
		if err != nil {
			panic(err)
		}
	},
}

func init() {
	rootCmd.AddCommand(runCmd)
}
