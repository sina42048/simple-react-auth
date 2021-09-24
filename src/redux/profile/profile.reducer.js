import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        isLoading: false,
        isLoggedIn: false,
        user: null,
        successMessage: null,
        errorMessage: null
    },
    reducers: {
        loginRequest: (state) => {
            state.isLoading = true;
            state.isLoggedIn = false;
            state.successMessage = null;
            state.errorMessage = null;
            state.user = null;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.successMessage = "user login successfully";
            state.errorMessage = null;
            state.user = action.payload.userData[0];
        },
        loginFailed: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = null;
            state.successMessage = null;
            state.errorMessage = action.payload.errorMessage;
        },
        registerRequest: (state) => {
            state.isLoading = true;
            state.isLoggedIn = false;
            state.successMessage = null;
            state.errorMessage = null;
            state.user = null;
        },
        registerSuccess: (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = null;
            state.successMessage = "user registered successfully";
            state.errorMessage = null;
        },
        registerFailed: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = null;
            state.successMessage = null;
            state.errorMessage = action.payload.errorMessage;
        },
        logout: (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = null;
            state.successMessage = "successfully logged out";
            state.errorMessage = "";
        }
    }
});

export const { loginRequest, loginSuccess, loginFailed, registerRequest, registerSuccess, registerFailed, logout } = profileSlice.actions;
export default profileSlice.reducer;