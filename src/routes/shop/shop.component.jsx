import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/reducers/categories.reducer';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

export default function Shop(){

  const dispatch = useDispatch();

  useEffect(()=>{
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    }
    
    getCategoriesMap();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};