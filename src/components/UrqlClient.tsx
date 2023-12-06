import { Client, cacheExchange, fetchExchange } from "urql";
import { STAR_WARS_API_LINK } from "../consts/consts";

const UrqlClient = new Client({
  url: STAR_WARS_API_LINK,
  exchanges: [cacheExchange, fetchExchange],
});

export default UrqlClient;
