import React, { Component } from "react";
import MainNav from "../components/MainNav";
import BookCard from "../components/BookCard";

import API from "../utils/API"

class SavedPage extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount() {
        this.getSavedBooks()
    }

    getSavedBooks = () => {
        console.log("in saved books method");
        API.getAllSaved()
            .then(res => {
                console.log("HEEYYYYYYYYYY " + res.data)
                // this.setState({savedBooks: res.data})
            })

    }


    render() {
        return (
            <div>
                <MainNav />
                <div className="container">
                    <BookCard
                        author={""}
                        title={""}
                        description={""}
                        link={""}
                        image={""}
                    />
                </div>
            </div>
        )
    }
}

export default SavedPage;