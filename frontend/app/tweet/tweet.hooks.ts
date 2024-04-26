import { FilePresent } from "@mui/icons-material";
import { useState } from "react";

/* tweetを生成するためのhooks */
export const useCreateTweet = () => {
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
  return {
    onChangeFileInput,
    binaryForImgData,
    image,
  }
}