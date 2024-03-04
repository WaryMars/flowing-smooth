import { useState } from "react"
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"
import wave from '../assets/icon/waving.ico'
import { Routes, Route } from "react-router-dom";
// import { Routes, Route, Outlet, Link } from "react-router-dom";


const Navbar = () => {
 

  // const waving = <source src={wave} />;
  const [click, setClick] = useState(false);
  const handleClick = () => { setClick(!click); }
  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 backdrop-blur-sm bg-white/30">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="/">
          <li className="my-4 py-4 border-b border-slate-800 hover:opacity-50">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="/Shop">
          <li className="my-4 py-4 border-b border-slate-800 hover:opacity-50 hover:rounded">Shop</li>
        </Link>
        <Link spy={true} smooth={true} to="/Account">
          <li className="my-4 py-4 border-b border-slate-800 hover:opacity-50 hover:rounded">Account</li>
        </Link>

      </ul>
    </div>
  </>
  return (
    
    <nav>

      <div className="h-10vh justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1 flex items-center ">
        <div className="flex items-center flex-1">
          <span className="text-3xl hidden">Logo</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-center font-normal hidden">
          <div className="flex-10 ">
            <ul className="flex gap-8 mr-16 text-[20px] items-center">
              <Link spy={true} smooth={true} to="/">
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="/Shop">
                <li className="cursor-pointer">Shop</li>
              </Link>
              <Link spy={true} smooth={true} to="/About">
                <li className="cursor-pointer">About</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <ul className="flex gap-8 text-[20px] items-center">
            <Link spy={true} smooth={true} to="/Cart">
              <li className="cursor-pointer"><i class="fi fi-rr-basket-shopping-simple" /></li>
            </Link>
            <Link spy={true} smooth={true} to="/Favori">
              <li className="cursor-pointer"><i class="fi fi-rr-heart" /></li>
            </Link>
            <Link spy={true} smooth={true} to="/Account">
              <li className="cursor-pointer"><i class="fi fi-rr-user" /></li>
            </Link>
          </ul>
        </div>
        <div>
          {click && content}
        </div>
        <button className="bolck md:hidden transition" onClick={handleClick}>
          {/* {click ? <FaTimes /> : <img src="src/assets/icon/wave.png" width={32} />} */}
          {click ? <FaTimes /> : <i class="fi fi-br-menu-burger" />}
        </button>
      </div>

    </nav>
  )
}

export default Navbar