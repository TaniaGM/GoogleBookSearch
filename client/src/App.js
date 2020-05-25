import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Input from './components/Input';
import Button from "./components/Button";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {

    state = {
        books: [],
        bookSearch: ""
    };

    newQuery = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchQuery = event => {
        event.preventDefault();
        console.log("Search button clicked!");
        API.getBooks(this.state.bookSearch)
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Wrapper>
                <Nav />
                <Jumbotron />
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input
                                                name="bookSearch"
                                                value={this.state.bookSearch}
                                                onChange={this.newQuery}
                                                placeholder="Search for a non crappy book!"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <Button
                                                onClick={this.searchQuery}
                                                type="outline-light"
                                                className="input-lg"
                                            >
                                                Search
                      </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="12">
                            {!this.state.books.length ? (
                                <h1 className="text-center">No books to display...</h1>
                            ) : (
                                    <BookList>
                                        {this.state.books.map(book => {
                                            return (
                                                <BookListItem
                                                    key={book.industryIdentifiers[0].identifier}
                                                    thumbnail={book.thumbnail}
                                                    title={book.title}
                                                    authors={book.authors}
                                                    description={book.description}
                                                    link={book.link}
                                                />
                                            );
                                        })}
                                    </BookList>
                                )}
                        </Col>
                    </Row>
                </Container>
            </Wrapper>

        );
    }
}

export default App;