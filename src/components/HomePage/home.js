import "../../App.css";
import {
  Button,
  Paragraph,
  H1,
  UL,
  LI,
  A,
  H2,
  H3,
  H4,
} from "../../styleComponents";
import {
  BsFillBookmarkStarFill,
  BsFillStarFill,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFillEmojiLaughingFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiAngryFill,
  BsFillAlarmFill,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsBuilding,
  BsFacebook,
} from "react-icons/bs";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainHeader from "../MainHeader";

const Home = () => {
  return (
    <div className="App">
      <section className="header">
        <nav>
          <div className="logo">
            <a href="index.html">
              <H2>
                <span id="part1">Rate My</span>
                <span id="part2"> Professor</span>
              </H2>
            </a>
          </div>
          <MainHeader></MainHeader>
          {/* <i className="fa fa-bars" onClick="showmenu()"></i> */}
        </nav>

        <div className="text-box">
          <H1>
            <BsFillEmojiLaughingFill></BsFillEmojiLaughingFill>{" "}
            <BsFillEmojiNeutralFill></BsFillEmojiNeutralFill>{" "}
            <BsFillEmojiFrownFill></BsFillEmojiFrownFill>{" "}
            <BsFillEmojiHeartEyesFill></BsFillEmojiHeartEyesFill>{" "}
            <BsFillEmojiAngryFill></BsFillEmojiAngryFill>
          </H1>

          <Paragraph>
            Give 5 Star rating to ypur professor. Because you are learning at
            your college for pursue your career in better direct.<br></br>
            But they are struggling more to provide you better education.
            <br></br>
            Just say thank you to them by providing ratings here.
          </Paragraph>
          <a href="table.html" className="visit-btn">
            RATING
          </a>
        </div>
      </section>
      <Container>
        <H1>Start Rating Your Professor</H1>
        <Paragraph>
          Rate your professors anonymously and provide your valuable feedbacks
          that could help.<br></br>
          Students around the world to choose their universities based on their
          ratings.
        </Paragraph>

        <H1>Top Professors</H1>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <div className="card">
              <img src={"/images/prof1.jpg"} style={{ width: "100%" }} />
              <div className="container">
                <H3>Jane Doe</H3>
                <p className="title">Information Technology</p>
                <p>
                  Expertise:database systems; data quality; data privacy; data
                  analytics; information extraction; text mining.ssociate
                  Professor in the Department of Computing and Software, Faculty
                  of Engineering. Her research interests are broadly in the area
                  of data management, with a focus on data quality, data
                  analytics, data privacy, text mining, and information
                  extraction. She has worked at IBM Global Services.
                </p>
                <p>Jane@gmail.com</p>
                <p>
                  <button className="button">Give Ratings</button>
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="card">
              <img src={"/images/prof2.jpg"} style={{ width: "100%" }} />
              <div className="container">
                <H3>Mike Ross</H3>
                <p className="title">Civil & Architecture</p>
                <p>
                  I am an assistant professor at McMaster University. Before
                  joining McMaster University, I was a Principal Researcher at
                  Huawei Technologies Canada, Co., Ltd. During 2015~2018, I
                  successfully led 7+ research projects as a Postdoctoral Fellow
                  at Simon Fraser University. I obtained my Ph.D. degree in
                  Computer Science from University of Chinese Academy of
                  Sciences in June 2015.
                </p>
                <p>mike@gmail.com</p>
                <p>
                  <button className="button">Give Ratings</button>
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="card">
              <img src={"/images/prof3.jpg"} style={{ width: "100%" }} />
              <div className="container">
                <H3>John Doe</H3>
                <p className="title">Fluid Chemical</p>
                <p>
                  Currently, my focus is on the development of scalable
                  resilient systems that can manage data and processing complex
                  transactions, while providing strong guarantees toward users
                  in the presence of faulty behavior (e.g., hardware failures,
                  software failures, and malicious attacks). Furthermore, I work
                  on database theory, on semi-structured data with a main focus
                  on graph databases.
                </p>
                <p>john@gmail.com</p>
                <p>
                  <button className="button">Give Ratings</button>
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* <div className="row">
    <div className="column">
      <div className="card">
        <img src={"/images/prof1.jpg"} style={{ width: "100%" }} />
        <div className="container">
          <H3>Jane Doe</H3>
          <p className="title">Information Technology</p>
          <p>
            Expertise:database systems; data quality; data privacy; data
            analytics; information extraction; text mining.ssociate
            Professor in the Department of Computing and Software, Faculty
            of Engineering. Her research interests are broadly in the area
            of data management, with a focus on data quality, data
            analytics, data privacy, text mining, and information
            extraction. She has worked at IBM Global Services.
          </p>
          <p>Jane@gmail.com</p>
          <p>
            <button className="button">Give Ratings</button>
          </p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img src={"/images/prof2.jpg"} style={{ width: "100%" }} />
        <div className="container">
          <H3>Mike Ross</H3>
          <p className="title">Civil & Architecture</p>
          <p>
            I am an assistant professor at McMaster University. Before
            joining McMaster University, I was a Principal Researcher at
            Huawei Technologies Canada, Co., Ltd. During 2015~2018, I
            successfully led 7+ research projects as a Postdoctoral Fellow
            at Simon Fraser University. I obtained my Ph.D. degree in
            Computer Science from University of Chinese Academy of
            Sciences in June 2015.
          </p>
          <p>mike@gmail.com</p>
          <p>
            <button className="button">Give Ratings</button>
          </p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img src={"/images/prof3.jpg"} style={{ width: "100%" }} />
        <div className="container">
          <H3>John Doe</H3>
          <p className="title">Fluid Chemical</p>
          <p>
            Currently, my focus is on the development of scalable
            resilient systems that can manage data and processing complex
            transactions, while providing strong guarantees toward users
            in the presence of faulty behavior (e.g., hardware failures,
            software failures, and malicious attacks). Furthermore, I work
            on database theory, on semi-structured data with a main focus
            on graph databases.
          </p>
          <p>john@gmail.com</p>
          <p>
            <button className="button">Give Ratings</button>
          </p>
        </div>
      </div>
    </div>
  </div> */}

        <H1>Get In Touch</H1>
        <div className="contact-section">
          <div className="contact-info">
            <div>
              <BsBuilding></BsBuilding> Golden Square, Near Parle Point, Surat
            </div>
            <div>
              <BsFillEnvelopeFill></BsFillEnvelopeFill> ratinginfo@email.com
            </div>
            <div>
              <BsFillTelephoneFill></BsFillTelephoneFill> +91 8320650059
            </div>
            <div>
              <BsFillAlarmFill></BsFillAlarmFill> 24/7 services available
            </div>
          </div>
          <div className="contact-form">
            <form className="contact" action="" method="post">
              <input
                type="text"
                name="name"
                className="text-box1"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                className="text-box1"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <input
                type="submit"
                name="submit"
                className="send-btn"
                value="Send"
              />
            </form>
          </div>
        </div>
        <footer id="footer">
          <div className="footer-top">
            <div className="row">
              <div className="links">
                <div className="address">
                  <h3>Rate My Professor</h3>
                  <ul>
                    <li>Golden Square</li>
                    <li> Center parle poin,Surat</li>
                    <li>Phone: +91 9016646464</li>
                    <li>Email: info@example.com</li>
                  </ul>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <BsTwitter></BsTwitter>
                    </a>
                    <a href="#" className="facebook">
                      <BsFacebook></BsFacebook>
                    </a>
                    <a href="#" className="instagram">
                      <BsInstagram></BsInstagram>{" "}
                    </a>
                    <a href="#" className="linkedin">
                      <BsLinkedin></BsLinkedin>
                    </a>
                  </div>
                  <div className="links">
                    <div className="col-lg-4 col-md-6 footer-newsletter">
                      <h4>Our Newsletter</h4>

                      <form action="" method="post">
                        <input type="email" name="email" />
                        <input type="submit" value="Subscribe" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="copyright">
                &copy; Copyright <span>Rate My Professor</span>. All Rights
                Reserved
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Home;
