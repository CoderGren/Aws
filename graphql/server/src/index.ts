import {ApolloServer, ApolloServerOptions} from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mocks } from './mocks';
import { typeDefs } from './schema';
import { resolvers } from "./resolvers";
import {getContext} from "./context";

type ApolloServerBaseContext = {}
async function startApolloServer() {
    const server = new ApolloServer<ApolloServerBaseContext>(getServerConfig())
    const { url } = await startStandaloneServer(server, {
        context: getContext<ApolloServerBaseContext>(server)
    })
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();

function getServerConfig(): ApolloServerOptions<ApolloServerBaseContext> {
    if (process.env.MOCK_DATA === 'true') {
        return {
            schema: addMocksToSchema({
                schema: makeExecutableSchema({ typeDefs }),
                mocks
            }),
        }
    } else {
        return {
            typeDefs,
            resolvers
        }
    }
}
