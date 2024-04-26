"use client";

import {
  Avatar,
  Button,
  Fab,
  Grid,
  styled,
  TextareaAutosize,
} from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { tweetData } from "../type/types";
import { useEffect, useState } from "react";

const _CreateTweet = () => {
  const { register, handleSubmit, watch } = useForm<tweetData>();
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    let len = watch("tweetContent.message").length;
    if (len === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [watch("tweetContent.message")]);

  //  StyledFabを追加
  const StyledFab = styled(Fab)({
    position: "absolute",
    zIndex: 1,
    top: "90%",
    left: "80%",
    right: 0,
  });

  return (
    <>
      <form onSubmit={handleSubmit((e) => console.log(e))}>
        <Grid container mt={1}>
          <Grid item xs={3}>
            <Link href='/home' style={{ textDecoration: "none" }}>
              <Button variant='text'>キャンセル</Button>
            </Link>
          </Grid>
          <Grid item xs={9} sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant='contained'
              type='submit'
              style={{ borderRadius: "20px" }}
              disabled={disable}
            >
              投稿する
            </Button>
          </Grid>
        </Grid>
        <Avatar
          alt='Remy Sharp'
          src={
            "https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_1-768x768.png"
          }
        />
        <TextareaAutosize
          maxRows={4}
          placeholder='いまどうしてる？'
          style={{
            width: "100%",
            height: "20vh",
            outline: "none",
            border: "none",
            fontSize: "15pt",
          }}
          {...register("tweetContent.message", { required: true })}
        />
        <StyledFab color='primary' aria-label='add'>
          <AddPhotoAlternate />
        </StyledFab>
      </form>
    </>
  );
};

export default _CreateTweet;
