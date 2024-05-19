import json
import logging

from download_url_handler import handler as download_url_handler
from upload_url_handler import handler as upload_url_handler


def handler(event, context):
    """
    署名付きURLの発行ラムダ.
    """
    handler_mapping = {
        "/api/download_url": download_url_handler,
        "/api/upload_url": upload_url_handler,
    }
    try:
        path = event["path"]
        payload = json.loads(event["body"])

        handler = handler_mapping[path]
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