import React from 'react';
import '../styles/projects.css';
import Carrusel from '../components/Carrusel';
import Cards from '../components/Cards';

//images projects
import movies from '../images/movies-by-wolcken.png';
import pokedex from '../images/pokedex-by-wolcken.png';
import calculator from '../images/calculator-by-wolcken.png';
import todos from '../images/todos-by-wolcken.png';
import rick_morty from '../images/rick&morty-by-wolcken.png';
import youtube from '../images/youtube-by-wolcken.png';
import cosmos from '../images/cosmos-by-wolcken.png';
import peps from '../images/peps-by-wolcken.png';
import assets from '../images/assets-by-wolcken.png';
import pork from '../images/pork-by-wolcken.png';
import cecasem from '../images/cecasem-by-wolcken.png';
import observatorio from '../images/observatorio-by-wolcken.png';

const Projects = () => {

  const projects = [
    {
      title: 'Observatorio',
      subtitle: 'Observatorio de Trata de Personas',
      description: 'Pork helps manage purchases, sales, costs, and staff, automatically calculating the daily price per kilo. Designed to optimize meat distribution operations.',
      image: `${observatorio}`,
      tech: ["Wordpress", "Oxygen", "JavaScript", "Css", "PHP"],
      linkUrl: 'https://observatoriotratabolivia.org/',
    },
    {
      title: 'Cecasem',
      subtitle: 'Centro de Capacitación y Servicio para la Integración de la Mujer',
      description: 'Pork helps manage purchases, sales, costs, and staff, automatically calculating the daily price per kilo. Designed to optimize meat distribution operations.',
      image: `${cecasem}`,
      tech: ["Wordpress", "Oxygen", "JavaScript", "Css", "PHP"],
      linkUrl: 'https://cecasem.com/',
    },
    {
      title: 'Pork',
      subtitle: 'Management system for pork meat distribution',
      description: 'Pork helps manage purchases, sales, costs, and staff, automatically calculating the daily price per kilo. Designed to optimize meat distribution operations.',
      image: `${pork}`,
      tech: ["React", "JavaScript", "Css", "Html", "Firebase"],
      linkUrl: 'https://pork-sigma.vercel.app/',
      repositorio: 'https://github.com/wolcken/Pork'
    },
    {
      title: 'Assets',
      subtitle: 'Asset management system for CECASEM',
      description: 'A platform to manage fixed assets throughout their lifecycle. It registers, categorizes, calculates depreciation, and generates detailed reports for efficient administration.',
      image: `${assets}`,
      tech: ["React", "JavaScript", "Css", "Html", "Firebase"],
      linkUrl: 'https://assets-cecasem.vercel.app/',
      repositorio: 'https://github.com/wolcken/Assets'
    },
    {
      title: 'Peps',
      subtitle: 'Pharmacy control system using PEPS method',
      description: 'System to manage pharmacy inventory using the PEPS method. It handles entries, exits, supplier and item records, and generates detailed reports and Kardex history.',
      image: `${peps}`,
      tech: ["React", "JavaScript", "Css", "Html"],
      linkUrl: 'https://peps-sable.vercel.app/',
      repositorio: 'https://github.com/wolcken/Peps'
    },
    {
      title: 'Cosmos',
      subtitle: 'Web-based management and inventory system for Ferretería Cosmos',
      description: 'Comprehensive solution for managing products, suppliers, and transactions. Automates Weighted Average Cost (WAC) calculation to optimize inventory, pricing, and strategic decisions.',
      image: `${cosmos}`,
      tech: ["React", "JavaScript", "Css", "Html"],
      linkUrl: 'https://cosmos-tau.vercel.app/',
      repositorio: 'https://github.com/wolcken/Cosmos'
    },
    {
      title: 'Movies',
      subtitle: 'The Movie Database API Consumption',
      description: 'Developing a web application with the consumption of the API the movie database, which provides us with a list of trending movies, list of series, details of each one with their scores and search for movies by name.',
      image: `${movies}`,
      tech: ["React", "JavaScript", "Css", "Html"],
      linkUrl: 'https://movies-wolcken.netlify.app/',
      repositorio: 'https://github.com/wolcken/Movies'
    },
    {
      title: 'Pokedex',
      subtitle: 'Pokemon APIs Comsumption',
      description: 'Developing a web application with the consumption of an open RESTful API for Pokémon data, which provides us with a list of pokemon and interacts with the images to show the details.',
      image: `${pokedex}`,
      tech: ["React", "JavaScript", "Css", "Html"],
      linkUrl: 'https://pokedex-wolcken.netlify.app/',
      repositorio: 'https://github.com/wolcken/Pokedex'
    },
    {
      title: 'Calculator',
      subtitle: 'Scientific Calculator',
      description: 'Design of a web application, which develops the processes of a scientific calculator.',
      image: `${calculator}`,
      tech: ["React", "JavaScript", "Css", "Html"],
      linkUrl: 'https://calculator-wolcken.vercel.app/',
      repositorio: 'https://github.com/wolcken/Calculator.git'
    },
    {
      title: 'To Do',
      subtitle: 'TODOs Controller',
      description: 'Design of a web application, which performs the control of the tasks to be fulfilled and those already carried out.',
      image: `${todos}`,
      tech: ["React", "JavaScript", "Css", "Html"],
      linkUrl: 'https://to-do-wolcken.vercel.app/',
      repositorio: 'https://github.com/wolcken/To_Do.git'
    },
    {
      title: 'Rick & Morty',
      subtitle: 'Rick & Morty APIs Consumption',
      description: 'Developing a web application that provides us with details of the characters provided by the Rick and Morty API, which is a REST and GraphQL API based on the Rick and Morty television show.',
      image: `${rick_morty}`,
      tech: ["JavaScript", "Css", "Html"],
      linkUrl: 'https://rick-and-morty-wolcken.netlify.app/',
      repositorio: 'https://github.com/wolcken/Rick_and_Morty'
    },
    {
      title: 'YouTube',
      subtitle: 'YouTube Main View',
      description: 'Developing a main view of youtube',
      image: `${youtube}`,
      tech: ["Css", "Html"],
      linkUrl: 'https://youtube-wolcken.vercel.app/',
      repositorio: 'https://github.com/wolcken/YouTube'
    }
  ]

  return (
    <div className='containerProjects'>
      <Carrusel projects={projects} />
      <h2>Projects</h2>
      <Cards projects={projects} />
    </div>
  )
}

export default Projects
