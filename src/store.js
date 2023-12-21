/*import { configureStore } from "@reduxjs/toolkit";
import consultantsReducer from "./reducers/index";

export default configureStore({
    reducer: {
        consultants: consultantsReducer,
    },
});*/

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import consultantsReducer from "./reducers/index";

const rootReducer = combineReducers({
    consultants: consultantsReducer
})

export const setupStore = preloadedState => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export default setupStore