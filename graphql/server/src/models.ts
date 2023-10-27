export type AuthorModel = {
    id: string;
    name: string;
    photo: string;
}

export type TrackModel = {
    id: string;
    title: string;
    description: string;
    authorId: string;
    thumbnail: string;
    length: number;
    modulesCount: number;
    numberOfViews: number;
}

export type ModuleModel = {
    id: string;
    title: string;
    length: number;
}