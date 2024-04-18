import { Button, Grid } from "@mui/material";
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
      </Grid>
    </>
  );
};

export default _CreateTweet;
