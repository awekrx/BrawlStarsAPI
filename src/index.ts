import BrawlStarsClient from "./classes/BrawlStarsClient";
import config from "./config";

const client = new BrawlStarsClient(config.token);

(async () => {
    console.log(await await client.brawler(16000019));
    // console.log(await client.club("#2Q098L99G"));
})();
