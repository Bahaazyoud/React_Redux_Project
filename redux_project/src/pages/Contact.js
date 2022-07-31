const Contact = () => {
  return (
    <>
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
      <section>
        <div className="gap no-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="g-map">
                  <div id="map-canvas"></div>
                  <div className="map-meta">
                    <h1>get in touch</h1>
                    <p>
                      this is a google map. you may see our location, or using
                      street view you may the original look of our office.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="gap no-top overlap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contct-info">
                  <div className="contact-form">
                    <div className="cnt-title">
                      <span>Send us a message</span>
                      <i>
                        <img src="images/envelop.png" alt="" />
                      </i>
                    </div>
                    <form method="post">
                      <div className="form-group">
                        <input type="text" id="input" required="required" />
                        <label className="control-label" for="input">
                          First & Last Name
                        </label>
                        <i className="mtrl-select"></i>
                      </div>
                      <div className="form-group">
                        <input type="text" required="required" />
                        <label className="control-label" for="input">
                          <a
                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="5e1b333f37321e"
                          >
                            [email&#160;protected]
                          </a>
                        </label>
                        <i className="mtrl-select"></i>
                      </div>
                      <div className="form-group">
                        <input type="text" required="required" />
                        <label className="control-label" for="input">
                          Phone No.
                        </label>
                        <i className="mtrl-select"></i>
                      </div>
                      <div className="form-group">
                        <input type="text" required="required" />
                        <label className="control-label" for="input">
                          Company
                        </label>
                        <i className="mtrl-select"></i>
                      </div>
                      <div className="form-group">
                        <textarea
                          rows="4"
                          id="textarea"
                          required="required"
                        ></textarea>
                        <label className="control-label" for="textarea">
                          Message
                        </label>
                        <i className="mtrl-select"></i>
                      </div>
                      <div className="submit-btns">
                        <button className="mtr-btn signup" type="button">
                          <i className="fa fa-paper-plane"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="cntct-adres">
                    <h3>contact info</h3>
                    <ul>
                      <li>
                        <i className="ti-location-pin"></i>
                        <span>
                          360 king street feasterville trevose, PA 19054
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-mobile-phone"></i>
                        <span>(800) 900-200-300</span>
                      </li>
                      <li>
                        <i className="fa fa-envelope-o"></i>
                        <span>
                          <a
                            href="https://wpkixx.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="cba2a5ada48bb2a4beb9a6aaa2a7e5a8a4a6"
                          >
                            [email&#160;protected]
                          </a>
                        </span>
                      </li>
                    </ul>
                    <ul className="social-media">
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-facebook-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-google-plus-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-pinterest-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-twitter-square"></i>
                        </a>
                      </li>
                    </ul>
                    <h1 className="bg-cntct">Winku</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="side-panel">
        <h4 className="panel-title">General Setting</h4>
        <form method="post">
          <div className="setting-row">
            <span>use night mode</span>
            <input type="checkbox" id="nightmode1" />
            <label
              for="nightmode1"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div className="setting-row">
            <span>Notifications</span>
            <input type="checkbox" id="switch22" />
            <label
              for="switch22"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div className="setting-row">
            <span>Notification sound</span>
            <input type="checkbox" id="switch33" />
            <label
              for="switch33"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div className="setting-row">
            <span>My profile</span>
            <input type="checkbox" id="switch44" />
            <label
              for="switch44"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div className="setting-row">
            <span>Show profile</span>
            <input type="checkbox" id="switch55" />
            <label
              for="switch55"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
        </form>
        <h4 className="panel-title">Account Setting</h4>
        <form method="post">
          <div className="setting-row">
            <span>Sub users</span>
            <input type="checkbox" id="switch66" />
            <label
              for="switch66"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div className="setting-row">
            <span>personal account</span>
            <input type="checkbox" id="switch77" />
            <label
              for="switch77"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div className="setting-row">
            <span>Business account</span>
            <input type="checkbox" id="switch88" />
            <label
              for="switch88"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div className="setting-row">
            <span>Show me online</span>
            <input type="checkbox" id="switch99" />
            <label
              for="switch99"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div className="setting-row">
            <span>Delete history</span>
            <input type="checkbox" id="switch101" />
            <label
              for="switch101"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
          <div className="setting-row">
            <span>Expose author name</span>
            <input type="checkbox" id="switch111" />
            <label
              for="switch111"
              data-on-label="ON"
              data-off-label="OFF"
            ></label>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
