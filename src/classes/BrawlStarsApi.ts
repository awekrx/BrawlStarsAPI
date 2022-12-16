import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
    IBattle,
    IBrawler,
    IClub,
    IClubMember,
    IMap,
    IPlayer,
    IPowerPlayLeague,
    IRankingClub,
    IRankingPlayer,
    TCountry,
} from "../interfaces";

export default class BrawlStarsApi {
    private token: string;
    private baseUrl: string = "https://api.brawlstars.com/v1";
    private config = {
        headers: { Accept: "application/json", Authorization: `Bearer ` },
    };

    constructor(token: string) {
        this.token = token;
        this.config.headers.Authorization += token;
    }

    private async request(url: string): Promise<any> {
        return await (
            await axios.get(url, this.config)
        ).data;
    }

    public async player(tag: string): Promise<IPlayer> {
        tag = tag.toUpperCase();
        let url = this.baseUrl + `/players/%23${tag.replace("#", "")}`;
        return await this.request(url);
    }

    public async battleLog(tag: string): Promise<IBattle[]> {
        tag = tag.toUpperCase();
        let url = this.baseUrl + `/players/%23${tag.replace("#", "")}/battlelog`;
        return (await this.request(url)).items;
    }

    public async club(tag: string): Promise<IClub> {
        tag = tag.toUpperCase();
        let url = this.baseUrl + `/clubs/%23${tag.replace("#", "")}`;
        return await this.request(url);
    }

    public async clubMembers(tag: string): Promise<IClubMember[]> {
        return (await this.club(tag)).members;
    }

    public async brawlers(): Promise<IBrawler[]> {
        let url = this.baseUrl + "/brawlers";
        return (await this.request(url)).items;
    }

    public async brawler(id: number | string): Promise<IBrawler> {
        let url = this.baseUrl + `/brawlers/${id}`;
        return await this.request(url);
    }

    public async powerPlayRankingSeasons(counrty: TCountry = "global"): Promise<IPowerPlayLeague[]> {
        let url = this.baseUrl + `/rankings/${counrty}/powerplay/seasons`;
        return (await this.request(url)).items;
    }

    public async trophyRanking(counrty: TCountry = "global"): Promise<IRankingPlayer[]> {
        let url = this.baseUrl + `/rankings/${counrty}/players`;
        return (await this.request(url)).items;
    }

    public async powerPlayRanking(
        id: number | string = "latest",
        counrty: TCountry = "global",
    ): Promise<IRankingPlayer[]> {
        let url = this.baseUrl + `/rankings/${counrty}/powerplay/seasons/${id}`;
        return await this.request(url);
    }

    public async brawlerRanking(id: number | string, counrty: TCountry = "global"): Promise<IRankingPlayer[]> {
        let url = this.baseUrl + `/rankings/${counrty}/brawlers/${id}`;
        return (await this.request(url)).items;
    }

    public async clubRanking(counrty: TCountry = "global"): Promise<IRankingClub[]> {
        let url = this.baseUrl + `/rankings/${counrty}/clubs`;
        return (await this.request(url)).items;
    }

    public async rotation(): Promise<IMap> {
        let url = this.baseUrl + `/events/rotation`;
        return await this.request(url);
    }
}
