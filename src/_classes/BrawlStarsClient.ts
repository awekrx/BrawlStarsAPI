import { IBrawler, IMap, IPowerPlayLeague, TCountry } from "../_interfaces/interfaces";
import BattleLog from "./BattleLog";
import BrawlStarsApi from "./BrawlStarsApi";
import Club, { Member } from "./Club";
import ClubRanking from "./ClubRanking";
import Player from "./Player";
import PlayerRanking from "./PlayerRanking";

/**
 * Class that represents a client for the Brawl Stars API
 * @class
 */
export default class BrawlStarsClient {
    /**
     * The instance of the BrawlStarsApi class.
     * @type {BrawlStarsApi}
     * @private
     */
    private api: BrawlStarsApi;

    /**
     * Creates a new instance of the Client class.
     * @param {string} token The API token.
     * @constructor
     */
    constructor(token: string) {
        this.api = new BrawlStarsApi(token);
    }

    /**
     * Retrieves a player's data from the Brawl Stars API.
     * @param {string} tag The player's tag, formatted as "#2R20PL0UR"
     * @returns {Promise<Player>} A promise that resolves to the player's data.
     */
    public async player(tag: string): Promise<Player> {
        let api = await this.api.player(tag);
        let client = new Player(api);

        return client;
    }

    /**
     * Retrieves the battle log for the player with the given tag.
     * @param {string} tag - The tag of the player to retrieve the battle log for.
     * @return {Promise<BattleLog>} A promise that resolves to an array of objects representing the player's battle log.
     */
    public async battleLog(tag: string): Promise<BattleLog> {
        let api = await this.api.battleLog(tag);
        let client = new BattleLog(api);

        return client;
    }

    /**
     * Returns information about a specific club.
     * @param {string} tag - Club tag
     * @returns {Promise<IClub>} Club information
     */
    public async club(tag: string): Promise<Club> {
        let api = await this.api.club(tag);
        let client = new Club(api);

        return client;
    }

    /**
     * Retrieves the list of members of a club.
     * @param {string} tag - The tag of the club to retrieve information for.
     * @returns {Promise<Member[]>} An array of objects representing the members of the club.
     */
    public async clubMembers(tag: string): Promise<Member[]> {
        return (await this.club(tag)).members;
    }

    /**
     * Returns a list of all brawlers in the game.
     * @returns {Promise<IBrawler[]>} A promise that resolves to an array of brawlers.
     */
    public async brawlers(): Promise<IBrawler[]> {
        return await this.api.brawlers();
    }

    /**
     * Retrieve information about a specific brawler
     * @param {number} id - The id brawler
     * @returns {Promise<IBrawler>} A promise that resolves to an object containing information about the brawler
     */
    public async brawler(id: number | string): Promise<IBrawler> {
        return await this.api.brawler(id);
    }

    /**
     * Returns an array of seasons for the specified country's Power Play ranking.
     * @param {TCountry} [counrty="global"] - counrty The country to get the Power Play ranking seasons for. Defaults to 'global'.
     * @returns {Promise<IPowerPlayLeague[]>} An array of seasons for the specified country's Power Play ranking.
     */
    public async powerPlayRankingSeasons(counrty: TCountry = "global"): Promise<IPowerPlayLeague[]> {
        return this.api.powerPlayRankingSeasons(counrty);
    }

    /**
     * Get the trophy ranking for a specific country.
     * @param {TCountry} [counrty="global"] - counrty The country to get the ranking for. Defaults to "global".
     * @returns {Promise<IRankingPlayer[]>} An array of players ranked by their trophies.
     */
    public async trophyRanking(counrty: TCountry = "global"): Promise<PlayerRanking> {
        let api = await this.api.trophyRanking(counrty);
        let client = new PlayerRanking(api);

        return client;
    }

    /**
     * Get the power play ranking for a specific country and season.
     * @param {(number | "latest")} id The ID of the season. Defaults to "latest".
     * @param {TCountry} [counrty="global"] - counrty The country to get the ranking for. Defaults to "global".
     * @returns {Promise<IRankingPlayer[]>} An array of players ranked by their power play points.
     */
    public async powerPlayRanking(
        id: string | number = "latest",
        counrty: TCountry = "global",
    ): Promise<PlayerRanking> {
        let api = await this.api.powerPlayRanking(id, counrty);
        let client = new PlayerRanking(api);

        return client;
    }

    /**
     * @param {number | string} id - The brawler ID or name.
     * @param {TCountry} [counrty="global"] - The country code.
     * @returns {Promise<PlayerRanking>} A promise that resolves with the player ranking object.
     */
    public async brawlerRanking(id: string | number, counrty: TCountry = "global"): Promise<PlayerRanking> {
        let api = await this.api.brawlerRanking(id, counrty);
        let client = new PlayerRanking(api);

        return client;
    }

    /**
     * Returns the club ranking for the specified country.
     * @param {TCountry} [counrty="global"] The country to get the ranking for.
     * @returns {Promise<ClubRanking>} A promise that resolves to the club ranking.
     */
    public async clubRanking(counrty: TCountry = "global"): Promise<ClubRanking> {
        let api = await this.api.clubRanking(counrty);
        let client = new ClubRanking(api);

        return client;
    }

    /**
     * Returns the current rotation of maps in the game.
     * @returns {Promise<IMap>} The current rotation of maps.
     */
    public async rotation(): Promise<IMap> {
        return this.api.rotation();
    }
}
