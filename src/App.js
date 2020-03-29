import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books'
import data from './books'
import Menu from "./components/Menu";
import { Container } from 'semantic-ui-react'
import BookCard from "./components/BookCard";
import { Card } from 'semantic-ui-react'
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

const mapStateToProps = ({ books }) => ({
    books: books.items,
    isReady: books.isReady
});
const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
