import ItemHome from "../ItemHome/ItemHome";
import { DirectoryContainer } from "./CategoryHome.styles";

const CategoryHome = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <ItemHome key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default CategoryHome;
