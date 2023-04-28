/*
Copyright © 2023 Jonathan Taylor <jonrtaylor12@gmail.com>
*/

package cmd

import (
	"github.com/jt05610/loppu-core/stream/node"
	"github.com/jt05610/loppu/yaml"
	"github.com/spf13/cobra"
	"path/filepath"
)

// runCmd represents the run command
var runCmd = &cobra.Command{
	Use:   "run",
	Short: "run the stream node",
	Long:  `this streams data`,
	Run: func(cmd *cobra.Command, args []string) {
		fName := filepath.Join("nodes", "stream.yaml")
		n, err := yaml.LoadFile[node.StreamNode](fName)
		if err != nil {
			panic(err)
		}
		err = n.Run()
		if err != nil {
			panic(err)
		}
	},
}

func init() {
	rootCmd.AddCommand(runCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// runCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// runCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
