# ベースイメージには以下を利用する。
# https://hub.docker.com/r/amazon/aws-lambda-python
# AWS が提供する Lambda のベースイメージには、AWS Lambda 上でコンテナイメージとしてパッケージ化された関数を実行するために必要なすべてのコンポーネントが含まれている
FROM public.ecr.aws/lambda/python:3.9

# tweet配下のrequirements.txtをLAMBDA_TASK_ROOT（Lambda 関数コードへのパス）へコピー
COPY tweet/requirements.txt ${LAMBDA_TASK_ROOT}/requirements.txt
# requirements.txtから必要なライブラリをインストールします。
RUN python3.9 -m pip install --no-cache-dir -r "${LAMBDA_TASK_ROOT}/requirements.txt" -t .

# 以下のファイルをLambda 関数コードへのパスへコピーする
COPY tweet/main.py ${LAMBDA_TASK_ROOT}/main.py
COPY tweet/fetch_tweet_handler.py ${LAMBDA_TASK_ROOT}/fetch_tweet_handler.py
COPY tweet/create_tweet.py ${LAMBDA_TASK_ROOT}/create_tweet.py
COPY ./db/table.py ${LAMBDA_TASK_ROOT}/db/table.py
COPY ./db/utils.py ${LAMBDA_TASK_ROOT}/db/utils.py

# main.pyのhandler関数を実行する。
CMD ["main.handler"]