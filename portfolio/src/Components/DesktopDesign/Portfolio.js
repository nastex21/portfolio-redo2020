import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Portfolio() {
    return (
            <section id="portfolio">
                <div className="cardGroup" id="card1">
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb" alt="project 1" />
                        <Card.Body>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>
                            <div className="cardButtons">
                                <Button variant="primary" href="">Demo</Button>
                                <Button variant="primary" href="">Code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cardGroup" id="card2">
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb" alt="project 1" />
                        <Card.Body>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>
                            <div className="cardButtons">
                                <Button variant="primary" href="">Demo</Button>
                                <Button variant="primary" href="">Code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cardGroup" id="card3">
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb" alt="project 1" />
                        <Card.Body>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>
                            <div className="cardButtons">
                                <Button variant="primary" href="">Demo</Button>
                                <Button variant="primary" href="">Code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cardGroup" id="card4">
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb" alt="project 1" />
                        <Card.Body>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>
                            <div className="cardButtons">
                                <Button variant="primary" href="">Demo</Button>
                                <Button variant="primary" href="">Code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cardGroup" id="card5">
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb" alt="project 1" />
                        <Card.Body>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>
                            <div className="cardButtons">
                                <Button variant="primary" href="">Demo</Button>
                                <Button variant="primary" href="">Code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cardGroup" id="card6">
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb" alt="project 1" />
                        <Card.Body>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>
                            <div className="cardButtons">
                                <Button variant="primary" href="">Demo</Button>
                                <Button variant="primary" href="">Code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </section>
    )
};

export default Portfolio;