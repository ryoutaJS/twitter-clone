import { Grid } from "@mui/material";
import { Header } from "../componets/elements/header/header";
import { Footer } from "../componets/elements/footer/footer";
import { TweetCard } from "../container/TweetCard/TweetCard";
import { useFetchTweetsData } from "./home.hooks";

const Home = async () => {
  // TODO: useFetchTweetsDataの引数はログイン機能実行あとにuserのメアドを引数に渡せるように更新する
  const { fetchTweetsData } = useFetchTweetsData(["testUserId"]);
  const tweetsData = await fetchTweetsData();

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "60px" }}>
        <Grid item xs={12}>
          {tweetsData.length !== 0 &&
            tweetsData.map((data) => <TweetCard key={data.id} tweet={data} />)}
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
