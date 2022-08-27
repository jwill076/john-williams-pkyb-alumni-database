import AddressIcon from "../../assets/icons/address.svg";
import EmailIcon from "../../assets/icons/email.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import GraduationIcon from "../../assets/icons/graduation.svg";
import "../Contact/Contact.scss";
import { Link } from 'react-router-dom';
import React from "react";

function Contact() {
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
            
            <article className="contact__flexbox-background">
                <article className="contact__flexbox">
                    <section className="flexbox1__contact">
                        <h1 className="contact__title">
                            Contact
                        </h1>

                        <section className="contact__info">
                            <div className="info__address-container">
                                <div className="address__title-container">
                                    <div className="title__icon-container">
                                        <img
                                            className="title__icon"
                                            src={AddressIcon}
                                            alt="Address Icon"
                                        />
                                    </div>
                                        
                                    <h3 className="address__title">
                                        Address
                                    </h3>
                                </div>

                                <p className="address__text">
                                    88 Pinecrest Drive, Coral Gables, FLA, 33152
                                </p>
                            </div>

                            <div className="info__email-container">
                                <div className="email__title-container">
                                    <div className="title__icon-container">
                                        <img
                                            className="title__icon"
                                            src={EmailIcon}
                                            alt="Email Icon"
                                        />
                                    </div>

                                    <h3 className="email__title">
                                        Email
                                    </h3>
                                </div>

                                <p className="email__text1">
                                    customerservice@pocketyearbook.com
                                </p>

                                <div className="email__text2-flexbox">
                                    <p className="email__text2">
                                        customerservice
                                    </p>

                                    <p className="email__text2">
                                        @pocketyearbook.com
                                    </p>
                                </div>
                            </div>
                            
                            <div className="info__phone-container">
                                <div className="phone__title-container">
                                    <div className="title__icon-container">
                                        <img
                                            className="title__icon"
                                            src={PhoneIcon}
                                            alt="Phone Icon"
                                        />
                                    </div>

                                    <h3 className="phone__title">
                                        Phone    
                                    </h3>
                                </div>

                                <p className="phone__text">
                                    305-896-9124
                                </p>
                            </div>
                        </section>

                        <div className="contact__icon-container">
                            <img
                                className="graduation__icon"
                                src={GraduationIcon}
                                alt="Graduation Icon"
                            />
                        </div>
                    </section>

                    <section className="flexbox2__mission">
                        <h2 className="mission__title">
                            Mission Statement
                        </h2>

                        <p className="mission__text">
                            Our mission is to keep our schools and
                            communities connected for years to come!
                        </p>

                        <section className="mission__button-container">
                            <Link to="/about" className="mission__link">
                                <button
                                    className="mission__button"
                                    type="submit"
                                    id="mission__button">
                                        LEARN MORE
                                </button>
                            </Link>
                        </section>
                    </section>
                </article>
            </article>
        </>
    )
}

export default Contact