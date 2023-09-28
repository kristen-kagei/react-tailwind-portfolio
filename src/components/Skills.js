import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { skillsAndDescriptions } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium font-mono title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto font-mono">
            I've learned a lot, but there will always be more to learn. What can I add to this list? 
          </p>
        </div>
        <div className="flex flex-wrap">
          {skillsAndDescriptions.map((skill) => (
            <button key={skill} className="p-2 w-1/5">
              <div className="flex p-4 h-full items-center rounded border from-blue-700 hover:bg-blue-400">
                <CheckCircleIcon className=" text-green-700 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium font-mono text-black">
                  {skill.skill}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
