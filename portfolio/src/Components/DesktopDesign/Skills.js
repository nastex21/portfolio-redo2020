import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Footer from './Footer';

function Skills({ setPath }) {
  useEffect(() => {
    setPath('skills')
  });
  return (
    <div className="contentDiv">
      <section id="skills">
        <h1>What I Know</h1>
        <div id="skillsCards">
          <Card>
            <Card.Header as="h1">Front-end</Card.Header>
            <Card.Body>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>HTML</ListGroup.Item>
                  <ListGroup.Item>CSS</ListGroup.Item>
                  <ListGroup.Item>JavaScript</ListGroup.Item>
                  <ListGroup.Item>React</ListGroup.Item>
                  <ListGroup.Item>Redux</ListGroup.Item>
                  <ListGroup.Item>Bootstrap</ListGroup.Item>
                  <ListGroup.Item>Mobile responsiveness</ListGroup.Item>
                  <ListGroup.Item>Github</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header as="h1">Back-end</Card.Header>
            <Card.Body>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>node.js</ListGroup.Item>
                  <ListGroup.Item>mongodb</ListGroup.Item>
                  <ListGroup.Item>Linux</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header as="h1">Have some knowledge in</Card.Header>
            <Card.Body>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Adobe Photoshop</ListGroup.Item>
                  <ListGroup.Item>Adobe Illustrator</ListGroup.Item>
                  <ListGroup.Item>Adobe XD</ListGroup.Item>
                  <ListGroup.Item>Python</ListGroup.Item>
                  <ListGroup.Item>PHP</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <p>
          Create functional websites and apps using HTML, CSS, and JavaScript Have
          knowledge of JavaScript libraries like React & Redux, d3.js Use CSS
          preprocessor languages such as Stylus Dabble with front-end component
          libraries like Bootstrap Use node.js for compilation of projects and
          back-end work Deployment of websites Avid user and contributor to Git
          Hub Worked with APIs such as Google Maps, Wikipedia, Twitch,
          OpenWeatherMap, etc Experienced with macOS and Linux, and their
          terminals Self-motivated individual that’s not afraid of learning new
          programming languages or frameworks.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Skills;
