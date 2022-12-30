import { IRankingClub } from "../_interfaces/interfaces";

/**
 * Represents a club in the ranking list.
 * @interface RankingClub
 */
export interface RankingClub {
    /**
     * The club's tag.
     * @type {string}
     */
    tag: string;

    /**
     * The club's name.
     * @type {string}
     */
    name: string;

    /**
     * The club's number of trophies.
     * @type {number}
     */
    trophies: number;

    /**
     * The club's rank.
     * @type {number}
     */
    rank: number;

    /**
     * The number of members in the club.
     * @type {number}
     */
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
     * @param {IRankingClub[]} api - The list of ranked clubs from the API.
     * @constructor
     */
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
