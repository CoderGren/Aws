import React from "react";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";
import {TRACK} from "../apollo/queries";
import TrackDetail from "../components/track-detail";

const Track = () => {
    const { trackId = "" } = useParams();
    const queryRes = useQuery(TRACK, {
        variables: {
            trackId,
        }
    })
    return <Layout>
        <QueryResult {...queryRes}>
            <TrackDetail track={queryRes.data?.track} />
        </QueryResult>
    </Layout>;
};

export default Track;