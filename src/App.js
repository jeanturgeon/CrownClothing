import {Routes, Route} from 'react-router-dom'

import Home from './routes/home/home';
import Authentication from './routes/auth/authentication.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';





export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>      
    </Routes>
    
  );
}


