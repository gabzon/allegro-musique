import React from "react"
import NoteIcon from "../icons/note"
import PinIcon from "../icons/pin"
import info  from "../../images/plus-info.jpg"


const Info = () => {
    return (
        <div id="info" className="relative bg-blue-500 pt-16 pb-32 overflow-hidden">
        <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-amber-500">
                    <NoteIcon style="h-6 w-6 text-white"/>
                    </span>
                </div>
                <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-amber-400">Vacances artistiques de 4 à 10 ans</h2>
                    <p className="mt-4 text-lg text-amber-100 text-justify">
                    Allegro musique a pour vocation de sensibiliser les enfants, dès l’âge de 4 ans aux pratiques artistiques, en proposant diverses activités : Danse, Musique, Théâtre, etc.
                    </p>
                    <p className="mt-4 text-lg text-amber-100 text-justify">
                    Toutes nos activités artistiques sont encadrées par des enseignants diplômés des hautes écoles d’art et de musique permettant l’apport d’un contenu pédagogique de qualité.
                    Chaque semaine un thème différent est proposé pour faire voyager vos enfants par le biais de la musique, de la danse et des arts visuels. Deux spectacles sont présentés le vendredi à 13h et 17h avec nos jeunes artistes.
                    </p>
                    <p className="mt-4 text-lg text-amber-100 text-justify">
                    Les enfants sont pris en charge par un grand nombre d’adultes sur une large plage horaire (9h00 - 17h00) et des repas de qualité sont fournis par Doppiozero Restaurant. 
                    Inscription possible à la journée complète, le matin ou l'après-midi
                    </p>
                    <div className="text-amber-400 text-lg mt-10">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-left">Option</th>
                                    <th>Horaire</th>
                                    <th>
                                        Early bird
                                        <span className="block text-sm italic">(jusqu'au 25 avril)</span>
                                    </th>
                                    <th>Prix par semaine</th>
                                </tr>
                            </thead>
                            <tr>
                                <td className="text-amber-200">Matins</td>
                                <td className="text-center text-amber-200">9h-13h</td>
                                <td className="text-center text-amber-200">CHF 290</td>
                                <td className="text-center text-amber-200">CHF 300</td>
                            </tr>
                            <tr>
                                <td className="text-amber-200">Après-midis</td>
                                <td className="text-center text-amber-200">14h-17h</td>
                                <td className="text-amber-200 text-center">CHF 260</td>
                                <td className="text-amber-200 text-center">CHF 280</td>
                            </tr>
                            <tr>
                                <td className="text-amber-200">Journées</td>
                                <td className="text-center text-amber-200">9h-17h</td>
                                <td className="text-amber-200 text-center">CHF 530</td>
                                <td className="text-center text-amber-200">CHF 550</td>
                            </tr>
                        </table>                  
                    </div>
                    <div className="mt-6">
                    <a href="https://forms.gle/2QLzgH5nyfEwdmFR8" target="_blank" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">Inscriptions </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="px-4 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src={info} alt="Inbox user interface"/>
                </div>
            </div>
            </div>
        </div>
        <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-amber-500">
                    
                    <PinIcon style="h-6 w-6 text-white"/>
                    </span>
                </div>
                <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-amber-400">Où nous trouver</h2>
                    <p className="mt-4 text-lg text-amber-100 text-justify">                                  
                    Nous serons à la Paroisse de Montbrillant pendant tout l'été 2022 pour notre camp d'été sous la forme de vacances artistiques.
                    <br /><br />Rue Baulacre 16, 1202 Genève
                    (en face du parc Beaulieu) 
                    <br /><br />
                    <a href="tel:+41 76 679 56 94">+41 76 679 56 94</a>
                    
                    </p>
                </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="px-4 lg:px-0 lg:m-0 lg:relative lg:h-full">                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.775662650849!2d6.137961116269882!3d46.21491757911697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64de5134a947%3A0xcb641288c88a025d!2sParoisse%20de%20Montbrillant!5e0!3m2!1sen!2shr!4v1650898597664!5m2!1sen!2shr" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full rounded-xl shadow-xl"></iframe>                    
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Info
