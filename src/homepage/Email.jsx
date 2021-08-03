import React from "react";
import emailmarketing from './projectImg/emailmarketing.jpg'

import PhysiomaticaLogo from '../components/SideBar/PhysiomaticaLogo.png';


function Email() {

    return (
        <>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <a href="#hero" class="logo me-auto"><img src={PhysiomaticaLogo} class="img-fluid" alt=""></img><span class="text-info"></span></a>
                </div>
            </header>

            <section id="website" className="courses">
                <div className="container" data-aos="fade-up">

                    <div class="section-title" style={{ marginTop: '100px' }}>
                        <h2>E-mail Marketing</h2>

                    </div>

                    <div className="row feature-icons" data-aos="fade-up">
                        <div className="row">

                            <div className="col-xl-12 text-center mt-5" data-aos="zoom-in-up" data-aos-delay="100">
                                <img src={emailmarketing} className="img-fluid p-4" alt=""
                                    data-aos="zoom-in-up" />
                            </div>












                            <div className="col-lg-12 pt-4 pt-lg-0 content1 order-lg-0" data-aos="zoom-in-up">





                                <p className="text-center">

                                    E-mail marketing is one of the most important tools available to clinics to increase their footfalls and thereby gain
                                    opportunities to garner more customers to your service. E-mail is akin to the erstwhile direct mailers that you used to
                                    send to prospects on a mailing list maintained by you. With the advent of the Internet and its associated technologies
                                    direct mailing has given way to E-mail marketing.
                                    <br /><br />

                                </p>

                                <div className="text-center">

                                    <h2> What We Can Do For You</h2>
                                    <br />
                                </div>


                                <p data-aos="zoom-in" >

                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> Our experienced professional staff interacts with you to understand your requirements. We then create a copy that would
                                    suit the objective of the exercise. It could be promotional in nature or it could be designed to entice patients with
                                    offers or it could be information on a special program created for existing patients.

                                    <br /><br />
                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> We will manage processes that involve sign-ups, unsubscribe options and bounced emails. We can store your subscription
                                    lists in ready-to-access mode to access specific groups for targeted promotions.


                                    <br /><br />
                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> Our E-mail marketing program will help you to maximize reach at the first level, engage more customers at the second
                                    level and convert the maximum number to sales in the third level.

                                    <br /><br />
                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> We provide you with access to tracking and measuring features that keeps you in the know of what is happening with your
                                    email program. You can browse statistical information related to the program to gauge its progress and make course
                                    corrections if necessary.


                                    <br /><br />

                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> Our program is geared to viewing compatibility on a variety of devices including desktops, tablets and mobile phones.


                                    <br /><br />
                                </p>

                                <div>

                                    <h2 className="text-center"> State-of-the art Services</h2>
                                    <br />
                                </div>


                                <p data-aos="zoom-in" className="text-center">

                                    Our email marketing system is state-of-the-art incorporating the latest technologies available on the market. It
                                    comprises competent professionals trained in the healthcare industry. We will ensure messages are sent and received by
                                    patients both online and offline. We will ensure proper interaction with existing patients and prospective patients by
                                    giving access to our several email marketing programs that would be right for your business.

                                    <br /><br />
                                </p>




                            </div>

                        </div>

                    </div>









                </div>
            </section>

            <footer id="footer">
                <div class="container">
                    <div class="copyright">
                        <p><strong><span>Available on Google Play</span></strong> <i class="fab fa-google-play fa-2x"></i> <br></br>
                            &copy; Copyright <strong><span>Physiomatica</span></strong>. All Rights Reserved</p>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Email;