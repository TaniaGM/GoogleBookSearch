import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

// import "./style.css";

function BookCard(props) {
    return (
        <Card>
            <Card.Header>{props.author}</Card.Header>
            <Card.Body>
                <Card.Img variant="left" src="https://place-hold.it/100" />
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}
                </Card.Text>
                <Button variant="primary" className="mr-2">Delete</Button>
                <Button variant="primary">View</Button>
            </Card.Body>
        </Card>
    )
}

export default BookCard;