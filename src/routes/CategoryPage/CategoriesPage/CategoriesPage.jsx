import CategoryPreview from "../../../components/Shop/CategoryPreview/CategoryPreview";
import Spinner from "../../../components/global/Spinner/Spinner";

//redux related
import {
  selectCategoriesMap,
  selectCategoriesLoading,
} from "../../../store/categories/categories.selector";
import { useSelector } from "react-redux";

const CategoriesPage = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesLoading);

  return (
    <div className="wrapper">
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <div key={title}>
              <CategoryPreview title={title} products={products} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default CategoriesPage;
