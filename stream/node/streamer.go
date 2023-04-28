package node

import (
	"context"
	"github.com/jt05610/loppu"
	"github.com/jt05610/loppu/comm/redis"
	"time"
)

type StreamNode struct {
	MetaData *loppu.MetaData `yaml:"meta"`
	Streams  []*redis.Stream `yaml:"streams"`
	stream   *redis.Streamer
}

func (s *StreamNode) Meta() *loppu.MetaData {
	return s.MetaData
}

func (s *StreamNode) Add(stream *redis.Stream) error {
	if s.Streams == nil {
		s.Streams = make([]*redis.Stream, 0)
	}
	s.Streams = append(s.Streams, stream)
	return nil
}

func (s *StreamNode) Run() error {
	ctx := context.Background()
	s.stream = redis.NewStreamer().(*redis.Streamer)
	err := s.stream.Open(ctx)
	if err != nil {
		panic(err)
	}
	defer s.stream.Close()
	for _, r := range s.Streams {
		err := s.stream.Add(r)
		if err != nil {
			panic(err)
		}
	}
	s.stream.Stream(ctx)
	return nil
}

func NewStreamer() loppu.Node {
	return &StreamNode{MetaData: &loppu.MetaData{
		Node:    "streamer",
		Desc:    "node that manages redis streaming data",
		Author:  "Jonathan Taylor",
		Version: "0.1.0",
		Date:    time.Now(),
		Updated: time.Now(),
		Addr:    "127.0.0.1",
		Port:    56665,
	}}
}

func NewStream(name string) *redis.Stream {
	return &redis.Stream{
		Name:     name,
		SampleID: "",
		Requests: []*redis.Request{
			{
				Name: "req1",
				Uri:  "http://localhost:55555/",
			},
			{
				Name: "req2",
				Uri:  "http://localhost:55555/",
			},
		},
		Interval: time.Duration(100) * time.Millisecond,
	}
}
