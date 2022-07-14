import React,{Suspense,lazy} from "react";
import {Route,HashRouter,Routes} from 'react-router-dom';
const Home=lazy(()=>import('../ProductCards/Products'));
const Cart=lazy(()=>import('../Cart/Cart'));
const SingleProduct=lazy(()=>import('../SingleProduct/SingleProduct'));
const PageNotFound = lazy(() => import ('../../Pages/PageNotFound/PageNotFound'))
export default function Menu(){
    return(
      <div>
        <Suspense fallback="Loading...">
          <HashRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/' element={<Home />} />
              <Route path='cart' element={<Cart />} />
              {/* <Route path='product' element={<SingleProduct />} /> */}
              <Route path='product/:id' element={<SingleProduct/>} />
              <Route path='cart/product/:id' element={<SingleProduct/>} />
              <Route path='/*' element={<PageNotFound />} />
            </Routes>
          </HashRouter>
        </Suspense> 
      </div>
    );
}