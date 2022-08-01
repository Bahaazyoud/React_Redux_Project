import { useEffect, useState } from "react";
// import { io } from "socket.io-client";
import axios from "axios";

export const Home = () => {
  const [res, setRes] = useState();
  const [userid, setuserid] = useState();
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   const soket = io("http://localhost:5000")
  //   console.log(soket.on("firstEvent",msg=>console.log(msg)));
  // },[])
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/join")
      .then((res) => {
        setRes(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const [data, setFormValue] = useState({
    content: null,
    user_id: sessionStorage.getItem("user_id"),
  });
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      let image = event.target.files[0];
      reader.onloadend = () => {
        setFormValue({
          ...data,
          imagePreview: reader.result,
          image: data.image,
        });
      };
      reader.readAsDataURL(image);
    }
  };
  const Submit = (event) => {
    event.preventDefault();
    const api = {
      content: data.content,
      image: data.image,
      user_id: data.user_id,
    };

    axios.post("http://127.0.0.1:8000/api/post", api);
  };
  const valueHandler = (event) => {
    setFormValue({ ...data, [event.target.name]: event.target.value });
  };
  const likeHandleNotification = () => {
    setLiked(true);
    setCount(count + 1);
  };
  const handleNotification = () => {
    setLiked(false);
    setCount(count - 1);
  };
  const [comment, setComment] = useState({
    text: "",
    user_id: localStorage.getItem("user_id"),
  });

  const commentChangeHandler = (e) => {
    setComment({ ...comment, text: e.target.value });
  };
  window.axios = require("axios");
  const commentHandler = (e) => {
    e.preventDefault();
    console.log(e);
    if (!comment == "") {
      const api = {
        text: e.target[0].value,
        user_id: e.target[1].value,
        post_id: e.target[2].value,
      };
      axios.post("http://127.0.0.1:8000/api/comment", api);
      setComment({ ...comment, text: "" });
    }
  };
  const [comments, setComments] = useState("");
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/comment")
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content />
      <meta name="keywords" content />
      <title>Winku Social Network Toolkit</title>
      <link rel="icon" href="images/fav.png" type="image/png" sizes="16x16" />
      <link rel="stylesheet" href="css/main.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/color.css" />
      <link rel="stylesheet" href="css/responsive.css" />
      {/*<div class="se-pre-con"></div>*/}
      <div className="theme-layout">
        <div className="responsive-header">
          <div className="mh-head first Sticky">
            <span className="mh-btns-left">
              <a className href="#menu">
                <i className="fa fa-align-justify" />
              </a>
            </span>
            <span className="mh-text">
              <a href="newsfeed.html" title>
                <img src="images/logo2.png" alt="" />
              </a>
            </span>
            <span className="mh-btns-right">
              <a className="fa fa-sliders" href="#shoppingbag" />
            </span>
          </div>
          <div className="mh-head second">
            <form className="mh-form">
              <input placeholder="search" />
              <a href="#/" className="fa fa-search" />
            </form>
          </div>
          <nav id="menu" className="res-menu">
            <ul>
              <li>
                <span>Home</span>
                <ul>
                  <li>
                    <a href="index-2.html" title>
                      Home Social
                    </a>
                  </li>
                  <li>
                    <a href="index2.html" title>
                      Home Social 2
                    </a>
                  </li>
                  <li>
                    <a href="index-company.html" title>
                      Home Company
                    </a>
                  </li>
                  <li>
                    <a href="landing.html" title>
                      Login page
                    </a>
                  </li>
                  <li>
                    <a href="logout.html" title>
                      Logout Page
                    </a>
                  </li>
                  <li>
                    <a href="newsfeed.html" title>
                      news feed
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Time Line</span>
                <ul>
                  <li>
                    <a href="time-line.html" title>
                      timeline
                    </a>
                  </li>
                  <li>
                    <a href="timeline-friends.html" title>
                      timeline friends
                    </a>
                  </li>
                  <li>
                    <a href="timeline-groups.html" title>
                      timeline groups
                    </a>
                  </li>
                  <li>
                    <a href="timeline-pages.html" title>
                      timeline pages
                    </a>
                  </li>
                  <li>
                    <a href="timeline-photos.html" title>
                      timeline photos
                    </a>
                  </li>
                  <li>
                    <a href="timeline-videos.html" title>
                      timeline videos
                    </a>
                  </li>
                  <li>
                    <a href="fav-page.html" title>
                      favourit page
                    </a>
                  </li>
                  <li>
                    <a href="groups.html" title>
                      groups page
                    </a>
                  </li>
                  <li>
                    <a href="page-likers.html" title>
                      Likes page
                    </a>
                  </li>
                  <li>
                    <a href="people-nearby.html" title>
                      people nearby
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Account Setting</span>
                <ul>
                  <li>
                    <a href="create-fav-page.html" title>
                      create fav page
                    </a>
                  </li>
                  <li>
                    <a href="edit-account-setting.html" title>
                      edit account setting
                    </a>
                  </li>
                  <li>
                    <a href="edit-interest.html" title>
                      edit-interest
                    </a>
                  </li>
                  <li>
                    <a href="edit-password.html" title>
                      edit-password
                    </a>
                  </li>
                  <li>
                    <a href="edit-profile-basic.html" title>
                      edit profile basics
                    </a>
                  </li>
                  <li>
                    <a href="edit-work-eductation.html" title>
                      edit work educations
                    </a>
                  </li>
                  <li>
                    <a href="messages.html" title>
                      message box
                    </a>
                  </li>
                  <li>
                    <a href="inbox.html" title>
                      Inbox
                    </a>
                  </li>
                  <li>
                    <a href="notifications.html" title>
                      notifications page
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span>forum</span>
                <ul>
                  <li>
                    <a href="forum.html" title>
                      Forum Page
                    </a>
                  </li>
                  <li>
                    <a href="forums-category.html" title>
                      Fourm Category
                    </a>
                  </li>
                  <li>
                    <a href="forum-open-topic.html" title>
                      Forum Open Topic
                    </a>
                  </li>
                  <li>
                    <a href="forum-create-topic.html" title>
                      Forum Create Topic
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Our Shop</span>
                <ul>
                  <li>
                    <a href="shop.html" title>
                      Shop Products
                    </a>
                  </li>
                  <li>
                    <a href="shop-masonry.html" title>
                      Shop Masonry Products
                    </a>
                  </li>
                  <li>
                    <a href="shop-single.html" title>
                      Shop Detail Page
                    </a>
                  </li>
                  <li>
                    <a href="shop-cart.html" title>
                      Shop Product Cart
                    </a>
                  </li>
                  <li>
                    <a href="shop-checkout.html" title>
                      Product Checkout
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Our Blog</span>
                <ul>
                  <li>
                    <a href="blog-grid-wo-sidebar.html" title>
                      Our Blog
                    </a>
                  </li>
                  <li>
                    <a href="blog-grid-right-sidebar.html" title>
                      Blog with R-Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-grid-left-sidebar.html" title>
                      Blog with L-Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-masonry.html" title>
                      Blog Masonry Style
                    </a>
                  </li>
                  <li>
                    <a href="blog-list-wo-sidebar.html" title>
                      Blog List Style
                    </a>
                  </li>
                  <li>
                    <a href="blog-list-right-sidebar.html" title>
                      Blog List with R-Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-list-left-sidebar.html" title>
                      Blog List with L-Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html" title>
                      Blog Post Detail
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Portfolio</span>
                <ul>
                  <li>
                    <a href="portfolio-2colm.html" title>
                      Portfolio 2col
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-3colm.html" title>
                      Portfolio 3col
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-4colm.html" title>
                      Portfolio 4col
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Support &amp; Help</span>
                <ul>
                  <li>
                    <a href="support-and-help.html" title>
                      Support &amp; Help
                    </a>
                  </li>
                  <li>
                    <a href="support-and-help-detail.html" title>
                      Support &amp; Help Detail
                    </a>
                  </li>
                  <li>
                    <a href="support-and-help-search-result.html" title>
                      Support &amp; Help Search Result
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span>More pages</span>
                <ul>
                  <li>
                    <a href="careers.html" title>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="career-detail.html" title>
                      Career Detail
                    </a>
                  </li>
                  <li>
                    <a href="404.html" title>
                      404 error page
                    </a>
                  </li>
                  <li>
                    <a href="404-2.html" title>
                      404 Style2
                    </a>
                  </li>
                  <li>
                    <a href="faq.html" title>
                      faq's page
                    </a>
                  </li>
                  <li>
                    <a href="insights.html" title>
                      insights
                    </a>
                  </li>
                  <li>
                    <a href="knowledge-base.html" title>
                      knowledge base
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html" title>
                  about
                </a>
              </li>
              <li>
                <a href="about-company.html" title>
                  About Us2
                </a>
              </li>
              <li>
                <a href="contact.html" title>
                  contact
                </a>
              </li>
              <li>
                <a href="contact-branches.html" title>
                  Contact Us2
                </a>
              </li>
              <li>
                <a href="widgets.html" title>
                  Widgts
                </a>
              </li>
            </ul>
          </nav>
          <nav id="shoppingbag">
            <div>
              <div className>
                <form method="post">
                  <div className="setting-row">
                    <span>use night mode</span>
                    <input type="checkbox" id="nightmode" />
                    <label
                      htmlFor="nightmode"
                      data-on-label="ON"
                      data-off-label="OFF"
                    />
                  </div>
                  <div className="setting-row">
                    <span>Notifications</span>
                    <input type="checkbox" id="switch2" />
                    <label
                      htmlFor="switch2"
                      data-on-label="ON"
                      data-off-label="OFF"
                    />
                  </div>
                  <div className="setting-row">
                    <span>Notification sound</span>
                    <input type="checkbox" id="switch3" />
                    <label
                      htmlFor="switch3"
                      data-on-label="ON"
                      data-off-label="OFF"
                    />
                  </div>
                  <div className="setting-row">
                    <span>My profile</span>
                    <input type="checkbox" id="switch4" />
                    <label
                      htmlFor="switch4"
                      data-on-label="ON"
                      data-off-label="OFF"
                    />
                  </div>
                  <div className="setting-row">
                    <span>Show profile</span>
                    <input type="checkbox" id="switch5" />
                    <label
                      htmlFor="switch5"
                      data-on-label="ON"
                      data-off-label="OFF"
                    />
                  </div>
                </form>
                <h4 className="panel-title">Account Setting</h4>
                <form method="post">
                  <div className="setting-row">
                    <span>Sub users</span>
                    <input type="checkbox" id="switch6" />
                    <label
                      htmlFor="switch6"
                      data-on-label="ON"
                      data-off-label="OFF"
                    />
                  </div>
                  <div className="setting-row">
                    <span>personal account</span>
                    <input type="checkbox" id="switch7" />
                    <label
                      htmlFor="switch7"
                      data-on-label="ON"
                      data-off-label="OFF"
                    />
                  </div>
                  <div className="setting-row">
                    <span>Business account</span>
                    <input type="checkbox" id="switch8" />
                    <label
                      htmlFor="switch8"
                      data-on-label="ON"
                      data-off-label="OFF"
                    />
                  </div>
                  <div className="setting-row">
                    <span>Show me online</span>
                    <input type="checkbox" id="switch9" />
                    <label
                      htmlFor="switch9"
                      data-on-label="ON"
                      data-off-label="OFF"
                    />
                  </div>
                  <div className="setting-row">
                    <span>Delete history</span>
                    <input type="checkbox" id="switch10" />
                    <label
                      htmlFor="switch10"
                      data-on-label="ON"
                      data-off-label="OFF"
                    />
                  </div>
                  <div className="setting-row">
                    <span>Expose author name</span>
                    <input type="checkbox" id="switch11" />
                    <label
                      htmlFor="switch11"
                      data-on-label="ON"
                      data-off-label="OFF"
                    />
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>
        {/* responsive header */}
        <div className="topbar stick">
          <div className="logo">
            <a title href="newsfeed.html">
              <img src="images/logo.png" alt="" />
            </a>
          </div>
          <div className="top-area">
            <ul className="main-menu">
              <li>
                <a href="#" title>
                  Home
                </a>
                <ul>
                  <li>
                    <a href="index-2.html" title>
                      Home Social
                    </a>
                  </li>
                  <li>
                    <a href="index2.html" title>
                      Home Social 2
                    </a>
                  </li>
                  <li>
                    <a href="index-company.html" title>
                      Home Company
                    </a>
                  </li>
                  <li>
                    <a href="landing.html" title>
                      Login page
                    </a>
                  </li>
                  <li>
                    <a href="logout.html" title>
                      Logout Page
                    </a>
                  </li>
                  <li>
                    <a href="newsfeed.html" title>
                      news feed
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" title>
                  timeline
                </a>
                <ul>
                  <li>
                    <a href="time-line.html" title>
                      timeline
                    </a>
                  </li>
                  <li>
                    <a href="timeline-friends.html" title>
                      timeline friends
                    </a>
                  </li>
                  <li>
                    <a href="timeline-groups.html" title>
                      timeline groups
                    </a>
                  </li>
                  <li>
                    <a href="timeline-pages.html" title>
                      timeline pages
                    </a>
                  </li>
                  <li>
                    <a href="timeline-photos.html" title>
                      timeline photos
                    </a>
                  </li>
                  <li>
                    <a href="timeline-videos.html" title>
                      timeline videos
                    </a>
                  </li>
                  <li>
                    <a href="fav-page.html" title>
                      favourit page
                    </a>
                  </li>
                  <li>
                    <a href="groups.html" title>
                      groups page
                    </a>
                  </li>
                  <li>
                    <a href="page-likers.html" title>
                      Likes page
                    </a>
                  </li>
                  <li>
                    <a href="people-nearby.html" title>
                      people nearby
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" title>
                  account settings
                </a>
                <ul>
                  <li>
                    <a href="create-fav-page.html" title>
                      create fav page
                    </a>
                  </li>
                  <li>
                    <a href="edit-account-setting.html" title>
                      edit account setting
                    </a>
                  </li>
                  <li>
                    <a href="edit-interest.html" title>
                      edit-interest
                    </a>
                  </li>
                  <li>
                    <a href="edit-password.html" title>
                      edit-password
                    </a>
                  </li>
                  <li>
                    <a href="edit-profile-basic.html" title>
                      edit profile basics
                    </a>
                  </li>
                  <li>
                    <a href="edit-work-eductation.html" title>
                      edit work educations
                    </a>
                  </li>
                  <li>
                    <a href="messages.html" title>
                      message box
                    </a>
                  </li>
                  <li>
                    <a href="inbox.html" title>
                      Inbox
                    </a>
                  </li>
                  <li>
                    <a href="notifications.html" title>
                      notifications page
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" title>
                  more pages
                </a>
                <ul>
                  <li>
                    <a href="404.html" title>
                      404 error page
                    </a>
                  </li>
                  <li>
                    <a href="about.html" title>
                      about
                    </a>
                  </li>
                  <li>
                    <a href="contact.html" title>
                      contact
                    </a>
                  </li>
                  <li>
                    <a href="faq.html" title>
                      faq's page
                    </a>
                  </li>
                  <li>
                    <a href="insights.html" title>
                      insights
                    </a>
                  </li>
                  <li>
                    <a href="knowledge-base.html" title>
                      knowledge base
                    </a>
                  </li>
                  <li>
                    <a href="widgets.html" title>
                      Widgts
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="setting-area">
              <li>
                <a href="#" title="Home" data-ripple>
                  <i className="ti-search" />
                </a>
                <div className="searched">
                  <form method="post" className="form-search">
                    <input type="text" placeholder="Search Friend" />
                    <button data-ripple>
                      <i className="ti-search" />
                    </button>
                  </form>
                </div>
              </li>
              <li>
                <a href="newsfeed.html" title="Home" data-ripple>
                  <i className="ti-home" />
                </a>
              </li>
              <li>
                <a href="#" title="Notification" data-ripple>
                  <i className="ti-bell" />
                  <span>20</span>
                </a>
                <div className="dropdowns">
                  <span>4 New Notifications</span>
                  <ul className="drops-menu">
                    <li>
                      <a href="notifications.html" title>
                        <img src="images/resources/thumb-1.jpg" alt="" />
                        <div className="mesg-meta">
                          <h6>sarah Loren</h6>
                          <span>Hi, how r u dear ...?</span>
                          <i>2 min ago</i>
                        </div>
                      </a>
                      <span className="tag green">New</span>
                    </li>
                    <li>
                      <a href="notifications.html" title>
                        <img src="images/resources/thumb-2.jpg" alt="" />
                        <div className="mesg-meta">
                          <h6>Jhon doe</h6>
                          <span>Hi, how r u dear ...?</span>
                          <i>2 min ago</i>
                        </div>
                      </a>
                      <span className="tag red">Reply</span>
                    </li>
                    <li>
                      <a href="notifications.html" title>
                        <img src="images/resources/thumb-3.jpg" alt="" />
                        <div className="mesg-meta">
                          <h6>Andrew</h6>
                          <span>Hi, how r u dear ...?</span>
                          <i>2 min ago</i>
                        </div>
                      </a>
                      <span className="tag blue">Unseen</span>
                    </li>
                    <li>
                      <a href="notifications.html" title>
                        <img src="images/resources/thumb-4.jpg" alt="" />
                        <div className="mesg-meta">
                          <h6>Tom cruse</h6>
                          <span>Hi, how r u dear ...?</span>
                          <i>2 min ago</i>
                        </div>
                      </a>
                      <span className="tag">New</span>
                    </li>
                    <li>
                      <a href="notifications.html" title>
                        <img src="images/resources/thumb-5.jpg" alt="" />
                        <div className="mesg-meta">
                          <h6>Amy</h6>
                          <span>Hi, how r u dear ...?</span>
                          <i>2 min ago</i>
                        </div>
                      </a>
                      <span className="tag">New</span>
                    </li>
                  </ul>
                  <a href="notifications.html" title className="more-mesg">
                    view more
                  </a>
                </div>
              </li>
              <li>
                <a href="#" title="Messages" data-ripple>
                  <i className="ti-comment" />
                  <span>12</span>
                </a>
                <div className="dropdowns">
                  <span>5 New Messages</span>
                  <ul className="drops-menu">
                    <li>
                      <a href="notifications.html" title>
                        <img src="images/resources/thumb-1.jpg" alt="" />
                        <div className="mesg-meta">
                          <h6>sarah Loren</h6>
                          <span>Hi, how r u dear ...?</span>
                          <i>2 min ago</i>
                        </div>
                      </a>
                      <span className="tag green">New</span>
                    </li>
                    <li>
                      <a href="notifications.html" title>
                        <img src="images/resources/thumb-2.jpg" alt="" />
                        <div className="mesg-meta">
                          <h6>Jhon doe</h6>
                          <span>Hi, how r u dear ...?</span>
                          <i>2 min ago</i>
                        </div>
                      </a>
                      <span className="tag red">Reply</span>
                    </li>
                    <li>
                      <a href="notifications.html" title>
                        <img src="images/resources/thumb-3.jpg" alt="" />
                        <div className="mesg-meta">
                          <h6>Andrew</h6>
                          <span>Hi, how r u dear ...?</span>
                          <i>2 min ago</i>
                        </div>
                      </a>
                      <span className="tag blue">Unseen</span>
                    </li>
                    <li>
                      <a href="notifications.html" title>
                        <img src="images/resources/thumb-4.jpg" alt="" />
                        <div className="mesg-meta">
                          <h6>Tom cruse</h6>
                          <span>Hi, how r u dear ...?</span>
                          <i>2 min ago</i>
                        </div>
                      </a>
                      <span className="tag">New</span>
                    </li>
                    <li>
                      <a href="notifications.html" title>
                        <img src="images/resources/thumb-5.jpg" alt="" />
                        <div className="mesg-meta">
                          <h6>Amy</h6>
                          <span>Hi, how r u dear ...?</span>
                          <i>2 min ago</i>
                        </div>
                      </a>
                      <span className="tag">New</span>
                    </li>
                  </ul>
                  <a href="messages.html" title className="more-mesg">
                    view more
                  </a>
                </div>
              </li>
              <li>
                <a href="#" title="Languages" data-ripple>
                  <i className="fa fa-globe" />
                </a>
                <div className="dropdowns languages">
                  <a href="#" title>
                    <i className="ti-check" />
                    English
                  </a>
                  <a href="#" title>
                    Arabic
                  </a>
                  <a href="#" title>
                    Dutch
                  </a>
                  <a href="#" title>
                    French
                  </a>
                </div>
              </li>
            </ul>
            <div className="user-img">
              <img src="images/resources/admin.jpg" alt="" />
              <span className="status f-online" />
              <div className="user-setting">
                <a href="#" title>
                  <span className="status f-online" />
                  online
                </a>
                <a href="#" title>
                  <span className="status f-away" />
                  away
                </a>
                <a href="#" title>
                  <span className="status f-off" />
                  offline
                </a>
                <a href="#" title>
                  <i className="ti-user" /> view profile
                </a>
                <a href="#" title>
                  <i className="ti-pencil-alt" />
                  edit profile
                </a>
                <a href="#" title>
                  <i className="ti-target" />
                  activity log
                </a>
                <a href="#" title>
                  <i className="ti-settings" />
                  account setting
                </a>
                <a href="#" title>
                  <i className="ti-power-off" />
                  log out
                </a>
              </div>
            </div>
            <span className="ti-menu main-menu" data-ripple />
          </div>
        </div>
        {/* topbar */}
        <section>
          <div className="gap gray-bg">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row" id="page-contents">
                    <div className="col-lg-3">
                      <aside className="sidebar static">
                        <div className="widget">
                          <h4 className="widget-title">Shortcuts</h4>
                          <ul className="naves">
                            <li>
                              <i className="ti-clipboard" />
                              <a href="newsfeed.html" title>
                                News feed
                              </a>
                            </li>
                            <li>
                              <i className="ti-mouse-alt" />
                              <a href="inbox.html" title>
                                Inbox
                              </a>
                            </li>
                            <li>
                              <i className="ti-files" />
                              <a href="fav-page.html" title>
                                My pages
                              </a>
                            </li>
                            <li>
                              <i className="ti-user" />
                              <a href="timeline-friends.html" title>
                                friends
                              </a>
                            </li>
                            <li>
                              <i className="ti-image" />
                              <a href="timeline-photos.html" title>
                                images
                              </a>
                            </li>
                            <li>
                              <i className="ti-video-camera" />
                              <a href="timeline-videos.html" title>
                                videos
                              </a>
                            </li>
                            <li>
                              <i className="ti-comments-smiley" />
                              <a href="messages.html" title>
                                Messages
                              </a>
                            </li>
                            <li>
                              <i className="ti-bell" />
                              <a href="notifications.html" title>
                                Notifications
                              </a>
                            </li>
                            <li>
                              <i className="ti-share" />
                              <a href="people-nearby.html" title>
                                People Nearby
                              </a>
                            </li>
                            <li>
                              <i className="fa fa-bar-chart-o" />
                              <a href="insights.html" title>
                                insights
                              </a>
                            </li>
                            <li>
                              <i className="ti-power-off" />
                              <a href="landing.html" title>
                                Logout
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* Shortcuts */}
                        <div className="widget">
                          <h4 className="widget-title">Recent Activity</h4>
                          <ul className="activitiez">
                            <li>
                              <div className="activity-meta">
                                <i>10 hours Ago</i>
                                <span>
                                  <a href="#" title>
                                    Commented on Video posted{" "}
                                  </a>
                                </span>
                                <h6>
                                  by <a href="time-line.html">black demon.</a>
                                </h6>
                              </div>
                            </li>
                            <li>
                              <div className="activity-meta">
                                <i>30 Days Ago</i>
                                <span>
                                  <a href="#" title>
                                    Posted your status. “Hello guys, how are
                                    you?”
                                  </a>
                                </span>
                              </div>
                            </li>
                            <li>
                              <div className="activity-meta">
                                <i>2 Years Ago</i>
                                <span>
                                  <a href="#" title>
                                    Share a video on her timeline.
                                  </a>
                                </span>
                                <h6>
                                  "<a href="#">you are so funny mr.been.</a>"
                                </h6>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* recent activites */}
                        <div className="widget stick-widget">
                          <h4 className="widget-title">Who's follownig</h4>
                          <ul className="followers">
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar2.jpg"
                                  alt=""
                                />
                              </figure>
                              <div className="friend-meta">
                                <h4>
                                  <a href="time-line.html" title>
                                    Kelly Bill
                                  </a>
                                </h4>
                                <a href="#" title className="underline">
                                  Add Friend
                                </a>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar4.jpg"
                                  alt=""
                                />
                              </figure>
                              <div className="friend-meta">
                                <h4>
                                  <a href="time-line.html" title>
                                    Issabel
                                  </a>
                                </h4>
                                <a href="#" title className="underline">
                                  Add Friend
                                </a>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar6.jpg"
                                  alt=""
                                />
                              </figure>
                              <div className="friend-meta">
                                <h4>
                                  <a href="time-line.html" title>
                                    Andrew
                                  </a>
                                </h4>
                                <a href="#" title className="underline">
                                  Add Friend
                                </a>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar8.jpg"
                                  alt=""
                                />
                              </figure>
                              <div className="friend-meta">
                                <h4>
                                  <a href="time-line.html" title>
                                    Sophia
                                  </a>
                                </h4>
                                <a href="#" title className="underline">
                                  Add Friend
                                </a>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar3.jpg"
                                  alt=""
                                />
                              </figure>
                              <div className="friend-meta">
                                <h4>
                                  <a href="time-line.html" title>
                                    Allen
                                  </a>
                                </h4>
                                <a href="#" title className="underline">
                                  Add Friend
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* who's following */}
                      </aside>
                    </div>
                    {/* sidebar */}

                    <div className="col-lg-6">
                      <div className="central-meta">
                        <div className="new-postbox">
                          <figure>
                            <img src="images/resources/admin2.jpg" alt="" />
                          </figure>
                          <div className="newpst-input">
                            <form
                              method="POST"
                              onSubmit={Submit}
                              encType="multipart/form-data"
                            >
                              <textarea
                                rows={2}
                                placeholder="write something"
                                id="content"
                                value={data.content}
                                name="content"
                                onChange={valueHandler}
                              />
                              <div class="attachments">
                                <ul>
                                  <li
                                    style={{
                                      display: "flext",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <input
                                      type="file"
                                      id="image"
                                      name="image"
                                      onChange={onImageChange}
                                      style={{
                                        display: "none",
                                        visibility: "none",
                                      }}
                                    />
                                    <label
                                      class="fileContainer"
                                      htmlFor="image"
                                    >
                                      <i
                                        class="fa fa-image"
                                        style={{
                                          fontSize: "25px",
                                          color: "black",
                                        }}
                                      ></i>
                                    </label>
                                  </li>
                                  <li>
                                    <button type="submit">Post</button>
                                  </li>
                                </ul>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      {/* add post new box */}
                      {res?.map((post) => {
                        return (
                          <div className="loadMore">
                            <div className="central-meta item" key={post.id}>
                              <div className="user-post">
                                <div className="friend-info">
                                  <figure>
                                    <img
                                      src="images/resources/friend-avatar10.jpg"
                                      alt=""
                                    />
                                  </figure>
                                  <div className="friend-name">
                                    <ins>
                                      <a href="time-line.html" title>
                                        {post.name}
                                      </a>
                                    </ins>
                                    <span>published: june,2 2018 19:PM</span>
                                  </div>
                                  <div className="post-meta">
                                    <img src={post.image} alt="" />
                                    <div className="we-video-info">
                                      <ul>
                                        <li>
                                          <span
                                            className="views"
                                            data-toggle="tooltip"
                                            title="views"
                                          >
                                            <i className="fa fa-eye" />
                                            <ins>1.2k</ins>
                                          </span>
                                        </li>
                                        <li>
                                          <span
                                            className="comment"
                                            data-toggle="tooltip"
                                            title="Comments"
                                          >
                                            <i className="fa fa-comments-o" />
                                            <ins>52</ins>
                                          </span>
                                        </li>
                                        {liked ? (
                                          <li>
                                            <span
                                              className="like"
                                              data-toggle="tooltip"
                                              title="like"
                                            >
                                              <i className="ti-heart" />
                                              <ins>{count}</ins>
                                            </span>
                                          </li>
                                        ) : (
                                          <li>
                                            <span
                                              className="dislike"
                                              data-toggle="tooltip"
                                              title="dislike"
                                            >
                                              <i
                                                className="ti-heart-broken"
                                                onClick={likeHandleNotification}
                                              />
                                              <ins>{count}</ins>
                                            </span>
                                          </li>
                                        )}
                                        <li className="social-media">
                                          <div className="menu">
                                            <div className="btn trigger">
                                              <i className="fa fa-share-alt" />
                                            </div>
                                            <div className="rotater">
                                              <div className="btn btn-icon">
                                                <a href="#" title>
                                                  <i className="fa fa-html5" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="rotater">
                                              <div className="btn btn-icon">
                                                <a href="#" title>
                                                  <i className="fa fa-facebook" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="rotater">
                                              <div className="btn btn-icon">
                                                <a href="#" title>
                                                  <i className="fa fa-google-plus" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="rotater">
                                              <div className="btn btn-icon">
                                                <a href="#" title>
                                                  <i className="fa fa-twitter" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="rotater">
                                              <div className="btn btn-icon">
                                                <a href="#" title>
                                                  <i className="fa fa-css3" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="rotater">
                                              <div className="btn btn-icon">
                                                <a href="#" title>
                                                  <i className="fa fa-instagram" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="rotater">
                                              <div className="btn btn-icon">
                                                <a href="#" title>
                                                  <i className="fa fa-dribbble" />
                                                </a>
                                              </div>
                                            </div>
                                            <div className="rotater">
                                              <div className="btn btn-icon">
                                                <a href="#" title>
                                                  <i className="fa fa-pinterest" />
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="description">
                                      <p>{post.content}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="coment-area">
                                  <ul className="we-comet">
                                    {comments &&
                                      comments?.map((post) => {
                                        return (
                                          <li>
                                            <div className="comet-avatar">
                                              <img
                                                src="images/resources/comet-1.jpg"
                                                alt=""
                                              />
                                            </div>
                                            <div className="we-comment">
                                              <div className="coment-head">
                                                <h5>
                                                  <a
                                                    href="time-line.html"
                                                    title
                                                  >
                                                    {post.id}
                                                  </a>
                                                </h5>
                                              </div>
                                              <p>{post.text}</p>
                                            </div>
                                          </li>
                                        );
                                      })}
                                    <li>
                                      <a
                                        href="#"
                                        title
                                        className="showmore underline"
                                      >
                                        more comments
                                      </a>
                                    </li>
                                    <li className="post-comment">
                                      <div className="comet-avatar">
                                        <img
                                          src="images/resources/comet-1.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="post-comt-box">
                                        <form
                                          onSubmit={commentHandler}
                                          method="post"
                                        >
                                          <textarea
                                            name="comment"
                                            placeholder="Post your comment"
                                            value={comment.text}
                                            onChange={commentChangeHandler}
                                          />
                                          <input
                                            type="hidden"
                                            value={localStorage.getItem(
                                              "user_id"
                                            )}
                                            name="user_id"
                                          />
                                          <input
                                            type="hidden"
                                            value="1"
                                            name="post_id"
                                          />
                                          <button
                                            style={{
                                              color: "#088dcd",
                                              height: "100%",
                                              textShadow:
                                                "#00000030 2px 0px 13px",
                                            }}
                                            type="submit"
                                          >
                                            <i className="ti-comment" />{" "}
                                            {/* {comments[0].id} here */}
                                          </button>
                                        </form>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* centerl meta */}
                    <div className="col-lg-3">
                      <aside className="sidebar static">
                        <div className="widget">
                          <h4 className="widget-title">Your page</h4>
                          <div className="your-page">
                            <figure>
                              <a href="#" title>
                                <img
                                  src="images/resources/friend-avatar9.jpg"
                                  alt=""
                                />
                              </a>
                            </figure>
                            <div className="page-meta">
                              <a href="#" title className="underline">
                                My page
                              </a>
                              <span>
                                <i className="ti-comment" />
                                <a href="insight.html" title>
                                  Messages <em>9</em>
                                </a>
                              </span>
                              <span>
                                <i className="ti-bell" />
                                <a href="insight.html" title>
                                  Notifications <em>2</em>
                                </a>
                              </span>
                            </div>
                            <div className="page-likes">
                              <ul className="nav nav-tabs likes-btn">
                                <li className="nav-item">
                                  <a
                                    className="active"
                                    href="#link1"
                                    data-toggle="tab"
                                  >
                                    likes
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className href="#link2" data-toggle="tab">
                                    views
                                  </a>
                                </li>
                              </ul>
                              {/* Tab panes */}
                              <div className="tab-content">
                                <div
                                  className="tab-pane active fade show "
                                  id="link1"
                                >
                                  <span>
                                    <i className="ti-heart" />
                                    884
                                  </span>
                                  <a href="#" title="weekly-likes">
                                    35 new likes this week
                                  </a>
                                  <div className="users-thumb-list">
                                    <a
                                      href="#"
                                      title="Anderw"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-1.jpg"
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      title="frank"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-2.jpg"
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      title="Sara"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-3.jpg"
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      title="Amy"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-4.jpg"
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      title="Ema"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-5.jpg"
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      title="Sophie"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-6.jpg"
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      title="Maria"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-7.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="tab-pane fade" id="link2">
                                  <span>
                                    <i className="ti-eye" />
                                    440
                                  </span>
                                  <a href="#" title="weekly-likes">
                                    440 new views this week
                                  </a>
                                  <div className="users-thumb-list">
                                    <a
                                      href="#"
                                      title="Anderw"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-1.jpg"
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      title="frank"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-2.jpg"
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      title="Sara"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-3.jpg"
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      title="Amy"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-4.jpg"
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      title="Ema"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-5.jpg"
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      title="Sophie"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-6.jpg"
                                        alt=""
                                      />
                                    </a>
                                    <a
                                      href="#"
                                      title="Maria"
                                      data-toggle="tooltip"
                                    >
                                      <img
                                        src="images/resources/userlist-7.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* page like widget */}
                        <div className="widget">
                          <div className="banner medium-opacity bluesh">
                            <div
                              className="bg-image"
                              style={{
                                backgroundImage:
                                  "url(images/resources/baner-widgetbg.jpg)",
                              }}
                            />
                            <div className="baner-top">
                              <span>
                                <img alt="" src="images/book-icon.png" />
                              </span>
                              <i className="fa fa-ellipsis-h" />
                            </div>
                            <div className="banermeta">
                              <p>create your own favourit page.</p>
                              <span>like them all</span>
                              <a data-ripple title href="#">
                                start now!
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="widget friend-list stick-widget">
                          <h4 className="widget-title">Friends</h4>
                          <div id="searchDir" />
                          <ul id="people-list" className="friendz-list">
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar.jpg"
                                  alt=""
                                />
                                <span className="status f-online" />
                              </figure>
                              <div className="friendz-meta">
                                <a href="time-line.html">bucky barnes</a>
                                <i>
                                  <a
                                    href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="f2859b9c869780819d9e969780b2959f939b9edc919d9f"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </i>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar2.jpg"
                                  alt=""
                                />
                                <span className="status f-away" />
                              </figure>
                              <div className="friendz-meta">
                                <a href="time-line.html">Sarah Loren</a>
                                <i>
                                  <a
                                    href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="ea888b98848f99aa8d878b8386c4898587"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </i>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar3.jpg"
                                  alt=""
                                />
                                <span className="status f-off" />
                              </figure>
                              <div className="friendz-meta">
                                <a href="time-line.html">jason borne</a>
                                <i>
                                  <a
                                    href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="2d474c5e42434f6d4a404c4441034e4240"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </i>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar4.jpg"
                                  alt=""
                                />
                                <span className="status f-off" />
                              </figure>
                              <div className="friendz-meta">
                                <a href="time-line.html">Cameron diaz</a>
                                <i>
                                  <a
                                    href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="6802091b07060a280f05090104460b0705"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </i>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar5.jpg"
                                  alt=""
                                />
                                <span className="status f-online" />
                              </figure>
                              <div className="friendz-meta">
                                <a href="time-line.html">daniel warber</a>
                                <i>
                                  <a
                                    href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="4e242f3d21202c0e29232f2722602d2123"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </i>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar6.jpg"
                                  alt=""
                                />
                                <span className="status f-away" />
                              </figure>
                              <div className="friendz-meta">
                                <a href="time-line.html">andrew</a>
                                <i>
                                  <a
                                    href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="1872796b77767a587f75797174367b7775"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </i>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar7.jpg"
                                  alt=""
                                />
                                <span className="status f-off" />
                              </figure>
                              <div className="friendz-meta">
                                <a href="time-line.html">amy watson</a>
                                <i>
                                  <a
                                    href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="711b10021e1f1331161c10181d5f121e1c"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </i>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar5.jpg"
                                  alt=""
                                />
                                <span className="status f-online" />
                              </figure>
                              <div className="friendz-meta">
                                <a href="time-line.html">daniel warber</a>
                                <i>
                                  <a
                                    href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="234942504c4d4163444e424a4f0d404c4e"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </i>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <img
                                  src="images/resources/friend-avatar2.jpg"
                                  alt=""
                                />
                                <span className="status f-away" />
                              </figure>
                              <div className="friendz-meta">
                                <a href="time-line.html">Sarah Loren</a>
                                <i>
                                  <a
                                    href="https://wpkixx.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="d5b7b4a7bbb0a695b2b8b4bcb9fbb6bab8"
                                  >
                                    [email&nbsp;protected]
                                  </a>
                                </i>
                              </div>
                            </li>
                          </ul>
                          <div className="chat-box">
                            <div className="chat-head">
                              <span className="status f-online" />
                              <h6>Bucky Barnes</h6>
                              <div className="more">
                                <span>
                                  <i className="ti-more-alt" />
                                </span>
                                <span className="close-mesage">
                                  <i className="ti-close" />
                                </span>
                              </div>
                            </div>
                            <div className="chat-list">
                              <ul>
                                <li className="me">
                                  <div className="chat-thumb">
                                    <img
                                      src="images/resources/chatlist1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="notification-event">
                                    <span className="chat-message-item">
                                      Hi James! Please remember to buy the food
                                      for tomorrow! I’m gonna be handling the
                                      gifts and Jake’s gonna get the drinks
                                    </span>
                                    <span className="notification-date">
                                      <time
                                        dateTime="2004-07-24T18:18"
                                        className="entry-date updated"
                                      >
                                        Yesterday at 8:10pm
                                      </time>
                                    </span>
                                  </div>
                                </li>
                                <li className="you">
                                  <div className="chat-thumb">
                                    <img
                                      src="images/resources/chatlist2.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="notification-event">
                                    <span className="chat-message-item">
                                      Hi James! Please remember to buy the food
                                      for tomorrow! I’m gonna be handling the
                                      gifts and Jake’s gonna get the drinks
                                    </span>
                                    <span className="notification-date">
                                      <time
                                        dateTime="2004-07-24T18:18"
                                        className="entry-date updated"
                                      >
                                        Yesterday at 8:10pm
                                      </time>
                                    </span>
                                  </div>
                                </li>
                                <li className="me">
                                  <div className="chat-thumb">
                                    <img
                                      src="images/resources/chatlist1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="notification-event">
                                    <span className="chat-message-item">
                                      Hi James! Please remember to buy the food
                                      for tomorrow! I’m gonna be handling the
                                      gifts and Jake’s gonna get the drinks
                                    </span>
                                    <span className="notification-date">
                                      <time
                                        dateTime="2004-07-24T18:18"
                                        className="entry-date updated"
                                      >
                                        Yesterday at 8:10pm
                                      </time>
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              <form className="text-box">
                                <textarea
                                  placeholder="Post enter to post..."
                                  defaultValue={""}
                                />
                                <div className="add-smiles">
                                  <span
                                    title="add icon"
                                    className="em em-expressionless"
                                  />
                                </div>
                                <div className="smiles-bunch">
                                  <i className="em em---1" />
                                  <i className="em em-smiley" />
                                  <i className="em em-anguished" />
                                  <i className="em em-laughing" />
                                  <i className="em em-angry" />
                                  <i className="em em-astonished" />
                                  <i className="em em-blush" />
                                  <i className="em em-disappointed" />
                                  <i className="em em-worried" />
                                  <i className="em em-kissing_heart" />
                                  <i className="em em-rage" />
                                  <i className="em em-stuck_out_tongue" />
                                </div>
                                <button type="submit" />
                              </form>
                            </div>
                          </div>
                        </div>
                        {/* friends list sidebar */}
                      </aside>
                    </div>
                    {/* sidebar */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="widget">
                  <div className="foot-logo">
                    <div className="logo">
                      <a href="index-2.html" title>
                        <img src="images/logo.png" alt="" />
                      </a>
                    </div>
                    <p>
                      The trio took this simple idea and built it into the
                      world’s leading carpooling platform.
                    </p>
                  </div>
                  <ul className="location">
                    <li>
                      <i className="ti-map-alt" />
                      <p>
                        33 new montgomery st.750 san francisco, CA USA 94105.
                      </p>
                    </li>
                    <li>
                      <i className="ti-mobile" />
                      <p>+1-56-346 345</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="widget">
                  <div className="widget-title">
                    <h4>follow</h4>
                  </div>
                  <ul className="list-style">
                    <li>
                      <i className="fa fa-facebook-square" />{" "}
                      <a href="https://web.facebook.com/shopcircut/" title>
                        facebook
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-twitter-square" />
                      <a href="https://twitter.com/login?lang=en" title>
                        twitter
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-instagram" />
                      <a href="https://www.instagram.com/?hl=en" title>
                        instagram
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-google-plus-square" />{" "}
                      <a href="https://plus.google.com/discover" title>
                        Google+
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-pinterest-square" />{" "}
                      <a href="https://www.pinterest.com/" title>
                        Pintrest
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="widget">
                  <div className="widget-title">
                    <h4>Navigate</h4>
                  </div>
                  <ul className="list-style">
                    <li>
                      <a href="about.html" title>
                        about us
                      </a>
                    </li>
                    <li>
                      <a href="contact.html" title>
                        contact us
                      </a>
                    </li>
                    <li>
                      <a href="terms.html" title>
                        terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        RSS syndication
                      </a>
                    </li>
                    <li>
                      <a href="sitemap.html" title>
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="widget">
                  <div className="widget-title">
                    <h4>useful links</h4>
                  </div>
                  <ul className="list-style">
                    <li>
                      <a href="#" title>
                        leasing
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        submit route
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        how does it work?
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        agent listings
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        view All
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="widget">
                  <div className="widget-title">
                    <h4>download apps</h4>
                  </div>
                  <ul className="colla-apps">
                    <li>
                      <a href="https://play.google.com/store?hl=en" title>
                        <i className="fa fa-android" />
                        android
                      </a>
                    </li>
                    <li>
                      <a href="https://www.apple.com/lae/ios/app-store/" title>
                        <i className="ti-apple" />
                        iPhone
                      </a>
                    </li>
                    <li>
                      <a href="https://www.microsoft.com/store/apps" title>
                        <i className="fa fa-windows" />
                        Windows
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer */}
        <div className="bottombar">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span className="copyright">
                  <a target="_blank" href="https://www.templateshub.net">
                    Templates Hub
                  </a>
                </span>
                <i>
                  <img src="images/credit-cards.png" alt="" />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="side-panel">
        <h4 className="panel-title">General Setting</h4>
        <form method="post">
          <div className="setting-row">
            <span>use night mode</span>
            <input type="checkbox" id="nightmode1" />
            <label
              htmlFor="nightmode1"
              data-on-label="ON"
              data-off-label="OFF"
            />
          </div>
          <div className="setting-row">
            <span>Notifications</span>
            <input type="checkbox" id="switch22" />
            <label htmlFor="switch22" data-on-label="ON" data-off-label="OFF" />
          </div>
          <div className="setting-row">
            <span>Notification sound</span>
            <input type="checkbox" id="switch33" />
            <label htmlFor="switch33" data-on-label="ON" data-off-label="OFF" />
          </div>
          <div className="setting-row">
            <span>My profile</span>
            <input type="checkbox" id="switch44" />
            <label htmlFor="switch44" data-on-label="ON" data-off-label="OFF" />
          </div>
          <div className="setting-row">
            <span>Show profile</span>
            <input type="checkbox" id="switch55" />
            <label htmlFor="switch55" data-on-label="ON" data-off-label="OFF" />
          </div>
        </form>
        <h4 className="panel-title">Account Setting</h4>
        <form method="post">
          <div className="setting-row">
            <span>Sub users</span>
            <input type="checkbox" id="switch66" />
            <label htmlFor="switch66" data-on-label="ON" data-off-label="OFF" />
          </div>
          <div className="setting-row">
            <span>personal account</span>
            <input type="checkbox" id="switch77" />
            <label htmlFor="switch77" data-on-label="ON" data-off-label="OFF" />
          </div>
          <div className="setting-row">
            <span>Business account</span>
            <input type="checkbox" id="switch88" />
            <label htmlFor="switch88" data-on-label="ON" data-off-label="OFF" />
          </div>
          <div className="setting-row">
            <span>Show me online</span>
            <input type="checkbox" id="switch99" />
            <label htmlFor="switch99" data-on-label="ON" data-off-label="OFF" />
          </div>
          <div className="setting-row">
            <span>Delete history</span>
            <input type="checkbox" id="switch101" />
            <label
              htmlFor="switch101"
              data-on-label="ON"
              data-off-label="OFF"
            />
          </div>
          <div className="setting-row">
            <span>Expose author name</span>
            <input type="checkbox" id="switch111" />
            <label
              htmlFor="switch111"
              data-on-label="ON"
              data-off-label="OFF"
            />
          </div>
        </form>
      </div>
      {/* side panel */}
    </div>
  );
};
