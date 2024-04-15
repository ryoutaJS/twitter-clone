import { ApiUrl } from "../constants/url";

/**
 * @param urlSuffix - 呼び出したいAPIのパス（/api/hogehoge）
 * @param method - apiのhttpメソッド
 * @param cache - キャッシュの設定
 * @param body -リクエストボディに含める値
 */
export const apiClient = async (
  urlSuffix: string,
  method: string,
  cache: RequestCache | undefined,
  body?: BodyInit | null | undefined
) => {
  const response = await fetch(ApiUrl.BASE_API_URL + urlSuffix, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    cache: cache,
    body: body,
  });

  return response.json();
};