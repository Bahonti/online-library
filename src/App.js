import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books'
import data from './books'
import Menu from "./components/Menu";
import { Container } from 'semantic-ui-react'
import BookCard from "./components/BookCard";
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

                <ul>
                    {
                        !isReady ? 'Загрузка...' :
                            books.map(book => (
                                <BookCard {...book}/>
                            ))
                    }
                </ul>
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
