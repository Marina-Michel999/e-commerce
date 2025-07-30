
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Brand from './Component/Brand/Brand'
import Cart from './Component/Cart/Cart'
import Categories from './Component/Categories/Categories'
import Product from './Component/Product/Product'
import LogIn from './Component/LogIn/LogIn'
import Register from './Component/Register/Register'
import NotFound from './Component/NotFound/NotFound'
import Logout from './Component/Logout/Logout'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import ProductProvider from './context/ProductContext'
import { CategoriesProvider } from './context/CategoryContext'
import AuthProvider from './context/AuthContext'
import ProtectedRoutes from './Component/ProtectedRoutes/ProtectedRoutes'
import WishList from './Component/WishList/WishList'
import CartProvider from './context/CartContext'
import CheckOut from './Component/CheckOut/CheckOut'
import Order from './Component/Order/Order'
import WishListProvider from './context/wishlistContext'
import ForgetPassword from './Component/ForgetPassword/ForgetPassword'
import Verification from './Component/Verification/Verification'
import ResetPassword from './Component/ResetPassword/ResetPassword'

function App() {
  console.log(import.meta.env.VITE_BASE_URL)
  let routes = createBrowserRouter([
    {path:"" , element:<Layout/>, children:[
      {
        index:true ,
        element:<Home/>
      },
      {
        path:"brand" ,
        element:<Brand/>
      },
      {
        path:"cart" ,
        element:<ProtectedRoutes>
            <Cart/>
          </ProtectedRoutes>
      },
      {
        path:"wishList" ,
        element:<ProtectedRoutes>
            <WishList/>
          </ProtectedRoutes>
      },
      {
        path:"brand" ,
        element:<Brand/>
      },
      {
        path:"cat" ,
        element:<Categories/>
      },
      {
        path:"product" ,
        element:<Product/>
      },
      {
        path:"order" ,
        element:<Order/>
      },
      {
        path:"checkOut" ,
        element:<CheckOut/>
      },
      {
        path:"logIn" ,
        element:<LogIn/>
      },
      {
        path:"forgetPassword" ,
        element:<ForgetPassword/>
      },
      {
        path:"verification" ,
        element:<Verification/>
      },
      {
        path:"resetPassword" ,
        element:<ResetPassword/>
      },

      {
        path:"register" ,
        element:<Register/>
      },
      {
        path:"logOut" ,
        element:<Logout/>
      },
      {
        path:"product/:id" ,
        element:<ProductDetails/>
      },
      {path:"*" ,
        element:<NotFound/>
      },







    ]}
  ])

  return (
    <>
    <AuthProvider>
      <CartProvider>
        <WishListProvider>
        <ProductProvider>        
          <CategoriesProvider>
            <RouterProvider router={routes}></RouterProvider>
          </CategoriesProvider>
        </ProductProvider>
        </WishListProvider>

      </CartProvider>

    </AuthProvider>

    </>
  )
}

export default App
