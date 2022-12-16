export type TCountry =
    | "global"
    | "af"
    | "ax"
    | "al"
    | "dz"
    | "as"
    | "ad"
    | "ao"
    | "ai"
    | "aq"
    | "ag"
    | "ar"
    | "am"
    | "aw"
    | "aс"
    | "au"
    | "at"
    | "az"
    | "bs"
    | "bh"
    | "bd"
    | "bb"
    | "by"
    | "be"
    | "bz"
    | "bj"
    | "bm"
    | "bt"
    | "bo"
    | "ba"
    | "bw"
    | "bv"
    | "br"
    | "io"
    | "vg"
    | "bn"
    | "bg"
    | "bf"
    | "bi"
    | "kh"
    | "cm"
    | "ca"
    | "ic"
    | "cv"
    | "bq"
    | "ky"
    | "cf"
    | "ea"
    | "td"
    | "cl"
    | "cn"
    | "cx"
    | "cc"
    | "co"
    | "km"
    | "cg"
    | "cd"
    | "ck"
    | "cr"
    | "ci"
    | "hr"
    | "cu"
    | "cw"
    | "cy"
    | "cz"
    | "dk"
    | "dg"
    | "dj"
    | "dm"
    | "do"
    | "ec"
    | "eg"
    | "sv"
    | "gq"
    | "er"
    | "ee"
    | "et"
    | "fk"
    | "fo"
    | "fj"
    | "fi"
    | "fr"
    | "gf"
    | "pf"
    | "tf"
    | "ga"
    | "gm"
    | "ge"
    | "de"
    | "gh"
    | "gi"
    | "gr"
    | "gl"
    | "gw"
    | "gy"
    | "ht"
    | "hm"
    | "hn"
    | "hk"
    | "hu"
    | "is"
    | "in"
    | "id"
    | "ir"
    | "iq"
    | "ie"
    | "im"
    | "il"
    | "it"
    | "jm"
    | "jp"
    | "je"
    | "jo"
    | "kz"
    | "ke"
    | "ki"
    | "xk"
    | "kw"
    | "la"
    | "lv"
    | "lb"
    | "ls"
    | "lr"
    | "ly"
    | "li"
    | "lt"
    | "lu"
    | "mo"
    | "mk"
    | "mg"
    | "mw"
    | "my"
    | "mv"
    | "ml"
    | "mt"
    | "mh"
    | "mq"
    | "mr"
    | "mu"
    | "yt"
    | "mx"
    | "fm"
    | "md"
    | "mc"
    | "mn"
    | "me"
    | "ms"
    | "ma"
    | "mz"
    | "mm"
    | "na"
    | "nr"
    | "np"
    | "nl"
    | "nc"
    | "nz"
    | "ni"
    | "ne"
    | "ng"
    | "nu"
    | "nf"
    | "kp"
    | "mp"
    | "no"
    | "om"
    | "pk"
    | "pw"
    | "ps"
    | "pa"
    | "pg"
    | "py"
    | "pe"
    | "ph"
    | "pn"
    | "pl"
    | "pt"
    | "pr"
    | "qa"
    | "re"
    | "ro"
    | "ru"
    | "rw"
    | "bl"
    | "sh"
    | "kn"
    | "lc"
    | "mf"
    | "pm"
    | "ws"
    | "sn"
    | "rs"
    | "sc"
    | "sl"
    | "sg"
    | "sx"
    | "sk"
    | "si"
    | "sb"
    | "so"
    | "za"
    | "kr"
    | "ss"
    | "es"
    | "lk"
    | "vc"
    | "sd"
    | "sr"
    | "sj"
    | "sz"
    | "se"
    | "ch"
    | "sy"
    | "tw"
    | "tj"
    | "tz"
    | "th"
    | "tl"
    | "tg"
    | "tk"
    | "to"
    | "tt"
    | "ta"
    | "tn"
    | "tr"
    | "tm"
    | "tc"
    | "tv"
    | "um"
    | "vi"
    | "ug"
    | "ua"
    | "ae"
    | "gb"
    | "us"
    | "uy"
    | "uz"
    | "vu"
    | "va"
    | "ve"
    | "vn"
    | "wf"
    | "eh"
    | "ye"
    | "zm"
    | "zw";

export type TMode =
    | "soloShowdown"
    | "duoShowdown"
    | "heist"
    | "bounty"
    | "siege"
    | "gemGrab"
    | "brawlBall"
    | "bigGame"
    | "bossFight"
    | "roboRumble"
    | "takedown"
    | "loneStar"
    | "presentPlunder"
    | "hotZone"
    | "superCityRampage"
    | "knockout"
    | "volleyBrawl"
    | "basketBrawl"
    | "holdTheTrophy"
    | "trophyThieves"
    | "duels"
    | "wipeout"
    | "payload"
    | "botDrop"
    | "hunters"
    | "lastStand"
    | "unknown";
export type TBattleType = "soloRanked" | "teamRanked" | "ranked";
export type TBattleResult = "victory" | "defeat" | "draw";
export type TClubMemberRole = "notMember" | "member" | "president" | "senior" | "vicePresident" | "unknown";
export type TClubType = "open" | "inviteOnly" | "closed" | "unknown";

interface IBattleBrawler {
    id: number;
    name: string;
    power: 9;
    trophies: number;
}

export interface IBattlePlayer {
    tag: string;
    name: string;
    brawler: IBattleBrawler;
}

export interface IBattle {
    [key: string]: any;
    battleTime: string;
    event: {
        id: number;
        mode: TMode;
        map: string;
    };
    battle: {
        mode: TMode;
        type: TBattleType;
        result?: TBattleResult;
        duration?: number;
        rank?: number;
        trophyChange?: number;
        starPlayer: null | IBattlePlayer;
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
    };
}

export interface IBrawler {
    id: number;
    name: string;
    starPowers: { id: number; name: string }[];
    gadgets: { id: number; name: string }[];
}

interface IPlayerBrawler {
    id: number;
    name: string;
    power: number;
    rank: number;
    trophies: number;
    highestTrophies: number;
    gears: { id: number; name: string; level: number }[];
    starPowers: { id: number; name: string }[];
    gadgets: { id: number; name: string }[];
}

export interface IPlayer {
    tag: string;
    name: string;
    nameColor: string;
    icon: { id: number };
    trophies: number;
    highestTrophies: number;
    expLevel: number;
    expPoints: number;
    isQualifiedFromChampionshipChallenge: boolean;
    "3vs3Victories": number;
    soloVictories: number;
    duoVictories: number;
    bestRoboRumbleTime: number;
    bestTimeAsBigBrawler: number;
    club: { tag: string; name: string };
    brawlers: IPlayerBrawler[];
}

export interface IClubMember {
    tag: string;
    name: string;
    nameColor: string;
    role: TClubMemberRole;
    trophies: number;
    icon: { id: number };
}

export interface IClub {
    tag: string;
    name: string;
    description: string;
    type: TClubType;
    badgeId: number;
    requiredTrophies: number;
    trophies: number;
    members: IClubMember[];
}

export interface IRankingPlayer {
    tag: string;
    name: string;
    nameColor: string;
    icon: { id: number };
    trophies: number;
    rank: number;
    club: { name: string };
}

export interface IPowerPlayLeague {
    id: string;
    startTime: string;
    endTime: string;
}

export interface IRankingClub {
    tag: string;
    name: string;
    badgeId: number;
    trophies: number;
    rank: number;
    memberCount: number;
}

export interface IMap {
    startTime: string;
    endTime: string;
    slotId: number;
    event: {
        id: number;
        mode: TMode;
        map: string;
    };
}
