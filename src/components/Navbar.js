
import { HandIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-10 rounde bg-black">
      <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium font-mono text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl hover:text-yellow-300">
            Kristen Kagei
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-indigo-300 font-mono hover:text-white">
            Resume
          </a>
          <a href="#skills" className="mr-5 text-indigo-300 font-mono hover:text-white">
            Skills
          </a>
          <a
          href="#contact"
          className=" mr-5 inline-flex sm:items-center font-mono text-yellow-300 bg-black">
          Say hello
          <HandIcon className="w-6 h-6 ml-1 animate-waving-hand hover:text-pink-900" />
        </a>
        </nav>
      </div>
    </header>
  );
}