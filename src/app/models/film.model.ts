export interface Film {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: Date,
    species: string[],
    starships: string[],
    vehicles: string[],
    characters: string[],
    planets: []
}