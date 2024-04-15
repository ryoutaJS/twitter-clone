const env = process.env.NEXT_PUBLIC__ENV;

export const ApiUrl = {
  BASE_API_URL:
    env !== "local"
      ? process.env.NEXT_PUBLIC_BASE_API_URL
      : "http://localhost:3000",
  API_UPLOAD_URL: env !== "local" ? "/v1/api/upload_url" : "/api/upload_url",
  API_DOWNLOAD_URL:
    env !== "local" ? "/v1/api/download_url" : "/api/download_url",
  API_CREATE_TWEET:
    env !== "local" ? "/v1/api/create_tweet" : "/api/create_tweet",
  API_FETCH_TWEET: env !== "local" ? "/v1/api/fetch_tweet" : "/api/fetch_tweet",
};
