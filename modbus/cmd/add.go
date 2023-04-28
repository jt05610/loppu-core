/*
Copyright © 2023 Jonathan Taylor <jonrtaylor12@gmail.com>
*/

package cmd

import (
	"github.com/jt05610/loppu-core/modbus/mb"
	"github.com/spf13/cobra"
	"os"
	"path/filepath"
)

// addCmd represents the add command
var addCmd = &cobra.Command{
	Use:   "add",
	Short: "add a new server to the modbus node",
	Long:  ``,
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
		_ = df.Close()
		defer func() {
			df, err := os.OpenFile(fName, os.O_WRONLY, os.ModePerm)
			if err != nil {
				panic(err)
			}
			err = m.Flush(df)
			if err != nil {
				panic(err)
			}
		}()
		n := mb.NewMBusNode(name, byte(len(m.Servers)))
		err = m.Add(n)
		if err != nil {
			panic(err)
		}
	},
}

func init() {
	rootCmd.AddCommand(addCmd)
	addCmd.PersistentFlags().StringVarP(&name, "name", "n", "newServer", "server name")
}
