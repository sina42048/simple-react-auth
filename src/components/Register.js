import styles from './Form.module.css'
import React from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../redux/profile/profile.reducer';

const Register = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.user);
    const isLoading = useSelector(state => state.profile.isLoading);
    const errorMessage = useSelector(state => state.profile.errorMessage);
    const onSubmit = (data) => dispatch(registerRequest({ name: data.name, email: data.email, password: data.password }));

    return (
        <div>
            {!user && <>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
                    <label htmlFor="name" title="name">Name : </label>
                    <input title="name" type="text" {...register("name", { required: true })} placeholder="Enter name" />
                    <label htmlFor="email" title="email">Email : </label>
                    <input title="email" type="text" {...register("email", { required: true })} placeholder="john@email.com" />
                    {errors.email && <span>Please enter email address</span>}
                    <label htmlFor="password" title="password">Password : </label>
                    <input title="password" type="password" {...register("password", { required: true })} placeholder="Enter Password" />
                    {errors.password && <span>Please enter your password</span>}
                    <input type="submit" value={isLoading ? "Registering new user..." : "Register"} />
                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                </form>
                <Link to="/">Login To Account</Link>
            </>}
            {user && <Redirect to="/profile" />}
        </div>
    )
};

export default Register;