import { IRankingClub } from "../interfaces";

export interface RankingClub {
    tag: string;
    name: string;
    trophies: number;
    rank: number;
    memberCount: number;
}

export default class ClubRanking {
    public ranking: RankingClub[] = [];

    constructor(api: IRankingClub[]) {
        for (let i = 0; i < api.length; i++) {
            this.ranking.push({
                tag: api[i].tag,
                name: api[i].name,
                trophies: api[i].trophies,
                rank: api[i].rank,
                memberCount: api[i].memberCount,
            });
        }
    }

    public rank(position: number): null | RankingClub {
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

    public notFull(): RankingClub[] {
        return this.ranking.filter((club: RankingClub) => club.memberCount < 30);
    }
}
