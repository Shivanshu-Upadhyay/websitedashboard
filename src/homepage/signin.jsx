import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './vendor/boxicons/css/boxicons.min.css';
import { Form, Field } from 'react-final-form'
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { login } from "../actions/userAction";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import signinimage from './projectImg/signinimage.png';
import Paper from '@material-ui/core/Paper';
import './style.css';
function SignIn(props) {
    const history = useHistory();
    const onSubmit = (formValues) => {
        console.log(formValues);
        props.login(formValues);
        history.push('/clinictoday');
    }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{ padding: 25 }}>

                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-7'>




                                        <div className='d-flex justify-content-center align-items-center'>
                                            <div className="login-wrap ">
                                                <div className="login-html text-center">

                                                    <h5 className="text-center" style={{
                                                        fontFamily: "Arial, Helvetica, sans-serif", color: "#5390D9",
                                                        textShadow: "1px 1px #5390D9"
                                                    }}><b> Automate Your Physio Clinical Practice</b></h5>


                                                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                                                    <label for="tab-1"
                                                        className="tab " >  </label>



                                                    <div className="login-form text-start">




                                                        <div className="sign-in-htm">
                                                            <div className="group">

                                                                <Field name="email">
                                                                    {({ input }) => (
                                                                        <div className="mb-3">
                                                                            <label for="user" className="label">Email ID</label>
                                                                            <input id="user" type="email" className="input" {...input} required />

                                                                        </div>
                                                                    )}
                                                                </Field>
                                                            </div>

                                                            <div className="group">
                                                                <Field name="password">
                                                                    {({ input }) => (
                                                                        <div>
                                                                            <label for="pass" className="label">Password</label>
                                                                            <input id="pass" type="password" {...input} className="input" data-type="password" required />

                                                                        </div>
                                                                    )}
                                                                </Field>
                                                            </div>


                                                            <div className="group">



                                                                <Field name="checkbox">
                                                                    {({ input }) => (
                                                                        <div>

                                                                            <input id="check" type="checkbox" {...input} className="check" />
                                                                            <label for="check"><span className="icon"></span> Show Password</label>
                                                                        </div>
                                                                    )}
                                                                </Field>

                                                            </div>
                                                            <div className="group">
                                                                <input type="submit" className="button" value="LogIn" />
                                                            </div>
                                                            <div className="hr"></div>
                                                            <div className="foot-lnk">
                                                                <a style={{ color: 'blueviolet' }} href="#forgot">Forgot Password?</a>
                                                                <br /><br />
                                                                <div className="social-links1  text-center">
                                                                    <a href="e" className="google-plus" style={{ backgroundColor: "#db4a39" }}><i className="bx bxl-google-plus"></i></a>



                                                                    <a href="e" className="facebook" style={{ backgroundColor: "#4267B2" }}><i className="bx bxl-facebook"></i></a>
                                                                    <a href="f" className="instagram InstaColor"><i className="bx bxl-instagram"></i></a>


                                                                </div>

                                                                <div className="row text-center mt-3">
                                                                    <p style={{ color: "black" }}>Don't have an account? <Link to="/signup" style={{ color: 'blueviolet' }}>Register Here</Link></p>
                                                                </div>

                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                    <div className=' col-md-5 text-center mt-5'>
                                        <img src={signinimage} className="img-fluid " alt="Signin"
                                        />

                                    </div>


                                </div>
                            </div>

                        </Paper>
                    </form>
                )}
            </Form>
        </div>

    );
}


const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, { login })(SignIn);