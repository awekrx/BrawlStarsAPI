import { IBattle, IBattlePlayer, TBattleResult, TBattleType, TMode } from "../interfaces";

interface starPlayer {
    tag: string;
    name: string;
    brawler: { name: string; power: number; trophies: number };
}

export class Battle {
    time: string;
    mode: TMode;
    map: string;
    type: TBattleType;
    result?: TBattleResult;
    duration?: number;
    rank?: number;
    trophyChange?: number;
    starPlayer: null | starPlayer;
    teams: [
        IBattlePlayer[],
        IBattlePlayer[],
        IBattlePlayer[]?,
        IBattlePlayer[]?,
        IBattlePlayer[]?,
        IBattlePlayer[]?,
        IBattlePlayer[]?,
        IBattlePlayer[]?,
        IBattlePlayer[]?,
        IBattlePlayer[]?,
    ];

    constructor(api: IBattle) {
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

    getTags(): string[] {
        let tags: string[] = [];
        for (let i = 0; i < this.teams.length; i++) {
            for (let j = 0; j < this.teams[i]!.length; j++) {
                tags.push(this.teams[i]![j].tag);
            }
        }
        return tags;
    }

    getNames(): string[] {
        let names: string[] = [];
        for (let i = 0; i < this.teams.length; i++) {
            for (let j = 0; j < this.teams[i]!.length; j++) {
                names.push(this.teams[i]![j].name);
            }
        }
        return names;
    }
}

export default class BattleLog {
    public history: Battle[] = [];

    constructor(api: IBattle[]) {
        for (let i = 0; i < api.length; i++) {
            this.history.push(new Battle(api[i]));
        }
    }

    public last(): Battle {
        return this.history[0];
    }

    public game(number: number): Battle {
        return this.history[number - 1];
    }
}
