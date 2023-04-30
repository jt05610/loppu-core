import {readFileSync} from 'node:fs'
import {ApolloServer} from 'apollo-server'
import {Resolvers} from '../resolvers-types'

const typeDefs = readFileSync('./schema.graphql', 'utf8')
const streams = [
    {
        "name": "injector:cow0",
        items: [
            {"time": 0, "force": 1, "pos": 700},
            {"time": 1, "force": 2, "pos": 700},
            {"time": 2, "force": 3, "pos": 700},
            {"time": 3, "force": 4, "pos": 700},
            {"time": 4, "force": 5, "pos": 700},
        ]
    },
    {
        "name": "injector:cow1",
        items: [
            {"time": 0, "force": 1, "pos": 700},
            {"time": 1, "force": 4, "pos": 700},
            {"time": 2, "force": 5, "pos": 750},
            {"time": 3, "force": 3, "pos": 800},
            {"time": 4, "force": 2, "pos": 800},
        ]
    }
]

const resolvers: Resolvers = {
    Query: {
        stream(parent, args) {
            return streams.find((stream) => stream.name === args.name)
        },
        streams() {
            return streams
        },
    }
};

const server = new ApolloServer({typeDefs, resolvers})

// The `listen` method launches a web server
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})