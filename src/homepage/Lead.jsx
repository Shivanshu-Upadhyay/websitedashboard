import React from "react";
import LeadGeneration from './projectImg/LeadGeneration.jpg'
import PhysiomaticaLogo from '../components/SideBar/PhysiomaticaLogo.png';



function Lead() {

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
                        <h2>Lead Generation</h2>

                    </div>

                </div>
                <div className="row feature-icons" data-aos="fade-up">
                    <div className="row">



                        <div className="col-xl-12 text-center" data-aos="zoom-in-up" data-aos-delay="100">
                            <img src={LeadGeneration} className="img-fluid p-4" alt=""
                                data-aos="zoom-in-up" />
                        </div>












                        <div className="col-lg-12 pt-4 pt-lg-0 content1 order-lg-0 container" data-aos="zoom-in-up">







                            <p className='container'>

                                <i className="bi bi-check-circle" style={{ color: " red" }}></i> Lead generation is one aspect which can do wonders for every business owner. For any business, it is important to
                                utilize the time and money in a best possible manner as if they start on doing the market research on their own then
                                they have to spend a lot of time and efforts and through the means of our company they would be getting a platform to
                                market their products & services in a better manner. <br /><br /><i className="bi bi-check-circle" style={{ color: " red" }}></i> By buying the leads from these lead generation companies, it is
                                easier for a business person to achieve their sales target in a short duration.
                                We have a whopping 40Cr. Subscribers database and tie-ups with 1900+ publishers globally who run our campaigns on their
                                premium subscriber database.
                                <br /><br />
                            </p>

                            <div className="text-center">

                                <h2> Pillars of Lead Generation</h2>

                            </div><br />


                            <p data-aos="zoom-in" className='container' >

                                <b> We Use Professional Demographic Data To Target The Right People By Mining The Data On The Basis Of:</b>

                                <br />
                            </p>
                            <div className='container'>
                                <h6><i className="bi bi-check-circle " style={{ color: " red" }}></i> Income Group Wise</h6>
                                <h6><i className="bi bi-check-circle" style={{ color: " red" }}></i> Age Group Wise</h6>
                                <h6><i className="bi bi-check-circle" style={{ color: " red" }}></i> City Wise</h6>
                                <h6><i className="bi bi-check-circle" style={{ color: " red" }}></i> Profession Wise</h6>
                                <h6><i className="bi bi-check-circle" style={{ color: " red" }}></i> Vertical Wise</h6>
                                <h6><i className="bi bi-check-circle" style={{ color: " red" }}></i> Gender Wise</h6>
                                <h6><i className="bi bi-check-circle" style={{ color: " red" }}></i> Google PPC</h6>


                            </div>




                            <p data-aos="zoom-in" className="text-center">

                                Paid search marketing is a critical part of your pay-per-click (PPC) campaign strategy. There is no better time to
                                advertise than when someone already has determined they want your product or service and is actively looking to buy.

                                <br /><br />
                            </p>


                            <div className="text-center">

                                <h2> Google Display Ads</h2>
                                <br />
                            </div>


                            <p data-aos="zoom-in" className="text-center">

                                Successful display advertising proactively targets new customers by placing interesting, relevant ads in front of them
                                when they’re most likely to convert.
                                <br /><br />
                            </p>


                            <div className="text-center">

                                <h2> Facebook Ads</h2>
                                <br />
                            </div>


                            <p data-aos="zoom-in" className="text-center">

                                With well over a billion monthly active users, Facebook is the largest and most powerful social media advertising
                                platform in the world.

                                <br /><br />
                            </p>



                            <div className="text-center">

                                <h2> LinkedIn Ads</h2>
                                <br />
                            </div>


                            <p data-aos="zoom-in" className="text-center">

                                While platforms like Google AdWords are the undeniable powerhouses of PPC advertising, LinkedIn advertising is the ideal
                                platform for B2B marketing.

                                <br /><br />
                            </p>





                            <div className="text-center">

                                <h2> Twitter Promotions</h2>
                                <br />
                            </div>


                            <p data-aos="zoom-in" className="text-center">

                                It's an affordable, automated, and always-on promotion engine — so whether you're building your personal brand or a
                                business, Twitter Promote Mode grows your influence by automatically amplifying your message to a larger interested
                                audience.

                                <br /><br />
                            </p>

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

export default Lead;