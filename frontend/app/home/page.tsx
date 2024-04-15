import { Grid } from "@mui/material";
import { Header } from "../componets/elements/header/header";

const Home = async () => {
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
    </>
  );
};

export default Home;
