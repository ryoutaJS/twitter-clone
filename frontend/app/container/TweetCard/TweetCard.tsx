"use client";

import { tweetData } from "@/app/type/types";
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
        title={props.tweet.tweetInfo.userName}
        subheader={props.tweet.tweetInfo.createdAt}
      />
    </Card>
  );
};
