import BrawlStars from "../src/index"; // Change this on 'from "brawlstars-api-nodejs"'

const token = ""; //Paste your Brawl Stars API token this
const client = new BrawlStars.client(token);
// If you want to receive information from the API without any changes
// const client = new BrawlStars.api(token);

(async () => {
    // Use player tag for these functions
    await client.player("#1234567");
    await client.battleLog("#1234567");
    // Use club tag for these functions
    await client.club("#1234567");
    await client.clubMembers("#1234567");
    // Getting information about rankings. If you do not use the country code, the global ranking is returned
    await client.clubRanking();
    await client.powerPlayRanking(); // At the time of writing, it does not work on the API side
    await client.powerPlayRankingSeasons();
    await client.trophyRanking();
    // Getting information about all brawlers
    await client.brawlers();
    // Use brawler id for obtaining information about him
    await client.brawler("brawler_id");
    await client.brawlerRanking("brawler_id");
    // Information about events
    await client.rotation();
})();
