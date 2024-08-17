/* eslint-disable no-undef */
import React from "react";
import styles from "../Styles/Contact.module.css";
import me from "../Images/mysef.jpg";
import saloma from "../Images/saloma.jpg";
import norty from "../Images/norty.jpg";
import khokha from "../Images/khokha.jpg";
import aboutus from "../Images/aboutus.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Contactus() {
  return (
    <>
      {" "}
      {/* header  */}
      <div className={styles.header}>
        <div className={styles.container}>
          <h1>Meet Our Team</h1>
        </div>
      </div>
      {/* about us  */}
      <div className={styles.aboutUs}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.teamImg}>
                <img src={me} alt="Rewaa Gaber" />
              </div>
              <div className={styles.content}>
                <h4>Rewaa Gaber</h4>
                <h5>Front-End</h5>
              </div>
              <div className={styles.social}>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>{" "}
                <a href="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.teamImg}>
                <img src={saloma} alt="Salma Assem" />
              </div>
              <div className={styles.content}>
                <h4>Salma Assem</h4>
                <h5>Front-End</h5>
              </div>
              <div className={styles.social}>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a><a href="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.teamImg}>
                <img src={norty} alt="Nour Noaman" />
              </div>
              <div className={styles.content}>
                <h4>Nour Noaman</h4>
                <h5>Front-End</h5>
              </div>
              <div className={styles.social}>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a><a href="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.teamImg}>
                <img src={khokha} alt="Khoulod Khaled" />
              </div>
              <div className={styles.content}>
                <h4>Khoulod Khaled</h4>
                <h5>Front-End</h5>
              </div>
              <div className={styles.social}>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* about website */}
      <div className={styles.header}>
        <div className={styles.container}>
          <h1>Explore Our Book Collection</h1>
        </div>
      </div>
      <Card className="container" sx={{ maxWidth: 1000 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={aboutus}
          title="green iguana"
          className={styles.CardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BookHub
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome to our website, your ultimate destination for discovering
            and purchasing a diverse range of books. Whether you're an avid
            reader seeking your next great adventure, a student in search of
            academic texts, or someone looking for the perfect gift, we offer an
            extensive collection that caters to all tastes and needs. From
            bestsellers to hidden gems, our curated selection ensures you'll
            find something that piques your interest. Enjoy a seamless shopping
            experience with detailed book descriptions, user reviews, and easy
            navigation, all designed to make your reading journey enjoyable and
            rewarding.
          </Typography>
        </CardContent>
        <CardActions>
  <Button size="small" sx={{ color: 'white', backgroundColor: '#74593b', '&:hover': { backgroundColor: '#a0937d' } }}>Share</Button>
  <Button size="small" sx={{ color: 'white', backgroundColor: '#74593b', '&:hover': { backgroundColor: '#a0937d' } }}>Learn More</Button>
</CardActions>
      </Card>
    </>
  );
}
