import { connect } from 'react-redux';
import *as cartActions from '../actions/cart'
import {bindActionCreators} from 'redux'
import Menu from '../components/Filter'
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ cart }) => ({
    totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
    count: cart.items.length,
    items: uniqBy(cart.items, o => o.id),
});
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
