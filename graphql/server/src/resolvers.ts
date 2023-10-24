import {Resolvers} from "./types";

export const resolvers: Resolvers = {
    Query: {
        tracksForHome(parent, args, context, info) {
            const { dataSources } = context
            return dataSources.catstronautsAPI.getTracksForHome()
        },
    },
    Track: {
        author(parent, args, context, info) {
            const { authorId } = parent
            const { dataSources } = context
            return dataSources.catstronautsAPI.getAuthor(authorId)
        }
    }
}
