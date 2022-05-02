import React from "react"

const Reviews = () => (    
    <section id="reviews" className="bg-teal-500 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-teal-800">Témoignages</h2>
      </div>

      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-teal-900 lg:pr-16">
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <p className="relative italic">
                « Après une semaine Celte à vos côtés, Clément a dit « Avant je ne voulais pas faire de la musique, maintenant je veux ». Voilà, je voulais juste partager avec vous cette réflexion révélatrice de votre réussite et en profiter pour vous remercier. Très bon été! »
              </p>
            </div>          
            <footer className="mt-8">                       
                <div className="text-base font-medium text-white">Elodie</div>
                <div className="text-base font-medium text-teal-800">Juillet 2021</div>                              
            </footer>
          </blockquote>
        </div>
        <div className="py-12 px-4 border-t-2 border-teal-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <p className="relative italic">              
              « Merci Victor et toute l’équipe d'encadrants, S. a eu beaucoup de plaisir à participer à toute la semaine Pachamama, à l’année prochaine! »
              </p>
            </div>
            <footer className="mt-8">                              
                <div className="text-base font-medium text-white">Cécile</div>
                <div className="text-base font-medium text-teal-800">Août 2021</div>                              
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
)

export default Reviews