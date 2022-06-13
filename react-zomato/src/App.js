//import logo from './logo.svg';
import './App.css';
//import Home from './home/home'
import Header from './Header/header';
import Details from './restaurantDetails/details'
import { Route, Routes } from 'react-router-dom';
//import Homepage from './homepage/homepage';
import Frontpage from './frontpage/frontpage';
import Home from './home/home';
import Pagination from './pagination/pagination';
import Created from './accountCreated/created';
import Payment from './payment/payment';

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Header />}></Route>
        <Route path="nextpage/breakfast/restaurant/:id" element={<Details />}></Route>
        <Route path="nextpage/lunch/restaurant/:id" element={<Details />}></Route>
        <Route path="nextpage/snacks/restaurant/:id" element={<Details />}></Route>
        <Route path="nextpage/dinner/restaurant/:id" element={<Details />}></Route>
        <Route path="nextpage/drinks/restaurant/:id" element={<Details />}></Route>
        <Route path="nextpage/nightlife/restaurant/:id" element={<Details />}></Route>
        <Route path="nextpage/:e" element={<Home/>}></Route>
        <Route path="/accountCreated" element={<Created/>}></Route>
        <Route path="/paymentDetails" element={<Payment/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
