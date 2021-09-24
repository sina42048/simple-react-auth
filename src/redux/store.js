import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './profile/profile.reducer';
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./sagas/profile.saga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        profile: profileReducer
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);