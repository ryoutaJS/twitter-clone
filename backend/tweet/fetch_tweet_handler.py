from db.utils import query


def fetch_tweet_handler(payload: dict):
    """tweet取得ラムダ."""
    user_ids = payload["userIds"]

    tweets = []
    for user_id in user_ids:
        # DynamoDBからユーザーIDが一致するツイートを取得する
        fetch_tweets = query(table_name="Tweets", key_dict={"user_id": user_id})
        # fetch_tweetsの要素数だけ、tweetsにappendしていく
        for fetch_tweet in fetch_tweets:
            tweet = {
                "userId": fetch_tweet["user_id"],
                "id": fetch_tweet["id"],
                "tweetInfo": fetch_tweet["tweet_info"],
                "tweetContent": fetch_tweet["tweet_content"],
                "tweetUserAction": fetch_tweet["tweet_user_action"],
            }
            tweets.append(tweet)

    return{"tweets": tweets}
