import * as React from "react"

import Hero from "../components/hero/hero"
import About from "../components/about/about"
import Team from "../components/team/team"
import Footer from "../components/footer/footer"
import Services from "../components/services/services"
import Reviews from "../components/reviews/reviews"
import Info from "../components/info/info"
import Gallery from "../components/gallery/gallery"

const IndexPage = () => {
  return (
    <main >
      <Hero/>      
      <About />
      <Services/>
      <Info />
      <Team/>
      <Gallery/>
      <Reviews/>
      <Footer />
      <div className="flex justify-end fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
        <a href="#home" className="flex p-2 rounded-lg bg-red-500 mr-2 sm:mr-3 md:mr-4 lg:mr-5">   
        <svg fill="currentColor" className="h-5 w-5 text-white" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
        </svg>                 
        </a>              
      </div>
    </main>
  )
}

export default IndexPage
