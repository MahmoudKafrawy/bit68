import { Box, CircularProgress, Container } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

interface ImageSliderProps {
  slidesPerView: number;
  endpoint: string;
  height: number;
}
const ImageSlider: React.FC<ImageSliderProps> = ({ slidesPerView, endpoint, height }) => {
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

  return (
    <Swiper slidesPerView={slidesPerView} modules={[Navigation]} navigation pagination>
      {loading ? (
        <Container sx={{ height: `${height}px`, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </Container>
      ) : (
        images?.map(({ image }, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: "relative", height: `min(45vw, ${height}px)` }}>
              <Image src={image} fill alt="" style={{ objectFit: "cover" }} />
            </Box>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default ImageSlider;
