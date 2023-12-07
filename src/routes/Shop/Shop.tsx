import { Route, Routes } from "react-router-dom";
import CategoriesPage from "../CategoryPage/CategoriesPage/CategoriesPage";
import CtgPage from "../CategoryPage/CtgPage/CtgPage";

//redux related
import { useEffect } from "react";
import { fetchCategoriesStart } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPage />} />
      <Route path=":category" element={<CtgPage />} />
    </Routes>
  );
};

export default Shop;
