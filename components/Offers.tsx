import { Container, Grid } from "@mui/material";
import Image from "next/image";

export const Offers = () => {
  return (
    <Container>
      <Grid container sx={{ margin: "20px 0", height: "300px" }} justifyContent="space-between" gap={2}>
        <Grid item xs={12} lg={5} sx={{ position: "relative" }}>
          <Image src={"/offer-1.png"} fill alt="" style={{ objectFit: "contain" }} />
        </Grid>
        <Grid item xs={12} lg={5} sx={{ position: "relative" }}>
          <Image src={"/offer-2.png"} fill alt="" style={{ objectFit: "contain" }} />
        </Grid>
      </Grid>
    </Container>
  );
};
