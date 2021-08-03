import React from "react";
import Youtube from './projectImg/Youtube.jpg'
import PhysiomaticaLogo from '../components/SideBar/PhysiomaticaLogo.png';



function YouTube() {

    return (
        <>

            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <a href="#hero" class="logo me-auto"><img src={PhysiomaticaLogo} class="img-fluid" alt=""></img><span class="text-info"></span></a>
                </div>
            </header>


            <section id="website" class="courses">
                <div class="container" data-aos="fade-up">

                    <div class="section-title" style={{ marginTop: '100px' }}>
                        <h2>YouTube Videos & Monetization</h2>

                    </div>

                    <div class="row feature-icons" data-aos="fade-up">
                        <div class="row">



                            <div class="col-xl-12 text-center " data-aos="zoom-in-up" data-aos-delay="100">
                                <img src={Youtube} class="img-fluid p-4" alt=""
                                    data-aos="zoom-in-up" />
                            </div>




                            <div class="col-lg-12 pt-4 pt-lg-0 content1 order-lg-0" data-aos="zoom-in-up">

                                <p >

                                    <i class="bi bi-check-circle" style={{ color: "red" }}></i>Videos are the best modes of your presence on social media platforms like YouTube. Digismart Physiomatica has a team of
                                    experienced professionals for video making & editing, graphic designers for making thumbnails & other useful creatives.<br /><br /><i className="bi bi-check-circle " style={{ color: "red" }}></i>

                                    We can also help you to monetize your YouTube channel in a professional way by meeting all the necessary guidelines to
                                    accomplish that achievement in a systematic manner.

                                    <br /><br />
                                </p>

                                <div class="text-center">

                                    <h2> Youtube Ads</h2>
                                    <br />
                                </div>


                                <p data-aos="zoom-in" >

                                    <i class="bi bi-check-circle " style={{ color: "red" }}></i>The benefit of video advertising on YouTube is that you only pay when someone chooses to watch your video, either by
                                    clicking on it or watching the whole thing. YouTube advertising, also known as TrueView video ads, exist in two forms:
                                    In-Stream ads and In-Display ads.<br /><br /><i className="bi bi-check-circle " style={{ color: "red" }}></i>

                                    Youtube Advertising to show more videos online about your Business;TVCs have gone online and will never be the same
                                    again!
                                    Compared to traditional video advertising on television, running a YouTube TrueView Ads campaign with Gobuzy.com means:
                                    Your ads will be better targeted then TVCs – from interest and demographic targeting to remarketing to managed
                                    placements, YouTube Ads offer a whole host of cutting-edge options to find your audience.

                                    <br /><br />

                                </p>

                                <div class="text-center">

                                    <h2> It's An Ever-Growing Platform</h2>
                                    <br />
                                </div>


                                <p data-aos="zoom-in" class="text-center" style={{fontSize:'18px', fontWeight:'bolder'}}>

                                    Using YouTube for business promotion places your brand in front of a growing audience thirsty to be entertained and
                                    educated by video content. Your audience is already there, you should utilize the same.

                                    <br /><br />

                                </p>


                                <div class="text-center">

                                    <h2> Easily Showcase Your Products</h2>
                                    <br />
                                </div>


                                <p data-aos="zoom-in" class="text-center" style={{fontSize:'18px', fontWeight:'bolder'}}>

                                    It's easy to drive viewers from your YouTube videos to your website with the use of calls to action. When you let people
                                    know about your website in the video and tell them to check it out, most of the time they'll do as they were told.


                                    <br /><br />

                                </p>

                                <div class="text-center">

                                    <h2> Easily Showcase Your Products</h2>
                                    <br />
                                </div>


                                <p data-aos="zoom-in" class="text-center" style={{fontSize:'18px', fontWeight:'bolder'}}>

                                    It's easy to drive viewers from your YouTube videos to your website with the use of calls to action. When you let people
                                    know about your website in the video and tell them to check it out, most of the time they'll do as they were told.


                                    <br /><br />

                                </p>
                                <div class="text-center">

                                    <h2> Attract Clients With Your Expertise</h2>
                                    <br />
                                </div>


                                <p data-aos="zoom-in" class="text-center" style={{fontSize:'18px', fontWeight:'bolder'}}>

                                    This will give you a huge advantage in front of your competition because you'll be perceived as an authoritative figure
                                    in the field. It will also help you get new clients by demonstrating you're a great fit for the job.



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

export default YouTube;