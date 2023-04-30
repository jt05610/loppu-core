import { readFileSync } from 'node:fs';
import { ApolloServer } from 'apollo-server';
const typeDefs = readFileSync('./supergraph.graphql', 'utf8');
const resolvers = {
    Query: {
    // typed resolvers
    }
};
const server = new ApolloServer({ typeDefs, resolvers });
// The `listen` method launches a web server
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
