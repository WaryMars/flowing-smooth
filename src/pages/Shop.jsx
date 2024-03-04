import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer.jsx";
import { products } from "../constant/constants";
import { categories } from "../constant/constants";
import wallpaperhomescreen from '../assets/images/jewerely_blackwomen.jpg';
import  images_limited from "../assets/images/images_limited.jpg";
import  images_treding from "../assets/images/images_treding.jpg";

const Shop = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#28100A]'>
        <div>
          <img src={wallpaperhomescreen} alt="" className='object-contain w-full' />
        </div>

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h3 className='text-white text-3xl pb-8 font-basteleur'>Shop by categories</h3>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

            {categories.map((category) => (
              <a key={category.id} href={category.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-none xl:aspect-h-8 xl:aspect-w-7">
                  <img id='imgCategory'
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    className="h-full w-full object-none object-center group-hover:opacity-75" />
                </div>
                <h3 className="flex mt-4 font-basteleur text-lg items-center justify-center text-yellow-50  ">{category.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#6C4B42]">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          {/* <div class="link d-flex align-items-center  m-b-1" bis_skin_checked="1">
            
            <a href="//arozjewelry.com/en/76-eshop" class="text-underline">
                View all products
            </a>
            <i className="fi fi-rr-arrow-right items-center"/>
        </div> */}
          <div className='text-white text-3xl pb-8 font-basteleur items-center'>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              View all product
            </a>
            {/* <i className="fi fi-rr-arrow-right items-center" /> */}
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">

                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  {/* <label class="container">
                    <input checked="checked" type="checkbox" />
                    <div class="checkmark">
                      <svg viewBox="0 0 256 256">
                        <rect fill="none" height="256" width="256"></rect>
                        <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" stroke-width="20px" stroke="#FFF" fill="none"></path></svg>
                    </div>
                  </label> */}
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75" />

                </div>
                <h3 className="mt-4 text-sm font-bold text-yellow-50">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-white">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-[#FFFFFF]'>
        <span>Trending</span>
        <img src={images_treding} alt="images limited"  />
        <span>Limited</span>
        <img src={images_limited} alt="images limited"  />
      </div>
      <Footer />
    </>
  )
}

export default Shop