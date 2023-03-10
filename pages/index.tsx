import type { NextPage } from "next";
import CategoriesSlider from "../components/CategoriesSlider";
import ImageSlider from "../components/ImageSlider";

const Home: NextPage = () => {
  return (
    <div>
      <ImageSlider slidesPerView={1} endpoint="https://api-task.bit68.com/en/api/slider_image/" height={540} />
      <CategoriesSlider
        slidesPerView={5}
        endpoint="https://api-task.bit68.com/en/api/categories/"
        height={430}
        sectionTitle="Main Categories"
      />
      <CategoriesSlider
        slidesPerView={5}
        endpoint="https://api-task.bit68.com/en/api/brands/"
        height={430}
        sectionTitle="Popular Brands"
      />
    </div>
  );
};

export default Home;
