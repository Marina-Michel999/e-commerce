import React, { useContext } from 'react'
import logo from "../../assets/shopinity_logo.png"
import { NavLink , Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { CartContext } from '../../context/CartContext'
import { ClipLoader } from 'react-spinners'

export default function Navbar() {
  const{logOut , token} = useContext(AuthContext)
  const { isLoading ,cartInfo } = useContext(CartContext)
  return (
    <>
      <div className='bg-base-200  shadow-sm fixed w-full z-50'>
        <div className="navbar w-[98%] sm:w-[90%] mx-auto flex justify-between ">
          <div className="navbar-start !w-auto">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow *:text-lg">
                  {!token ? 
                  <>
                    <li className='text-xsm  '>
                      <NavLink className="text-sm px-2  flex flex-row font-bold" to="logIn">
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <p>Log in</p>
                      </NavLink>
                      </li>
                    <li className='text-sm '>
                      <NavLink className="text-sm px-2 flex flex-row font-bold" to="register">
                        <i className="fa-solid fa-user-plus"></i>
                        <p>sign up</p>
                        
                        </NavLink>

                      </li>
                  </> : ''}
                <li className='text-lg hover:bg-none'>
                  <NavLink className="text-sm px-2 flex flex-row font-bold"  to="/">
                    <i className="fa-solid fa-house"></i>
                    <span>Home</span>
                </NavLink></li>
                <li className=''>
                  <NavLink className="text-sm px-2 flex flex-row font-bold"  to="product">
                    <i className="fa-brands fa-product-hunt"></i>
                    <span>Product</span>
                      
                  </NavLink>
                  </li>
                <li className=''>
                  <NavLink className="text-sm px-2 flex flex-row font-bold"  to="cat">
                    <i className="fa-solid fa-layer-group"></i>
                    <span>Category</span>
                    
                  </NavLink>
                </li>
                <li className=''>
                  <NavLink className="text-sm px-2 flex flex-row font-bold"  to="brand">
                    <i className="fa-solid fa-gem"></i>
                    <span>brand</span>
                  </NavLink>
                </li>

                {token?
                  <>
                    <li className='text-sm  '>
                      <NavLink className="text-sm px-2 flex flex-row font-bold" to="order">
                        <i className="fa-solid fa-user"></i>
                        <p>orders</p>
                        
                        </NavLink>

                      </li>
                    <li 
                      className='text-sm' 
                      onClick={logOut}
                      ><Link className=" px-2 text-sm flex flex-row font-bold" to="logIn">
                        <i className="fa-solid fa-arrow-left"></i>
                        <p>Log out</p>
                        
                        </Link>
                      </li> 

                    </>         
                :""}
              </ul>
            </div>
            <img src={logo} className='w-30'/>
          </div>
          <div className="navbar-center !w-auto hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li className='text-lg  !hover:bg-transparent'><NavLink to="/">Home</NavLink></li>
                <li className='text-lg'><NavLink to="product">Product</NavLink></li>
                <li className='text-lg'><NavLink to="cat">Category</NavLink></li>
                <li className='text-lg'><NavLink to="brand">brand</NavLink></li>
                {token?
                <li className='text-lg'><NavLink to="order">orders</NavLink></li>
                :""
              }


            </ul>
        
          </div>
          <div className="navbar-end !w-auto  sm:flex list-none">
                <ul className="menu menu-horizontal ">
                  {!token ? 
                  <>
                    <li className='text-xsm  '>
                      <NavLink className="text-sm px-2  flex flex-col font-bold" to="logIn">
                        <i className="fa-solid fa-right-to-bracket text-lg"></i>
                        <p>Log in</p>
                      </NavLink>
                      </li>
                    <li className='text-sm '>
                      <NavLink className="text-sm px-2 flex flex-col font-bold" to="register">
                        <i className="fa-solid fa-user-plus text-lg"></i>
                        <p>sign up</p>
                        
                        </NavLink>

                      </li>
                  </>
                :<>
                    <li className='text-sm relative group'>
                      <NavLink className="text-sm px-2  flex flex-col font-bold" to="cart">
                        <i className="fa-solid fa-cart-shopping text-lg"></i>
                        <p>cart</p>
                        <div className=' absolute size-5 rounded-full bg-mainColor -top-1.5 -right-0.5 flex justify-center !hover:bg-amber-500 items-center group-hover:!text-white text-xs text-white'>
                          {isLoading ? <ClipLoader size={11} color='#ffffff'/>
                          : cartInfo.numOfCartItems
                          }
                          
                          </div>
                        
                        </NavLink>

                      </li>
                    <li className='text-sm '>
                      <NavLink className="text-sm px-2 flex flex-col font-bold" to="wishList">
                        <i className="fa-solid fa-heart text-lg"></i>
                        <p>wish list</p>
                        
                        </NavLink>

                      </li>

                    <li 
                      className='text-sm hidden sm:flex' 
                      onClick={logOut}
                      ><Link className=" px-2 flex flex-col font-bold" to="logIn">
                        <i className="fa-solid fa-arrow-left text-lg"></i>
                        <p>Log out</p>
                        
                        </Link>
                      </li>
                </>
              }


                </ul>

          </div>
        </div>
    </div>
   
    </>
  )
}
