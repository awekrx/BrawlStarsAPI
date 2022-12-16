import { IClub, TClubMemberRole, TClubType } from "../interfaces";

export interface Member {
    tag: string;
    name: string;
    trophies: number;
    role: TClubMemberRole;
}

export default class Club {
    public tag: string;
    public name: string;
    public description: string;
    public type: TClubType;
    public trophies: number;
    public requiredTrophies: number;
    public members: Member[] = [];
    public countMembers: number;
    public status: "full" | "not full";

    constructor(api: IClub) {
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
        this.countMembers = this.members.length;
        this.countMembers == 30 ? (this.status = "full") : (this.status = "not full");
    }

    public getTags(): string[] {
        let tags: string[] = [];
        for (let i = 0; i < this.members.length; i++) {
            tags.push(this.members[i].tag);
        }
        return tags;
    }

    public getNames(): string[] {
        let names: string[] = [];
        for (let i = 0; i < this.members.length; i++) {
            names.push(this.members[i].name);
        }
        return names;
    }

    public getRoleMembers(role: TClubMemberRole): Member[] {
        return this.members.filter((member) => member.role == role);
    }
}
