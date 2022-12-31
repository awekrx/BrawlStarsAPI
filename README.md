# BrawlStarsAPI

BrawlStarsAPI is a Node.js library for accessing the [Brawl Stars API](https://developer.brawlstars.com/). It provides an easy-to-use interface for making requests to the API and receiving the responses in a convenient format.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/brawlstars-api-nodejs) to install brawlstars-api-nodejs.

```bash
npm install brawlstars-api-nodejs
```

## Usage

To use BrawlStarsAPI, you will need an API token, which you can obtain by creating an account on the [Brawl Stars Developer Portal](https://developer.brawlstars.com/).

Here is an example of how to use BrawlStarsAPI to get information about a player:

```typescript
const BrawlStarsAPI = require("brawlstars-api-nodejs");

const client = new BrawlStarsAPI("YOUR_API_TOKEN_HERE");

async function main() {
    const player = await client.player("#123ABC");
    console.log(player.name);
}

main();
```

[More examples]("/examples")

## Documentation

### Classes

#### Client

This class is the main entry point for the library. It provides methods to access various parts of the Brawl Stars API.

Methods

-   `player(tag: string): Promise<Player>`
    -   Parameters:
        -   tag (string): The player's tag.
    -   Returns: A promise that resolves to a [`Player`](#player) object containing information about the player.
-   `battleLog(tag: string): Promise<BattleLog>`
    -   Parameters:
        -   `tag (string)`: The player's tag.
    -   Returns: A promise that resolves to a [`BattleLog`](#battlelog) object containing the player's battle log.
-   `club(tag: string): Promise<Club>`
    -   Parameters:
        -   `tag (string)`: The club's tag.
    -   Returns: A promise that resolves to a [`Club`](#club) object containing information about the club.
-   `clubMembers(tag: string): Promise<Member[]>`
    -   Parameters:
        -   `tag (string)`: The club's tag.
    -   Returns: A promise that resolves to an array of [`Member`](#member) objects containing information about the club's members.
-   `brawlers(): Promise<Brawler[]>`
    -   Returns: A promise that resolves to an array of [`Brawler`](#brawler) objects containing information about all brawlers.
-   `brawler(id: number | string): Promise<Brawler>`
    -   Parameters:
        -   `id (number | string)`: The ID or name of the brawler.
    -   Returns: A promise that resolves to a [`Brawler`](#brawler) object containing information about the brawler.
-   `powerPlayRankingSeasons(counrty?: Country): Promise<PowerPlayLeague[]>`
    -   Parameters:
        -   [`counrty (Country)`](#country): The country to get the ranking for. Defaults to `"global"`.
    -   Returns: A promise that resolves to an array of [`PowerPlayLeague`](#apipowerplayleague) objects containing information about all seasons of power play rankings for the specified country.
-   `trophyRanking(counrty?: Country): Promise<PlayerRanking>`
    -   Parameters:
        -   [`counrty (Country)`](#country): The country to get the ranking for. Defaults to `"global"`.
    -   Returns: A promise that resolves to a `[`PlayerRanking`](#playerranking) object containing information about the top players in the trophy ranking for the specified country.
-   `powerPlayRanking(id?: string | number, counrty?: Country): Promise<PlayerRanking>`
    -   Parameters:
        -   `id (string | number)`: The ID or name of the power play season. Defaults to `"latest"`.
        -   [`counrty (Country)`](#country): The country to get the ranking for. Defaults to `"global"`.
    -   Returns: A promise that resolves to a [`PlayerRanking`](#playerranking) object containing information about the top players in the power play ranking for the specified season and country.
-   `brawlerRanking(id: string | number, counrty?: Country): Promise<PlayerRanking>`
    -   Parameters:
        -   `id (string | number)`: The ID or name of the brawler.
        -   [`counrty (Country)`](#country): The country to get the ranking for. Defaults to `"global"`.
    -   Returns: A promise that resolves to a [`PlayerRanking`](#playerranking) object containing information about the top players using the specified brawler in the specified country.
-   `clubRanking(counrty?: Country): Promise<ClubRanking>`
    -   Parameters:
        -   [`counrty (Country)`](#country): The country to get the ranking for. Defaults to "global".
    -   Returns: A promise that resolves to a [`ClubRanking`](#clubranking) object containing information about the top clubs in the specified country.
-   `rotation(): Promise<APIMap>`
    -   Returns: A promise that resolves to a [`APIMap`](#apimap) object containing information about the current rotation of maps.

#### BattleLog

The `BattleLog` class represents a player's battle log in the game Brawl Stars. It contains information about the player's recent battles as well as a function to get the player's last battle.

Properties

-   `history (Battle[])`: An array of [`Battle`](#battle) objects representing the player's recent battles.

Methods

-   `last(): Battle`
    -   Returns: The player's last [`Battle`](#battle).

#### Battle

The `Battle` class represents a battle in the game Brawl Stars. It contains information about the time, mode, map, type, result, duration, rank, trophy change, star player, and teams of the battle.

Properties

-   `time (string)`: The time the battle took place.
-   [`mode (Mode)`](#mode): The mode in which the battle was played.
-   `map (string)`: The map on which the battle was played.
-   [`type (BattleType)`](#battletype): The type of battle.
-   [`result (BattleResult)`](#battleresult): The result of the battle.
-   `duration (number)`: The duration of the battle in seconds.
-   `rank (number)`: The player's rank at the end of the battle.
-   `trophyChange (number)`: The change in the player's trophies after the battle.
-   [`starPlayer (StarPlayer)`](#starplayer): The star player of the battle.
-   [`teams (APIBattlePlayer[][])`](#apibattleplayer): The teams that participated in the battle.

Methods

-   `getTags(): string[]`
    -   Returns: An array of all the player tags in the battle.
-   `getNames(): string[]`
    -   Returns: An array of all the player names in the battle.

#### Club

The `Club` class represents a club in the game Brawl Stars. It contains information about the club such as its name, description, type, and members.

Properties

-   `tag (string)`: The club's tag.
-   `name (string)`: The club's name.
-   `description (string)`: The club's description.
-   [`type (ClubType)`](#clubtype): The club's type.
-   `trophies (number)`: The club's current number of trophies.
-   `requiredTrophies (number)`: The club's required number of trophies for membership.
-   [`members (Member[])`](#member): The club's members.
-   `count_members (number)`: The club's total number of members.
-   `status (string)`: The club's status, either "full" or "not full".

Methods

-   `getTags(): string[]`
    -   Returns: An array of all the member tags in the club.
-   `getNames(): string[]`
    -   Returns: An array of all the member names in the club.
-   ` getRoleMembers(role: ClubMemberRole): Member[]`
    -   Parameters:
        -   [`role (ClubMemberRole)`](#clubmemberrole): The role to filter by.
    -   Returns: An array of all the [`Member`](#member)'s in the club with a specific role.

#### ClubRanking

The `ClubRanking` class represents a list of ranked clubs in the game Brawl Stars. It contains information about each club's rank, name, trophies, and member count.

Properties

-   `ranking (RankingClub[])`: An array of [`RankingClub`](#rankingclub) objects representing the ranked clubs.

Methods

-   `rank(position: number): (null | RankingClub)`
    -   Parameters:
        -   `position (number)`: The rank of the club.
    -   Returns: The club at the specified rank [`RankingClub`](#rankingclub), or `null` if the rank is invalid.
-   `getTags(): string[]`
    -   Returns: An array of club tags in the ranking.
-   `getNames(): string[]`
    -   Returns: An array of club names in the ranking.
-   `notFull(): RankingClub[]`
    -   Returns: An array of [`RankingClub`](#rankingclub) in the ranking with fewer than 30 members.

#### Player

The `Player` class represents a player in the game Brawl Stars. It contains information about the player's name, trophies, club, and brawlers.

Properties

-   `tag (string)`: The player's tag.
-   `name (string)`: The player's name.
-   `trophies (number)`: The player's current number of trophies.
-   `highestTrophies (number)`: The player's highest number of trophies achieved.
-   `victories (Object)`: An object containing the player's victory count for each game mode. The object contains the following properties:
    -   `trio (number)`: The player's number of victories in 3v3 game mode.
    -   `duo (number)`: The player's number of victories in duo game mode.
    -   `solo (number)`: The player's number of victories in solo game mode.
-   `club (Object)`: An object containing the player's club information. The object contains the following properties:
    -   `tag (string)`: The club's tag.
    -   `name (string)`: The club's name.
-   `brawlers (Object)`: An object containing information about each brawler the player has. The object keys are the brawler names in uppercase, and the values are [`Brawler`](#brawler) objects.

Methods

-   `wins(): number`
    -   Returns: The total number of wins the player has across all game modes.
-   `brawler(name: string): null | Brawler`
    -   Parameters:
        -   `name (string)`: The name of the brawler to retrieve.
    -   Returns: The [`Brawler`](#brawler), or `null` if the brawler with the specified name does not exist.

#### PlayerRanking

The `PlayerRanking` class represents a list of ranked players in the game Brawl Stars. It contains information about each player's current rank and number of trophies, as well as functions for retrieving players at a specific rank and lists of player tags and names.

Properties

-   `ranking (RankingPlayer[])`: An array of [`RankingPlayer`](#rankingplayer) objects representing the ranked players.

Methods

-   `rank(position: number): RankingPlayer | null`
    -   Parameters:
        -   `position (number)`: The rank of the player to retrieve.
    -   Returns: The [`RankingPlayer`](#rankingplayer) object for the player at the specified rank, or `null` if the rank is out of bounds.
-   `getTags(): string[]`
    -   Returns: An array of all player tags in the ranking list.
-   `getNames(): string[]`
    -   Returns: An array of all player names in the ranking list.

#### API

The `API` class is a client for interacting with the Brawl Stars API. It allows you to retrieve data about players, clubs, and brawlers in the game.

Methods

-   `player(tag: string): Promise<APIPlayer>`
    -   Parameters:
        -   `tag (string)`: The player's tag, formatted as `"#2R20PL0UR"`.
    -   Returns: A promise [`APIPlayer`](#apiplayer) that resolves to the player's data.
-   `battleLog(tag: string): Promise<APIBattle[]>`
    -   Parameters:
        -   ` tag (string)`: The tag of the player to retrieve the battle log for.
    -   Returns: A promise [`APIBattle[]`](#apibattle) that resolves to an array of objects representing the player's battle log.
-   `club(tag: string): Promise<APIClub>`
    -   Parameters:
        -   ` tag (string)`: Club tag.
    -   Returns: A promise [`APIClub`](#apiclub) that resolves to club information.
-   `clubMembers(tag: string): Promise<APIPlayer[]>`
    -   Parameters:
        -   `tag (string)`: Club tag.
    -   Returns: A promise [`APIPlayer[]`](#apiplayer) that resolves to an array of objects representing the members of the club.
-   `brawlers(): Promise<APIBrawler[]>`
    -   Returns: A promise [`APIBrawler[]`](#apibrawler) that resolves to an array of objects representing all brawlers in the game.
-   `brawler(id: number): Promise<APIBrawler>`
    -   Parameters:
        -   `id (number)`: The ID of the brawler to retrieve.
    -   Returns: A promise [`APIBrawler`](#apibrawler) that resolves to the brawler's data.
-   `powerPlayRankingSeasons(counrty?: Country): Promise<APIPowerPlayLeague[]>`
    -   Parameters:
        -   [`counrty (Country)`](#country): The country code. Defaults to `"global"`.
    -   Returns: A promise [`APIPowerPlayLeague[]`](#apipowerplayleague) that resolves to an array of seasons for the specified country's Power Play ranking.
-   `trophyRanking(counrty?: Country): Promise<APIRankingPlayer[]>`
    -   Parameters:
        -   [`counrty (Country)`](#country): The country code. Defaults to `"global"`.
    -   Returns: A promise [`APIRankingPlayer[]`](#apirankingplayer) that resolves to an array of players ranked by their trophies.
-   `powerPlayRanking(id?: number | string, counrty?: Country): Promise<APIRankingPlayer[]>`
    -   Parameters:
        -   `id (number | string)`: The ID of the season. Defaults to `"latest"`.
        -   [`counrty (Country)`](#country): The country code. Defaults to `"global"`.
    -   Returns: A promise [`APIRankingPlayer[]`](#apirankingplayer) that resolves to an array of players ranked by their power play points.
-   `brawlerRanking(id: number | string, counrty?: Country): Promise<APIRankingPlayer[]>`
    -   Parameters:
        -   `id (number | string)`: The brawler ID or name.
        -   [`counrty (Country)`](#country): The country code. Defaults to `"global"`.
    -   Returns: A promise [`APIRankingPlayer[]`](#apirankingplayer) that resolves to a list of players and their rankings for a specific brawler.
-   `clubRanking(counrty?: Country): Promise<APIRankingClub[]>`
    -   Parameters:
        -   [`counrty (Country)`](#country) The country code. Defaults to `"global"`.
    -   Returns: A promise [`APIRankingClub[]`](#apirankingclub) that resolves to an array of ranking clubs in a specific country.
-   `rotation(): Promise<APIMap>`
    -   Returns: A promise [`APIMap`](#apimap) that resolves 00hy70hy to the current rotation of maps in the game.

### Interfaces

#### StarPlayer

This interface represents a player in the Brawl Stars game. It includes the player's tag, name, and information about their selected brawler.

Properties:

-   `tag (string)`: The player's tag, formatted as "#2R20PL0UR".
-   `name (string)`: The player's in-game name.
-   `brawler (Object)`: An object containing information about the player's selected brawler.
    -   `name (string)`: The name of the brawler.
    -   `power (number)`: The brawler's power level.
    -   `trophies (number)`: The number of trophies the player has earned with this brawler.

#### Member

This interface represents a member of a club in the Brawl Stars game. It includes the member's tag, name, trophies, and role in the club.

Properties:

-   `tag (string)`: The member's tag.
-   `name (string)`: The member's in-game name.
-   `trophies (number)`: The number of trophies the member has earned.
-   [`role (ClubMemberRole)`](#clubmemberrole): The member's role in the club. This can be "notMember", "member", "president","senior", "vicePresident", or "unknown".

#### RankingClub

This interface represents a club in the ranking list. It includes the club's tag, name, trophies, rank, and number of members.

Properties:

-   `tag (string)`: The club's tag.
-   `name (string)`: The club's name.
-   `trophies (number)`: The club's number of trophies.
-   `rank (number)`: The club's rank.
-   `memberCount (number)`: The number of members in the club.

#### Brawler

This interface represents a player's brawler in the game. It includes information about the brawler's rank, trophies, highest number of trophies achieved, power level, and number of star powers, gadgets, and gears the brawler has.

Properties:

-   `rank (number)`: The brawler's rank.
-   `trophies (number)`: The brawler's current number of trophies.
-   `highestTrophies (number)`: The brawler's highest number of trophies achieved.
-   `power (number)`: The brawler's power level.
-   `countStarPowers (number)`: The number of star powers the brawler has.
-   `countGadgets (number)`: The number of gadgets the brawler has.
-   `countGears (number)`: The number of gears the brawler has.

#### RankingPlayer

This interface represents a player in the ranking list. It includes the player's tag, name, number of trophies, and rank. It also includes the name of the player's club, if they belong to one.

Properties:

-   `tag (string)`: The player's tag.
-   `name (string)`: The player's name.
-   `trophies (number)`: The player's number of trophies.
-   `rank (number)`: The player's rank in the ranking list.
-   `club (string | undefined)`: The name of the player's club, if they belong to one.

#### APIBattleBrawler

This interface represents a player's brawler in a battle. It includes the brawler's ID, name, power level, and number of trophies.

Properties:

-   `id (number)`: The brawler's ID.
-   `name (string)`: The brawler's name.
-   `power (number)`: The brawler's power level.
-   `trophies (number)`: The brawler's number of trophies.

#### APIBattlePlayer

This interface represents a player in a battle. It includes the player's tag, name, and information about their selected brawler.

Properties:

-   `tag (string)`: The player's tag, formatted as "#2R20PL0UR".
-   `name (string)`: The player's in-game name.
-   [`brawler (APIBattleBrawler)`](#apibattlebrawler): An object containing information about the player's selected brawler.

#### APIBattle

This interface represents a battle in the Brawl Stars game. It includes information about the battle time, event, battle mode and type, and the players and their brawlers involved in the battle.

Properties:

-   `battleTime (string)`: The time at which the battle took place.
-   `event (object)`: Information about the event in which the battle took place.
    -   `id (number)`: The ID of the event.
    -   [`mode (Mode)`](#mode): The mode of the event.
    -   `map (string)`: The map on which the battle took place.
-   `battle (object)`: Information about the battle itself.
    -   [`mode (Mode)`](#mode): The mode of the battle.
    -   [`type (BattleType)`](#battletype): The type of the battle.
    -   [`result (BattleResult)`](#battleresult): The result of the battle (optional).
    -   `duration (number)`: The duration of the battle in seconds (optional).
    -   `rank (number)`: The rank of the battle (optional).
    -   `trophyChange (number)`: The change in trophies after the battle (optional).
    -   [`starPlayer (null|APIBattlePlayer)`](#apibattleplayer): The star player of the battle, or null if none was designated.
    -   [`teams (APIBattlePlayer[][])`](#apibattleplayer): An array of teams, each containing an array of players.

#### APIBrawler

This interface represents a brawler in the Brawl Stars game. It includes information about the brawler's ID, name, and the list of star powers and gadgets it has.

Properties:

-   `id (number)`: The ID of the brawler.
-   `name (string)`: The name of the brawler.
-   `starPowers (object[])`: An array of objects containing information about the brawler's star powers. Each object has the following properties:
    -   `id (number)`: The ID of the star power.
    -   `name (string)`: The name of the star power.
-   `gadgets (object[])`: An array of objects containing information about the brawler's gadgets. Each object has the following properties:
    -   `id (number)`: The ID of the gadget.
    -   `name (string)`: The name of the gadget.

#### APIPlayerBrawler

This interface represents a brawler belonging to a player in the Brawl Stars game. It includes information about the brawler's ID, name, power level, rank, number of trophies, highest number of trophies achieved, and the gear, star powers, and gadgets the brawler has equipped.

Properties:

-   `id (number)`: The ID of the brawler.
-   `name (string)`: The name of the brawler.
-   `power (number)`: The power level of the brawler.
-   `rank (number)`: The rank of the brawler.
-   `trophies (number)`: The number of trophies earned by the brawler.
-   `highestTrophies (number)`: The highest number of trophies achieved by the brawler.
-   `gears (object[])`: An array of objects containing information about the gear equipped by the brawler. Each object has the following properties:
    -   `id (number)`: The ID of the gear.
    -   `name (string)`: The name of the gear.
    -   `level (number)`: The level of the gear.
-   `starPowers (object[])`: An array of objects containing information about the star powers equipped by the brawler. Each object has the following properties:
    -   `id (number)`: The ID of the star power.
    -   `name (string)`: The name of the star power.
-   `gadgets (object[])`: An array of objects containing information about the gadgets equipped by the brawler. Each object has the following properties:
    -   `id (number)`: The ID of the gadget.
    -   `name (string)`: The name of the gadget.

#### APIPlayer

This interface represents a player in the Brawl Stars game. It includes information about the player's tag, name, trophies, club membership, and their brawlers.

Properties:

-   `tag (string)`: The player's tag, formatted as "#2R20PL0UR".
-   `name (string)`: The player's in-game name.
-   `nameColor (string)`: The color of the player's name as it appears in-game.
-   `icon (object)`: An object containing information about the player's icon.
    -   `id (number)`: The ID of the player's icon.
-   `trophies (number)`: The number of trophies the player has earned.
-   `highestTrophies (number)`: The player's highest number of trophies achieved.
-   `expLevel (number)`: The player's experience level.
-   `expPoints (number)`: The number of experience points the player has earned.
-   `isQualifiedFromChampionshipChallenge (boolean)`: Whether the player is qualified for the Championship Challenge event.
-   `3vs3Victories (number)`: The number of 3vs3 victories the player has achieved.
-   `soloVictories (number)`: The number of solo victories the player has achieved.
-   `duoVictories (number)`: The number of duo victories the player has achieved.
-   `bestRoboRumbleTime (number)`: The player's best time in Robo Rumble.
-   `bestTimeAsBigBrawler (number)`: The player's best time as a Big Brawler.
-   `club (object)`: An object containing information about the player's club membership, if they belong to a club.
    -   `tag (string)`: The club's tag.
    -   `name (string)`: The club's name.
-   [`brawlers (APIPlayerBrawler[])`](#apiplayerbrawler): An array of objects containing information about the player's brawlers.

#### APIClubMember

This interface represents a member of a club in the Brawl Stars game. It includes the member's tag, name, role in the club, and information about their trophies and club icon.

Properties:

-   `tag (string)`: The member's tag, formatted as "#2R20PL0UR".
-   `name (string)`: The member's in-game name.
-   `nameColor (string)`: The color of the member's name.
-   `role (ClubMemberRole)`: The member's role in the club.
-   `trophies (number)`: The number of trophies the member has earned.
-   `icon (object)`: Information about the member's club icon.
    -   `id (number)`: The ID of the club icon.

#### APIClub

This interface represents a club in the Brawl Stars game. It includes information about the club's tag, name, description, type, badge, required trophies, and its members.

Properties:

-   `tag (string)`: The club's tag, formatted as "#2R20PL0UR".
-   `name (string)`: The club's name.
-   `description (string)`: The club's description.
-   [`type (ClubType)`](#clubtype): The type of the club.
-   `badgeId (number)`: The ID of the club's badge.
-   `requiredTrophies (number)`: The number of trophies required to join the club.
-   `trophies (number)`: The number of trophies the club has earned.
-   [`members (APIClubMember[])`](#apiclubmember) : An array of objects representing the members of the club, including their tag, name, role, trophies, and icon.

#### APIRankingPlayer

This interface represents a player in the ranking list. It includes the player's tag, name, icon, trophies, rank, and club information.

Properties:

-   `tag (string)`: The player's tag, formatted as "#2R20PL0UR".
-   `name (string)`: The player's in-game name.
-   `nameColor (string)`: The color of the player's name.
-   `icon (object)`: An object containing information about the player's icon.
    -   `id (number)`: The ID of the icon.
-   `trophies (number)`: The number of trophies the player has earned.
-   `rank (number)`: The player's ranking in the list.
-   `club (object)`: An object containing information about the player's club, if they belong to one.
    -   `name (string)`: The name of the club.

#### APIPowerPlayLeague

This interface represents a Power Play League in the Brawl Stars game. It includes information about the league's ID, start time, and end time.

Properties:

-   `id (string)`: The ID of the Power Play League.
-   `startTime (string)`: The start time of the Power Play League.
-   `endTime (string)`: The end time of the Power Play League.

#### APIRankingClub

This interface represents a club in the ranking list. It includes information about the club's tag, name, badge ID, number of trophies, rank, and number of members.

Properties:

-   `tag (string)`: The club's tag.
-   `name (string)`: The club's name.
-   `badgeId (number)`: The ID of the club's badge.
-   `trophies (number)`: The club's number of trophies.
-   `rank (number)`: The club's rank.
-   `memberCount (number)`: The number of members in the club.

#### APIMap

This interface represents a map in the Brawl Stars game. It includes information about the start and end times of the map, the slot it occupies, and the event in which it appears.

Properties:

-   `startTime (string)`: The start time of the map.
-   `endTime (string)`: The end time of the map.
-   `slotId (number)`: The slot ID of the map.
-   `event (object)`: Information about the event in which the map appears.
    -   `id (number)`: The ID of the event.
    -   [`mode (Mode)`](#mode): The mode of the event.
    -   `map (string)`: The name of the map.

### Types

#### Country

This type represents the different countries supported by the game. It is based on the ISO 3166-1 alpha-2 standard for country codes.

Values:

-   `"global"`: The global leaderboard
-   `"af"`: Afghanistan
-   `"al"`: Albania
-   `"dz"`: Algeria
-   `"as"`: American Samoa
-   `"ad"`: Andorra
-   ... (other country codes omitted)

#### Mode

This type represents the different modes of play in the game.

Values:

-   `"soloShowdown"`: A solo showdown mode.
-   `"duoShowdown"`: A duo showdown mode.
-   `"heist"`: A heist mode.
-   `"bounty"`: A bounty mode.
-   `"siege"`: A siege mode.
-   `"gemGrab"`: A gem grab mode.
-   `"brawlBall"`: A brawl ball mode.
-   `"bigGame"`: A big game mode.
-   `"bossFight"`: A boss fight mode.
-   `"roboRumble"`: A robo rumble mode.
-   `"takedown"`: A takedown mode.
-   `"loneStar"`: A lone star mode.
-   `"presentPlunder"`: A present plunder mode.
-   `"hotZone"`: A hot zone mode.
-   `"superCityRampage"`: A super city rampage mode.
-   `"knockout"`: A knockout mode.
-   `"volleyBrawl"`: A volley brawl mode.
-   `"basketBrawl"`: A basket brawl mode.
-   `"holdTheTrophy"`: A hold the trophy mode.
-   `"trophyThieves"`: A trophy thieves mode.
-   `"duels"`: A duels mode.
-   `"wipeout"`: A wipeout mode.
-   `"payload"`: A payload mode.
-   `"botDrop"`: A bot drop mode.
-   `"hunters"`: A hunters mode.
-   `"lastStand"`: A last stand mode.
-   `"unknown"`: An unknown mode.

#### BattleType

This type represents the different types of battles in the game.

Values:

-   `"soloRanked"`: A ranked solo battle.
-   `"teamRanked"`: A ranked team battle.
-   `"ranked"`: A ranked battle (either solo or team).

#### BattleResult

This type represents the result of a battle.

Values:

-   `"victory"`: The player or team won the battle.
-   `"defeat"`: The player or team lost the battle.
-   `"draw"`: The battle ended in a draw.

#### ClubMemberRole

This type represents the role of a member in a club.

Values:

-   `"notMember"`: The player is not a member of the club.
-   `"member"`: The player is a regular member of the club.
-   `"president"`: The player is the president of the club.
-   `"senior"`: The player is a senior member of the club.
-   `"vicePresident"`: The player is the vice president of the club.
-   `"unknown"`: The player's role in the club is unknown.

#### ClubType

This type represents the type of a club.

Values:

-   `"open"`: The club is open to all players.
-   `"inviteOnly"`: The club is invite-only.
-   `"closed"`: The club is closed and not accepting new members.
-   `"unknown"`: The type of the club is unknown.

## License

[MIT](https://choosealicense.com/licenses/mit/)
