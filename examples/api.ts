import BrawlStars from "../src/index"; // Change this on 'from "brawlstars-api-nodejs"'

const token = "your-api-token";
const api = new BrawlStars.api(token);

async function example() {
    // Get player information
    let player = await api.player("#player-tag");
    console.log(player);

    // Get club information
    let club = await api.club("#club-tag");
    console.log(club);

    // Get club members
    let members = await api.clubMembers("#club-tag");
    console.log(members);

    // Get battle log
    let battleLog = await api.battleLog("#player-tag");
    console.log(battleLog);

    // Get list of brawlers
    const brawlers = await api.brawlers();
    console.log(brawlers);

    // Get information about a specific brawler
    const brawler = await api.brawler(1);
    console.log(brawler);

    // Get a list of power play seasons
    const powerPlaySeasons = await api.powerPlayRankingSeasons("global");
    console.log(powerPlaySeasons);

    // Get trophy ranking for a specific country
    const trophyRanking = await api.trophyRanking("global");
    console.log(trophyRanking);

    // Get power play ranking for a specific season and country
    const powerPlayRanking = await api.powerPlayRanking("latest", "us");
    console.log(powerPlayRanking);

    // Get club ranking for a specific country
    const clubRanking = await api.clubRanking("us");
    console.log(clubRanking);
}

example();
