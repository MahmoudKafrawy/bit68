import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import variables from "../styles/variables.module.scss";
const footerLinksOne = [
  { title: "Active Trending", isMain: true },
  { title: "Men" },
  { title: "Women" },
  { title: "Kids" },
];
const footerLinksTwo = [
  { title: "About Us", isMain: true },
  { title: "About Company" },
  { title: "Connect Us" },
  { title: "Our Branches" },
];
const Footer = () => {
  return (
    <Box>
      <Divider />
      <Container>
        <Grid container sx={{ paddingTop: "56px", paddingBottom: "64px" }}>
          <Grid item xs={12} md={4}>
            <FooterLinks links={footerLinksOne} />
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterLinks links={footerLinksTwo} />
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Box sx={{ height: "62px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography fontSize="12px" color={variables.blackText}>
          Copyright © 2022 All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

interface FooterLinksProps {
  links: { title: string; isMain?: boolean }[];
}
export const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  return (
    <Box>
      <Stack>
        {links.map(({ title, isMain }) => (
          <>
            {isMain && (
              <Typography fontSize="22px" fontWeight="bold" sx={{ marginBottom: "22px" }} color={variables.blackText}>
                {title}
              </Typography>
            )}
            {!isMain && (
              <Typography fontSize="16px" color={variables.blackText} sx={{ marginBottom: "14px" }}>
                {title}
              </Typography>
            )}
          </>
        ))}
      </Stack>
    </Box>
  );
};
