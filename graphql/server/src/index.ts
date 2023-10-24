import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mocks } from './mocks';
import { typeDefs } from './schema';

async function startApolloServer() {
    const server = new ApolloServer({
        schema: addMocksToSchema({
            schema: makeExecutableSchema({ typeDefs }),
            mocks
        }),
    })
    const { url } = await startStandaloneServer(server)
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
