import React from "react";
import PracticeGrow from './projectImg/PracticeGrow.jpg'
import PhysiomaticaLogo from '../components/SideBar/PhysiomaticaLogo.png';



function Practice() {

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
                        <h2>Practice Growth, Online Reputation Management and Patient Acquisition</h2>

                    </div>

                    <div className="row feature-icons" data-aos="fade-up">
                        <div className="row">




                            <div className="col-xl-12 text-center mt-5" data-aos="zoom-in-up" data-aos-delay="100">
                                <img src={PracticeGrow} className="img-fluid p-4" alt=""
                                    data-aos="zoom-in-up" />
                            </div>



                            <div className="col-lg-12 pt-4 pt-lg-0 content1 order-lg-0" data-aos="zoom-in-up">

                                <p className="text-center">

                                    Reputation management has always been vital for healthcare professionals. Bedside manner, patient word of mouth, and
                                    reputation among your colleagues all factor into your medical practice’s growth. Building the career, business, and
                                    practice you want has always meant building and maintaining a positive reputation.
                                    <br /><br />
                                </p>



                                <div className="text-center">

                                    <h2> It’s no different in this Digital Age</h2>
                                    <br />
                                </div>


                                <p data-aos="zoom-in" className="text-center">

                                    Your online reputation doesn’t always go hand in hand with your real-life patients’ perception, though. Offline, your
                                    reputation grows as a direct result of the care you provide to patients in your office. Online, your reputation can take
                                    on a life of its own due to the multitude of outlets patients now have to rate, review and discuss the care you provide.
                                    That’s why you need to reach out and take control of your online reputation, or it might end up controlling your
                                    practice.

                                    <br /><br />
                                </p>




                                <div className="text-center">

                                    <h2> Patients Don’t Just Rely On Word-Of-Mouth Anymore</h2>
                                    <br />
                                </div>


                                <p data-aos="zoom-in">

                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> Patients talk. They always have, and they always will. If your patients love the medical care and the personal attention
                                    you provide, you can bet their friends and family are going to hear about it—and if they have a negative experience,
                                    they’ll be talking about that, too. These days, though, many of those conversations will happen on social media instead
                                    of in person, with more than a third of people in the US saying they already use social media to gather healthcare
                                    information.


                                    <br /><br />



                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> Today’s patients also go a whole lot further than simply asking their friends for doctor recommendations. Those
                                    recommendations are just starting points for the research patients do via search engines and healthcare-oriented
                                    websites. Before they contact your office, they’re likely to look for other reviews, to learn more about your background
                                    and your medical practice, and to see if your online profiles provide a sense of transparency and help build trust. An
                                    online reputation that helps build trust helps you acquire more patients, plain and simple.


                                    <br /><br />


                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> It makes perfect sense, too, whether you’re selecting a doctor, a restaurant, or an auto mechanic. Given the choice of
                                    three providers, all recommended by friends, would you choose the one with a shaky online reputation, the one with
                                    limited online presence, or the one with plenty of available information and outstanding reviews?
                                    <br /><br />

                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> In fact, a study conducted led to a 5-9% revenue boost. For healthcare professionals, ensuring you have a strong profile
                                    with a positive rating not only on the right mix of social platforms but on other relevant portals can be a major boost
                                    to your practice.
                                    <br /><br />

                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> Ensuring that your profiles and your reputation on these sites reflect how you want patients to view you and your
                                    medical practice is an essential part of modern patient acquisition.
                                    <br /><br />


                                </p>


                                <div>

                                    <h2 className="text-center">Search Engines Like Highly-Rated Medical Offices Too</h2>
                                    <br />
                                </div>


                                <p data-aos="zoom-in">

                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> The benefits of actively managing your online reputation don’t end with direct patient acquisition. Not only are you
                                    more likely to compare favorably to other doctors with a strong online reputation, but you’re more likely to be found in
                                    the first place.

                                    <br /><br />

                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> Google and other search engines read the web just like patients. Well, not just like patients, but they use a set of
                                    algorithms to determine which doctor offices and specialists patients are most likely to engage with. Those algorithms
                                    examine the same things patients examine—how complete your online profiles are, your reviews and ratings, how many other
                                    reputable healthcare sites point back to your doctor’s office website, and what people are saying about you online.


                                    <br /><br />

                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> All of that information determines which medical practices, clinics, and hospitals are shown at the top of search
                                    results, and which are relegated to the search result pages no one ever sees (it depends on who you ask, but fewer than
                                    10% of patients will ever go past the first page of search results—that’s the first ten results!). So managing your
                                    online reputation not only ensures you have a better chance of acquiring new patients when they look you up, it also
                                    means you have a better chance of patients learning about you when they don’t have a referral.



                                    <br /><br />

                                    <i className="bi bi-check-circle " style={{ color: "red" }}></i> Digismart Physiomatica helps you to manage Your Reputation, Grow Your Practice
                                    The choice is pretty clear. Take an active hand in managing your online reputation, and growing your practice will be a
                                    whole lot easier. .


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

export default Practice;