import { IBrawler, IMap, IPowerPlayLeague, TCountry } from "../interfaces";
import BattleLog from "./BattleLog";
import BrawlStarsApi from "./BrawlStarsApi";
import Club, { Member } from "./Club";
import ClubRanking from "./ClubRanking";
import Player from "./Player";
import PlayerRanking from "./PlayerRanking";

export default class BrawlStarsClient {
    private api: BrawlStarsApi;

    constructor(token: string) {
        this.api = new BrawlStarsApi(token);
    }

    public async player(tag: string): Promise<Player> {
        let api = await this.api.player(tag);
        let client = new Player(api);

        return client;
    }

    public async battleLog(tag: string): Promise<BattleLog> {
        let api = await this.api.battleLog(tag);
        let client = new BattleLog(api);

        return client;
    }
    public async club(tag: string): Promise<Club> {
        let api = await this.api.club(tag);
        let client = new Club(api);

        return client;
    }

    public async clubMembers(tag: string): Promise<Member[]> {
        return (await this.club(tag)).members;
    }

    public async brawlers(): Promise<IBrawler[]> {
        return await this.api.brawlers();
    }

    public async brawler(id: number | string): Promise<IBrawler> {
        return await this.api.brawler(id);
    }

    public async powerPlayRankingSeasons(counrty: TCountry = "global"): Promise<IPowerPlayLeague[]> {
        return this.api.powerPlayRankingSeasons(counrty);
    }

    public async trophyRanking(counrty: TCountry = "global"): Promise<PlayerRanking> {
        let api = await this.api.trophyRanking(counrty);
        let client = new PlayerRanking(api);

        return client;
    }

    public async powerPlayRanking(
        id: string | number = "latest",
        counrty: TCountry = "global",
    ): Promise<PlayerRanking> {
        let api = await this.api.powerPlayRanking(id, counrty);
        let client = new PlayerRanking(api);

        return client;
    }

    public async brawlerRanking(id: string | number, counrty: TCountry = "global"): Promise<PlayerRanking> {
        let api = await this.api.brawlerRanking(id, counrty);
        let client = new PlayerRanking(api);

        return client;
    }

    public async clubRanking(counrty: TCountry = "global"): Promise<ClubRanking> {
        let api = await this.api.clubRanking(counrty);
        let client = new ClubRanking(api);

        return client;
    }

    public async rotation(): Promise<IMap> {
        return this.api.rotation();
    }
}
