import {Routes, Route} from 'react-router-dom'

import Home from './routes/home/home';
import SignIn from './routes/auth/sign-in.component';
import Navigation from './routes/navigation/navigation.component';


const Shop = () => {
  return <h1>Shop page</h1>
}


export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>      
    </Routes>
    
  );
}


