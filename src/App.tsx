import {useRef} from 'react'
import './index.css'
import Header from './components/header.tsx'
import Service from './components/service.tsx'
import About from './components/about.tsx'
import Email from './components/email.tsx'
import Home from './components/home.tsx'
import Reviews from './components/reviews.tsx'
import Questions from './components/questions.tsx'
import Products from './components/products.tsx'

function App() {
  const homeRef = useRef<null | HTMLDivElement>(null)
  const ref = useRef<null | HTMLDivElement>(null)
  const reviewRef = useRef<null | HTMLDivElement>(null)
  const aboutRef = useRef<null | HTMLDivElement>(null)
  const questionRef = useRef<null | HTMLDivElement>(null)
  const contactRef = useRef<null | HTMLDivElement>(null)

  const handleClick =() => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleClick2 =() => {
    reviewRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleClick3 =() => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleClick4 =() => {
    questionRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleClick5 =() => {
    contactRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleClick6 =() => {
    homeRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
      <Header handleClick={handleClick} handleClick2={handleClick2} handleClick3={handleClick3} handleClick4={handleClick4} handleClick5={handleClick5} handleClick6={handleClick6}/>
      <Home ref={homeRef} handleClick5={handleClick5}/>
      <Service ref={ref}/>
      <Products />
      <Reviews ref={reviewRef}/>
      <About ref={aboutRef}/>
      <Questions ref={questionRef}/>
      <Email ref={contactRef}/>
    </>
  )
}

export default App
