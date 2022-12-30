import BrawlStarsClient from "./_classes/BrawlStarsClient";
import BrawlStarsApi from "./_classes/BrawlStarsApi";
import {
    IBattle,
    IBattlePlayer,
    IBrawler,
    IClub,
    IClubMember,
    IMap,
    IPlayer,
    IPowerPlayLeague,
    IRankingClub,
    IRankingPlayer,
    TBattleResult,
    TBattleType,
    TClubMemberRole,
    TClubType,
    TCountry,
    TMode,
} from "./_interfaces/interfaces";
import CBattleLog, { Battle as CBattle } from "./_classes/BattleLog";
import CClub, { Member as CMember } from "./_classes/Club";
import CClubRanking, { RankingClub as CRankingClub } from "./_classes/ClubRanking";
import CPlayer, { Brawler as CBrawler } from "./_classes/Player";
import CPlayerRanking, { RankingPlayer as CRankingPlayer } from "./_classes/PlayerRanking";

export interface APIBattle extends IBattle {}
export interface APIBattlePlayer extends IBattlePlayer {}
export interface APIBrawler extends IBrawler {}
export interface APIClub extends IClub {}
export interface APIClubMember extends IClubMember {}
export interface APIMap extends IMap {}
export interface APIPlayer extends IPlayer {}
export interface APIPowerPlayLeague extends IPowerPlayLeague {}
export interface APIRankingClub extends IRankingClub {}
export interface APIRankingPlayer extends IRankingPlayer {}
export interface Battle extends CBattle {}
export interface Member extends CMember {}
export interface RankingClub extends CRankingClub {}
export interface Brawler extends CBrawler {}
export interface RankingPlayer extends CRankingPlayer {}

export type BattleResult = TBattleResult;
export type BattleType = TBattleType;
export type ClubMemberRole = TClubMemberRole;
export type ClubType = TClubType;
export type Country = TCountry;
export type Mode = TMode;

export class BattleLog extends CBattleLog {}
export class Club extends CClub {}
export class ClubRanking extends CClubRanking {}
export class Player extends CPlayer {}
export class PlayerRanking extends CPlayerRanking {}

export class Client extends BrawlStarsClient {}
export class API extends BrawlStarsApi {}

export default {
    client: Client,
    api: API,
};
