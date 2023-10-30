import React from 'react';
import {Layout, QueryResult} from '../components';
import { useQuery } from '@apollo/client';
import { TRACKS } from "../apollo/queries";
import TrackCard from "../containers/track-card";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const tracksQueryRes = useQuery(TRACKS)
  return <Layout grid>
    <QueryResult {...tracksQueryRes}>
      {tracksQueryRes.data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
      ))}
    </QueryResult>

  </Layout>;
};

export default Tracks;
