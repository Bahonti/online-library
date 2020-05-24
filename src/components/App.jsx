import React, {Component} from 'react';
import data from '../books'
import { Container } from 'semantic-ui-react'
import BookCard from "../containers/BookCard";
import Filter from "../containers/Filter";
import Menu from "../containers/Menu";
import { Card } from 'semantic-ui-react'
import {setFilter} from "../actions/filter";




class App extends Component {

    componentDidMount() {
        const { setBooks } = this.props;
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
