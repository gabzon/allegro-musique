import React from "react"
import image  from "../../images/about.jpg"
import logo  from "../../images/logo.png"
import loisirs from "../../images/loisirs-ge.png"
import glaj from "../../images/glaj1.png"


const About = () => {
    return (
        <section id="about" className="relative bg-amber-300 py-16 sm:py-24">            
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                <div className="relative sm:py-16 lg:py-0">
                    <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                        <div className="absolute inset-y-0 right-1/2 w-full bg-red-500 rounded-r-3xl lg:right-72" />
                            <svg
                                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                width={404} height={392} fill="none" viewBox="0 0 404 392">
                                <defs>
                                    <pattern
                                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                        x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                        <rect x={0} y={0} width={4} height={4} className="text-red-700" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                            </svg>    
                        </div>
                        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">            
                            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                <img src={image} alt="about image" className="absolute inset-0 h-full w-full object-cover"/>
                
                                <div className="absolute inset-0 bg-red-100 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-t from-red-800 via-red-800 opacity-60" />
                                <div className="relative px-8">
                                <div>
                                    <img
                                    className="h-12"
                                    src={logo}
                                    alt="Workcation"
                                    />                  
                                </div>
                                <blockquote className="mt-8">
                                    <div className="relative text-lg font-medium text-white md:flex-grow">
                                    {/* <svg
                                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-red-600"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg> */}
                                    <p className="relative italic">                                    
                                    Nos camps se terminent par un spectacle mettant en valeur l’apprentissage acquis pendant la semaine et créant un moment magique entre le public et les enfants.
                                    </p>
                                    </div>
                
                                    <footer className="mt-4">
                                    <p className="text-base font-semibold text-red-100">Victor Alvarado</p>
                                    </footer>
                                </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                        {/* Content area */}
                        <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-3xl text-red-500 font-extrabold tracking-tight sm:text-4xl">
                            À propos
                        </h2>
                        <div className="mt-6 text-teal-700 space-y-6">
                            <p className="text-lg text-justify">
                            Allegro Musique est une école associative, basée à Genève. Cette école est née de l’envie de mettre en place une formation qui puisse éveiller l’intérêt des plus jeunes pour la musique grâce à une pratique collective.
                            </p>
                            <p className="text-lg text-justify">
                            Nous proposons des camps de vacances artistiques pendant l'été.
                            Nous cherchons à stimuler l’intellect et, ainsi, à améliorer les facultés de perception, la concentration et la mémoire à travers la pratique de la musique. L’applaudissement – source considérable de motivation et de reconnaissance – est un élément indispensable dans notre vision pédagogique, c’est pourquoi chaque semaine se termine par un spectacle.
                            </p>
                            <div className="mt-6 flex space-x-4 items-center">
                <img src={loisirs} alt="" className="h-12 mt-2"/>
                <img src={glaj} alt="" className="h-14"/>
              </div>
                        </div>
                        </div>
                    </div>
            </div>
      </section>
    )
}

export default About



{/* <section className="bg-teal-300 py-32">
<div className="relative max-w-7xl mx-auto px-4 sm:px-6">
<h1 id="about" className="text-red-500 text-3xl font-semibold">A propos</h1>
<p>
Allegro Musique est une école associative, basée à Genève. Cette école est née de l’envie de mettre en place une formation qui puisse éveiller l’intérêt des plus jeunes pour la musique grâce à une pratique collective. En jouant en groupe, les enfants ont l’opportunité d’apprendre à s’écouter les uns les autres et à établir des liens avec les autres.

La pédagogie d’Allegro Musique cherche à stimuler l’intellect et, ainsi, à améliorer les facultés de perception, la concentration et la mémoire à travers la pratique de la musique. L’applaudissement – source considérable de motivation et de reconnaissance – est un élément indispensable dans notre vision pédagogique, raison pour laquelle tous nos cours aboutissent à une prestation publique sous forme de concert, 2 fois par année, afin d'encourager nos jeunes élèves.


Nos proposons des camp de vacances artistique pendant l'été.

Tous nos professeurs sont des professionnels diplômés des principales Hautes écoles de musique de Suisse et d'Europe et sont activement impliqués dans la pédagogie musicale de la région.

</p>
<p>
L'école
Allegro Musique est une école associative, basée à Genève. Cette école est née de l’envie de mettre en place une formation qui puisse éveiller l’intérêt des plus jeunes pour la musique grâce à une pratique collective.

Tous nos professeurs sont des professionnels diplômés des principales Hautes écoles de musique de Suisse et d'Europe et sont activement impliqués dans la pédagogie musicale de la région.
</p>
</div>        
</section> */}