FROM public.ecr.aws/lambda/python:3.9


COPY presigned_url/requirements.txt ${LAMBDA_TASK_ROOT}/requirements.txt
RUN python3.9 -m pip install --no-cache-dir -r "${LAMBDA_TASK_ROOT}/requirements.txt" -t .

COPY presigned_url/main.py ${LAMBDA_TASK_ROOT}/main.py
COPY presigned_url/download_url_handler.py ${LAMBDA_TASK_ROOT}/download_url_handler.py
COPY presigned_url/upload_url_handler.py ${LAMBDA_TASK_ROOT}/upload_url_handler.py

COPY ./utils/s3_client.py ${LAMBDA_TASK_ROOT}/utils/s3_client.py

CMD ["main.handler"]