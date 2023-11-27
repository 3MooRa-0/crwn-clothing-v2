import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { ReactComponent as Arrow } from "../../../assets/images/arrow.svg";
import { useDispatch } from "react-redux";

import {
  CategoryHeader,
  CategoryTitle,
  CollectionHolder,
  PerviewContainer,
  PreviewBox,
} from "./CategoryPreview.styles";
import { setClicked } from "../../../store/cart/cart.action";

const CategoryPreview = ({ title, products }) => {
  const dispatch = useDispatch();

  const handleCartClick = () => dispatch(setClicked(false));

  return (
    <PerviewContainer>
      <CategoryHeader>
        <CategoryTitle>
          {title.toUpperCase()}
          <Link to={title}></Link>
        </CategoryTitle>
        <Link to={title}>
          <CollectionHolder>
            <p onClick={handleCartClick}>Go to collection</p>
            <Arrow className="arrow" />
          </CollectionHolder>
        </Link>
      </CategoryHeader>
      <PreviewBox>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewBox>
    </PerviewContainer>
  );
};

export default CategoryPreview;
