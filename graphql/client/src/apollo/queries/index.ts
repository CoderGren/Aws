import { gql } from "../../__generated__/";
export const TRACKS = gql(`
    #graphql
    query GetTracks {
      tracksForHome {
        id
        title
        thumbnail
        length
        modulesCount
        author {
          id
          name
          photo
        }
      }
    }
`)