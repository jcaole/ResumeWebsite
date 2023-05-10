import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour} from "../../assets/index";
// import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-12">
      <a href="https://github.com/kjt18/CamerataDevUntitledGame" alt="link to jcaole github project repository">
        <ProjectsCard
          title="Rogue-like Multiplayer Game"
          des=" As the Coding lead, I supervised the development of a multiplayer rogue-like adventure game, collaborating with three individuals to create a functional web application. Using the Flask web framework and MySQL database, we brainstormed, designed, and developed the web application.
           I supervised the evaluation and debugging process of the system during testing procedures to ensure that project deadlines were met in a timely manner. Finally, I composed a final report that detailed the project and presented the results to the University Computer Science board."
          src={projectOne}
        />
        </a>
        <a href="https://github.com/jcaole/COP4020_Project3" alt="link to jcaole github project repository">
        <ProjectsCard
          title="Analyzation and Visualization of Finite State Automata"
          des=" In this project, I analyzed and visualized a finite state automata program using Python and LISP. After analyzing the FSA, I refactored the program to generate a LISP version of the file. As part of this effort, I developed, debugged, and documented the software aspects of the project."
          src={projectTwo}
        />
        </a>
        <a href="https://github.com/jcaole/COP4635_Project3" alt="link to jcaole github project repository">
        <ProjectsCard
          title="Server-Client Connection"
          des=" In this project, I created a local host server-client connection for user communications, location management, and user authentication. I also developed, debugged, and documented the software for the project."
          src={projectThree}
        />
        </a>
        <a href="https://github.com/jcaole/SortingAlgorithmAnimation" alt="link to jcaole github project repository">
        <ProjectsCard
          title="Visualization of Sorting Algorithms"
          des=" As the project lead for the visualization of sorting algorithms, I coordinated meeting times and implemented Agile Development methodology. I also supervised the evaluation and debugging process of the system during testing procedures. Finally, I composed a final report that detailed the project and presented the final product."
          src={projectFour}
        />
        </a>
      </div>
    </section>
  );
}

export default Projects