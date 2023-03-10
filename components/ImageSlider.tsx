import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

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
    getData();
  }, []);

  return (
    <Swiper slidesPerView={slidesPerView} modules={[Navigation]}>
      {loading ? (
        <CircularProgress />
      ) : (
        images?.map(({ image }) => (
          <SwiperSlide>
            <Box sx={{ position: "relative", height: `${height}px` }}>
              <Image src={image} fill alt="" style={{ objectFit: "cover" }} />
            </Box>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default ImageSlider;
