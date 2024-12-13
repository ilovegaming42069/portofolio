import './App.css'
import React, {useState} from 'react'

function App() {
  return (
    <div className= "App">
      <div name="Intro" className= 'h-[100px]'></div>
      <Navbar></Navbar>
      <Intro></Intro>
      <div name="Academics" className= 'h-[150px]'></div>
      <Academics></Academics>
      <div name="Skills" className="h-[100px]"></div>
      <Skills></Skills>
      <div name="Experiences" className= 'h-[100px]'></div>
      <Experiences></Experiences>
      <div name="Projects" className= 'h-[200px]'></div>
      <Projects></Projects>
      <div name="Footer" className= 'h-[400px]'></div>
      <Footer></Footer>
    </div>
  )
}

import {Link} from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className= "fixed top-0 left-0 w-full h-[60px] flex justify-between items-center px-4 bg-stone-900 text-gray-300 z-50">
      <div className= "hidden md:flex">
        <ul className= "flex">
          <li className= "px-4 cursor-pointer font-medium hover:text-white hover:underline hover:font-bold hover:text-l">
            <Link to="Intro" smooth={true} duration={500}>Introduction</Link>
          </li>
          <li className= "px-4 cursor-pointer font-medium hover:text-white hover:underline hover:font-bold hover:text-l">
            <Link to="Academics" smooth={true} duration={500}>Academics</Link>
          </li>
          <li className="px-4 cursor-pointer font-medium hover:text-white hover:underline hover:font-bold hover:text-l">
  <Link to="Skills" smooth={true} duration={500}>Skills</Link>
</li>
          <li className= "px-4 cursor-pointer font-medium hover:text-white hover:underline hover:font-bold hover:text-l">
            <Link to="Experiences" smooth={true} duration={500}>Experiences</Link>
          </li>
          <li className= "px-4 cursor-pointer font-medium hover:text-white hover:underline hover:font-bold hover:text-l">
            <Link to="Projects" smooth={true} duration={500}>Projects</Link>
          </li>
        </ul>
      </div>
      <div onClick= {handleClick} className= "md:hidden z-10">
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>
      <ul className= {!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-stone-900 text-gray-300 flex flex-col justify-center items-center"}>
        <li className= "py-6 text-4xl px-4 cursor-pointer font-medium hover:text-white hover:underline">
            <Link onClick= {handleClick} to="Intro" smooth={true} duration={500}>Introduction</Link>
          </li>
          <li className= "py-6 text-4xl px-4 cursor-pointer font-medium hover:text-white hover:underline">
            <Link onClick= {handleClick} to="Academics" smooth={true} duration={500}>Academics</Link>
          </li>
          <li className= "py-6 text-4xl px-4 cursor-pointer font-medium hover:text-white hover:underline">
            <Link onClick= {handleClick} to="Experiences" smooth={true} duration={500}>Experiences</Link>
          </li>
          <li className= "py-6 text-4xl px-4 cursor-pointer font-medium hover:text-white hover:underline">
            <Link onClick= {handleClick} to="Projects" smooth={true} duration={500}>Projects</Link>
          </li>
      </ul>
    </div>
  )
}

function Intro() {
  return (
    <div className= "w-full h-screen flex items-center justify-center flex-col text-center">
      <div>
        <img src="assets/foto.jpg" alt= "Photo of Me" className= "rounded-full shadow-md w-64 h-64 mb-8">
        </img>
      </div>
      <h1 className= "text-4xl md:text-3xl mb-1 md:mb-3 font-bold">Abdullah Akmal Sutoyo</h1>
      <p className= "text-base md:text-xl mb-3 font-medium">Computer Science Student</p>
      <p className= "text-md max-w-xl mb-6 font-bold text-justify">
      My name is Abdullah Akmal Sutoyo, but you can call me Akmal. I am currently pursuing an undergraduate degree in Computer Science at BINUS International University. My experience spans various areas of computer science, including object-oriented programming (OOP), data science, and web development. However, my true passion lies in the fields of data science and artificial intelligence. Using my technical knowledge, I am deeply interested in creating innovative solutions that uses technology to address real-world problems. I am enthusiastic about tackling new challenges and seizing opportunities that help me grow both personally and professionally in this dynamic and ever-evolving field.
<br></br><br></br>For more information about me, you can view my Curriculum Vitae by clicking on the button below!</p>
        <a href="assets/Abdullah Akmal Sutoyo CV.pdf" target="_blank" rel="noopener noreferrer">
        <button className= "text-base md:text-xl mb-3 font-medium border-2 border-stone-900 px-3 py-1 flex items-center hover:bg-stone-900 hover:text-gray-200">
          View CV 
        </button>
        </a>
    </div>
  )
}

import academicsdata from './data/academicsdata'

function Academics() {
  return (
    <div className= "w-full max-h-screen">
      <Title>Academics</Title>
      <div className= "flex flex-col md:flex-row items-center justify-center">
      <div className= "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {academicsdata.map(project => (
            <AcademicsItem
              imgurl={project.imgurl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            ></AcademicsItem>
          ))}
        </div>
      </div>
    </div>
  )
}

function AcademicsItem({ title, imgurl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 rounded-md overflow-hidden bg-white text-gray-900 hover:bg-stone-900 hover:text-gray-200"
    >
      <img
        src={imgurl}
        alt="Academics"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
          {stack.map(item => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}




import skillsdata from './data/skillsdata';

function Skills() {
  return (
    <div className="w-full max-h-screen flex flex-col items-center justify-center">
      <Title>Skills</Title>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skillsdata.map(skill => (
          <div className="flex items-center justify-center px-4 py-2 h-16 font-medium border-2 border-stone-900 rounded-md text-center bg-white hover:bg-stone-900 hover:text-gray-200">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}


import experiencesdata from './data/experiencesdata'

function Experiences() {
  return (
    <div className= "w-full max-h-screen flex flex-col md:flex-row justify-center">
      <div className= "w-full md:w-7/12">
        <Title>Experiences</Title>
        {experiencesdata.map (item => (
          <ExperiencesItem
            title={item.title}
            year={item.year}
            duration={item.duration}
            details={item.details}
          ></ExperiencesItem>
        ))}
      </div>
    </div>
  )
}

function ExperiencesItem({title, year, duration, details}) {
  return (
    <ol className= "flex flex-col md:flex-row relative border-l border-stone-200">
      <li className= "mb-10 ml-4">
        <div className= "absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white">
        </div>
          <p className= "flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className= "inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
              {year}
            </span>
            <h3 className= "text-lg font-semibold text-stone-900">
              {title}
            </h3>
            <div className= "my-1 text-sm font-normal leading-none text-stone-400">
              {duration}
            </div>
          </p>
          <p className= "my-2 text-base font-normal text-stone-500">
            {details}
          </p>
      </li>
    </ol>
  )
}

import projectsdata from './data/projectsdata';

function Projects() {
  return (
    <div className="w-full max-h-screen">
      <Title>Projects</Title>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsdata.map(project => (
            <ProjectsItem
              imgurl={project.imgurl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            ></ProjectsItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsItem({ title, imgurl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 rounded-md overflow-hidden bg-white text-gray-900 hover:bg-stone-900 hover:text-gray-200"
    >
      <img
        src={imgurl}
        alt="Projects"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
          {stack.map(item => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}


function Title({children, id}) {
  return (
    <h1
      id= {id && id}
      className= "text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900">
        {children}
    </h1>
  )
}

function Footer() {
  return (
		<div name="Footer" className="text-center">
				<div className="container max-w-screen-lg mx-auto">
					<div>
						<div className="flex flex-wrap justify-center gap-2">
							<a 
								href="https://www.linkedin.com/in/akmal-sutoyo-2737011bb/"
                target= "_blank"
								className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
								<svg
								className="w-5 h-5 fill-current"
								role="img"
								viewBox="0 0 256 256"
								xmlns="http://www.w3.org/2000/svg"
								>
								<g>
									<path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
								</g>
								</svg>
							</a>
							<a 
								href="https://github.com/ilovegaming42069"
                target= "_blank"
								className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
								<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								className="w-5"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								>
								<g fill="none">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
										fill="currentColor"
									/>
								</g>
								</svg>
							</a>
						</div>
					</div>
				</div>
			<p className="text-sm mt-2  opacity-50">
				&copy; {new Date().getFullYear()} Abdullah Akmal Sutoyo. All rights reserved.
			</p>
		</div>
	)
}

export default App
