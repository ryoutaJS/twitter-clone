import { apiClient } from "../utils/baseApi";
import { SubmitHandler } from "react-hook-form";
import { tweetData } from "../type/types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

/* tweetを生成するためのhooks */
export const useCreateTweet = () => {
  const id = uuidv4();
  const [binaryForImgData, setBinay] = useState<
    string | ArrayBuffer | null | undefined
  >(null);
  const [image, setImage] = useState<Blob | undefined>();

  /** 画像アップロード時にプレビュー表示するためのhooks */
  const onChangeFileInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.files?.length === 0) {
      return;
    }
    if (!event.target.files?.[0].type.match("image.*")) {
      return;
    }
    setImage(event.target.files?.[0]);
    const render = new FileReader();
    render.readAsDataURL(event.target.files?.[0])
    // readAsDataURLでファイルを読み取った時に、Base64エンコードされたデータURLをセットする
    render.onload = (e) => {
      setBinay(e.target?.result);
    };
  };

  /* tweet生成時のapi */
  const handleSubmitAction: SubmitHandler<tweetData> = async (
    tweet: tweetData
  ): Promise<void> => {
    const uploadUrl = await getUploadUrl(id);
    if (image !== undefined && uploadUrl !== null) {
      putTweetImageToStorage(uploadUrl, image as Blob);
    }
  };

  return {
    onChangeFileInput,
    binaryForImgData,
    image,
    handleSubmitAction,
  }
}

// uploadする画像のURLを取得する
const getUploadUrl = async(tweetId: string): Promise<string | null> => {
  const response = await apiClient(
    "/api/upload_url",
    "POST",
    "no-store",
    JSON.stringify({ userId: "test@mail.com", tweetId }),
  )
  return response.presignedUrl;
}

// ツイート画像をストレージに保存する
const putTweetImageToStorage = async (uploadUrl: string, image: Blob): Promise<void> => {
  if (process.env.NEXT_PUBLIC__ENV === "local") {
    console.log("upload image to strage");
  } else {
    await fetch(uploadUrl, {
      method: "PUT",
      body: image,
    }).catch((e) => {
      throw new Error("Failed to upload image");
    });
  }
}