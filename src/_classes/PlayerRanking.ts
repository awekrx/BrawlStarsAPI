import { APIRankingPlayer } from "../_interfaces/interfaces";

/**
 * Represents a player in the game ranking.
 * @interface
 * @property {string} tag - The player's tag.
 * @property {string} name - The player's name.
 * @property {number} trophies - The number of trophies earned by the player.
 * @property {number} rank - The player's current ranking.
 * @property {string} club - The name of the club that the player belongs to (optional).
 */
export interface RankingPlayer {
    tag: string;
    name: string;
    trophies: number;
    rank: number;
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
     * @param {APIRankingPlayer[]} api The API response containing player ranking data.
     * @constructor
     */
    constructor(api: APIRankingPlayer[]) {
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
