/*
Copyright © 2023 Jonathan Taylor <jonrtaylor12@gmail.com>
*/

package cmd

import (
	"github.com/jt05610/loppu-core/stream/node"
	"github.com/jt05610/loppu/yaml"
	"os"
	"path/filepath"

	"github.com/spf13/cobra"
)

// initCmd represents the init command
var initCmd = &cobra.Command{
	Use:   "init",
	Short: "initialize the node node",
	Long:  ``,
	Run: func(cmd *cobra.Command, args []string) {
		n := node.NewStreamer().(*node.StreamNode)
		f := filepath.Join("nodes", "stream.yaml")
		df, err := os.Create(f)
		if err != nil {
			panic(err)
		}
		l := yaml.NodeService[node.StreamNode]{}
		err = l.Flush(df, n)
		if err != nil {
			panic(err)
		}
	},
}

func init() {
	rootCmd.AddCommand(initCmd)
}
