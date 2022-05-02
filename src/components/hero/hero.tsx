import React from "react"
import Nav from "../nav/nav"





const Hero = () => {
  return (
    <div id="home" className="relative bg-amber-300 overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-teal-400" fill="currentColor" />
            </pattern>
          </defs>
          <rect y={72} width={640} height={640} className="text-teal-600" fill="currentColor" />
          <rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
        </svg>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <Nav/>

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-teal-600 sm:text-base lg:text-sm xl:text-base">
                  Juillet - Août
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className=" text-teal-700">Camps d'été 2022 Vacances </span>
                  <span className=" text-red-500">Artistiques</span>                                    
                </span>
              </h1>
              <p className="mt-3 text-base text-teal-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                <b>Pour les enfants de 4 à 10 ans</b>, semaines thématiques et spectacles chaque vendredi                
              </p>              
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">       
                <a href="https://forms.gle/2QLzgH5nyfEwdmFR8"
                    target="_blank"                    
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                  >
                    Inscriptions
                  </a>
                <a href="#info"
                  className="ml-3 inline-flex items-center px-6 py-3 bg-red-300 shadow-sm text-base font-medium rounded-md text-red-600 hover:bg-red-500 hover:text-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Plus d'infos
                </a>         
              </div>

            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-teal-400" fill="currentColor" />
                  </pattern>
                </defs>
                <rect y={72} width={640} height={640} className="text-teal-600" fill="currentColor" />
                <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
              </svg>
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="block w-full aspect-w-10 aspect-h-6 rounded-lg overflow-hidden">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/ed91MM067E8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
export default Hero




{/*<div className="relative bg-amber-300 overflow-hidden">


  <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
    <Nav/>

    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-teal-600 sm:text-base lg:text-sm xl:text-base"></span>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              <span className="block text-teal-700">Centres Aérés 2022</span>
              <span className="block text-red-500">vacances artistiques</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-teal-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"><b>Pour enfants de 4 à 10 ans</b>, semaines thematiques et spectacles chaque vendredi</p>
          <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">            
            <p className="mt-3 text-sm text-teal-600">
              We care about the protection of your data. Read our <a href="#" className="font-medium text-teal-600 underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
            <defs>
              <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
            <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
          </svg>
          <div className="relative mx-auto w-full rounded-xl shadow-lg lg:max-w-md">            
            <div className="block w-full aspect-w-10 aspect-h-6 rounded-lg overflow-hidden">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/T4_5ezjeRfw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div> */}