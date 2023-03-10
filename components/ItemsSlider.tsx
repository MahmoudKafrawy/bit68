import { Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import variables from "../styles/variables.module.scss";

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
      <Typography sx={{ marginBottom: "24px" }} fontWeight="bold" color={variables.primaryColor} fontSize={"30px"}>
        {sectionTitle}
      </Typography>
      <Stack direction="row">
        {products.map(({ ...product }: any, index) => (
          <ItemCard key={index} {...product} />
        ))}
      </Stack>
    </Container>
  );
};

export default ItemsSlider;

export const ItemCard = (props: any) => {
  return (
    <Stack sx={{ width: "230px" }}>
      <Image src={props.image} alt="" width={177} height={177} style={{ objectFit: "none" }} />
      <Typography fontWeight="bold" fontSize="18px" sx={{ marginTop: "16px" }}>
        {props.name}
      </Typography>
      {props.price_before_sale == props.price_after_sale ? (
        <Typography fontSize="28px" color={variables.primaryColor} fontWeight="bold">
          EGP {props.price_before_sale}
        </Typography>
      ) : (
        <Stack direction="row" alignItems="baseline">
          <Typography fontSize="28px" color={variables.secondaryColor} fontWeight="bold">
            EGP {props.price_after_sale}
          </Typography>
          <Typography color={variables.secondaryColor} fontSize="16px" fontWeight="bold">
            save {props.price_before_sale - props.price_after_sale}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};
