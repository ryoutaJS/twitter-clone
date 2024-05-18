import os

from utils.s3_client import get_s3_client

URL_EXPIRE_TIME = 1800


def handler(payload: dict):
    """
    署名付きURLの発行ラムダ.
    /api/upload_url
    """
    generated_presigned_url = get_s3_client().generate_presigned_url(
        ClientMethod="put_object",  # put_object用のURLを取得
        Params={
            "Bucket": os.getenv("S3_BUCKET_NAME"),
            "Key": "images/" + payload["userId"] + "/" + payload["tweetId"] + ".png"
        },
        ExpiresIn=URL_EXPIRE_TIME,  # 署名付きURLの有効期限を設定
    )

    return {
        "presignedUrl": generated_presigned_url,
    }