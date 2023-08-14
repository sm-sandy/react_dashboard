import React from "react";
import { useState } from "react";
import AuthUser from "./AuthUser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import logo from '../front_assets/Logo_Image/greatpharmalogo.png'
import '../CSS/login.css'

export default function Login() {

    const { http, setToken } = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        // console.log(email+' '+password);
        http.post('login', { email: email, password: password }).then((res) => {
            console.log(res.data);
            setToken(res.data.user, res.data.access_token);
        }).catch(err => {
            // console.log(err.response.data.error);

            toast.error(err.response.data.error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });



            setError(err.response.data.error);
        })
    }



    return (


        <div className="app-content">
            <div className="content-wrapper">
                <div className="content-body">
                    <div className="auth-wrapper auth-basic px-2">
                        <div className="auth-inner my-2">
                        <ToastContainer />
                            {/* Login basic */}
                           <div className="col-md-3 mx-auto" style={{ marginTop:"50px" }}>
                           <div className="card mb-0">
                                <div className="card-body">
                                    <div className="text-center">
                                    <a href="#" className="brand-logo">
                                        <img style={{width:'35%'}} src={logo} alt="" srcset="" />
                                        {/* <h2 className="brand-text text-accent ms-1">POS</h2> */}
                                        <h1 style={{}} className="ms-1 fw-bold logoPos">POS</h1>
                                    </a>
                                        {/* <Link to="/">Home</Link> */}
                                    <h4 className="card-title mb-1"></h4>
                                    <p className="card-text mb-3">Please sign-in to your account and start the adventure.</p>
                                    </div>
                                    <form className="auth-login-form mt-2" onSubmit={submitForm}>
                                        <div className="mb-1">
                                            <label htmlFor="login-email" className="form-label">Email</label>
                                            <input type="text" className="form-control" name="email" onChange={e => setEmail(e.target.value)} placeholder="john@example.com" aria-describedby="login-email" tabIndex={1} autofocus />
                                        </div>
                                        <div className="mb-1">
                                            <div className="d-flex justify-content-between">
                                                <label className="form-label" htmlFor="login-password">Password</label>
                                                <a href="auth-forgot-password-basic.html">
                                                    {/* <small>Forgot Password?</small> */}
                                                </a>
                                            </div>
                                            <div className="input-group input-group-merge form-password-toggle">
                                                <input type="password" className="form-control form-control-merge" name="password" onChange={e => setPassword(e.target.value)} tabIndex={2} placeholder="············" aria-describedby="login-password" />
                                                {/* <span className="input-group-text cursor-pointer"><i data-feather="eye" /></span> */}
                                                <br />
                                            </div>
                                        </div>
                                        {/* <div className="mb-1">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="remember-me" tabIndex={3} />
                                                <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                                            </div>
                                        </div> */}
                                        {/* <button type="submit" onClick={submitForm} className="btn btn-primary w-100 mt-4" tabIndex={4}>Sign in</button> */}
                                        <input type="submit" value="Sign In" className="btn btn-primary w-100 mt-4"/>
                                    </form>
                                    
                                </div>
                            </div>
                           </div>
                            {/* /Login basic */}
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}