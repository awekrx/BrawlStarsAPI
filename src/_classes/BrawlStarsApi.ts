import axios from "axios";
import {
    APIBattle,
    APIBrawler,
    APIClub,
    APIClubMember,
    APIMap,
    APIPlayer,
    APIPowerPlayLeague,
    APIRankingClub,
    APIRankingPlayer,
    Country,
} from "../_interfaces/interfaces";

/**
 * Makes requests to the Brawl Stars API.
 * @class
 */
export default class API {
    /**
     * The API token.
     * @type {string}
     * @private
     */
    private token: string;
    /**
     * The base URL for the API.
     * @type {string}
     * @private
     */
    private baseUrl: string = "https://api.brawlstars.com/v1";
    /**
     * The Axios configuration object.
     * @type {object}
     * @private
     */
    private config = {
        headers: { Accept: "application/json", Authorization: `Bearer ` },
    };

    /**
     * Creates a new instance of the API class.
     * @param {string} token The API token.
     * @constructor
     */
    constructor(token: string) {
        this.token = token;
        this.config.headers.Authorization += token;
    }

    /**
     * Makes a request to the Brawl Stars API using the provided url.
     * @param {string} url The URL to make the request to.
     * @returns {Promise<any>}
     * @throws {Error} If the API returns an error.
     * @private
     */
    private async request(url: string): Promise<any> {
        try {
            return await (
                await axios.get(url, this.config)
            ).data;
        } catch (err: any) {
            if (err.response.data.reason === "accessDenied") {
                throw new Error("invalid API key");
            } else if (err.response.data.reason === "accessDenied.invalidIp") {
                throw new Error(err.response.data.message + ". Create key with this IP");
            } else if (err.response.data.reason === "notFound") {
                if (err.response.data.message) {
                    throw new Error(err.response.data.message);
                } else {
                    throw new Error("invalid tag");
                }
            } else if (err.response.data.reason === "badRequest") {
                throw new Error(err.response.data.message);
            } else {
                throw new Error("unknown error. Report a bug here https://github.com/awekrx/BrawlStarsAPI/issues");
            }
        }
    }

    /**
     * Retrieves a player's data from the Brawl Stars API.
     * @param {string} tag The player's tag, formatted as "#2R20PL0UR"
     * @returns {Promise<APIPlayer>} A promise that resolves to the player's data.
     */
    public async player(tag: string): Promise<APIPlayer> {
        tag = tag.toUpperCase();
        let url = this.baseUrl + `/players/%23${tag.replace("#", "")}`;
        return await this.request(url);
    }

    /**
     * Retrieves the battle log for the player with the given tag.
     * @param {string} tag - The tag of the player to retrieve the battle log for.
     * @return {Promise<APIBattle[]>} A promise that resolves to an array of objects representing the player's battle log.
     */
    public async battleLog(tag: string): Promise<APIBattle[]> {
        tag = tag.toUpperCase();
        let url = this.baseUrl + `/players/%23${tag.replace("#", "")}/battlelog`;
        return (await this.request(url)).items;
    }

    /**
     * Returns information about a specific club.
     * @param {string} tag - Club tag
     * @returns {Promise<APIClub>} Club information
     */
    public async club(tag: string): Promise<APIClub> {
        tag = tag.toUpperCase();
        let url = this.baseUrl + `/clubs/%23${tag.replace("#", "")}`;
        return await this.request(url);
    }

    /**
     * Retrieves the list of members of a club.
     * @param {string} tag - The tag of the club to retrieve information for.
     * @returns {Promise<APIClubMember[]>} An array of objects representing the members of the club.
     */
    public async clubMembers(tag: string): Promise<APIClubMember[]> {
        return (await this.club(tag)).members;
    }

    /**
     * Returns a list of all brawlers in the game.
     * @returns {Promise<APIBrawler[]>} A promise that resolves to an array of brawlers.
     */
    public async brawlers(): Promise<APIBrawler[]> {
        let url = this.baseUrl + "/brawlers";
        return (await this.request(url)).items;
    }

    /**
     * Retrieve information about a specific brawler
     * @param {number} id - The id brawler
     * @returns {Promise<APIBrawler>} A promise that resolves to an object containing information about the brawler
     */
    public async brawler(id: number | string): Promise<APIBrawler> {
        let url = this.baseUrl + `/brawlers/${id}`;
        return await this.request(url);
    }

    /**
     * Returns an array of seasons for the specified country's Power Play ranking.
     * @param {Country} [counrty="global"] - counrty The country to get the Power Play ranking seasons for. Defaults to 'global'.
     * @returns {Promise<APIPowerPlayLeague[]>} An array of seasons for the specified country's Power Play ranking.
     */
    public async powerPlayRankingSeasons(counrty: Country = "global"): Promise<APIPowerPlayLeague[]> {
        let url = this.baseUrl + `/rankings/${counrty}/powerplay/seasons`;
        return (await this.request(url)).items;
    }

    /**
     * Get the trophy ranking for a specific country.
     * @param {Country} [counrty="global"] - counrty The country to get the ranking for. Defaults to "global".
     * @returns {Promise<APIRankingPlayer[]>} An array of players ranked by their trophies.
     */
    public async trophyRanking(counrty: Country = "global"): Promise<APIRankingPlayer[]> {
        let url = this.baseUrl + `/rankings/${counrty}/players`;
        return (await this.request(url)).items;
    }

    /**
     * Get the power play ranking for a specific country and season.
     * @param {(number | "latest")} id The ID of the season. Defaults to "latest".
     * @param {Country} [counrty="global"] - counrty The country to get the ranking for. Defaults to "global".
     * @returns {Promise<APIRankingPlayer[]>} An array of players ranked by their power play points.
     */
    public async powerPlayRanking(
        id: number | string = "latest",
        counrty: Country = "global",
    ): Promise<APIRankingPlayer[]> {
        let url = this.baseUrl + `/rankings/${counrty}/powerplay/seasons/${id}`;
        return await this.request(url);
    }

    /**
     * @param {number | string} id - The brawler ID or name.
     * @param {Country} [counrty="global"] - The country code.
     * @returns {Promise<APIRankingPlayer[]>} A list of players and their rankings for a specific brawler.
     */
    public async brawlerRanking(id: number | string, counrty: Country = "global"): Promise<APIRankingPlayer[]> {
        let url = this.baseUrl + `/rankings/${counrty}/brawlers/${id}`;
        return (await this.request(url)).items;
    }

    /**
     *Returns an array of ranking clubs in a specific country.
     *@param {Country} [counrty="global"] counrty The country code. Default is "global".
     *@returns {Promise<APIRankingClub[]>} An array of ranking clubs.
     */
    public async clubRanking(counrty: Country = "global"): Promise<APIRankingClub[]> {
        let url = this.baseUrl + `/rankings/${counrty}/clubs`;
        return (await this.request(url)).items;
    }

    /**
     * Returns the current rotation of maps in the game.
     * @returns {Promise<APIMap>} The current rotation of maps.
     */
    public async rotation(): Promise<APIMap> {
        let url = this.baseUrl + `/events/rotation`;
        return await this.request(url);
    }
}
