import os

from utils.s3_client import get_s3_client

URL_EXPIRE_TIME = 1800


def handler(payload: dict):
    """
    署名付きURLの発行ラムダ.

    /api/download_url
    """
    generated_download_url = get_s3_client().generate_presigned_url(
        ClientMethod="get_object",  # get_object用のURL取得
        Params={
            "Bucket": os.getenv("S3_BUCKET_NAME"),
            "Key": "images/" + payload["userId"] + "/" + payload["tweetId"] + ".png",
        },
        ExpiresIn=URL_EXPIRE_TIME,
    )

    result = {
        "presignedUrl": generated_download_url,
    }

    return result