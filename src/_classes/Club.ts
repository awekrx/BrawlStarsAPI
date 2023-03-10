import { APIClub, ClubMemberRole, ClubType } from "../_interfaces/interfaces";

/**
 * Represents a member of a club in the game.
 * @interface
 * @property {string} tag - The player's tag, formatted as "#2R20PL0UR".
 * @property {string} name - The player's in-game name.
 * @property {number} trophies - The number of trophies earned by the player.
 * @property {ClubMemberRole} role - The role of the player in the club.
 */

export interface Member {
    tag: string;
    name: string;
    trophies: number;
    role: ClubMemberRole;
}

/**
 * Represents a club in Brawl Stars.
 * @class
 */
export default class Club {
    /**
     * The club's tag.
     * @type {string}
     */
    public tag: string;
    /**
     * The club's name.
     * @type {string}
     */
    public name: string;
    /**
     * The club's description.
     * @type {string}
     */
    public description: string;
    /**
     * The club's type.
     * @type {ClubType}
     */
    public type: ClubType;
    /**
     * The club's current number of trophies.
     * @type {number}
     */
    public trophies: number;
    /**
     * The club's required number of trophies for membership.
     * @type {number}
     */
    public requiredTrophies: number;
    /**
     * The club's members.
     * @type {Member[]}
     */
    public members: Member[] = [];
    /**
     * The club's total number of members.
     * @type {number}
     */
    public count_members: number;
    /**
     * The club's status, either "full" or "not full".
     * @type {("full" | "not full")}
     */
    public status: "full" | "not full";

    /**
     * Creates a new Club instance.
     * @param {APIClub} api The club data returned by the API.
     * @constructor
     */
    constructor(api: APIClub) {
        this.tag = api.tag;
        this.name = api.name;
        this.description = api.description;
        this.type = api.type;
        this.trophies = api.trophies;
        this.requiredTrophies = api.requiredTrophies;
        for (let i = 0; i < api.members.length; i++) {
            this.members.push({
                tag: api.members[i].tag,
                name: api.members[i].name,
                trophies: api.members[i].trophies,
                role: api.members[i].role,
            });
        }
        this.count_members = this.members.length;
        this.count_members == 30 ? (this.status = "full") : (this.status = "not full");
    }

    /**
     * Returns an array of all the member tags in the club.
     * @returns {string[]}
     */
    public getTags(): string[] {
        let tags: string[] = [];
        for (let i = 0; i < this.members.length; i++) {
            tags.push(this.members[i].tag);
        }
        return tags;
    }

    /**
     * Returns an array of all the member names in the club.
     * @returns {string[]}
     */
    public getNames(): string[] {
        let names: string[] = [];
        for (let i = 0; i < this.members.length; i++) {
            names.push(this.members[i].name);
        }
        return names;
    }

    /**
     * Returns an array of all the members in the club with a specific role.
     * @param {ClubMemberRole} role The role to filter by.
     * @returns {Member[]}
     */
    public getRoleMembers(role: ClubMemberRole): Member[] {
        return this.members.filter((member) => member.role == role);
    }
}
