import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carrusel = (props) => {
    return (
        <div className="containerCarrusel">
            <Carousel fade variant='dark'>
                {props.projects.map((project, idx) => (
                    <Carousel.Item key={idx}>
                        <img
                            className="d-block w-100"
                            src={project.image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Carrusel
