import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";

interface btnProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>)=> void
  handleClick2: (event: React.MouseEvent<HTMLButtonElement>)=> void
  handleClick3: (event: React.MouseEvent<HTMLButtonElement>)=> void
  handleClick4: (event: React.MouseEvent<HTMLButtonElement>)=> void
  handleClick5: (event: React.MouseEvent<HTMLButtonElement>)=> void
  handleClick6: (event: React.MouseEvent<HTMLImageElement>)=> void
}

export default function Header({handleClick, handleClick2, handleClick3, handleClick4, handleClick5, handleClick6}: btnProps)  {
    const [openMenu, setopenMenu] = useState(false)

    const closeMenu =() => {
      setopenMenu(false)
    }

    function closeThenSlide1(e:any) {
      handleClick(e)
      closeMenu()
    }

    function closeThenSlide2(e:any) {
      handleClick2(e)
      closeMenu()
    }

    function closeThenSlide3(e:any) {
      handleClick3(e)
      closeMenu()
    }

    function closeThenSlide4(e:any) {
      handleClick4(e)
      closeMenu()
    }

    function closeThenSlide5(e:any) {
      handleClick5(e)
      closeMenu()
    }

    return (
        <div className='h-16 bg-blue-900 z-10 fixed inset-0 w-screen overflow-y-auto'>
        <nav className='h-full container mx-auto px-10 flex justify-between items-center sm:relative sm:grid-rows-2'>
          <div className='w-1/2'>
            <img onClick={handleClick6} className='h-14 w-14 rounded cursor-pointer' src='./src/assets/logo.jpg'></img>
          </div>
          <div className='header-topnav'>
            <button onClick={handleClick} className='header-link'><a className='link-a'>Services</a></button>
            <button onClick={handleClick2} className='header-link'><a className='link-a'>Testimonials</a></button>
            <button onClick={handleClick3} className='header-link'><a className='link-a'>About Us</a></button>
            <button onClick={handleClick4} className='header-link'><a className='link-a'>FAQs</a></button>
            <div className='header-link'>
              <button onClick={handleClick5} className='h-button'>
                Contact Us
              </button>
            </div>
          </div>
          {openMenu===true ? 
          <div className='header-nav-wrapper'>
            <div className='header-nav'>
              <button onClick={closeThenSlide1} className='header-link'><a className='link-b'>Services</a></button>
              <button onClick={closeThenSlide2} className='header-link'><a className='link-b'>Testimonials</a></button>
              <button onClick={closeThenSlide3} className='header-link'><a className='link-b'>About Us</a></button>
              <button onClick={closeThenSlide4} className='header-link'><a className='link-b'>FAQs</a></button>
              <label className='border-t-2'></label>
              <div className='header-link'>
                <button onClick={closeThenSlide5} className='h-button'>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          :null}
          <div onClick={()=>{
              if(openMenu===false) {
                setopenMenu(true)
              }
              if(openMenu===true) {
                setopenMenu(false)
              }
            }}className='md:hidden w=1/2 h-full flex justify-end items-center'>
            <AiOutlineMenu className='h-6 w-6'/>
          </div>
        </nav>
    </div>
    )
}