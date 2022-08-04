import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import Comments from "../Comments";
import "./userProfile.css";
const Profile = () => {
  if (sessionStorage.getItem("user_id") == null) {
    window.location.href = "http://localhost:3000/login";
  }
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const likePost = () => {
    setLiked(true);
    setCount(count + 1);
  };
  const unlikePost = () => {
    setLiked(false);
    setCount(count + 1);
  };
  const [res, setRes] = useState();
  const [name, setName] = useState();
  const [uImage, setUImage] = useState();
  const logoutHandler = () => {
    sessionStorage.clear();
    window.location.reload(false);
  };

  const [userImage, setUserImage] = useState(
    "http://localhost:8000/uploads/user_icon.png"
  );
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/join")
      .then((res) => {
        console.log(res.data);
        setRes(res.data);
        setName(res.data[0].name);
        setUImage(`http://localhost:8000/img/${res.data[0].image}`);
      })
      .catch((error) => console.log(error));
  }, [ignored]);
  const dellPostHandler = (e) => {
    e.preventDefault();
    axios.delete(`http://127.0.0.1:8000/api/post/${e.target[0].value}`);
    forceUpdate();
  };
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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      {/*<div class="se-pre-con"></div>*/}
      <div className="theme-layout">
        <div className="topbar stick">
          <div className="logo ">
            <a title href="newsfeed.html">
              <img
                className="logo_image"
                src="images/TheBooksClub-logos_transparent (3).png"
                style={{ height: "50px" }}
                alt=""
              />
            </a>
          </div>
          <div className="top-area">
            <ul className="main-menu">
              <li>
                <a href="/landing">Home</a>
              </li>
              <li>
                <a href="/">Timeline</a>
              </li>
              <li className="profile">
                <a href="/profile">Profile</a>
                {!sessionStorage.getItem("user_id") && (
                  <ul>
                    <li>
                      <a href="/login" title>
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="/register" title>
                        Create an account
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* topbar */}
        <section>
          <div className="feature-photo">
            <figure>
              <img src="images/resources/timeline-1.jpg" alt="" />
            </figure>
            <div className="container-fluid">
              <div className="row merged">
                <div className="col-lg-2 col-sm-3">
                  <div className="user-avatar">
                    <figure>
                      <img src={`${uImage}`} alt="" />
                      <form className="edit-phto">
                        <i className="fa fa-camera-retro" />
                        <label className="fileContainer">
                          Edit Display Photo
                          <input type="file" />
                        </label>
                      </form>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-10 col-sm-9">
                  <div className="timeline-info">
                    <ul>
                      <li className="admin-name">
                        <h5>{name}</h5>
                        <br />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* top area */}
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
                              <a href="/" title>
                                News feed
                              </a>
                            </li>
                            <li>
                              <i className="ti-face-smile" />
                              <a href="/profile" title>
                                Profile
                              </a>
                            </li>
                            {sessionStorage.getItem("user_id") && (
                              <li>
                                <i className="ti-power-off" />
                                <a
                                  style={{ cursor: "pointer" }}
                                  onClick={logoutHandler}
                                >
                                  Logout
                                </a>
                              </li>
                            )}
                          </ul>
                        </div>
                      </aside>
                    </div>
                    {/* sidebar */}
                    <div className="col-lg-6">
                      <div className="central-meta">
                        <div className="groups">
                          <span>
                            <i className="fa fa-users" />
                            Posts
                          </span>
                        </div>
                        <ul className="nearby-contct">
                          {res
                            ?.slice(0)
                            .reverse()
                            .map((post) => {
                              console.log(post);
                              if (
                                post.user_id ==
                                sessionStorage.getItem("user_id")
                              ) {
                                return (
                                  <div className="loadMore">
                                    <form
                                      className="dellBtn"
                                      onSubmit={dellPostHandler}
                                    >
                                      <input
                                        type="hidden"
                                        value={`${post.id}`}
                                      />
                                      <button type="submit" className="dellBtn">
                                        <i class="fa-solid fa-trash-can"></i>
                                      </button>
                                    </form>
                                    <div
                                      className="central-meta item"
                                      key={post.id}
                                    >
                                      <div className="user-post">
                                        <div className="friend-info">
                                          <figure>
                                            <img
                                              src={`http://localhost:8000/img/${post.image}`}
                                              alt=""
                                            />
                                          </figure>
                                          <div className="friend-name">
                                            <ins>
                                              <a
                                                style={{ color: "#5a4ae3" }}
                                                href="time-line.html"
                                                title
                                              >
                                                {post.name}
                                              </a>
                                            </ins>
                                            <span>{post.created_at}</span>
                                          </div>
                                          <div className="post-meta">
                                            <div className="description">
                                              <p>{post.content}</p>
                                            </div>
                                            <img
                                              src={`http://localhost:8000/uploads/${post.PostImage}`}
                                              alt=""
                                              style={
                                                post.PostImage
                                                  ? {
                                                      height: "30rem",
                                                      width: "100%",
                                                    }
                                                  : {}
                                              }
                                            />

                                            <div className="we-video-info">
                                              <ul>
                                                <li>
                                                  <span
                                                    className="comment"
                                                    data-toggle="tooltip"
                                                    title="Comments"
                                                  >
                                                    <i className="fa fa-comments-o" />
                                                    {/* <ins>52</ins> */}
                                                  </span>
                                                </li>
                                                {liked ? (
                                                  <li>
                                                    <span
                                                      className="like"
                                                      data-toggle="tooltip"
                                                      title="like"
                                                    >
                                                      <i
                                                        className="ti-heart"
                                                        onClick={unlikePost}
                                                      />
                                                      <ins>
                                                        {post.likes?.length}
                                                      </ins>
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
                                                        onClick={likePost}
                                                      />
                                                      <ins>
                                                        {post.likes?.length}
                                                      </ins>
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
                                          </div>
                                        </div>
                                        <div className="coment-area ">
                                          <ul className="we-comet">
                                            <Comments
                                              userImage={setUserImage}
                                              postId={post.id}
                                            />
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            })}
                        </ul>
                        <div className="lodmore">
                          <button className="btn-view btn-load-more" />
                        </div>
                      </div>
                      {/* photos */}
                    </div>
                    {/* centerl meta */}
                    <div className="col-lg-3">
                      <aside className="sidebar static">
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

                        <div className="widget mt-4">
                          <div className="banner medium-opacity bluesh">
                            <div
                              className="bg-image"
                              style={{
                                backgroundImage:
                                  "url(images/shiromani-kant-mo3FOTG62ao-unsplash.jpg)",
                              }}
                            />
                            <div className="baner-top">
                              <span>
                                <img alt="" src="images/book-icon.png" />
                              </span>
                              <i className="fa fa-ellipsis-h" />
                            </div>
                            <div className="banermeta">
                              <p>Books Store Adverstisment</p>
                              <span>Offers</span>
                              <a data-ripple title href="#">
                                start now!
                              </a>
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
export default Profile;
