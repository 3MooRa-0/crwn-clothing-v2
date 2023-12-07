import { FC } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { ReactComponent as Arrow } from "../../../assets/images/arrow.svg";

import {
  CategoryHeader,
  CategoryTitle,
  CollectionHolder,
  PerviewContainer,
  PreviewBox,
} from "./CategoryPreview.styles";
import { CategoryItem } from "../../../store/categories/categories.types";
type CategoryProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryProps> = ({ title, products }) => {
  return (
    <PerviewContainer>
      <CategoryHeader>
        <CategoryTitle>
          {title.toUpperCase()}
          <Link to={title}></Link>
        </CategoryTitle>
        <Link to={title}>
          <CollectionHolder>
            <p>Go to collection</p>
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
