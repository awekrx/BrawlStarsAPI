import BrawlStars from "../src/index"; // Change this on 'from "brawlstars-api-nodejs"'

const token = "your-api-token";
const client = new BrawlStars.client(token);

async function example() {
    // Get player information
    let player = await client.player("#player-tag");
    console.log(player);

    // Get club information
    let club = await client.club("#club-tag");
    console.log(club);

    // Get club members
    let members = await client.clubMembers("#club-tag");
    console.log(members);

    // Get battle log
    let battleLog = await client.battleLog("#player-tag");
    console.log(battleLog.history);

    // Get list of all brawlers
    let brawlers = await client.brawlers();
    console.log(brawlers);

    // Get information for a specific brawler
    let brawler = await client.brawler(16000000);
    console.log(brawler); // SHELLY

    // Get list of all power play seasons
    let powerPlaySeasons = await client.powerPlayRankingSeasons();
    console.log(powerPlaySeasons);

    // Get trophy ranking for a specific country
    let trophyRanking = await client.trophyRanking("us");
    console.log(trophyRanking.ranking);

    // Get power play ranking for a specific season and country
    let powerPlayRanking = await client.powerPlayRanking("latest", "us");
    console.log(powerPlayRanking.ranking);

    // Get brawler ranking for a specific brawler and country
    let brawlerRanking = await client.brawlerRanking(16000000, "us");
    console.log(brawlerRanking.ranking);
}

example();
