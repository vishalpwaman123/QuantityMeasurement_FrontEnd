import {createStore} from 'redux';
import quantityReducer from './Quantity/QuantityReducer'

const store = createStore(quantityReducer);

export default store;