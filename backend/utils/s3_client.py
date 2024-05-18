import os

import boto3
from botocore.client import Config


def get_s3_client() -> boto3.client:
    """S3のClientを生成."""
    return boto3.client(
        service_name="s3",
        endpoint_url=os.getenv("S3_ENDPOINT_URL"),
        config=Config(signature_version="s3v4"),
    )