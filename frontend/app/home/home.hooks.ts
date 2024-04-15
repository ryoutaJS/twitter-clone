import { tweetData, tweetsData } from "../type/types";
import { apiClient } from "../utils/baseApi";

export const useFetchTweetsData = (userIds: string[]) => {
  const fetchTweetsData = async (): Promise<tweetData[]> => {
    const tweetsData = await apiClient(
      "/api/fetch_tweet",
      "POST",
      "no-store",
      JSON.stringify({ userIds: userIds })
    );
    return tweetsData.tweets;
  };

  return { fetchTweetsData };
};