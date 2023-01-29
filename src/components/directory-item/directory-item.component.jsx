import {useNavigate} from 'react-router-dom'

import {DirectoryItemContainer, BackgroundImage, DirectoryItemBody} from './directory-item.styles';

export const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  return (
    <DirectoryItemContainer onClick={()=> navigate(route)}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};