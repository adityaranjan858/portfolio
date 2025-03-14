import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../store/slices/navbarSlice";
import projectsReducer from "../store/slices/projectsSlice";

const store = configureStore({
    reducer: {
        navbar : navbarReducer,
        projects : projectsReducer 
    },
});

export default store;