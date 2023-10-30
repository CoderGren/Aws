import {Resolvers} from "./types";

export const resolvers: Resolvers = {
    Query: {
        tracksForHome(parent, args, context, info) {
            const { dataSources } = context
            return dataSources.catstronautsAPI.getTracksForHome()
        },
        track(parent, args, context, info) {
            const { id } = args
            const { dataSources } = context
            return dataSources.catstronautsAPI.getTrack(id)
        },
    },
    Track: {
        author(parent, args, context, info) {
            const { authorId } = parent
            const { dataSources } = context
            return dataSources.catstronautsAPI.getAuthor(authorId)
        },
        modules(parent, args, context, info) {
            const { id } = parent
            const { dataSources } = context
            return dataSources.catstronautsAPI.getModules(id)
        },
    }
}
