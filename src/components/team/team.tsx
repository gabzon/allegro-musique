import React from "react"
import FacebookIcon from "../icons/facebook"
import InstagramIcon from "../icons/instagram"
import victor from "../../images/team/victor.jpg"
import marlice from "../../images/team/marlice.jpg"
import angela from "../../images/team/angela.jpg"
import karin from "../../images/team/karin.jpg"


  
  export default function Team() {
    return (

<section id="team" className="bg-amber-300">
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-red-500">L'équipe principale</h2>
                <p className="text-xl text-teal-700 text-justify">Tous nos professeurs sont des professionnels diplômés des principales Hautes écoles de musique de Suisse et d'Europe et sont activement impliqués dans la pédagogie musicale de la région</p>
            </div>
            <div className="lg:col-span-2">
                <ul role="list" className="space-y-12 sm:divide-y sm:divide-red-500 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                    <li className="sm:py-8">
                        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                <img className="object-cover shadow-lg rounded-lg" src={victor} alt=""/>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="space-y-4">
                                    <div className="text-lg leading-6 font-medium space-y-1">
                                        <h3 className="text-teal-900">Victor Alvarado</h3>
                                        <p className="text-red-500">Directeur</p>
                                    </div>
                                    <div className="text-lg">
                                        <p className="text-teal-700 text-justify">
                                            Né à Caracas, Venezuela, Victor Alvarado commence le cor au sein de « El Sistema », où il devient cor tutti de l’Orchestre Simón Bolívar. Son parcours musical l’amène à Genève en 2005 où il effectue notamment un Bachelor en musique, un Master en interprétation et un Master en pédagogie à la Haute école de musique de Genève. Pendant ses études, il obtient une bourse des fondations Wilsdorf (Genève) et Lyra (Zürich)
                                        </p>
                                        <p className="text-teal-700 my-5 text-justify">
                                            Victor est professeur à la filière MusicEnsemble du Conservatoire de musique de Genève Meyrin, expérience pédagogique inspirée de « El Sistema » vénézuélien, en qualité de professeur spécialiste en cuivres. Depuis septembre 2013, il est également professeur de cuivres à l’École internationale de Genève.
                                        </p>
                                        <p className="text-teal-700 text-justify">
                                            En parallèle à son activité pédagogique, Victor est le chef musical de la Musique Municipale de Meyrin depuis 2020. Victor est membre fondateur d’Allegro Musique depuis 2017
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="sm:py-8">
                        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                <img className="object-cover shadow-lg rounded-lg" src={marlice} alt=""/>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="space-y-4">
                                    <div className="text-lg leading-6 font-medium space-y-1">
                                        <h3 className="text-teal-900">Marlice Sanabria</h3>
                                        <p className="text-red-500">Coordinatrice</p>
                                    </div>
                                    <div className="text-lg">
                                        <p className="text-teal-700 text-justify">
                                        Née au Venezuela Marlice Sanabria, débute l’étude du violoncelle à l’âge de cinq ans au sein du Sistema de Orquestas Infantiles y Juveniles de Venezuela sous la direction de Susan Simán et Germán Marcano. Elle joue notamment au Festival y Académia Nuevo Mundo et à l’académie Duo Aldo Parisot.
Elle obtient son Bachelor of Arts à la Haute École de Musique de Genève dans la classe de Daniel Grosgurin et Ophélie Gaillard. Elle reçoit par la suite les conseils de François Guye et David Pia, avec qui elle complète son Master d’Interprétation Musicale. Elle reçoit également les Prix Jean-François Chaponnière et Daisy de Saugy. 
<br/>
<br/>
Elle joue sous la direction d’illustres chefs d’orchestre tels que Gustavo Dudamel, Jesús López Cobos, Claudio Abbado, Christian Vásquez et au sein de l’Orchestre de la Suisse Romande ou encore de l’Orchestre de Chambre de Genève.
Actuellement, Marlice Sanabria est professeure de violoncelle au sein de la filière MusicEnsemble du Conservatoire de Musique de Genève.Depuis 2016, elle bénéficie du généreux prêt d’un instrument et d’un archet de la Fondation Lalive.
Marlice est monitrice chez Allegro musique depuis 2019
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="sm:py-8">
                        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                <img className="object-cover shadow-lg rounded-lg" src={karin} alt=""/>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="space-y-4">
                                    <div className="text-lg leading-6 font-medium space-y-1">
                                        <h3 className="text-teal-900">Karin Rose</h3>
                                        <p className="text-red-500">Danse</p>
                                    </div>
                                    <div className="text-lg">
                                        <p className="text-teal-700 text-justify">                                        
                                            Karin ROSE est une danseuse polyvalente. Elle a étudié les danses d'Afrique de l'Ouest, les danses latines, la danse contemporaine et la Capoeira Angola. Elle a travaillé avec différentes compagnies de danse africaine et afro-contemporaine en Europe et au Burkina Faso : Compagnie Akli Co dans Dans l'attente (2022), Compagnie Donsen dans Sia (2021), Compagnie Tamadia dans À rebours (2017-18), Compagnie Don Souma (2016), United Colors of Dance et Drums Co (2013-2017).
                                            <br /><br />
                                            En 2018, elle entre au Conservatoire de Musique de Genève puis rejoint le programme de Master en théâtre physique à l'Accademia Teatro Dimitri en 2019. Elle obtient son diplôme en 2021 avec sa première création solo, Smile and Be Quiet. Elle a également joué au théâtre dans Le Défi du Gouroumangourou (2017-2019) avec la Compagnie Réflexe, Rota & Fellini, Orchestre et Pellicule (2018) avec la Compagnie Confiture. Outre la danse et le théâtre, Karin a de l'expérience dans la pratique du violon et du chant.
                                            <br /><br />
                                            Karin travaille actuellement dans différents projets en Suisse, en France et au Burkina Faso, en tant que danseuse-interprète et enseignante de danse. Karin Rose est professeure de danse chez Allegro Musique depuis 2019
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="sm:py-8">
                        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                <img className="object-cover shadow-lg rounded-lg" src={angela} alt=""/>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="space-y-4">
                                    <div className="text-lg leading-6 font-medium space-y-1">
                                        <h3 className="text-teal-900">Angela Mancipe</h3>
                                        <p className="text-red-500">Musique</p>
                                    </div>                                    
                                    <div className="text-lg">
                                        <p className="text-teal-700 text-justify">
            Musicienne, pédagogue et ethnomusicologue d’origine colombienne. Ayant mené une pratique musicale dès son enfance, elle obtient en 2011 un diplôme en interprétation de hautbois à la Pontificia Universidad Javeriana à Bogotá. Elle continue sa formation musicale en Suisse, obtenant en 2016 un diplôme de bachelor en musique et musicologie à la Haute École de Musique de Genève. Intéressée par les pratiques musicales afro-colombiennes en Suisse romande et par ses enjeux socioculturels, elle mène des études au sein du master en ethnomusicologie à l’Université de Genève, formation qu’elle conclut en 2020. Actuellement, elle poursuit des études doctorales à l’Université de Berne autour de l’enseignement transculturel de musiques traditionnelles et populaires. 
                                        </p>
                                        <p className="text-teal-700 my-5 text-justify">
                                        En tant que musicienne, elle s’est produite en différents orchestres de Colombie, ainsi qu’à l’Orchestre des Nations Unies et l’Orchestre Sant-Pierre Fusterie à Genève. Également intéressée par la musique de chambre latino-américaine, elle a intégré les ensembles Toco Madera et le Trio Triptongo. Dans son rôle d’ethnomusicologue, elle a participé en tant que médiatrice culturelle et musicologue dans divers festivals musicaux en Suisse, notamment le Festival Cully Classique (2015), le Festival de Sion (2016), le Concours international de Musique de Genève (2016), le Gstaad Menuhin Festival & Academy (2015-2019) et Les Nuits du Monde des ADEM (2019-2021). Elle collabore également en tant que rédactrice régulière avec Ethnosphères magazine (ADEM).
                                        </p>
                                        <p className="text-teal-700 text-justify">
                                        Dans son rôle de pédagogue, Angela a enseigné le hautbois et le solfège pendant de nombreuses années en Colombie. En Suisse, elle se consacre à l’initiation musicale pour enfants, tout particulièrement dans des contextes transculturels autour des musiques du monde.  Depuis 2021 Angela est professeure de musique chez Allegro Musique
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>


    )
}
