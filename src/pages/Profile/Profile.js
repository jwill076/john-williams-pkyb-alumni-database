import "../Profile/Profile.scss";
//import AvatarIcon from "../../assets/icons/avatar.svg";
import FaceBookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import CollegeIcon from "../../assets/icons/college.svg";
import CareerIcon from "../../assets/icons/career.svg";
import { Link } from 'react-router-dom';
import Profiles from "../../data/profiles.json";
import React from "react";

class Profile extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            profiles: [],
            filteredProfile: [],
            loaded: true,
        };
    }

    componentDidMount() {
        let selectedProfileId = this.props.match.params.id;

        const selectedProfile = Profiles.filter((profile) => selectedProfileId === profile.id);

        this.setState({
            filteredProfile: selectedProfile[0]
        });
    }

    render() {
        const { name, username, email, school, year, image, college, quote, career } = this.state.filteredProfile;

        if (this.state.loaded) {
            return (
                <>
                    <header className="header">
                        <article className="header__flexbox1">
                            <section className="flexbox1__logo-container">
                                <Link to="/home" className="flexbox1__logo-link">
                                    <img
                                        className="flexbox1__logo"
                                        src={"http://localhost:8080/images/Pocket-Yearbook-Logo-No-Background.png"}
                                        alt="Pocket Yearbook Logo"
                                    />
                                </Link>
                            </section>

                            <h1 className="flexbox1__title">
                                Alumni Database
                            </h1>
                        </article>

                        <article className="header__flexbox2">
                            <section className="flexbox2__home-container">
                                <Link to="/profile" className="flexbox2__home-link">
                                    <p className="link__home-text">
                                        Profile
                                    </p>
                                </Link>
                            </section>

                            <section className="flexbox2__about-container">
                                <Link to="/gallery" className="flexbox2__about-link">
                                    <p className="link__about-text">
                                        Gallery
                                    </p>
                                </Link>
                            </section>
                        </article>
                    </header>

                    <article className="profile">
                        <section className="profile__flexbox1">
                            <section className="flexbox1__avatar-quote">
                                <div className="avatar__image-container">
                                    <img src={image}
                                         className="avatar__image"
                                         alt="Avatar" />
                                </div>

                                <p className="quote__text">
                                    {quote}
                                </p>
                            </section>

                            <section className="flexbox1__contact-info">
                                <div className="contact-info__container1">
                                    <div className="contact-info__title-username">
                                        <h2 className="contact-info__title">
                                            {name}
                                        </h2>

                                        <p className="contact-info__username">
                                            @{username}
                                        </p>
                                    </div>

                                    <section className="contact-info__social-media">
                                        <a href="https://www.facebook.com/" className="social-media__anchor">
                                            <img src={FaceBookIcon}
                                                    className="anchor__icon"
                                                    alt="Facebook Icon" />
                                        </a>

                                        <a href="https://www.instagram.com/" className="social-media__anchor">
                                            <img src={InstagramIcon}
                                                    className="anchor__icon"
                                                    alt="Instagram Icon" />
                                        </a>
                                    
                                        <a href="https://www.twitter.com/" className="social-media__anchor">
                                            <img src={TwitterIcon}
                                                    className="anchor__icon"
                                                    alt="Twitter Icon" />
                                        </a>    

                                        <a href="https://www.linkedin.com/" className="social-media__anchor">
                                            <img src={LinkedInIcon}
                                                    className="anchor__icon"
                                                    alt="LinkedIn Icon" />
                                        </a>
                                    </section>
                                </div>

                                <div className="contact-info__container2">
                                    <p className="contact-info__email">
                                        Email: {email}
                                    </p>

                                    <div className="contact-info__school-year">
                                        <p className="contact-info__school">
                                            School: {school}
                                        </p>

                                        <p className="contact-info__year">
                                            Year: {year}
                                        </p>
                                    </div>

                                    <p className="contact-info__quote">
                                        {quote}
                                    </p>
                                </div>
                            </section>
                        </section>

                        <section className="profile__flexbox2">
                            <div className="flexbox2__container1">
                                <p className="container1__email">
                                    Email: {email}
                                </p>
                                
                                <div className="container1__school-year">
                                    <p className="container1__school">
                                        School: {school}
                                    </p>

                                    <p className="container1__year">
                                        Year: {year}
                                    </p>
                                </div>
                            </div>

                            <div className="flexbox2__container2">
                                <p className="college__title">
                                    College: {college}
                                </p>

                                <p className="career__title">
                                    Career: {career}
                                </p>
                            </div>

                            <div className="flexbox2__container3">
                                <div className="container3__college">
                                    <p className="college__title">
                                        College:
                                    </p>

                                    <p className="college__text">
                                        {college}
                                    </p>

                                    <div className="college__icon-container">
                                        <img src={CollegeIcon}
                                             className="college-icon"
                                             alt="College Icon" />
                                    </div>
                                </div>
                                    
                                <div className="container3__career">
                                    <p className="career__title">
                                        Career:
                                    </p>

                                    <p className="career__text">
                                        {career}
                                    </p>

                                    <div className="career__icon-container">
                                        <img src={CareerIcon}
                                             className="career__icon"
                                             alt="Career Icon" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="profile__flexbox3">
                            <a href="https://www.facebook.com/" className="social__anchor">
                                <img src={FaceBookIcon}
                                        className="social__icon"
                                        alt="Facebook Icon" />
                            </a>

                            <a href="https://www.instagram.com/" className="social__anchor">
                                <img src={InstagramIcon}
                                        className="social__icon"
                                        alt="Instagram Icon" />
                            </a>

                            <a href="https://www.twitter.com/" className="social__anchor">
                                <img src={TwitterIcon}
                                        className="social__icon"
                                        alt="Twitter Icon" />
                            </a>    

                            <a href="https://www.linkedin.com/" className="social__anchor">
                                <img src={LinkedInIcon}
                                        className="social__icon"
                                        alt="LinkedIn Icon" />
                            </a>
                        </section>
                    </article>
                </>
            );
        }   return <h1>Loading...</h1>;
    }
}

export default Profile;