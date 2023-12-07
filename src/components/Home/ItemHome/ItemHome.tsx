import { FC } from "react";
import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  BodyContainer,
  CategoryContainer,
} from "./ItemHome.style";
import { CartegoriesArr } from "../CategoryHome/CategoryHome";

type ItemHomeProps = {
  category: CartegoriesArr;
};

const ItemHome: FC<ItemHomeProps> = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`shop/${title.toLowerCase()}`);
  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <BodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </CategoryContainer>
  );
};

export default ItemHome;
