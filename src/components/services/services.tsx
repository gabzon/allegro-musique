import React from "react"
import SchoolIcon from "../icons/school"
import RestaurantIcon from "../icons/restaurant"
import ClockIcon from "../icons/clock"
import PeopleIcon from "../icons/people"
import NoteIcon from "../icons/note"
import PaintIcon from "../icons/paint"

const Services = () => (
    <section id="services" className="bg-blue-500 pb-20">
    <div className="overflow-hidden pt-14 pb-20">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
          <defs>
            <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-amber-400" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>
    
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-amber-400 sm:text-4xl">La philosophie Allegro</h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            <div>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                  <SchoolIcon style="text-white h-6 w-6"/>
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-amber-400">Contenu pédagogique de qualité</p>
              </dt>
              <dd className="mt-2 text-base text-amber-100 text-justify">Tous nos enseignants sont diplômés ou en formation dans les hautes écoles d’art et musique de la région.</dd>
            </div>
    
            <div>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">                  
                <PeopleIcon style="text-white h-6 w-6"/>
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-amber-400">Prise en charge avec un grand nombre d’adultes par enfants</p>
              </dt>
              <dd className="mt-2 text-base text-amber-100 text-justify">Notre priorité est la tranquillité de tous, c’est pourquoi de nombreux moniteurs sont engagés pour chaque semaine d’activité.</dd>
            </div>
    
            <div>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">                  
                <PaintIcon style="text-white h-6 w-6"/>
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-amber-400">Activités proposés dès 4 ans</p>
              </dt>
              <dd className="mt-2 text-base text-amber-100 text-justify">Allegro musique a pour vocation de sensibiliser les enfants dès le plus jeune âge. C’est pourquoi nous constituons des groupes selon l’âge afin d’adapter le contenu à tous les participants.</dd>
            </div>
    
            <div>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                  
                <NoteIcon style="text-white h-6 w-6"/>
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-amber-400">Sensibilisation à une pratique artistique</p>
              </dt>
              <dd className="mt-2 text-base text-amber-100 text-justify">Nous proposons des activités multidisciplinaires afin de sensibiliser les enfants à toutes sortes d’expressions artistiques: musique, danse et arts visuels sont au rendez-vous à chaque semaine d’activité</dd>
            </div>

            <div>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">                  
                <ClockIcon style="text-white h-6 w-6"/>
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-amber-400">Logistique facilitée</p>
              </dt>
              <dd className="mt-2 text-base text-amber-100 text-justify">              
                Un service d’accueil payant est proposé avant et après nos cours (de 8h à 9h et de 17h à 18h).
              </dd>
            </div>

            <div>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                  
                <RestaurantIcon style="text-white h-6 w-6"/>
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-amber-400">Repas de haute qualité</p>
              </dt>
              <dd className="mt-2 text-base text-amber-100 text-justify">              
                Les repas de midi sont préparés par <a href="https://doppiozerorestaurant.ch" target="_blank" rel="noopener noreferrer">Doppiozero Restaurant</a>
              </dd>
            </div>
          </dl>        
        </div>
      </div>
    </div>
  </section>    
)

export default Services