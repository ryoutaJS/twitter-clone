import { Grid } from "@mui/material";
import { Header } from "../componets/elements/header/header";
import { Footer } from "../componets/elements/footer/footer";
import { useFetchTweetsData } from "./home.hooks";

const Home = async () => {
  const { fetchTweetsData } = useFetchTweetsData(["test@mail.com"]);
  const tweetsData = await fetchTweetsData();
  console.log(tweetsData);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {/* Headerコンポーネントの利用 */}
          <Header />
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "60px" }}>
        <Grid item xs={12}>
          <div>
            <h1>Hello World!!!</h1>
          </div>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={12}>
          {/* Footerコンポーネントの利用 */}
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
