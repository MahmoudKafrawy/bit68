import { Box, Container, Grid, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import variables from "../styles/variables.module.scss";

const categoriesLinks = [
  { href: "", title: "Top Deals" },
  { href: "", title: "Deals of the day" },
  { href: "", title: "Men" },
  { href: "", title: "Women" },
  { href: "", title: "Kids" },
  { href: "", title: "New" },
  { href: "", title: "Brands" },
  { href: "", title: "Sports" },
  { href: "", title: "Accessories" },
  { href: "", title: "Sale" },
];
const NavBar = () => {
  return (
    <Box>
      <OffersNavBar />
      <Container>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ height: "104px" }}>
          <Grid item>Store Locator</Grid>
          <Grid item>
            <TextField fullWidth />
          </Grid>
          <Grid item>icons</Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: variables.blackColor, height: "45px", display: "flex", alignItems: "center" }}>
        <Container sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <Stack direction="row" spacing={"56px"}>
            {categoriesLinks.map((link) => (
              <Typography key={link.href} color={variables.textWhite} fontSize="16px">
                {link.title}
              </Typography>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default NavBar;

export const OffersNavBar = () => {
  return (
    <Box
      sx={{
        height: "45px",
        backgroundColor: variables.primaryColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: variables.textWhite,
      }}
    >
      White Friday Sales Up To 70% Off
    </Box>
  );
};
