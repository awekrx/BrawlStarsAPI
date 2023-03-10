import { APIPlayer } from "../_interfaces/interfaces";

/**
 * Represents a brawler in the game.
 * @interface
 * @property {number} rank - The rank of the brawler.
 * @property {number} trophies - The number of trophies earned by the brawler.
 * @property {number} highestTrophies - The highest number of trophies earned by the brawler.
 * @property {number} power - The power level of the brawler.
 * @property {number} countStarPowers - The number of star powers owned by the brawler.
 * @property {number} countGadgets - The number of gadgets owned by the brawler.
 * @property {number} countGears - The number of gears owned by the brawler.
 */
export interface Brawler {
    rank: number;
    trophies: number;
    highestTrophies: number;
    power: number;
    countStarPowers: number;
    countGadgets: number;
    countGears: number;
}

/**
 * A class representing a player in the game.
 * @class Player
 */
export default class Player {
    /**
     * The player's tag.
     * @type {string}
     */
    public tag: string;
    /**
     * The player's name.
     * @type {string}
     */
    public name: string;
    /**
     * The player's current number of trophies.
     * @type {number}
     */
    public trophies: number;
    /**
     * The player's highest number of trophies achieved.
     * @type {number}
     */
    public highestTrophies: number;
    /**
     * The player's highest number of trophies achieved.
     * @type {{trio: number, duo: number, solo: number}};
     */
    public victories: {
        [key: string]: number;
        trio: number;
        duo: number;
        solo: number;
    };
    /**
     * An object containing the player's club information.
     * @type {{tag: string, name: string}};
     */
    public club: { tag: string; name: string };
    /**
     * An object containing information about each brawler the player has.
     * @type { Brawler[] }
     */
    public brawlers: {
        [key: string]: Brawler;
    } = {};

    /**
     * Creates a new `Player` instance from an API response.
     * @param {APIPlayer} api The API response containing player data.
     * @constructor
     */
    constructor(api: APIPlayer) {
        this.tag = api.tag;
        this.name = api.name;
        this.trophies = api.trophies;
        this.highestTrophies = api.highestTrophies;
        this.victories = {
            trio: api["3vs3Victories"],
            duo: api.duoVictories,
            solo: api.soloVictories,
        };
        this.club = api.club;
        for (let i = 0; i < api.brawlers.length; i++) {
            let brawler = api.brawlers[i];
            this.brawlers[brawler.name.charAt(0) + brawler.name.slice(1).toLowerCase()] = {
                rank: brawler.rank,
                trophies: brawler.trophies,
                highestTrophies: brawler.highestTrophies,
                power: brawler.power,
                countStarPowers: brawler.starPowers.length,
                countGadgets: brawler.gadgets.length,
                countGears: brawler.gears.length,
            };
        }
    }

    /**
     * Returns the total number of wins the player has across all game modes.
     * @returns {number} The total number of wins.
     */
    public wins(): number {
        return this.victories.trio + this.victories.duo + this.victories.solo;
    }

    /**
     * Returns the player's brawler with the specified name.
     * @param {string} name The name of the brawler to retrieve.
     * @returns {(null | Brawler)} The brawler, or `null` if the brawler with the specified name does not exist.
     */
    public brawler(name: string): null | Brawler {
        if (Object.keys(this.brawlers).includes(name)) {
            return this.brawlers[name];
        }
        return null;
    }
}
