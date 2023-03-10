import { Box, CircularProgress, Container, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <CircularProgress />
  ) : (
    <Box sx={{ height: `${height}px`, paddingTop: "68px" }}>
      <Container>
        <Typography sx={{ marginBottom: "24px" }} fontWeight="bold">
          {sectionTitle}
        </Typography>
        <Swiper slidesPerView={slidesPerView} modules={[Navigation]}>
          {images?.map(({ image, name }) => (
            <SwiperSlide>
              <Box sx={{ position: "relative", height: "140px" }}>
                <Image src={image} alt="" width={140} height={140} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default CategoriesSlider;
