
export const resolvers = {
    Query: {
        tracksForHome,
    },
    Track: {
        author
    }
}

function tracksForHome(parent, args, context, info) {
    const { dataSources } = context
    return dataSources.catstronautsAPI.getTracksForHome()
}

function author(parent, args, context, info) {
    const { authorId } = parent
    const { dataSources } = context
    return dataSources.catstronautsAPI.getAuthor(authorId)
}