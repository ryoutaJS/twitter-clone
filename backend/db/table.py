import os

import boto3


def get_table(table_name):
    """該当のテーブルを取得する"""

    db = boto3.resource(
        service_name="dynamodb",
        endpoint_url=os.getenv("DYNAMO_ENDPOINT_URL"),
    )

    if os.getenv("PYTEST"):
        table_name = "Test" + table_name
    elif os.getenv("ENV") == "stg":
        table_name = "Stg" + table_name

    return db.Table(table_name)