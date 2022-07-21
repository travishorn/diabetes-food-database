import { singular } from "pluralize";
import Fuse from "fuse.js";
import foods from "../assets/database.json";

const fuse = new Fuse(foods, {
  keys: ["name", "alternateNames"],
  threshold: 0.4,
});

export const handler = (event, context, callback) => {
  const q = singular(event.queryStringParameters.q);

  const matches = fuse.search(q).map((result) => result.item);

  const results = {
    query: event.queryStringParameters.q,
    interpretation: q,
    resultCount: matches.length,
    results: matches,
  };

  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
    body: JSON.stringify(results),
  });
};
