import React from "react";

import SignIn from './signin';
import { Dialog } from "@material-ui/core";

import AboutUs1 from './projectImg/AboutUs1.jpg';
import AboutUs2 from './projectImg/AboutUs2.jpg';
import IconTelephysioportal from './projectImg/IconTelephysioportal.png';
import IconClinic from './projectImg/IconClinic.svg';
import IconDocumentation from './projectImg/IconDocumentation.png';
import IconFinancial from './projectImg/IconFinancial.png';
import IconAccessible from './projectImg/IconAccessible.png';
import Security1 from './projectImg/Security1.jpg';
import AppointmentManagement from './projectImg/AppointmentManagement.jpg';
import videoconsultation from './projectImg/videoconsultation.jpg';
import ClinicManagement1 from './projectImg/ClinicManagement1.jpg';
import ClinicResource from './projectImg/ClinicResource.jpeg';
import AccountsManagement22 from './projectImg/AccountsManagement22.jpg';
import TreatmentProtocol from './projectImg/TreatmentProtocol.jpg';
import EHRManagement from './projectImg/EHRManagement.jpg';
import Analytics from './projectImg/Analytics.jpg';
import Accessanywhere1 from './projectImg/Accessanywhere1.jpg';
import highestsecurity1 from './projectImg/highestsecurity1.png';
import EasytoUse1 from './projectImg/EasytoUse1.png';
import Icon4 from './projectImg/Icon4.jpg';
import Icon5 from './projectImg/Icon5.png';
import Youtube from './projectImg/Youtube.jpg';
import RefundPolicy from './projectImg/RefundPolicy.png';
import DigitalMarketting1 from './projectImg/DigitalMarketting1.jpg';
import webdev from './projectImg/webdev.png';
import seo from './projectImg/seo.png';
import PracticeGrow from './projectImg/PracticeGrow.jpg';
import ProfessionalContentWriting from './projectImg/ProfessionalContentWriting.png';
import socialMedia from './projectImg/socialMedia.png';
import Mobileappdevelopment from './projectImg/Mobileappdevelopment.jpg';
import LeadGeneration from './projectImg/LeadGeneration.jpg';
import emailmarketing from './projectImg/emailmarketing.jpg';
import Digital1 from './projectImg/Digital1.jpg'
import PhysiomaticaLogo from '../components/SideBar/PhysiomaticaLogo.png';
import { Link } from "react-router-dom";
import $ from 'jquery';
import { fontSize } from "@material-ui/system";


function HomePage() {

    const [openSignIn, setOpenSignIn] = React.useState(false);

    const handleClose = () => {
        setOpenSignIn(false)
    }


   function abc(){
       console.log('clicked');
   }



    return (
        <>

            <div id="topbar" class="d-flex align-items-center fixed-top">
                <div class="container d-flex align-items-center justify-content-center justify-content-md-between">

                </div>
            </div>

            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <a href="#hero" class="logo me-auto"><img src={PhysiomaticaLogo} class="img-fluid" alt=""></img><span class="text-info"></span></a>


                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>

                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#featured-services">Features</a></li>
                            <li><a class="nav-link scrollto" href="#benefits">Benefits</a></li>
                            <li><a class="nav-link scrollto" href="#plans">plans</a></li>
                            <li><a class="nav-link scrollto" href="#Digital">Digital Marketing</a></li>
                            <li><a class="nav-link scrollto" href="#contact-form">Contact</a></li>


                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <a onClick={() => { setOpenSignIn(true) }} style={{ cursor: 'pointer' }} class="appointment-btn scrollto" data-toggle="modal" data-target="#myModal"><span class=" d-md-inline">Sign In</span></a>

                </div>
            </header>





            <section id="hero">
                <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div className="carousel-inner" role="listbox">


                        <div className="carousel-item active">

                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/46AyvIKUtBA?start=8" title="YouTube video player"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>




                        </div>



                    </div>



                </div>
            </section>








            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>About Us</h2>

                    </div>

                    <div className="row mb-5">
                        <div className="col-lg-6 order-lg-0" data-aos="flip-left">
                            <img src={AboutUs1} className="img-fluid" alt="" style={{ height: "100%" }} />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content1 order-lg-1" >
                            <h3>Goals</h3>

                            <ul>
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> To encourage physiotherapists with technological automation in delivering highly standardized and efficient therapy to
                                    their patients.</li>
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> To digitize and automate physiotherapists with the most recent advancements in healthcare delivery in physiotherapy
                                    practice.
                                </li>

                            </ul>

                            <h3>Vision</h3>

                            <ul>
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> To become physio’s most liked, most trusted and most advanced SAAS Health IT service provider</li>

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> To ensure the highest standards of data security regulations and guidelines.</li>

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> To be the most liked service provider partner for Physio community.</li>
                            </ul>

                        </div>
                    </div>





                    <div className="row">



                        <div className="col-lg-6 order-lg-1" data-aos="flip-right">
                            <img src={AboutUs2} className="img-fluid" alt="" style={{ height: "100%", width: "100%" }} />
                        </div>



                        <div className="col-lg-6 pt-4 pt-lg-0 content1 order-lg-0" data-aos="fade-right">
                            <h3>Mission</h3>

                            <ul>
                                <li><i className="bi bi-check-circle" style={{ color: "red" }} ></i> To provide Physio’s with highly secured intuitive and futurist tech based automated clinic management services.
                                </li>

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Meet the changing needs of our clients.</li>
                            </ul>

                            <h3>Core Values</h3>

                            <ul>
                                <li><i className="bi bi-check-circle" style={{ color: "red", fontWeight: "bolder" }}></i> Focus on new and innovative Health Technologies.</li>
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Practice high ethical standards.
                                </li>
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Respect and protect the client’s privacy and promise to their patients.
                                </li>
                            </ul>

                        </div>


                    </div>

                </div>
            </section>







            <section id="featured-services" className="featured-services">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Features</h2>
                        <p> <b> <em>Physiomatica improves patients' experience and clinical outcomes.</em> </b></p>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon text-center" ><i> <img src={IconTelephysioportal} alt="" width="50px" height="50px" /></i></div>

                                <h4 className="text-center"> <p style={{ color: "#1a1aff" }}>Tele Physio Portal</p></h4>

                                <h4 className="title text-center"> INTUITIVE</h4>
                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Fear no cross infection at your waiting rooms or to yourself
                                </p>
                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Medical & social distancing with care
                                </p>
                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Doesn`t require any IT skills
                                </p>
                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Anywhere, anytime system access from any Internet-enabled device
                                </p>
                                
                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Upgradable, scalable at a pocket - friendly subscription cost which is just peanuts for digital transformation.
                                </p>


                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon text-center"><img src={IconClinic} alt="" width="50px" height="50px" /></div>

                                <h4 className="text-center">
                                    <p style={{ color: "#1a1aff" }}>Clinic Process</p>
                                </h4>

                                <h4 className="title text-center"> AUTOMATED</h4>

                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Automate your clinical procedures while you do what you like the most - caring the patients

                                </p>

                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Streamlined documentation with carry-forward functionality, easy note-type switching
                                </p>
                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Cut errors and save time with digital patient intake.
                                </p>
                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Patient information automatically and securely flows into the EMR
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon text-center"><img src={IconDocumentation} alt="" width="50px" height="50px" /></div>
                                <h4>
                                    <p style={{ color: "#1a1aff", textAlign: "center" }}>Documentation</p>
                                </h4>
                                <h4 className="title text-center">THERAPY </h4>

                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Renders all the possible assessments & encourages the evidence based practice

                                </p>

                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Start to end documentation every aspect of various therapies


                                </p>

                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Document faster—and at the point of care—with a user-friendly layout that follows the therapist workflow.
                                </p>
                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Get rid of long physical forms and records to maintain.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="row mt-lg-5">
                        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon text-center"><img src={IconFinancial} alt="" width="50px" height="50px" /></div>
                                <h4>
                                    <p style={{ color: "#1a1aff", textAlign: "center" }}>Financials & Accounting</p>
                                </h4>
                                <h4 className="title text-center">INTEGRATED</h4>

                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Multi-currency payment gateway for cross borders
                                </p>

                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Tele Physio integrated accounting system
                                </p>
                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Income & expense day book updation in real time
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon text-center"><img src={IconAccessible} alt="" width="50px" height="50px" /></div>
                                <h4>
                                    <p style={{ color: "#1a1aff", textAlign: "center" }}>Accessible & Upgradable </p>
                                </h4>

                                <h4 className="title text-center">SCALABLE</h4>


                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Accessible anytime from any device from anywhere
                                </p>

                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Upgradable at any point of time irrespective of the time length used.

                                </p>
                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Scalable from single user to multiple users & locations anywhere
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon text-center"><img src={Security1} alt="" width="50px" height="50px" /></div>
                                <h4>
                                    <p style={{ color: "#1a1aff", textAlign: "center" }}>Data Security & Migration</p>
                                </h4>

                                <h4 className="title text-center">SEAMLESS</h4>
                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> 100% Assured & guaranteed data security
                                </p>

                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Ensures seamless data migration in quickest possible time


                                </p>
                                <p className="description"><i className="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Your data is exclusively your asset , stored and accessed only by you
                                </p>
                            </div>
                        </div>


                    </div>

                </div>
            </section>






            <section className="about">
                <div className="container" data-aos="fade-up">



                    <div className="row  mb-lg-5">
                        <div className="col-lg-6 order-lg-0" data-aos="fade-right">
                            <img src={AppointmentManagement} data-aos="zoom-in" className="img-fluid" alt="" style={{ width: "100%", height: "100%" }} />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content1 order-lg-1" id="Appointment Management" data-aos="fade-left">
                            <h3 data-aos="zoom-in">Appointment Management</h3>

                            <ul data-aos="zoom-in">
                                <br />
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica replaces manual schedule books or practice scheduling software that is not integrated with your clinic’s
                                    patients records and assessments.</li>
                                <br />
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica helps you to schedule appointments, documentation and patient records work together to coordinate your team
                                    and fill up leakages.

                                </li>
                                <br />

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> SMS Appointment Reminder of physiomatica helps users to send reminder messages to their patients on confirmation of the
                                    scheduled appointments.

                                </li>

                                <br />

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> The appointments would be updated in real-time in Today`s Wall board.

                                </li>

                            </ul>



                        </div>
                    </div>

                    <br />



                    <div className="row mb-lg-5">



                        <div className="col-lg-6 order-lg-1" data-aos="fade-left">
                            <img src={videoconsultation} data-aos="zoom-in" className="img-fluid" alt="" style={{ width: "100%", height: "100%" }} />
                        </div>



                        <div className="col-lg-6 pt-4 pt-lg-0 content1 order-lg-0" data-aos="fade-right" id="Video Consultation">
                            <h3 data-aos="zoom-in">Video Consultation</h3>
                            <br />
                            <ul data-aos="zoom-in">
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Video Consultation Made Easy

                                </li>
                                <br />
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica has a seamless integrated video consultation feature for face-face online consultation with your patients</li>
                                <br />
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> It's super easy to conduct an online video consultation and you can very easily guide & supervise your patient doing the
                                    prescribed exercises</li>



                            </ul>



                        </div>


                    </div>

                </div>

                <br />
                <div className="container mt-lg-3" data-aos="fade-up">



                    <div className="row mb-lg-5">

                        <div className="col-lg-6 order-lg-0" data-aos="fade-right">
                            <img src={ClinicManagement1} data-aos="zoom-in" className="img-fluid" alt="" style={{ width: "100%", height: "100%" }} />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content1 order-lg-1" data-aos="fade-left" id="Clinic Task Management">
                            <h3 data-aos="zoom-in">Clinic Task Management</h3>
                            <br />
                            <ul data-aos="zoom-in">

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica gives you a list of daily tasks to accomplish in a grid view.</li>
                                <br />
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> A set of separate tables are created & updated automatically for daily appointments booked, patients added, income
                                    generated and expense incurred.


                                </li>

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica also analyses, collects and represents the data of total appointments, total patients, total income
                                    generated & total expense incurred in real time in a specified & selected date range picker i.e. clinic register


                                </li>

                            </ul>



                        </div>
                    </div>

                    <br />



                    <div className="row mb-lg-5">



                        <div className="col-lg-6 order-lg-1" data-aos="fade-left">
                            <img src={ClinicResource} data-aos="zoom-in" className="img-fluid" alt=""
                                style={{ width: "100%", height: "100%" }} />
                        </div>



                        <div className="col-lg-6 pt-4 pt-lg-0 content1 order-lg-0" data-aos="fade-right" id="Clinic Resource Management">
                            <h3 data-aos="zoom-in">Clinic Resource Management</h3>
                            <br />
                            <ul data-aos="zoom-in">
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica manages your staff’s activity and productivity, their access to clinical records and business settings.
                                </li>
                                <br />
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica manages multiple Clinics and grows your practice or Physio business by evaluating and investing your time
                                    and efforts on only what matters i.e. patient care</li>

                                    <br />
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> You can regularly track the performance of your physio, admin and other staff </li>





                            </ul>



                        </div>


                    </div>

                </div>


                <br />

                <div className="container" data-aos="fade-up">



                    <div className="row mb-lg-5">
                        <div className="col-lg-6 order-lg-0" data-aos="fade-right">
                            <img src={AccountsManagement22} data-aos="zoom-in" className="img-fluid" alt="" width="100%"
                                height="100%" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content1 order-lg-1" data-aos="fade-left" id="Accounts Management">
                            <h3 data-aos="zoom-in">Accounts Management</h3>

                            <ul data-aos="zoom-in">
                                <br />
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica generates online invoices, taxable bills and treatments protocols online.</li>

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica has an integrated payment gateway for digital payment transfers, tracks due dates and offers discounts
                                    also.

                                </li>
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica also keeps track of your expenses in a day book while you are focused on your work.


                                </li>

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> All this helps you to maintain the healthy state of your clinic & its well-being.


                                </li>

                            </ul>



                        </div>
                    </div>


                    <br />







                    <div className="row mb-lg-5">



                        <div className="col-lg-6 order-lg-1" data-aos="fade-left">
                            <img src={TreatmentProtocol} data-aos="zoom-in" className="img-fluid" alt=""
                                style={{ width: "100%", height: "100%" }} />
                        </div>



                        <div className="col-lg-6 pt-4 pt-lg-0 content1 order-lg-0" data-aos="fade-right" id="Treatment Protocols">
                            <h3 data-aos="zoom-in">Treatment Protocols</h3>
                            <br />
                            <ul data-aos="zoom-in">
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica includes categorised programmed treatment protocols available for your patients as per their diagnosis.


                                </li>
                                <br />
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica also includes the digital exercise program builder which allows physios to quickly search, build, save and
                                    assign the therapeutic exercise to their patients.

                                </li>

                                <br />
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Access to a library of in-built treatments & conditions translate to efficient patient care.

                                </li>





                            </ul>



                        </div>


                    </div>

                </div>


                <br />

                <div className="container" data-aos="fade-up">



                    <div className="row mb-lg-5">
                        <div className="col-lg-6 order-lg-0" data-aos="fade-right">
                            <img src={EHRManagement} data-aos="zoom-in" className="img-fluid" alt="" width="100%" height="100%" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content1 order-lg-1" data-aos="fade-left" id="EHR Management">
                            <h3 data-aos="zoom-in">EHR Management</h3>

                            <ul data-aos="zoom-in">
                                <br />
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica is automating your documentation as it reduces your efforts to type all the patient data and fill the long
                                    assessment forms with interactive forms and what not.</li>
                                <br />
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> EHR management includes assessments, examinations, therapeutic exercises, Body charts, Trigger point charts, progress
                                    notes, additional notes, discharge summaries, case reports and custom treatment protocol development options.


                                </li>

                            </ul>



                        </div>
                    </div>


                    <br />


                    <div className="row ">



                        <div className="col-lg-6 order-lg-1" data-aos="fade-left">
                            <img src={Analytics} data-aos="zoom-in" className="img-fluid" alt=""
                                style={{ width: "100%", height: "100%" }} />
                        </div>



                        <div className="col-lg-6 pt-4 pt-lg-0 content1 order-lg-0" data-aos="fade-right" id="Analytics & Reports">
                            <h3 data-aos="zoom-in">Analytics & Reports
                            </h3>
                            <br />
                            <ul data-aos="zoom-in">
                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica helps you to automate your clinic`s business metrics

                                </li>

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> A real-time business intelligence to improve operational decision-making, so you can plan your financial or operational
                                    efforts accordingly.</li>

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica tracks your businesses growth and analyses which marketing channels or referral sources are the most
                                    effective, which staff or treatment generates higher income and discovers your expenses leak</li>

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> All of this is automated into your clinical workflow, so you don’t have to do anything extra to generate various graphs
                                    & charts</li>

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica also has an integrated data & analytics feature which helps you to generate various reports including
                                    physio`s performance index, financial reports, clinic growth reports, reputation management reports.</li>

                                <li><i className="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica `s endeavor has been to utilize all the advancements including IOT, AI and blockchain technology in a
                                    phased manner.</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>








            <section id="benefits" className="services services">
                <div className="container bootstrap snippets bootdeys" data-aos="fade-up">

                    <div className="section-title">
                        <h2>BENEFITS</h2>

                    </div>


                    <div className="row ">
                        <div className="col-lg-4 col-md-6 content-card" >
                            <div className="card-big-shadow" >
                                <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                                    <div className="content1 blue">
                                        <div className="icon2"><img src={Accessanywhere1} data-aos="zoom-in"
                                            className="img-fluid" alt="" style={{ width: "100%", height: "100%" }} /></div>

                                        <h5 className="title2">Access Anytime  Anywhere</h5>
                                        <p className="description readP">

                                            <i className="bi bi-check-circle"
                                                style={{ color: "rgb(149, 13, 240)" }}></i> With Physiomatica,
                                            you can access and use your account wherever you have an internet connection.
                                            <br /> <br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> Great for updating your
                                            client notes and
                                            keeping up-to-date when you’re away from your clinic

                                        </p>

                             

                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
                                    <div className="content1 blue">
                                        <div className="icon2"><img src={highestsecurity1} data-aos="zoom-in"
                                            className="img-fluid" alt="" style={{ width: "100%", height: "100%" }} /></div>
                                        <h5 className="title2">Highest Security</h5>
                                        <p className="description readP"><i className="bi bi-check-circle"
                                            style={{ color: "rgb(149, 13, 240)" }}></i> Physiomatica ensures
                                            data security which is a top priority

                                            <br /><br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> Physiomatica uses the
                                            best security technology
                                            possible.
                                            <br /><br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> Physiomatica validates
                                            your data storage,
                                            backup, or protection.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                                    <div className="content1 blue">
                                        <div className="icon2"><img src={EasytoUse1} data-aos="zoom-in" className="img-fluid"
                                            alt="" style={{ width: "100%", height: "100%" }} /></div>
                                        <h5 className="title2">Easiest To Use</h5>
                                        <p className="description readP" > <i className="bi bi-check-circle"
                                            style={{ color: "rgb(149, 13, 240)" }}></i> Best UI & UX - user
                                            friendly
                                            <br /><br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> Physiomatica is
                                            intuitive and simple to use so
                                            no need for any IT skills.
                                            <br /><br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> With a minimalistic set
                                            up , you can get
                                            onboard straight away.
                                            <br /><br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> For advanced top end
                                            features, implementation &
                                            deployment is done by our IT team remotely.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                                    <div className="content1 blue">
                                        <div className="icon2"><img src={Icon4} data-aos="zoom-in" className="img-fluid" alt=""
                                            style={{ width: "100%", height: "100%" }} /></div>
                                        <h5 className="title2"> Customer  Support</h5>
                                        <p className="description readP2"><i className="bi bi-check-circle"
                                            style={{ color: "rgb(149, 13, 240)" }}></i> We are available to
                                            support you at your suitable days & time online / offline
                                            <br /><br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> Physiomatica is cloud
                                            based SAAS which means no
                                            clunky software to install.
                                            <br /><br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> We have a dedicated a
                                            customer support phone
                                            line as well as email
                                            <br /><br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> We feel duty bound to
                                            troubleshoot any issues
                                            in the minimum possible time.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div className="content1 blue">
                                        <div className="icon2"><img src={Icon5} data-aos="zoom-in" className="img-fluid" alt=""
                                            style={{ width: "50%", height: "50%" }} /></div>
                                        <h5 className="title2">Lock-In Contracts</h5>
                                        <p className="description readP2"><i className="bi bi-check-circle"
                                            style={{ color: "rgb(149, 13, 240)" }}></i> You just need to pay
                                            initially for one year after a free trial period which may be extended as per the
                                            prevailing
                                            policy.
                                            <br /><br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> 
                                             You are free to upgrade, downgrade or cancel at any time after six
                                            months.

                                            <br /><br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> 
                                             The decision is irrespective of contract lock-in period
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 content-card">
                            <div className="card-big-shadow">
                                <div className="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                                    <div className="content1 blue">
                                        <div className="icon2"><img src={RefundPolicy} data-aos="zoom-in" className="img-fluid"
                                            alt="" style={{ width: "100%", height: "100%" }} /></div>
                                        <h5 className="title2">Refund Policy</h5>
                                        <p className="description readP2"> <i className="bi bi-check-circle"
                                            style={{ color: "rgb(149, 13, 240)" }}></i> We have a very
                                            transparent refund policy without a single question asked.
                                            <br /><br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> In order to return,
                                            raise a request within the
                                            30 calendar days of your purchase.
                                            <br /><br />
                                            <i className="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> Upon cancellation, the
                                            refund is materialed
                                            within seven working days.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>















            <section id="plans" className="pricing">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Pricing</h2>

                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="box featured" data-aos="fade-up" data-aos-delay="100">
                                <h3 >Free Plan</h3>

                                <ul>
                                    <li>Clinic Register</li>
                                    <li>Appointment Booking</li>
                                    <li>Clinic Manager</li>
                                    <li>Referral Manager</li>
                                    <li>Account Manager</li>
                                    <li>Notifications</li>
                                    <li>T & C apply</li>

                                </ul>
                                <div className="btn-wrap">
                                    <a href="a" className="btn-buy">REGISTER / SIGN UP</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div className="box featured" data-aos="fade-up" data-aos-delay="200">
                                <h3>Premium Pro</h3>

                                <ul>
                                    <li>All Free Features</li>
                                    <li>Video Consultation</li>
                                    <li>Accounts Manager</li>
                                    <li>Treatment protocols</li>
                                    <li>Exercise Builder</li>
                                    <li>EHR Manager</li>
                                    <li>Enhanced Security</li>

                                </ul>
                                <div className="btn-wrap">
                                    <a href="a" className="btn-buy">SEND YOUR REQUEST</a>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                            <div className="box featured" data-aos="fade-up" data-aos-delay="400">

                                <h3>Premium Pro+</h3>

                                <ul>
                                    <li>All Premium Pro Features</li>
                                    <li>Analytics & Reports</li>
                                    <li>Get Your Clinic’s Mobile App</li>
                                    <li>Complete Customization</li>
                                    <li>Exclusive Hosting Server</li>
                                    <li>In Campus Login security</li>
                                    <li>Third Party Integration</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="a" className="btn-buy">CONTACT US FOR QUOTE</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>















            <section id="Digital" className="courses">
                <div className="container" data-aos="fade-up">



                    <div className="row feature-icons" data-aos="fade-up">
                        <div className="row ">

                            <div className="col-xl-12 text-center" data-aos="zoom-in-up" data-aos-delay="100">
                                <img src={Digital1} className="img-fluid p-4" alt="" data-aos="zoom-in-up" />
                            </div>








                            <div className="section-title">
                                <h2>Digital Marketing</h2>

                            </div>



                            <div className="col-lg-12 pt-4 pt-lg-0 content1 order-lg-0 " data-aos="zoom-in-up">

                                <p className="text-center">

                                    Digital Marketing also called online marketing, is the promotion of brands to connect with potential customers using
                                    the internet and other forms of digital communication.
                                    This includes not only email, social media and web-based advertising but also text and multimedia messages as a
                                    marketing channel.
                                    <br /><br />

                                </p>

                                <h3  className='text-center'><b>Digital Marketing Services</b></h3> <br />

                              <div style={{display:'flex', justifyContent:'center',}}>
                                <p data-aos="zoom-in" style={{ listStyle: "none" }} >

                                    <i className="bi bi-check-circle" style={{ color: "red" }}></i>  Web Devlopment
                                    <br />

                                    <i className="bi bi-check-circle" style={{ color: "red" }}></i>  Mobile App Devlopment
                                    <br />

                                    <i className="bi bi-check-circle" style={{ color: "red" }}></i>  Lead Generation
                                    <br />

                         
                                    <i className="bi bi-check-circle" style={{ color: "red" }}></i>  Search Engine Optimization
                                    <br />

                                    <i className="bi bi-check-circle" style={{ color: "red" }}></i> Pay-per-Click
                                    <br />

                                    <i className="bi bi-check-circle" style={{ color: "red" }}></i>  Social Media Marketing <br />

                                    <i className="bi bi-check-circle" style={{ color: "red" }}></i> Content Marketing <br />

                                    <i className="bi bi-check-circle" style={{ color: "red" }}></i> Email Marketing <br />

                                    <i className="bi bi-check-circle" style={{ color: "red" }}></i> Mobile Marketing <br />

                                    <i className="bi bi-check-circle" style={{ color: "red" }}></i> Marketing Analytics. <br />

                                </p><br />

                                </div>

                                <p className="text-center" style={{fontSize:'18px', fontWeight:'bolder'}}> Digital marketing has become prominent largely because it reaches to a wide audience of people and offers a number
                                    of other advantages as well.</p>

                            </div>


                            <div className="col-xl-12 d-flex content1 mt-3">
                                <div className="row align-self-center ">


                                    <div >
                                        <h3 className='text-center'> Benefits</h3>

                                    </div> <br /><br />

                                    <div className="col-md-12 icon-box" data-aos="fade-up">




                                        <div>
                                        <div style={{display:'flex',justifyContent:'center'}}>
                                            <p > <i className="bi bi-check-circle " style={{ color: "red" }}></i> A broad geographic reach <br />
                                                <i className="bi bi-check-circle" style={{ color: "red" }}></i> Cost efficiency <br />

                                                <i className="bi bi-check-circle" style={{ color: "red" }}></i> Quantifiable results <br />
                                                <i className="bi bi-check-circle" style={{ color: "red" }}></i> Easier personalization <br />
                                                <i className="bi bi-check-circle" style={{ color: "red" }}></i> More connection with customers <br />
                                                <i className="bi bi-check-circle" style={{ color: "red" }}></i> Easy and convenient conversions
                                                <br />


                                            </p><br /><br />

                                            </div>

                                            <p className='text-center' style={{fontSize:'18px', fontWeight:'bolder'}}>Digital marketing should be one of the primary focuses of almost any physio's overall marketing strategy.

                                                Never before has there been a way to stay in such consistent contact with your customers, and nothing else offers
                                                the
                                                level of personalization that digital data can provide. The more you embrace the possibilities of digital marketing,
                                                the
                                                more you'll be able to realize your company's growth potential.</p>



                                        </div>
                                    </div>




                                </div>
                            </div>

                        </div>

                    </div>


                    <br /><br />






                    <div className="row " data-aos="zoom-in" data-aos-delay="100">

                        <div className="section-title">
                            <h2>Physiomatica is Exclusively Physio Centric</h2>

                        </div>


                        <h6 className="text-center mb-4" style={{fontSize:'18px', fontWeight:'bolder'}}> We are the only Health IT company in India serving exclusively the Physios community offering a cloud based Tele
                            Physio web App & Digital Marketing services for their all-round inclusive growth</h6>


                        <div className="text-center mb-3" ><h2><b>SCOPE OF WORK</b> </h2></div> <br /><br /><br />

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" style={{ height: "450px" }}>

                            <div className="course-item">
                                <img src={webdev} className="img-fluid" alt="..." style={{ height: "50%", width: "100%" }} />
                                <div className="course-content" style={{ height: "150px", overflow: "hidden" }}>


                                    <h3><Link to="/website">Website Design & Development</Link></h3>
                                    <p>We are aware of the public demands and can ensure you a smart functioning website full of features and customizations.
                                        With our profuse experience and expertise to render an effective, ultra-modern website, we ensure that you get the best
                                        website designed for you as per your specific facilities.</p>

                                </div>
                                <div className="p-3 text-center"><Link className="btn btn-primary" to="/website">Read More</Link></div>


                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" style={{ height: "450px" }}>
                            <div className="course-item">
                                <img src={Mobileappdevelopment} className="img-fluid" alt="..." style={{ height: "50%", width: "100%" }} />
                                <div className="course-content" style={{ height: "150px", overflow: "hidden" }}>


                                    <h3><Link to="/mobile">Mobile App Development</Link></h3>
                                    <p>Today Mobile applications have become a necessity in your business and to interact better with your customers,you need
                                        to have a customized app according to your business needs.

                                        An estimated 60% Consumers prefer mobile apps over websites. Needless to say, if you are a consumer-centred business,

                                    </p>

                                </div>
                                <div className="p-3 text-center"><Link className="btn btn-primary" to="/mobile" role="button">Read More</Link></div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{ height: "450px" }}>
                            <div className="course-item">
                                <img src={seo} className="img-fluid" alt="..." style={{ height: "50%", width: "100%" }} />
                                <div className="course-content" style={{ height: "150px", overflow: "hidden" }}>


                                    <h3><Link to="/search">Search Engine Optimization (SEO)</Link></h3>
                                    <p>Google it” is a simple two word phrase that may be the most used phrase in the world. When someone follows this command
                                        a chain of events is set in motion in the virtual space. The chain of events that is set in motion to throw up search
                                        results is at the heart of search engine optimization (SEO).
                                    </p>

                                </div>
                                <div className="p-3 text-center"><Link className="btn btn-primary" to="/search" role="button">Read More</Link></div>
                            </div>
                        </div>


                    </div>

                    <br />

                    <div className="row " data-aos="zoom-in" data-aos-delay="100">

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch " style={{ height: "450px" }}>
                            <div className="course-item">
                                <img src={LeadGeneration} className="img-fluid" alt="..." style={{ height: "50%", width: "100%" }} />
                                <div className="course-content" style={{ height: "150px", overflow: "hidden" }}>


                                    <h3><Link to="/lead">Lead Generation</Link></h3>
                                    <p>Lead generation is one aspect which can do wonders for every business owner. For any business, it is important to
                                        utilize the time and money in a best possible manner as if they start on doing the market research on their own then
                                        they have to spend a lot of time and efforts and through the means of our company they would be getting a platform to
                                        market their products & services in a better manner.
                                    </p>

                                </div>
                                <div className="p-3 text-center"><Link className="btn btn-primary" to="/lead" role="button">Read More</Link></div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" style={{ height: "450px" }}>
                            <div className="course-item">
                                <img src={socialMedia} className="img-fluid" alt="..."
                                    style={{ height: "50%", width: "100%" }} />
                                <div className="course-content" style={{ height: "150px", overflow: "hidden" }}>


                                    <h3><Link to="/social">Social Media Marketing (SMM)</Link></h3>
                                    <p>In the two and half decades of its existence, the Internet has evolved into a ubiquitous medium that has impacted the
                                        world in no uncertain measure. It has spawned a variety of businesses all based on Internet technologies. Social media
                                        is one among the greatest gifts of the Internet boom. Social media has become the defining moment of the early part of
                                        the twenty first century.
                                    </p>

                                </div>
                                <div className="p-3 text-center"><Link className="btn btn-primary" to="/social" role="button">Read More</Link></div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{ height: "450px" }}>
                            <div className="course-item">
                                <img src={ProfessionalContentWriting} className="img-fluid" alt="..." style={{ height: "50%", width: "100%" }} />
                                <div className="course-content" style={{ height: "150px", overflow: "hidden" }}>


                                    <h3><Link to="/content">Professional Content writing & Blogging</Link></h3>
                                    <p>Digismart Physiomatica is a premier healthcare content writing firm that specializes in web content generation for the
                                        websites of physio fraternity including practitioners, hospitals and educational institutions. We engage in dedicated
                                        and professional healthcare content writing with the aim of enhancing the authenticities of your brand</p>

                                </div>
                                <div className="p-3 text-center"><Link className="btn btn-primary" to="/content" role="button">Read More</Link></div>
                            </div>
                        </div>

                    </div>

                    <br />

                    <div className="row" data-aos="zoom-in" data-aos-delay="100">

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{ height: "450px" }}>
                            <div className="course-item">
                                <img src={PracticeGrow} className="img-fluid" alt="..." style={{ height: "50%", width: "100%" }} />
                                <div className="course-content" style={{ height: "150px", overflow: "hidden" }}>


                                    <h3><Link to="/practice">Physio Practice Growth & Reputation Management</Link></h3>
                                    <p>Reputation management has always been vital for healthcare professionals. Bedside manner, patient word of mouth, and
                                        reputation among your colleagues all factor into your medical practice’s growth. Building the career, business, and
                                        practice you want has always meant building and maintaining a positive reputation. </p>

                                </div>
                                <div className="p-3 text-center"><Link className="btn btn-primary" to="/practice" role="button">Read More</Link></div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{ height: "450px" }}>
                            <div className="course-item">
                                <img src={emailmarketing} className="img-fluid" alt="..."
                                    style={{ height: "50%", width: "100%" }} />
                                <div className="course-content" style={{ height: "150px", overflow: "hidden" }}>


                                    <h3><Link to="/email">Email Marketing</Link></h3>
                                    <p>E-mail marketing is one of the most important tools available to clinics to increase their footfalls and thereby gain
                                        opportunities to garner more customers to your service. E-mail is akin to the erstwhile direct mailers that you used to
                                        send to prospects on a mailing list maintained by you. With the advent of the Internet and its associated technologies
                                        direct mailing has given way to E-mail marketing.</p>

                                </div>
                                <div className="p-3 text-center"><Link className="btn btn-primary" to="/email" role="button">Read More</Link></div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{ height: "450px" }}>
                            <div className="course-item">
                                <img src={Youtube} className="img-fluid" alt="..." style={{ height: "50%", width: "100%" }} />
                                <div className="course-content" style={{ height: "150px", overflow: "hidden" }}>


                                    <h3><Link to="/youtube">YouTube Videos & Monetization</Link></h3>
                                    <p>Videos are the best modes of your presence on social media platforms like YouTube. Digismart Physiomatica has a team of
                                        experienced professionals for video making & editing, graphic designers for making thumbnails & other useful creatives.
                                        We can also help you to monetize your YouTube channel in a professional way by meeting
                                    </p>

                                </div>
                                <div className="p-3 text-center"><Link className="btn btn-primary" to="/youtube" role="button">Read More</Link></div>
                            </div>
                        </div>

                    </div>



                </div>
            </section>















            



            <section id="contact-form" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>

                    </div>

                </div>



                <div className="container">

                    <div className="row mt-5">

                        <div className="col-lg-6">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box">
                                        <i className="bx bx-map"></i>
                                        <h3>Our Address</h3>
                                        <p> New Delhi, India</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <i className="bx bx-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>info@physiomatica.com<br />physiomatica@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <i className="bx bx-phone-call"></i>
                                        <h3>Call Us</h3>
                                        <p>+91 8285054507<br />+91 8920541548</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <form method="post" className="php-email-form">
                                <div className="row">
                                    <div className="col form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                            required />
                                    </div>
                                    <div className="col form-group ">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                            required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
                                        required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="8" placeholder="Message"
                                        required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center">
                                    <a href="mailto:dinesharora156@gmail.com" className="appointment-btn scrollto" >
                                        Send Message</a>


                                </div>
                            </form>
                        </div>

                    </div>

                </div>



                <footer id="footer">
                    <div class="footer-top">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-4 col-md-6 footer-links">
                                    <h4>Tele Physio Portal</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#Clinic Task Management">Clinic Statistics</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#Appointment Management">Appointment Management</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#Video Consultation">Video Consultation</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#Clinic Resource Management">Clinic Resource Management</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#Treatment Protocols">Treatment Protocol</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#a">Digital Prescription</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#b">Exercise</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#EHR Management">EHR Management</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#Analytics & Reports">Analytics & Reports</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="Terms.html">Terms Of Service Use</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="Privacy.html">Privacy policy</a></li>
                                    </ul>
                                </div>

                                <div class="col-lg-4 col-md-6 footer-links">
                                    <h4>Digital Marketing</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <Link to="/website">Website Design & Development</Link></li>
                                        <li><i class="bx bx-chevron-right"></i> <Link to="/search">SEO</Link></li>
                                        <li><i class="bx bx-chevron-right"></i> <Link to="/social">Social Media Marketing</Link></li>
                                        <li><i class="bx bx-chevron-right"></i> <Link to="/email">Email Marketing</Link></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#b">PPC</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <Link to="/mobile">Mobile App Development</Link></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#b">Video Making & Editing</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <Link to="/youtube">YouTube Channel Monetization</Link></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#b">Clinic Practice Growth</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="#b">Online Reputation </a></li>
                                    </ul>
                                </div>



                                <div class="col-lg-4 col-md-6">
                                    <div class="footer-info">
                                        <h4 >Follow Us</h4>

                                        <div class="social-links mt-3 ">
                                            <ul class="iconSpace" style={{ listStyleType: "none" }}>
                                                <li> <h6><a href="#d" class="twitter"><i class="bx bxl-twitter"></i></a>- Twitter </h6></li>

                                                <li> <h6><a href="#d" class="facebook"><i class="bx bxl-facebook"></i></a>- Facebook</h6></li>
                                                <li> <h6><a href="#d" class="instagram"><i class="bx bxl-instagram"></i></a>- Instagram</h6></li>
                                                <li><h6><a href="#d" class="youtube"><i class="bx bxl-youtube"></i></a>- Youtube</h6></li>
                                                <li> <h6> <a href="#d" class="linkedin"><i class="bx bxl-linkedin"></i></a>- Linkedin </h6></li>


                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="copyright">
                            <p><strong><span>Available on Google Play</span></strong> <i class="fab fa-google-play fa-2x"></i> <br></br>
                                &copy; Copyright <strong><span>Physiomatica</span></strong>. All Rights Reserved</p>
                        </div>

                    </div>
                </footer>



            </section>


            {openSignIn && (
                <Dialog
                    fullWidth
                    maxWidth="md"
                    open={openSignIn}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <SignIn />
                </Dialog>
            )}




        </>








    );
}

export default HomePage;