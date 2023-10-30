import { RESTDataSource } from '@apollo/datasource-rest';
import {AuthorModel, ModuleModel, TrackModel} from "../models";

export class CatstronautsAPI extends RESTDataSource {
    baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/'

    getTracksForHome() {
        return this.get<TrackModel[]>('tracks')
    }

    getAuthor(authorId: string) {
        return this.get<AuthorModel>(`author/${encodeURIComponent(authorId)}`)
    }

    getTrack(trackId: string) {
        return this.get<TrackModel>(`track/${trackId}`)
    }

    getModules(trackId: string) {
        return this.get<ModuleModel[]>(`track/${trackId}/modules`)
    }
}