import { APIBattle, APIBattlePlayer, BattleResult, BattleType, Mode } from "../_interfaces/interfaces";

/**
 * Represents a star player in a battle.
 * @interface
 * @property {string} tag - The player's tag.
 * @property {string} name - The player's in-game name.
 * @property {Object} brawler - An object containing information about the player's selected brawler.
 * @property {string} brawler.name - The name of the brawler.
 * @property {number} brawler.power - The power level of the brawler.
 * @property {number} brawler.trophies - The number of trophies earned by the brawler.
 */
export interface StarPlayer {
    tag: string;
    name: string;
    brawler: { name: string; power: number; trophies: number };
}

/**
 * Represents a battle in Brawl Stars.
 * @class
 */
export class Battle {
    /**
     * The time the battle took place.
     * @type {string}
     */
    public time: string;
    /**
     * The mode in which the battle was played.
     * @type {Mode}
     */
    public mode: Mode;
    /**
     * The map on which the battle was played.
     * @type {string}
     */
    public map: string;
    /**
     * The type of battle.
     * @type {BattleType}
     */
    public type: BattleType;
    /**
     * The result of the battle.
     * @type {BattleResult}
     */
    public result?: BattleResult;
    /**
     * The duration of the battle in seconds.
     * @type {number}
     */
    public duration?: number;
    /**
     * The player's rank at the end of the battle.
     * @type {number}
     */
    public rank?: number;
    /**
     * The change in the player's trophies after the battle.
     * @type {number}
     */
    public trophyChange?: number;
    /**
     * The star player of the battle.
     * @type {null | StarPlayer}
     */
    public starPlayer: null | StarPlayer;
    /**
     * The teams that participated in the battle.
     * @type {[APIBattlePlayer[], APIBattlePlayer[], APIBattlePlayer[]?, APIBattlePlayer[]?, APIBattlePlayer[]?, APIBattlePlayer[]?, APIBattlePlayer[]?, APIBattlePlayer[]?, APIBattlePlayer[]?, APIBattlePlayer[]?]}
     */
    public teams: [
        APIBattlePlayer[],
        APIBattlePlayer[],
        APIBattlePlayer[]?,
        APIBattlePlayer[]?,
        APIBattlePlayer[]?,
        APIBattlePlayer[]?,
        APIBattlePlayer[]?,
        APIBattlePlayer[]?,
        APIBattlePlayer[]?,
        APIBattlePlayer[]?,
    ];

    /**
     * Creates a new Battle instance.
     * @param {APIBattle} api The battle data returned by the API.
     * @constructor
     */
    constructor(api: APIBattle) {
        this.time = api.battleTime;
        api.event.mode ? (this.mode = api.event.mode) : (this.mode = "unknown");
        api.event.map ? (this.map = api.event.map) : (this.map = "Community map");
        this.type = api.battle.type;
        if (api.battle.result) this.result = api.battle.result;
        if (api.battle.duration) this.duration = api.battle.duration;
        if (api.battle.rank) this.rank = api.battle.rank;
        if (api.battle.trophyChange) this.trophyChange = api.battle.trophyChange;
        if (!api.battle.starPlayer) {
            this.starPlayer = null;
        } else {
            this.starPlayer = {
                tag: api.battle.starPlayer.tag,
                name: api.battle.starPlayer.name,
                brawler: {
                    name: api.battle.starPlayer.brawler.name,
                    power: api.battle.starPlayer.brawler.power,
                    trophies: api.battle.starPlayer.brawler.trophies,
                },
            };
        }
        this.teams = api.battle.teams;
    }

    /**
     * Returns an array of all the player tags in the battle.
     * @returns {string[]}
     */
    public getTags(): string[] {
        let tags: string[] = [];
        for (let i = 0; i < this.teams.length; i++) {
            for (let j = 0; j < this.teams[i]!.length; j++) {
                tags.push(this.teams[i]![j].tag);
            }
        }
        return tags;
    }

    /**
     * Returns an array of all the player names in the battle.
     * @returns {string[]}
     */
    public getNames(): string[] {
        let names: string[] = [];
        for (let i = 0; i < this.teams.length; i++) {
            for (let j = 0; j < this.teams[i]!.length; j++) {
                names.push(this.teams[i]![j].name);
            }
        }
        return names;
    }
}

/**
 * Represents a log of battles in Brawl Stars.
 * @class
 */
export default class BattleLog {
    /**
     * The history of battles.
     * @type {Battle[]}
     */
    public history: Battle[] = [];

    /**
     * Creates a new BattleLog instance.
     * @param {APIBattle[]} api The battle log data returned by the API.
     * @constructor
     */
    constructor(api: APIBattle[]) {
        for (let i = 0; i < api.length; i++) {
            this.history.push(new Battle(api[i]));
        }
    }

    /**
     * Returns the most recent battle in the log.
     * @returns {Battle}
     */
    public last(): Battle {
        return this.history[0];
    }

    /**
     * Returns the specified battle in the log.
     * @param {number} number The index of the battle to return, with the most recent battle being 1.
     * @returns {Battle}
     */
    public game(number: number): Battle {
        return this.history[number - 1];
    }
}
