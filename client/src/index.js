import 'materialize-css/dist/css/materialize.min.css'; // non js needs .css
// redux
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';

import reduxThunk from 'redux-thunk';
// import reduxThunk from 'redux-thunk';

// Provider : is a component from react-redux that helps redux work with react that makes the store accesible to every component
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// when the store is update the provider component will update all its children w/ new state
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
