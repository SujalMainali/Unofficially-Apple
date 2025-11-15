import { FaApple } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { NavbarList } from '../constants';

const Navbar = () => {
  return (
    <div className='flex justify-around items-center mt-5 max-sm:justify-between'>
      <div className='ml-20 max-sm:ml-5'>
        <FaApple style={{ fontSize: '2em' }} /> {/* Inline style */}
      </div>
      <ul className='flex justify-center items-center gap-12 max-sm:hidden'>
        {NavbarList.map((item, index) => {
          return (<li key={index} className='text-apple-navbar-color cursor-pointer hover:text-white transition-all'>{item}</li>); // Added key prop
        })}
      </ul>
      <div className='flex justify-around items-center mr-10 gap-7 max-sm:mr-5'>
        <IoSearchOutline className='text-2xl' /> {/* CSS class */} {/* text-2xl is Tailwind CSS class for 1.5rem */}
        <IoBagOutline className='text-2xl' /> {/* CSS class */}
      </div>
    </div>
  )
}

export default Navbar;
