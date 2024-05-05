import json
import logging

from fetch_tweet_handler import fetch_tweet_handler

# handler関数を実装し、これがイベント検知したときに実行する関数になる。
def handler(event, context):
    """tweet作成ラムダ."""
    handler_mapping = {
        "/api/fetch_tweet": fetch_tweet_handler,
    }
    try:
        path = event["path"]
        print((event["body"]))
        payload = json.loads(event["body"])

        # apiのパスによって実行するハンドラーを切り替えれるように
        handler = handler_mapping[path]

        # resultにはハンドラーの実行結果が入ってくる想定。（ツイート取得処理の場合はツイート一覧）
        result = handler(payload)
        status_code = 200

    except Exception as e:
        logging.exception(e)
        status_code = 500
        result = {"message": "InternalServerError"}

    finally:
        return {
            "isBase64Encoded": False,
            "statusCode": status_code,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS, POST",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            "body": json.dumps(result),
        }