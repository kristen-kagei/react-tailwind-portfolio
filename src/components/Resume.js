import { CodeIcon, MoonIcon } from "@heroicons/react/solid";
import React from "react";
import file from "../KageiResume.pdf";

export default function Resume() {
  return (
    <section id="projects" className="text-gray-400 bg-black body-font rounded">
        <div className="px-5 py-10 mx-auto text-center">
            <h1 className="sm:text-4xl text-3xl font-medium font-mono title-font mb-4 text-white">
                Resume
            </h1>
            <iframe src={file} className="mx-auto h-96 w-auto"/>
        </div>
    </section>
  );
}