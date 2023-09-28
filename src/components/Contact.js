import React from "react";
import { LinkIcon, MailIcon } from "@heroicons/react/solid";

export default function Contact() {
  return (
    <section id="contact" className="relative px-max">
          <div className="bg-black rounded shadow-md  py-8">
            <div className="flex justify-center px-3 mx-auto">
                <MailIcon className="text-blue-200 w-6 h-6" />
                <a className="text-green-300 font-mono pl-1">
                    kristen(dot)kagei(at)gmail(dot)com
                </a>
            </div>
            <div className="flex justify-center px-3 mx-auto">
                <LinkIcon className=" w-6 h-6 text-blue-200" />
                <a href="https://www.linkedin.com/in/kristen-kagei" className="pl-1 text-green-300 font-mono">
                    LinkedIn
                </a>
            </div>
          </div>
    </section>
  );
}