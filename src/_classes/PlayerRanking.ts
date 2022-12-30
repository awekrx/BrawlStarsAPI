import { IRankingPlayer } from "../_interfaces/interfaces";

/**
 * Represents a player in the ranking list.
 * @interface RankingPlayer
 */
export interface RankingPlayer {
    /**
     * The player's tag.
     * @type {string}
     */
    tag: string;

    /**
     * The player's name.
     * @type {string}
     */
    name: string;

    /**
     * The player's number of trophies.
     * @type {number}
     */
    trophies: number;

    /**
     * The player's rank.
     * @type {number}
     */
    rank: number;

    /**
     * The name of the player's club, if they belong to one.
     * @type {(string | undefined)}
     */
    club?: string;
}

/**
 * A class for storing and manipulating a list of ranked players.
 * @class PlayerRanking
 */
export default class PlayerRanking {
    /**
     * The list of ranked players.
     * @type {RankingPlayer[]}
     */
    public ranking: RankingPlayer[] = [];

    /**
     * Creates a new `PlayerRanking` instance from an API response.
     * @param {IRankingPlayer[]} api The API response containing player ranking data.
     * @constructor
     */
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

    /**
     * Returns the player at the specified position in the ranking list.
     * @param {number} position The rank of the player to retrieve.
     * @returns {(null | RankingPlayer)} The player at the specified position, or `null` if the position is out of bounds.
     */
    public rank(position: number): null | RankingPlayer {
        if (this.ranking[position - 1]) {
            return this.ranking[position - 1];
        }
        return null;
    }

    /**
     * Returns a list of all player tags in the ranking list.
     * @returns {string[]} An array of player tags.
     */
    public getTags(): string[] {
        let tags: string[] = [];
        for (let i = 0; i < this.ranking.length; i++) {
            tags.push(this.ranking[i].tag);
        }
        return tags;
    }

    /**
     * Returns a list of all player names in the ranking list.
     * @returns {string[]} An array of player names.
     */
    public getNames(): string[] {
        let names: string[] = [];
        for (let i = 0; i < this.ranking.length; i++) {
            names.push(this.ranking[i].name);
        }
        return names;
    }
}
