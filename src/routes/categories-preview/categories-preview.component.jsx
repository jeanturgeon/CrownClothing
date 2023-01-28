import { useContext } from 'react';

import { CategoryPreview } from '../../components/category-preview/category-preview.component';

import { CategoriesContext } from '../../contexts/categories.context';



export default function CategoriesPreview(){
  const { categoriesMap } = useContext(CategoriesContext);

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