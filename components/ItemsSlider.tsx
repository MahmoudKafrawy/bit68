import { Box, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import variables from "../styles/variables.module.scss";
import { toPrice } from "../utils/toPrice";

interface ItemsSliderProps {
  endpoint: string;
  height: number;
  sectionTitle: string;
}
const ItemsSlider: React.FC<ItemsSliderProps> = ({ endpoint, height, sectionTitle }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const { data } = await axios.get(endpoint);
    setProducts(data.results);
    setLoading(false);
  };

  useEffect(() => {
    try {
      getData();
    } catch (error) {}
  }, []);

  return (
    <Container sx={{ height: `${height}px` }}>
      <Typography
        sx={{ marginBottom: "24px" }}
        fontWeight="bold"
        color={variables.primaryColor}
        fontSize={{ xs: "14px", lg: "30px" }}
      >
        {sectionTitle}
      </Typography>
      <Stack direction="row" sx={{ overflowX: "scroll" }}>
        {products.map(({ ...product }: any, index) => (
          <Box key={index} sx={{ mx: { xs: "0", lg: "25px" } }}>
            <ItemCard {...product} />
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default ItemsSlider;

export const ItemCard = (props: any) => {
  return (
    <Stack sx={{ width: "220px" }}>
      <Image src={props.image} alt="" width={177} height={177} style={{ transform: "scale(0.7)" }} />
      <Typography fontWeight="bold" fontSize="18px" sx={{ marginTop: "16px" }}>
        {props.name}
      </Typography>
      {props.price_before_sale == props.price_after_sale ? (
        <Typography fontSize="28px" color={variables.primaryColor} fontWeight="bold">
          {toPrice(props.price_after_sale, "EGP")}
        </Typography>
      ) : (
        <Stack direction="row" alignItems="baseline">
          <Typography fontSize="28px" color={variables.secondaryColor} fontWeight="bold">
            {toPrice(props.price_after_sale, "EGP")}
          </Typography>
          <Typography color={variables.secondaryColor} fontSize="16px" fontWeight="bold">
            save {props.price_before_sale - props.price_after_sale}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};
