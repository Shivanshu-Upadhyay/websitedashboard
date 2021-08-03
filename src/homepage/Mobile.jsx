import React from "react";
import MobileApp from './projectImg/MobileApp.png'


import PhysiomaticaLogo from '../components/SideBar/PhysiomaticaLogo.png';

function Mobile() {

    return (
        <>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <a href="#hero" class="logo me-auto"><img src={PhysiomaticaLogo} class="img-fluid" alt=""></img><span class="text-info"></span></a>
                </div>
            </header>

            <section id="website" className="courses ">
                <div className="container" data-aos="fade-up">

                    <div class="section-title" style={{ marginTop: '100px' }}>
                        <h2>Mobile App Development
                            (Android & iOS)</h2>


                    </div>

                    <div className="row feature-icons" data-aos="fade-up">
                        <div className="row">




                            <div className="col-xl-12 text-center " data-aos="zoom-in-up" data-aos-delay="100">
                                <img src={MobileApp} className="img-fluid p-4" alt=""
                                    data-aos="zoom-in-up" />
                            </div>




                            <div className="col-lg-12 pt-4 pt-lg-0 content1 order-lg-0" data-aos="zoom-in-up">




                            </div>

                            <p>

                                <i className="bi bi-check-circle" style={{ color: "red" }}></i> Today Mobile applications have become a necessity in your business and to interact better with your customers,you need
                                to have a customized app according to your business needs.

                                <br /> <br />
                                <i className="bi bi-check-circle" style={{ color: "red" }}></i> An estimated 60% Consumers prefer mobile apps over websites. Needless to say, if you are a consumer-centred business,
                                mobile apps could help you drive a significant advantage over your competitor.
                                <br /><br />


                                <i className="bi bi-check-circle" style={{ color: "red" }}></i> Move ahead with the Best Android and IOS Mobile App Development Company in Delhi NCR. Let’s take your business to a
                                higher level!

                                <br />

                            </p>

                            <div className="text-center">

                                <h2>How do we do it?</h2>

                            </div><br /><br />


                            <p data-aos="zoom-in">

                                <i className="bi bi-check-circle " style={{ color: "red" }}></i> Digismart Physiomatica is one of the top mobile app development companies in India.

                                <br /> <br />
                                <i className="bi bi-check-circle " style={{ color: "red" }}></i> We offer all mobile app development services at affordable cost. We create neat, user-friendly apps that will increase
                                your customer engagement and conversion online.
                                <br /> <br />
                                <i className="bi bi-check-circle " style={{ color: "red" }}></i> This way, you can always stay in touch with your patients and do more targeted marketing. With the right app, you can
                                directly take your message to your patients and increase your conversion rates.
                                <br /> <br />

                                <i className="bi bi-check-circle " style={{ color: "red" }}></i> So if you have a vision for an app, then we are with you to convert your vision into reality. We have worked with many
                                startups and established companies to give a direction to their ideas and in-depth market analysis.

                                <br /> <br />

                                <i className="bi bi-check-circle " style={{ color: "red" }}></i> We develop apps for both android and iOS stores which allows you to get the attention of a vast audience.

                                <br /> <br />

                                <i className="bi bi-check-circle " style={{ color: "red" }}></i> Also we don’t believe in cookie-cutter solutions so we develop apps which are specifically tailored according to your
                                business needs. In this way, we ensure that each of our clients gets personalized services.

                                <br /> <br />

                            </p>



                            <h2 className="text-center">We have proved our expertise in each and every field of app development like</h2><br /><br />
                            <ul data-aos="zoom-in" style={{ listStyle: "none" }}>


                                <li>
                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> Native and Hybrid Apps.
                                </li>

                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> iOS,iPad,Android,Enterprise and Windows Apps.</li>

                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> Blackberry Apps.</li>

                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> App user and web user interface.</li>

                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> Integrating Artificial Intelligence And Machine Learning.</li>

                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> IOT and Blockchain Development.</li>

                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> AR/VR development.</li>
                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> HTML5 development.</li>
                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> Eclipse.</li>
                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> SQLite.</li>
                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> Swift 4.0 and advanced versions.</li>
                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> Objective-C.</li>
                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> Native iOS.</li>
                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> X-Code.</li>
                                <li><i className="bi bi-check-circle " style={{ color: "red" }}></i> Coredata.</li>

                            </ul>

                            <p className="text-center"style={{fontSize:'18px', fontWeight:'bolder'}}> Technology is changing at a very fast pace nowadays and so we also keep updating ourselves and work on the latest
                                technological trends.

                                We take care of everything starting right from gathering requirements like, UI/UX designing, Prototyping, App
                                Development, Quality assurance and app testing, deployment and its maintenance.

                                Our dedicated and professionally trained team will deliver the final product tailored specially for your business needs
                                and far beyond your expectations.</p>



                        </div>

                    </div>


                    <br /><br />






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

export default Mobile;