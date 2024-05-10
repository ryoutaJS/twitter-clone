import logging

from db.table import get_table


def create_tweet_handler(payload: dict):
    """tweet作成ラムダ"""
    get_table("Tweets").put_item(
        item={
            "user_id": payload["userId"],
            "id": payload["id"],
            "tweet_info": payload["tweetInfo"],
            "tweet_content": payload["tweetContent"],
            "tweet_user_action": payload["tweetUserAction"],
        }
    )

    return {"isSuccess": True}
