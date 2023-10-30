import gql from 'graphql-tag'

export const typeDefs = gql`
    "Author of a complete Track or Module"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
    "Group of Modules that teaches a specific topic"
    type Track {
        id: ID!
        title: String!
        description: String
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        modules: [Module!]!
        numberOfViews: Int
    }
    
    type Module {
        id: ID!
        title: String!
        length: Int
    }
    
    type Query {
        "Get tracks array for homepage"
        tracksForHome: [Track!]!
        "Get a track by id"
        track(id: ID!): Track
    }
`;