import React from "react"
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import one from "../../images/gallery/1.jpg"
import two from "../../images/gallery/2.jpg"
import three from "../../images/gallery/3.jpg"
import four from "../../images/gallery/4.jpg"
import five from "../../images/gallery/5.jpg"
import six from "../../images/gallery/6.jpg"
import seven from "../../images/gallery/7.jpg"
import eight from "../../images/gallery/8.jpg"
import nine from "../../images/gallery/9.jpg"
import ten from "../../images/gallery/10.jpg"
import eleven from "../../images/gallery/11.jpg"
import twelve from "../../images/gallery/12.jpg"

const Gallery = () => (
    <section id="gallery" className="bg-amber-300 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        
            <div className="relative max-w-5xl mx-auto">
                <svg className="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                <defs>
                    <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-teal-600" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <svg className="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                <defs>
                    <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-teal-600" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                                
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-4xl text-red-500 mb-10">Galerie photos</h2>                                    
                <div className="mt-12">
                    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} elementClassNames="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        <a href={two} className="group block w-full overflow-hidden">
                            <img src={two} alt="" className="object-cover pointer-events-none group-hover:opacity-75 w-full h-40 rounded-lg"/>                                        
                        </a>
                        <a href={one} className="group block w-full overflow-hidden">                        
                            <img src={one} alt="" className="object-cover pointer-events-none group-hover:opacity-75 w-full h-40 rounded-lg"/>                                                            
                        </a>
                        <a href={three} className="group block w-full overflow-hidden">                        
                            <img src={three} alt="" className="object-cover pointer-events-none group-hover:opacity-75 w-full h-40 rounded-lg"/>                                                            
                        </a>
                        <a href={four} className="group block w-full overflow-hidden">                        
                            <img src={four} alt="" className="object-cover pointer-events-none group-hover:opacity-75 w-full h-40 rounded-lg"/>                                                            
                        </a>
                        <a href={five} className="group block w-full overflow-hidden">                        
                            <img src={five} alt="" className="object-cover pointer-events-none group-hover:opacity-75 w-full h-40 rounded-lg"/>                                                            
                        </a>
                        <a href={six} className="group block w-full overflow-hidden">                        
                            <img src={six} alt="" className="object-cover pointer-events-none group-hover:opacity-75 w-full h-40 rounded-lg"/>                                                            
                        </a>
                        <a href={seven} className="group block w-full overflow-hidden">                        
                            <img src={seven} alt="" className="object-cover pointer-events-none group-hover:opacity-75 w-full h-40 rounded-lg"/>                                                            
                        </a>
                        <a href={eight} className="group block w-full overflow-hidden">                        
                            <img src={eight} alt="" className="object-cover pointer-events-none group-hover:opacity-75 w-full h-40 rounded-lg"/>                                                            
                        </a>
                        <a href={nine} className="group block w-full overflow-hidden">                        
                            <img src={nine} alt="" className="object-cover pointer-events-none group-hover:opacity-75 w-full h-40 rounded-lg"/>                                                            
                        </a>
                        <a href={ten} className="group block w-full overflow-hidden">                        
                            <img src={ten} alt="" className="object-cover pointer-events-none group-hover:opacity-75 w-full h-40 rounded-lg"/>                                                            
                        </a>
                        <a href={eleven} className="group block w-full overflow-hidden">                        
                            <img src={eleven} alt="" className="object-cover pointer-events-none group-hover:opacity-75 w-full h-40 rounded-lg"/>                                                            
                        </a>
                        <a href={twelve} className="group block w-full overflow-hidden">                        
                            <img src={twelve} alt="" className="object-cover pointer-events-none group-hover:opacity-75 w-full h-40 rounded-lg"/>                                                            
                        </a>
                    </LightGallery> 
                </div>
            </div>
        
    </section>
)

export default Gallery