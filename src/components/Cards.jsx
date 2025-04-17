import React from 'react';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
  return (
    <div className='cards'>
      {props.projects.map((project, idx) => (
        <Card key={idx} bg='dark' text='white'>
          <Card.Header>{project.subtitle}</Card.Header>
          <Card.Img variant="top" src={project.image} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <div className='contTech'>
              {project.tech.map((tec, idx) => {
                return (
                  <span className='tech' key={idx}>{tec}</span>
                )
              })}
            </div>
            <Card.Link href={project.linkUrl}>Ver Aqui</Card.Link>
            {project.repositorio ?
              <Card.Link href={project.repositorio}>Repositorio</Card.Link>
              :
              null
            }
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Cards
