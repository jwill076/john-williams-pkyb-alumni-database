import "../About/About.scss";
import GraduationIcon from "../../assets/icons/graduation.svg";
import { Link } from 'react-router-dom';
import React from "react";

function About() {
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
                        <Link to="/home" className="flexbox2__home-link">
                            <p className="link__home-text">
                                Home
                            </p>
                        </Link>
                    </section>

                    <section className="flexbox2__about-container">
                        <Link to="/about" className="flexbox2__about-link">
                            <p className="link__about-text">
                                About
                            </p>
                        </Link>
                    </section>
                </article>
            </header>
            
            <article className="about__flexbox-background">
                <article className="about__flexbox">
                    <section className="flexbox1__mission">
                        <h1 className="mission__title">
                            Mission Statement
                        </h1>

                        <p className="mission__text">
                            Pocket Yearbook is the innovative solution for staying
                            connected with your school, classmates, and alumni. Our
                            mission is to give every student access to all of their
                            priceless school memories and connections in a fun,
                            organized, easily accessible, virtual application.
                        </p>

                        <div className="mission__icon-container">
                            <div className="mission__icon-container1">
                                <img
                                    className="graduation__icon"
                                    src={GraduationIcon}
                                    alt="Graduation Icon"
                                />
                            </div>

                            <div className="mission__icon-container2">
                                <img
                                    className="graduation__icon"
                                    src={GraduationIcon}
                                    alt="Graduation Icon"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="flexbox2__contact">
                        <h2 className="contact__title">
                            Contact
                        </h2>

                        <p className="contact__text">
                            Our customer service is here for your every need!
                        </p>

                        <section className="contact__button-container">
                            <Link to="/contact" className="contact__link">
                                <button
                                    className="contact__button"
                                    type="submit"
                                    id="contact__button">
                                        CONTACT US
                                </button>
                            </Link>
                        </section>
                    </section>
                </article>
            </article>
        </>
    )
}

export default About