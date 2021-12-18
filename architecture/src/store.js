/**
 * El store es donde se contiene el reducer
 * * compose se usa para crear muchos reducer
 * * applyMiddleware nos proporciona la utilidad para intervenir dentro de la accion
 * * thunk es un middleware para poder usar peticiones asyncronas dentro de los actions sin el no es posible hacerlo
 * * reducer es el conglomerado de los reducer que se usaran dentro del proyecto
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(
    reducer,
    compose( 
        applyMiddleware(
            thunk
            ),
            typeof window === 'object' && 
                typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                    window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

export default store;