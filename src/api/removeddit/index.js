import { fetchJson } from "../../utils";

const baseURL = "https://api.pullpush.io";

export const getRemovedThreadIDs = (subreddit = "", page = 1) => {
  if (subreddit.toLowerCase() === "all") {
    subreddit = "";
  }

  return fetchJson(
    `${baseURL}/reddit/search/submission/?subreddit=${subreddit}&page=${
      page - 1
    }`
  ).catch((error) => {
    console.error("removeddit.getRemovedThreadIDs: " + error);
    throw new Error("Could not get removed threads");
  });
};
