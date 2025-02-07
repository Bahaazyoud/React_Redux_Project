import React from 'react'

const Landing = () => {
    return (
        <div>

            <div class="theme-layout">

                <div class="responsive-header">
                    <div class="mh-head first Sticky">
                        <span class="mh-btns-left">
                            <a class="" href="#menu"><i class="fa fa-align-justify"></i></a>
                        </span>
                        <span class="mh-text">
                            <a href="newsfeed.html" title=""><img src="" alt="" /></a>
                        </span>
                        <span class="mh-btns-right">
                            <a class="fa fa-sliders" href="#shoppingbag"></a>
                        </span>
                    </div>
                    <div class="mh-head second">
                        <form class="mh-form">
                            <input placeholder="search" />
                            <a href="#/" class="fa fa-search"></a>
                        </form>
                    </div>
                    {/* <nav id="menu" class="res-menu">
                        <ul>
                            <li><span>Home</span>
                                <ul>
                                    <li><a href="index-2.html" title="">Home Social</a></li>
                                    <li><a href="index2.html" title="">Home Social 2</a></li>
                                    <li><a href="index-company.html" title="">Home Company</a></li>
                                    <li><a href="landing.html" title="">Login page</a></li>
                                    <li><a href="logout.html" title="">Logout Page</a></li>
                                    <li><a href="newsfeed.html" title="">news feed</a></li>
                                </ul>
                            </li>
                            <li><span>Time Line</span>
                                <ul>
                                    <li><a href="time-line.html" title="">timeline</a></li>
                                    <li><a href="timeline-friends.html" title="">timeline friends</a></li>
                                    <li><a href="timeline-groups.html" title="">timeline groups</a></li>
                                    <li><a href="timeline-pages.html" title="">timeline pages</a></li>
                                    <li><a href="timeline-photos.html" title="">timeline photos</a></li>
                                    <li><a href="timeline-videos.html" title="">timeline videos</a></li>
                                    <li><a href="fav-page.html" title="">favourit page</a></li>
                                    <li><a href="groups.html" title="">groups page</a></li>
                                    <li><a href="page-likers.html" title="">Likes page</a></li>
                                    <li><a href="people-nearby.html" title="">people nearby</a></li>


                                </ul>
                            </li>
                            <li><span>Account Setting</span>
                                <ul>
                                    <li><a href="create-fav-page.html" title="">create fav page</a></li>
                                    <li><a href="edit-account-setting.html" title="">edit account setting</a></li>
                                    <li><a href="edit-interest.html" title="">edit-interest</a></li>
                                    <li><a href="edit-password.html" title="">edit-password</a></li>
                                    <li><a href="edit-profile-basic.html" title="">edit profile basics</a></li>
                                    <li><a href="edit-work-eductation.html" title="">edit work educations</a></li>
                                    <li><a href="messages.html" title="">message box</a></li>
                                    <li><a href="inbox.html" title="">Inbox</a></li>
                                    <li><a href="notifications.html" title="">notifications page</a></li>
                                </ul>
                            </li>
                            <li><span>forum</span>
                                <ul>
                                    <li><a href="forum.html" title="">Forum Page</a></li>
                                    <li><a href="forums-category.html" title="">Fourm Category</a></li>
                                    <li><a href="forum-open-topic.html" title="">Forum Open Topic</a></li>
                                    <li><a href="forum-create-topic.html" title="">Forum Create Topic</a></li>
                                </ul>
                            </li>
                            <li><span>Our Shop</span>
                                <ul>
                                    <li><a href="shop.html" title="">Shop Products</a></li>
                                    <li><a href="shop-masonry.html" title="">Shop Masonry Products</a></li>
                                    <li><a href="shop-single.html" title="">Shop Detail Page</a></li>
                                    <li><a href="shop-cart.html" title="">Shop Product Cart</a></li>
                                    <li><a href="shop-checkout.html" title="">Product Checkout</a></li>
                                </ul>
                            </li>
                            <li><span>Our Blog</span>
                                <ul>
                                    <li><a href="blog-grid-wo-sidebar.html" title="">Our Blog</a></li>
                                    <li><a href="blog-grid-right-sidebar.html" title="">Blog with R-Sidebar</a></li>
                                    <li><a href="blog-grid-left-sidebar.html" title="">Blog with L-Sidebar</a></li>
                                    <li><a href="blog-masonry.html" title="">Blog Masonry Style</a></li>
                                    <li><a href="blog-list-wo-sidebar.html" title="">Blog List Style</a></li>
                                    <li><a href="blog-list-right-sidebar.html" title="">Blog List with R-Sidebar</a></li>
                                    <li><a href="blog-list-left-sidebar.html" title="">Blog List with L-Sidebar</a></li>
                                    <li><a href="blog-detail.html" title="">Blog Post Detail</a></li>
                                </ul>
                            </li>
                            <li><span>Portfolio</span>
                                <ul>
                                    <li><a href="portfolio-2colm.html" title="">Portfolio 2col</a></li>
                                    <li><a href="portfolio-3colm.html" title="">Portfolio 3col</a></li>
                                    <li><a href="portfolio-4colm.html" title="">Portfolio 4col</a></li>
                                </ul>
                            </li>
                            <li><span>Support & Help</span>
                                <ul>
                                    <li><a href="support-and-help.html" title="">Support & Help</a></li>
                                    <li><a href="support-and-help-detail.html" title="">Support & Help Detail</a></li>
                                    <li><a href="support-and-help-search-result.html" title="">Support & Help Search Result</a></li>
                                </ul>
                            </li>
                            <li><span>More pages</span>
                                <ul>
                                    <li><a href="careers.html" title="">Careers</a></li>
                                    <li><a href="career-detail.html" title="">Career Detail</a></li>
                                    <li><a href="404.html" title="">404 error page</a></li>
                                    <li><a href="404-2.html" title="">404 Style2</a></li>
                                    <li><a href="faq.html" title="">faq's page</a></li>
                                    <li><a href="insights.html" title="">insights</a></li>
                                    <li><a href="knowledge-base.html" title="">knowledge base</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html" title="">about</a></li>
                            <li><a href="about-company.html" title="">About Us2</a></li>
                            <li><a href="contact.html" title="">contact</a></li>
                            <li><a href="contact-branches.html" title="">Contact Us2</a></li>
                            <li><a href="widgets.html" title="">Widgts</a></li>
                        </ul>
                    </nav> */}
                    {/* <nav id="shoppingbag">
                        <div>
                            <div class="">
                                <form method="post">
                                    <div class="setting-row">
                                        <span>use night mode</span>
                                        <input type="checkbox" id="nightmode" />
                                        <label for="nightmode" data-on-label="ON" data-off-label="OFF"></label>
                                    </div>
                                    <div class="setting-row">
                                        <span>Notifications</span>
                                        <input type="checkbox" id="switch2" />
                                        <label for="switch2" data-on-label="ON" data-off-label="OFF"></label>
                                    </div>
                                    <div class="setting-row">
                                        <span>Notification sound</span>
                                        <input type="checkbox" id="switch3" />
                                        <label for="switch3" data-on-label="ON" data-off-label="OFF"></label>
                                    </div>
                                    <div class="setting-row">
                                        <span>My profile</span>
                                        <input type="checkbox" id="switch4" />
                                        <label for="switch4" data-on-label="ON" data-off-label="OFF"></label>
                                    </div>
                                    <div class="setting-row">
                                        <span>Show profile</span>
                                        <input type="checkbox" id="switch5" />
                                        <label for="switch5" data-on-label="ON" data-off-label="OFF"></label>
                                    </div>
                                </form>
                                <h4 class="panel-title">Account Setting</h4>
                                <form method="post">
                                    <div class="setting-row">
                                        <span>Sub users</span>
                                        <input type="checkbox" id="switch6" />
                                        <label for="switch6" data-on-label="ON" data-off-label="OFF"></label>
                                    </div>
                                    <div class="setting-row">
                                        <span>personal account</span>
                                        <input type="checkbox" id="switch7" />
                                        <label for="switch7" data-on-label="ON" data-off-label="OFF"></label>
                                    </div>
                                    <div class="setting-row">
                                        <span>Business account</span>
                                        <input type="checkbox" id="switch8" />
                                        <label for="switch8" data-on-label="ON" data-off-label="OFF"></label>
                                    </div>
                                    <div class="setting-row">
                                        <span>Show me online</span>
                                        <input type="checkbox" id="switch9" />
                                        <label for="switch9" data-on-label="ON" data-off-label="OFF"></label>
                                    </div>
                                    <div class="setting-row">
                                        <span>Delete history</span>
                                        <input type="checkbox" id="switch10" />
                                        <label for="switch10" data-on-label="ON" data-off-label="OFF"></label>
                                    </div>
                                    <div class="setting-row">
                                        <span>Expose author name</span>
                                        <input type="checkbox" id="switch11" />
                                        <label for="switch11" data-on-label="ON" data-off-label="OFF"></label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </nav> */}
                </div>
                {/* <!-- responsive header --> */}

                <div class="topbar transparent">
                    <div class="logo mt-5">
                        <a href="/"><img src="images/TheBooksClub-logos_transparent (2).png" alt="" /></a>
             

                    </div>
                   

                </div>
                {/* <!-- topbar transparent header --> */}

                <section>
                    <div class="ext-gap bluesh high-opacity">
                        <div class="content-bg-wrap" style={{ background: " url(images/resources/animated-bg2.png)" }}></div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="top-banner mt-5">
                                        <h1>The Books Club  </h1>
                                        <h3 className='font-weight-normal' style={{ color: "white" }}> For Every Books Lover Read, learn, grow.</h3>
                                        {/* <h5 className='font-weight-normal' style={{ color: "white" }}> </h5> */}
                                        <div className="d-flex justify-content-center align-items-center mt-5">
                                            <a className="btn btn-outline-light cbtn m-1" href="/">
                                                Visit Our Community
                                            </a>
                                            <a className="btn btn-outline-light cbtn m-1  " href="/register">
                                                Join Our Community
                                            </a>


                                        </div>

                                        {/* <nav class="breadcrumb">
                                            <a class="breadcrumb-item" href="index-2.html">Home</a>
                                            <span class="breadcrumb-item active">About us</span>
                                        </nav> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- top area animated --> */}

                <section>
                    <div class="gap100 no-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="about-winku">
                                        <h4>Welcome to The Books Club</h4>
                                        <span>We are an Online Community where Readers and Books lovers can meet,share,and enjoy the company of other books lovers and readers from around the globe.</span>
                                        <p>Our main goal is to build a community for readers and people who enjoy sharing their reading journeys and meeting other readers, All that while making sure our users and their content safe and unharmed</p>
                                        <div class="fonder">
                                            <h4>ABKRS <i>founder</i></h4>
                                            <i>TBC inc</i>
                                        </div>
                                        <figure class="sign-author">
                                            <img src="images/welcome-sign.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <figure class="about-picture">
                                        <img src="images/shiromani-kant-mo3FOTG62ao-unsplash.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="gap100">
                        <div class="container">
                            <div class="col-lg-12">
                                <div class="section-heading">
                                    <h2>Our Services</h2>
                                </div>
                            </div>
                            <div class="servic-category">
                                <div class="row merged">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="category-box">
                                            <i class="fa fa-comment"></i>
                                            <h2>Online Community</h2>
                                            <p>For every reader</p>
                                            {/* <a href="#" class="main-btn" title="">Read More</a> */}
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="category-box selected">
                                            <i class="fa fa-server"></i>
                                            <h2>Advertisment Space</h2>
                                            <p>feel free to contact us for advertisments</p>
                                            {/* <a href="#" class="main-btn" title="">Read More</a> */}
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="category-box">
                                            <i class="fa fa-suitcase"></i>
                                            <h2>Community Addmistration</h2>
                                            <p>we keep you safe </p>
                                            {/* <a href="#" class="main-btn" title="">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- services section --> */}

                <section>
                    <div class="gap100 pattern">
                        <div class="bg-image" style={{ backgroundImage: "url(images/resources/susan-q-yin-2JIvboGLeho-unsplash.jpg)", backgroundRepeat: " no-repeat" }}></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="news-letter">
                                        <h2>Newsletter <span>Signup</span></h2>
                                        <span>Shortest Way To Stay Updated To Our Latest News</span>
                                        <form method="post">
                                            <input type="text" placeholder="Please Type Email Id" class="emails" />
                                            <button>Subscribe Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- news letter --> */}

                <section>
                    <div class="gap100">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="section-heading">
                                        <h2>Our Team</h2>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="our-teambox">
                                        <figure><img src="images/empty-avatar.png" alt="" /></figure>
                                        <div class="team-info">
                                            <h4>Shifaa Alkasasbeh</h4>
                                            <span>Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="our-teambox">
                                        <figure><img src="images/empty-avatar.png" alt="" /></figure>
                                        <div class="team-info">
                                            <h4>Ruba Almasri</h4>
                                            <span>Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="our-teambox">
                                        <figure><img src="images/empty-avatar.png" alt="" /></figure>
                                        <div class="team-info">
                                            <h4>Khozama Obeidat</h4>
                                            <span>Product Owner</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="our-teambox">
                                        <figure><img src="images/empty-avatar.png" alt="" /></figure>
                                        <div class="team-info">
                                            <h4>Abdullah Assoli</h4>
                                            <span>Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 mt-5">
                                    <div class="our-teambox">
                                        <figure><img src="images/empty-avatar.png" alt="" /></figure>
                                        <div class="team-info">
                                            <h4>Bahaa Zyoud</h4>
                                            <span>Scrum Master</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- our team --> */}


                {/*<!-- get a quote --> */}

                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4">
                                <div class="widget">
                                    <div class="foot-logo">
                                        <div class="logo">
                                            <a href="index-2.html" title=""><img src="images/TheBooksClub-logos_transparent (3).png" alt="" /></a>
                                        </div>
                                        <p>
                                            The trio took this simple idea and built it into the world’s leading carpooling platform.
                                        </p>
                                    </div>
                                    <ul class="location">
                                        <li>
                                            <i class="ti-map-alt"></i>
                                            <p>33 new montgomery st.750 san francisco, CA USA 94105.</p>
                                        </li>
                                        <li>
                                            <i class="ti-mobile"></i>
                                            <p>+1-56-346 345</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4">
                                <div class="widget">
                                    <div class="widget-title"><h4>follow</h4></div>
                                    <ul class="list-style">
                                        <li><i class="fa fa-facebook-square"></i> <a href="https://web.facebook.com/shopcircut/" title="">facebook</a></li>
                                        <li><i class="fa fa-twitter-square"></i><a href="https://twitter.com/login?lang=en" title="">twitter</a></li>
                                        <li><i class="fa fa-instagram"></i><a href="https://www.instagram.com/?hl=en" title="">instagram</a></li>
                                        <li><i class="fa fa-google-plus-square"></i> <a href="https://plus.google.com/discover" title="">Google+</a></li>
                                        <li><i class="fa fa-pinterest-square"></i> <a href="https://www.pinterest.com/" title="">Pintrest</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4">
                                <div class="widget">
                                    <div class="widget-title"><h4>Navigate</h4></div>
                                    <ul class="list-style">
                                        <li><a href="about.html" title="">about us</a></li>
                                        <li><a href="contact.html" title="">contact us</a></li>
                                        <li><a href="terms.html" title="">terms & Conditions</a></li>
                                        <li><a href="#" title="">RSS syndication</a></li>
                                        <li><a href="sitemap.html" title="">Sitemap</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4">
                                <div class="widget">
                                    <div class="widget-title"><h4>useful links</h4></div>
                                    <ul class="list-style">
                                        <li><a href="#" title="">leasing</a></li>
                                        <li><a href="#" title="">submit route</a></li>
                                        <li><a href="#" title="">how does it work?</a></li>
                                        <li><a href="#" title="">agent listings</a></li>
                                        <li><a href="#" title="">view All</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>{/*<!-- footer --> */}


            </div>




        </div>
    )
}

export default Landing