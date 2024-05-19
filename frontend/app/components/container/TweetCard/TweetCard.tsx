"use client";

import { StyledMenu } from "@/app/components/elements/styledMenu/styledMenu";
import { tweetData } from "@/app/type/types";
import { ChatBubbleOutline, Favorite } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useFetchTweetImage } from "./tweetCard.hooks";
import { Skeleton } from "@mui/material";

type Props = {
  // 親コンポーネントから受け取ったツイートデータ
  tweet: tweetData;
};

export const TweetCard = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { imageUrl } = useFetchTweetImage(props.tweet);

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
        action={
          <>
            <IconButton aria-label='settings' onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <StyledMenu
              id='demo-customized-menu'
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem style={{ color: "red" }}>削除</MenuItem>
            </StyledMenu>
          </>
        }
        title={props.tweet.tweetInfo.userName}
        subheader={props.tweet.tweetInfo.createdAt}
      />
      <CardContent sx={{ mr: 3, ml: 3 }}>
        <Typography variant='body2' color='text.secondary'>
          {props.tweet.tweetContent.message}
        </Typography>
      </CardContent>
      {imageUrl ? (
        <CardMedia
          component='img'
          height='200'
          image={imageUrl}
          alt='image'
          style={{ objectFit: "contain" }}
        />
      ) : (
        <Skeleton variant='rectangular' height={200} />
      )}
      <CardActions sx={{ mr: 3, ml: 3 }}>
        <IconButton aria-label='add to favorites'>
          <ChatBubbleOutline />
        </IconButton>
        <IconButton aria-label='add to favorites'>
          <Favorite
            style={{
              color: props.tweet.tweetUserAction.good !== 0 ? "red" : "gray",
            }}
          />
        </IconButton>
        <Box>{props.tweet.tweetUserAction.good}</Box>
      </CardActions>
    </Card>
  );
};
