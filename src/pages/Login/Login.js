import EmailIcon from "../../assets/icons/email.svg";
import PasswordIcon from "../../assets/icons/password.svg";
import GraduationIcon from "../../assets/icons/graduation.svg";
import "../Login/Login.scss";
import { Link } from 'react-router-dom';
import React from "react";

function Login() {
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

            <article className="login__flexbox-background">
                <article className="login__flexbox">
                    <section className="login__flexbox1">
                        <h1 className="flexbox1__title">
                            Login to Your Account
                        </h1>

                        <section className="flexbox1__email">
                            <div className="email__icon-container">
                                <img
                                    className="email__icon"
                                    src={EmailIcon}
                                    alt="Email Icon"
                                />
                            </div>

                            <input
                                className="email__input"
                                type="text"
                                name="email__input"
                                id="email__input"
                                placeholder="Email"
                            ></input>
                        </section>

                        <section className="flexbox1__password">
                            <div className="password__icon-container">
                                <img
                                    className="password__icon"
                                    src={PasswordIcon}
                                    alt="Password Icon"
                                />
                            </div>

                            <input
                                className="password__input"
                                type="text"
                                name="password__input"
                                id="password__input"
                                placeholder="Password"
                            ></input>
                        </section>

                        <button className="flexbox1__button">
                            <Link to="/home" className="button__link">
                                <section className="button__text-container">
                                    <p className="button__text">
                                        SIGN IN
                                    </p>
                                </section>
                            </Link>
                        </button>

                        <div className="flexbox1__icon-container">
                            <img
                                className="graduation__icon"
                                src={GraduationIcon}
                                alt="Graduation Icon"
                            />
                        </div>
                    </section>

                    <section className="login__flexbox2">
                        <h2 className="flexbox2__title">
                            New Here?
                        </h2>

                        <p className="flexbox2__text">
                            Sign up and discover a great amount of new opportunites!
                        </p>

                        <section className="flexbox2__sign-up-button">
                            <Link to="/signup" className="sign-up-button__link">
                                <button
                                    className="sign-up-button"
                                    type="submit"
                                    id="sign-up__button">
                                        SIGN UP
                                </button>
                            </Link>
                        </section>
                    </section>
                </article>
            </article>
        </>
    )
}

export default Login