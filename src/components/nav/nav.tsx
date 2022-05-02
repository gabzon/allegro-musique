import React, { useState } from "react"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from "../../images/logo.png"

const navigation = [
  // { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Notre philosophie', href: '#services' },
  { name: 'Professeurs', href: '#team' },  
  { name: 'Galerie', href: '#gallery' },
  { name: 'Témoignages', href: '#reviews' },
]

const Nav = () => {
  
  return (
    <Popover>
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#" className="inline-flex items-center ">                         
              <img src={logo} alt="Logo" className="w-12" />
              <span className="ml-2 font-bold text-red-500">Allegro Musique</span>
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-yellow-500 rounded-md p-2 inline-flex items-center justify-center text-yellow-300 hover:text-yellow-600 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        <div className="hidden md:block md:ml-10 md:space-x-10">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="font-medium text-teal-700 hover:text-teal-600">
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="hidden md:block text-right">
      </div>
    </nav>

    <Transition as={Fragment} enter="duration-150 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
      					leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
    	<Popover.Panel className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      	<div className="rounded-lg shadow-md bg-yellow-500 ring-1 ring-black ring-opacity-5 overflow-hidden">
        	<div className="px-5 pt-4 flex items-center justify-between">
            <div>
							<a href="#" className="inline-flex items-center ">                         
          			<img src={logo} alt="Logo" className="w-12" />
          			<span className="ml-2 font-bold text-red-500">Allegro Musique</span>
        			</a>              
            </div>
            <div className="-mr-2">
              <Popover.Button className="bg-yellow-400 rounded-md p-2 inline-flex items-center justify-center text-yellow-600 hover:text-yellow-300 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close main menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-teal-700 hover:text-yellow-400 hover:bg-teal-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>)
}
export default Nav



