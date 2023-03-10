import { Box, CircularProgress, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import variables from "../styles/variables.module.scss";

SwiperCore.use([Navigation, Pagination]);
interface CategoriesSliderProps {
  slidesPerView: number;
  endpoint: string;
  height: number;
  sectionTitle: string;
}
const CategoriesSlider: React.FC<CategoriesSliderProps> = ({ slidesPerView, endpoint, height, sectionTitle }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const { data } = await axios.get(endpoint);
    setImages(data.results);
    setLoading(false);
  };

  useEffect(() => {
    try {
      getData();
    } catch (error) {}
  }, []);

  return loading ? (
    <Container sx={{ height: `${height}px`, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress />
    </Container>
  ) : (
    <Box sx={{ marginTop: "60px", marginBottom: "60px" }}>
      <Container>
        <Typography
          sx={{ marginBottom: "24px" }}
          fontWeight="bold"
          color={variables.primaryColor}
          fontSize={{ xs: "16px", lg: "30px" }}
        >
          {sectionTitle}
        </Typography>
        <Swiper slidesPerView={slidesPerView} modules={[Navigation]} navigation>
          {images?.map(({ image, name, sale_percentage }, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Stack>
                  <Box
                    sx={{
                      backgroundColor: sale_percentage ? variables.primaryColor : undefined,
                      borderRadius: "50%",
                      width: { xs: "80px", lg: "140px" },
                      height: { xs: "80px", lg: "140px" },
                      position: "relative",
                    }}
                  >
                    <Image src={image} alt="" fill style={{ transform: sale_percentage ? "scale(0.7)" : "unset" }} />
                  </Box>
                  <Typography
                    textAlign="center"
                    fontWeight="600"
                    fontSize={{ xs: "14px", lg: "20px" }}
                    sx={{ marginTop: "17px" }}
                  >
                    {name}
                  </Typography>
                  {sale_percentage && (
                    <Typography
                      textAlign="center"
                      fontWeight="600"
                      fontSize={{ xs: "14px", lg: "20px" }}
                      sx={{ marginTop: "17px" }}
                    >
                      Up to {sale_percentage}%
                    </Typography>
                  )}
                </Stack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default CategoriesSlider;
