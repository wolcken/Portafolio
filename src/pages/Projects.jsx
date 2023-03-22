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

const Projects = () => {

  const projects = [
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
