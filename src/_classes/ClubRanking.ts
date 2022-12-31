import { APIRankingClub } from "../_interfaces/interfaces";

/**
 * Represents a club in the game.
 * @interface
 * @property {string} tag - The tag of the club.
 * @property {string} name - The name of the club.
 * @property {number} trophies - The number of trophies earned by the club.
 * @property {number} rank - The rank of the club.
 * @property {number} memberCount - The number of members in the club.
 */
export interface RankingClub {
    tag: string;
    name: string;
    trophies: number;
    rank: number;
    memberCount: number;
}

/**
 * A class for storing and manipulating a list of ranked clubs.
 * @class ClubRanking
 */

export default class ClubRanking {
    /**
     * The list of ranked clubs.
     * @type {RankingClub[]}
     */
    public ranking: RankingClub[] = [];

    /**
     * Creates an instance of ClubRanking.
     * @param {APIRankingClub[]} api - The list of ranked clubs from the API.
     * @constructor
     */
    constructor(api: APIRankingClub[]) {
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

    /**
     * Returns the club at the specified rank.
     * @param {number} position - The rank of the club.
     * @returns {(null | RankingClub)} The club at the specified rank, or null if the rank is invalid.
     */
    public rank(position: number): null | RankingClub {
        if (this.ranking[position - 1]) {
            return this.ranking[position - 1];
        }
        return null;
    }

    /**
     * Returns an array of club tags in the ranking.
     * @returns {string[]} An array of club tags.
     */
    public getTags(): string[] {
        let tags: string[] = [];
        for (let i = 0; i < this.ranking.length; i++) {
            tags.push(this.ranking[i].tag);
        }
        return tags;
    }

    /**
     * Returns an array of club names in the ranking.
     * @returns {string[]} An array of club names.
     */
    public getNames(): string[] {
        let names: string[] = [];
        for (let i = 0; i < this.ranking.length; i++) {
            names.push(this.ranking[i].name);
        }
        return names;
    }

    /**
     * Returns an array of clubs in the ranking with fewer than 30 members.
     * @returns {RankingClub[]} An array of clubs with fewer than 30 members.
     */
    public notFull(): RankingClub[] {
        return this.ranking.filter((club: RankingClub) => club.memberCount < 30);
    }
}
