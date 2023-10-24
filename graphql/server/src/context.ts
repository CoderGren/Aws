import {CatstronautsAPI} from "./datasources/catstronauts";
import {ApolloServer} from "@apollo/server";

export type ContextTypeCustom = {
    dataSources: {
        catstronautsAPI: CatstronautsAPI
    }
}
export const getContext = <BC>(server: ApolloServer<BC>) => async (): Promise<ContextTypeCustom> => {
    const { cache } = server
    return {
        dataSources: {
            catstronautsAPI: new CatstronautsAPI({ cache })
        }
    }
}