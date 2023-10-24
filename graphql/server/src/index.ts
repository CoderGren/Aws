import {ApolloServer, ApolloServerOptions} from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mocks } from './mocks';
import { typeDefs } from './schema';
import { resolvers } from "./resolvers";
import {CatstronautsAPI} from "./datasources/catstronauts";

type ApolloServerBaseContext = {}
async function startApolloServer() {
    const server = new ApolloServer<ApolloServerBaseContext>(getServerConfig())
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            const { cache } = server
            return {
                dataSources: {
                    catstronautsAPI: new CatstronautsAPI({ cache })
                }
            }
        }
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
