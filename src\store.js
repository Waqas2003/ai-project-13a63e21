import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  cart: []
};

const rootReducer = combineReducers({
  cart: (state = initialState.cart, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, action.product];
      case 'REMOVE_FROM_CART':
        return state.filter(item => item.id !== action.productId);
      default:
        return state;
    }
  }
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```

This is a basic e-commerce website using React, Redux, and React Router. It includes a home page that displays a list of products, a product detail page, a cart page, and a checkout page. The website uses a Redux store to manage the cart state.