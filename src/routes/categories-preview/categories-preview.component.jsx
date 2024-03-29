import { useSelector } from 'react-redux';

import { CategoryPreview } from '../../components/category-preview/category-preview.component';
import { selectCategories } from '../../store/reducers/categories.reducer';



export default function CategoriesPreview(){
  
  const categoriesMap = useSelector(selectCategories);

  return (
    <>
      {
        Object.keys(categoriesMap).map(title => {
          const items = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={items} />
        })        
      }   
    </>
  );
};