import { IRankingPlayer } from "../interfaces";

interface RankingPlayer {
    tag: string;
    name: string;
    trophies: number;
    rank: number;
    club?: string;
}

export default class PlayerRanking {
    public ranking: RankingPlayer[] = [];

    constructor(api: IRankingPlayer[]) {
        for (let i = 0; i < api.length; i++) {
            this.ranking.push({
                tag: api[i].tag,
                name: api[i].name,
                trophies: api[i].trophies,
                rank: api[i].rank,
            });
            if (api[i].club) {
                this.ranking[i].club = api[i].club.name;
            }
        }
    }

    public rank(position: number): null | RankingPlayer {
        if (this.ranking[position - 1]) {
            return this.ranking[position - 1];
        }
        return null;
    }

    public getTags(): string[] {
        let tags: string[] = [];
        for (let i = 0; i < this.ranking.length; i++) {
            tags.push(this.ranking[i].tag);
        }
        return tags;
    }

    public getNames(): string[] {
        let names: string[] = [];
        for (let i = 0; i < this.ranking.length; i++) {
            names.push(this.ranking[i].name);
        }
        return names;
    }
}
