import { IPlayer } from "../interfaces";

interface Brawler {
    rank: number;
    trophies: number;
    highestTrophies: number;
    power: number;
    countStarPowers: number;
    countGadgets: number;
    countGears: number;
}

export default class Player {
    public tag: string;
    public name: string;
    public trophies: number;
    public highestTrophies: number;
    public victories: {
        [key: string]: number;
        trio: number;
        duo: number;
        solo: number;
    };
    public club: { tag: string; name: string };
    public brawlers: {
        [key: string]: Brawler;
    } = {};

    constructor(api: IPlayer) {
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

    public wins(): number {
        return this.victories.trio + this.victories.duo + this.victories.solo;
    }

    public brawler(name: string): null | Brawler {
        if (Object.keys(this.brawlers).includes(name)) {
            return this.brawlers[name];
        }
        return null;
    }
}
