/**
 * Represents a country code.
 */
export type Country =
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

/**
 * Represents the different types of game modes in the game.
 */
export type Mode =
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
/**
 * Represents the type of a battle.
 * @type {'soloRanked' | 'teamRanked' | 'ranked'}
 */
export type BattleType = "soloRanked" | "teamRanked" | "ranked";
/**
 * Represents the result of a battle.
 * @type {BattleResult}
 */
export type BattleResult = "victory" | "defeat" | "draw";
/**
 * Represents the role of a member in a club.
 * @type {ClubMemberRole}
 */
export type ClubMemberRole = "notMember" | "member" | "president" | "senior" | "vicePresident" | "unknown";
/**
 * Represents the type of a club.
 * @type {ClubType}
 */
export type ClubType = "open" | "inviteOnly" | "closed" | "unknown";

/**
 * Represents a brawler in a battle.
 * @interface
 * @property {number} id - The ID of the brawler.
 * @property {string} name - The name of the brawler.
 * @property {number} power - The power level of the brawler.
 * @property {number} trophies - The number of trophies earned by the brawler.
 */
interface APIBattleBrawler {
    id: number;
    name: string;
    power: number;
    trophies: number;
}

/**
 * Represents a brawler in a battle.
 * @interface
 * @property {number} id - The ID of the brawler.
 * @property {string} name - The name of the brawler.
 * @property {number} power - The power level of the brawler.
 * @property {number} trophies - The number of trophies earned by the brawler.
 */
export interface APIBattlePlayer {
    tag: string;
    name: string;
    brawler: APIBattleBrawler;
}

/**
 * Represents a battle.
 * @interface
 * @property {string} battleTime - The time at which the battle took place.
 * @property {object} event - Information about the event in which the battle took place.
 * @property {number} event.id - The ID of the event.
 * @property {TMode} event.mode - The mode of the event.
 * @property {string} event.map - The map on which the battle took place.
 * @property {object} battle - Information about the battle itself.
 * @property {TMode} battle.mode - The mode of the battle.
 * @property {BattleType} battle.type - The type of the battle.
 * @property {BattleResult} [battle.result] - The result of the battle (optional).
 * @property {number} [battle.duration] - The duration of the battle in seconds (optional).
 * @property {number} [battle.rank] - The rank of the battle (optional).
 * @property {number} [battle.trophyChange] - The change in trophies after the battle (optional).
 * @property {null|APIBattlePlayer} starPlayer - The star player of the battle, or null if none was designated.
 * @property {Array<APIBattlePlayer[]>} teams - An array of teams, each containing an array of players.
 */
export interface APIBattle {
    [key: string]: any;
    battleTime: string;
    event: {
        id: number;
        mode: Mode;
        map: string;
    };
    battle: {
        mode: Mode;
        type: BattleType;
        result?: BattleResult;
        duration?: number;
        rank?: number;
        trophyChange?: number;
        starPlayer: null | APIBattlePlayer;
        teams: [
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
    };
}

/**
 * Represents a brawler in the game.
 * @interface
 * @property {number} id - The ID of the brawler.
 * @property {string} name - The name of the brawler.
 * @property {Array<{id: number, name: string}>} starPowers - An array of star powers available to the brawler.
 * @property {Array<{id: number, name: string}>} gadgets - An array of gadgets available to the brawler.
 */
export interface APIBrawler {
    id: number;
    name: string;
    starPowers: { id: number; name: string }[];
    gadgets: { id: number; name: string }[];
}

/**
 * Represents a brawler owned by a player.
 * @interface
 * @property {number} id - The ID of the brawler.
 * @property {string} name - The name of the brawler.
 * @property {number} power - The power level of the brawler.
 * @property {number} rank - The rank of the brawler.
 * @property {number} trophies - The number of trophies earned by the brawler.
 * @property {number} highestTrophies - The highest number of trophies ever earned by the brawler.
 * @property {Array<{id: number, name: string, level: number}>} gears - An array of gears equipped by the brawler.
 * @property {Array<{id: number, name: string}>} starPowers - An array of star powers available to the brawler.
 * @property {Array<{id: number, name: string}>} gadgets - An array of gadgets available to the brawler.
 */

interface APIPlayerBrawler {
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

/**
 * Represents a player in the game.
 * @interface
 * @property {string} tag - The unique tag of the player.
 * @property {string} name - The name of the player.
 * @property {string} nameColor - The color of the player's name.
 * @property {object} icon - The icon of the player.
 * @property {number} icon.id - The ID of the player's icon.
 * @property {number} trophies - The number of trophies earned by the player.
 * @property {number} highestTrophies - The highest number of trophies ever earned by the player.
 * @property {number} expLevel - The player's experience level.
 * @property {number} expPoints - The player's experience points.
 * @property {boolean} isQualifiedFromChampionshipChallenge - Whether the player is qualified for the Championship Challenge.
 * @property {number} 3vs3Victories - The number of 3 vs 3 victories earned by the player.
 * @property {number} soloVictories - The number of solo victories earned by the player.
 * @property {number} duoVictories - The number of duo victories earned by the player.
 * @property {number} bestRoboRumbleTime - The player's best time in Robo Rumble.
 * @property {number} bestTimeAsBigBrawler - The player's best time as a big brawler.
 * @property {object} club - The club to which the player belongs.
 * @property {string} club.tag - The unique tag of the club.
 * @property {string} club.name - The name of the club.
 * @property {Array<APIPlayerBrawler>} brawlers - An array of brawlers owned by the player.
 */
export interface APIPlayer {
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
    brawlers: APIPlayerBrawler[];
}

/**
 * Represents a member of a club.
 * @interface
 * @property {string} tag - The unique tag of the member.
 * @property {string} name - The name of the member.
 * @property {string} nameColor - The color of the member's name.
 * @property {ClubMemberRole} role - The role of the member in the club.
 * @property {number} trophies - The number of trophies earned by the member.
 * @property {object} icon - The icon of the member.
 * @property {number} icon.id - The ID of the member's icon.
 */
export interface APIClubMember {
    tag: string;
    name: string;
    nameColor: string;
    role: ClubMemberRole;
    trophies: number;
    icon: { id: number };
}

/**
 * Represents a club.
 * @interface
 * @property {string} tag - The unique tag of the club.
 * @property {string} name - The name of the club.
 * @property {string} description - The description of the club.
 * @property {ClubType} type - The type of the club.
 * @property {number} badgeId - The ID of the club's badge.
 * @property {number} requiredTrophies - The number of trophies required to join the club.
 * @property {number} trophies - The number of trophies earned by the club.
 * @property {Array<APIClubMember>} members - An array of members in the club.
 */
export interface APIClub {
    tag: string;
    name: string;
    description: string;
    type: ClubType;
    badgeId: number;
    requiredTrophies: number;
    trophies: number;
    members: APIClubMember[];
}

/**
 * Represents a player in a ranking.
 * @interface
 * @property {string} tag - The unique tag of the player.
 * @property {string} name - The name of the player.
 * @property {string} nameColor - The color of the player's name.
 * @property {object} icon - The icon of the player.
 * @property {number} icon.id - The ID of the player's icon.
 * @property {number} trophies - The number of trophies earned by the player.
 * @property {number} rank - The ranking of the player.
 * @property {object} club - The club that the player is a member of.
 * @property {string} club.name - The name of the club.
 */
export interface APIRankingPlayer {
    tag: string;
    name: string;
    nameColor: string;
    icon: { id: number };
    trophies: number;
    rank: number;
    club: { name: string };
}

/**
 * Represents a Power Play league.
 * @interface
 * @property {string} id - The unique ID of the league.
 * @property {string} startTime - The start time of the league.
 * @property {string} endTime - The end time of the league.
 */
export interface APIPowerPlayLeague {
    id: string;
    startTime: string;
    endTime: string;
}

/**
 * Represents a club in a ranking.
 * @interface
 * @property {string} tag - The unique tag of the club.
 * @property {string} name - The name of the club.
 * @property {number} badgeId - The ID of the club's badge.
 * @property {number} trophies - The number of trophies earned by the club.
 * @property {number} rank - The ranking of the club.
 * @property {number} memberCount - The number of members in the club.
 */
export interface APIRankingClub {
    tag: string;
    name: string;
    badgeId: number;
    trophies: number;
    rank: number;
    memberCount: number;
}

/**
 * Represents a map in a game.
 * @interface
 * @property {string} startTime - The start time of the map.
 * @property {string} endTime - The end time of the map.
 * @property {number} slotId - The ID of the map's slot.
 * @property {object} event - The event that the map belongs to.
 * @property {number} event.id - The ID of the event.
 * @property {TMode} event.mode - The mode of the event.
 * @property {string} event.map - The name of the map.
 */
export interface APIMap {
    startTime: string;
    endTime: string;
    slotId: number;
    event: {
        id: number;
        mode: Mode;
        map: string;
    };
}
