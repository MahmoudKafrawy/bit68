import { AccountCircleOutlined, Menu, Search, ShoppingCart } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
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
  { href: "", title: "Sale", highlighted: true },
];
const NavBar = () => {
  return (
    <Box>
      <OffersNavBar />
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: { xs: "140px", lg: "104px" } }}
        >
          <Grid item>
            <Stack direction="row" spacing={1} sx={{ display: { xs: "none", lg: "flex" } }}>
              <Image src="/logo.png" height={24} width={24} alt="logo" />
              <Typography fontSize="16px">Store Locator</Typography>
            </Stack>
          </Grid>
          <Grid item sx={{ display: { xs: "unset", lg: "none" }, width: "100%" }}>
            <Stack spacing={2} direction="row" justifyContent="space-between">
              <Box>
                <Menu />
              </Box>
              <Stack spacing={2} direction="row">
                <AccountCircleOutlined />
                <ShoppingCart />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={7}>
            <TextField
              fullWidth
              placeholder="Search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item sx={{ display: { xs: "none", lg: "unset" } }}>
            <Stack spacing={2} direction="row">
              <Typography color={variables.primaryColor}>العربية</Typography>
              <AccountCircleOutlined />
              <ShoppingCart />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundColor: variables.blackColor,
          height: "45px",
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
        }}
      >
        <Container sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <Stack direction="row" spacing={"56px"}>
            {categoriesLinks.map((link) => (
              <Typography
                key={link.href}
                color={link.highlighted ? variables.highlightedText : variables.textWhite}
                fontSize="16px"
              >
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
        height: { xs: "32px", md: "45px" },
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
