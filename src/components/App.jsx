import React, {Component} from 'react';
import data from '../books'
import Menu from "./Menu";
import { Container } from 'semantic-ui-react'
import BookCard from "./BookCard";
import Filter from "../containers/Filter";
import { Card } from 'semantic-ui-react'
import {setFilter} from "../actions/filter";
// import axios from 'axios'




class App extends Component {

    componentDidMount() {
        const { setBooks } = this.props;
        // axios.get('/books.json').then(({ data }) => {
        //     setBooks(data)
        // });
        setBooks(data)
    }

    render() {
        const { books, isReady } = this.props;
        return (
            <Container>
                <Menu />
                <Filter />
                <Card.Group itemsPerRow={4}>
                    {
                        !isReady ? 'Загрузка...':
                            books.map((book, i) => (
                                <BookCard key={i} {...book}/>
                            ))
                    }
                </Card.Group>
            </Container>
        );
    }
}



export default App;
