/*
Copyright © 2023 Jonathan Taylor <jonrtaylor12@gmail.com>
*/

package cmd

import (
	"github.com/jt05610/loppu-core/stream/node"
	"github.com/jt05610/loppu/yaml"
	"path/filepath"

	"github.com/spf13/cobra"
)

// addCmd represents the add command
var (
	name   string
	addCmd = &cobra.Command{
		Use:   "add",
		Short: "add a new stream to the node",
		Long:  ``,
		Run: func(cmd *cobra.Command, args []string) {
			fName := filepath.Join("nodes", "stream.yaml")
			n, err := yaml.LoadFile[node.StreamNode](fName)
			defer func() {
				err = yaml.FlushFile[node.StreamNode](fName, true, true, n)
				if err != nil {
					panic(err)
				}
			}()
			s := node.NewStream(name)
			err = n.Add(s)
			if err != nil {
				panic(err)
			}
		},
	}
)

func init() {
	rootCmd.AddCommand(addCmd)
	addCmd.PersistentFlags().StringVarP(&name, "name", "n", "newServer", "server name")
}
