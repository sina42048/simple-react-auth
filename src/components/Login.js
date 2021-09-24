import styles from "./Form.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../redux/profile/profile.reducer";

const Login = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.user);
    const errorMessage = useSelector(state => state.profile.errorMessage);
    const isLoading = useSelector(state => state.profile.isLoading);
    const onSubmit = (data) => dispatch(loginRequest({ email: data.email, password: data.password }));

    return (
        <div>
            {!user && <>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
                    <label htmlFor="email" title="email">Email : </label>
                    <input title="email" type="text" {...register("email", { required: true })} placeholder="john@email.com" />
                    {errors.email && <span>Please enter email address</span>}
                    <label htmlFor="password" title="password">Password : </label>
                    <input title="password" type="password" {...register("password", { required: true })} placeholder="Enter Password" />
                    {errors.password && <span>Please enter your password</span>}
                    <input type="submit" value={isLoading ? "Please wait ..." : "Login"} disabled={isLoading} />
                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                </form>
                <Link to="/register">Create New Account</Link>
            </>}
            {user && <Redirect to="/profile" />}
        </div>
    )

};

export default Login;