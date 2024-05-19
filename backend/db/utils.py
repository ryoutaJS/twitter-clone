from boto3.dynamodb.conditions import Key

from .table import get_table


def query(table_name: str, key_dict: dict, attr: str = ""):
    """
    簡易的なDynamodbのquery共通メソッド

    table_name: テーブル名
    key_dict: データ取得に使用するテーブルのキーの条件
    attr: 指定した属性を取得する。指定無なら全ての属性を取得
    """

    table = get_table(table_name)
    param = None
    for key, val in key_dict.items():
        if not param:
            param = Key(key).eq(val)
        else:
            param &= Key(key).eq(val)
    query_params = {"KeyConditionExpression": param}

    if attr:
        query_params["ProjectionExpression"] = attr

    response = table.query(**query_params)
    items = response.get("Items", [])

    while "LastEvaluatedKey" in response:
        query_params["ExclusiveStartKey"] = response["LastEvaluatedKey"]
        response = table.query(**query_params)

        items += response.get("Items", [])

    return items