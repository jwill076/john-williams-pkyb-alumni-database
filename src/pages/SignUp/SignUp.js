import UsernameIcon from "../../assets/icons/avatar.svg";
import EmailIcon from "../../assets/icons/email.svg";
import PasswordIcon from "../../assets/icons/password.svg";
import SchoolIcon from "../../assets/icons/college.svg";
import YearIcon from "../../assets/icons/year.svg";
import GraduationIcon from "../../assets/icons/graduation.svg";
import "../SignUp/SignUp.scss";
import { Link } from 'react-router-dom';
import React from "react";

function SignUp() {
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

            <article className="sign-up__flexbox-background">
                <article className="sign-up__flexbox">
                    <section className="flexbox1__sign-up">
                        <h1 className="sign-up__title">
                            Create Account
                        </h1>

                        <section className="sign-up__input-container">
                            <section className="input-container__flexbox1">
                                <div className="flexbox1__username-email">
                                    <section className="flexbox1__username">
                                        <div className="username__icon-container">
                                            <img
                                                className="username__icon"
                                                src={UsernameIcon}
                                                alt="Username Icon"
                                            />
                                        </div>

                                        <input
                                            className="username__input"
                                            type="text"
                                            name="username__input"
                                            id="username__input"
                                            placeholder="Username"
                                        ></input>
                                    </section>

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
                                </div>
                        
                                <div className="flexbox1__password-school">
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

                                    <section className="flexbox1__school">
                                        <div className="school__icon-container">
                                            <img
                                                className="school__icon"
                                                src={SchoolIcon}
                                                alt="School Icon"
                                            />
                                        </div>

                                        <input
                                            className="school__input"
                                            type="text"
                                            name="school__input"
                                            id="school__input"
                                            placeholder="School"
                                        ></input>
                                    </section>
                                </div>
                            </section>

                            <section className="input-container__flexbox2">
                                <section className="flexbox2__year">
                                    <div className="year__icon-container">
                                        <img
                                            className="year__icon"
                                            src={YearIcon}
                                            alt="Year Icon"
                                        />
                                    </div>

                                    <input
                                        className="year__input"
                                        type="text"
                                        name="year__input"
                                        id="year__input"
                                        placeholder="Year"
                                    ></input>
                                </section>

                                <section className="flexbox2__name">
                                    <div className="name__icon-container">
                                        <img
                                            className="name__icon"
                                            src={UsernameIcon}
                                            alt="Name Icon"
                                        />
                                    </div>

                                    <input
                                        className="name__input"
                                        type="text"
                                        name="name__input"
                                        id="name__input"
                                        placeholder="Name"
                                    ></input>
                                </section>
                            </section>
                        </section>

                        <button className="sign-up__button">
                            <Link to="/home" className="sign-up__link">
                                <section className="sign-up__text-container">
                                    <p className="sign-up__text">
                                        SIGN UP
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

                    <section className="flexbox2__sign-in">
                        <h2 className="sign-in__title">
                            Welcome Back!
                        </h2>

                        <p className="sign-in__text">
                            To keep you connected with us please login with your personal information.
                        </p>

                        <section className="sign-in__button-container">
                            <Link to="/home" className="sign-in__link">
                                <button className="sign-in__button"
                                        type="submit"
                                        id="sign-in__button">
                                            SIGN IN
                                </button>
                            </Link>
                        </section>
                    </section>
                </article>
            </article>
        </>
    )
}

export default SignUp