import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";
import "./style.css";

// Exporting both BookList and BookListItem from this file.

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
};

export function BookListItem({
    thumbnail = "https://placehold.it/300x300",
    title,
    authors,
    description,
    link
}) {
    return (
        <li className="list-group-item list-container">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <p>Authors: {authors}</p>
                        <p>Description: {description}</p>
                        <a rel="noreferrer noopener" target="_blank" href={link}>
                            More details
            </a>
                        <Button
                            onClick={"/save"}
                            type="outline-dark"
                            className="input-lg save-btn"
                        >
                            Save
            </Button>
                    </Col>
                </Row>
            </Container>
        </li>
    );
};