import { Avatar, Button, Grid, TextareaAutosize } from "@mui/material";
import Link from "next/link";

const _CreateTweet = () => {
  return (
    <>
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
      />
    </>
  );
};

export default _CreateTweet;
