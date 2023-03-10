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
    getData();
  }, []);

  return loading ? (
    <Container sx={{ height: `${height}px`, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress />
    </Container>
  ) : (
    <Box sx={{ height: `${height}px`, paddingTop: "68px" }}>
      <Container>
        <Typography sx={{ marginBottom: "24px" }} fontWeight="bold" color={variables.primaryColor} fontSize={"30px"}>
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
                      backgroundColor: variables.primaryColor,
                      borderRadius: "50%",
                      width: "140px",
                      height: "140px",
                      position: "relative",
                    }}
                  >
                    <Image src={image} alt="" width={140} height={140} style={{ objectFit: "none" }} />
                  </Box>
                  <Typography textAlign="center" fontWeight="bold" fontSize="20px" sx={{ marginTop: "17px" }}>
                    {name}
                  </Typography>
                  <Typography textAlign="center" fontWeight="bold" fontSize="20px" sx={{ marginTop: "17px" }}>
                    up to{sale_percentage}%
                  </Typography>
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
