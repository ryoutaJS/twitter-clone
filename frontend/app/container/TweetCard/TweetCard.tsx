"use client";

import { tweetData } from "@/app/type/types";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

type Props = {
  // 親コンポーネントから受け取ったツイートデータ
  tweet: tweetData;
};

export const TweetCard = (props: Props) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            alt='Remy Sharp'
            // TODO: ログイン機能を実装したらユーザーの画像を表示するように更新する
            src={
              "https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_1-768x768.png"
            }
          />
        }
        title={props.tweet.tweetInfo.userName}
        subheader={props.tweet.tweetInfo.createdAt}
      />
    </Card>
  );
};
