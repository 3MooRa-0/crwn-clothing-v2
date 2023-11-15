import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CategoryPageContainer, PageTitle } from "./CtgPage.styles";
import ProductCard from "../../../components/Shop/ProductCard/ProductCard";
import Spinner from "../../../components/global/Spinner/Spinner";

import {
  selectCategoriesMap,
  selectCategoriesLoading,
} from "../../../store/categories/categories.selector";
import { useSelector } from "react-redux";

const CtgPage = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <PageTitle>{category}</PageTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryPageContainer>
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              );
            })}
        </CategoryPageContainer>
      )}
    </>
  );
};

export default CtgPage;
