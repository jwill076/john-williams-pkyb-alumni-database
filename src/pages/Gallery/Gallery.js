import "../Gallery/Gallery.scss";
import MagnifyingGlassIcon from "../../assets/icons/search.svg";
import DropDownArrowIcon from "../../assets/icons/dropdownarrow.svg";
import SchoolIcon from "../../assets/icons/college.svg";
import YearIcon from "../../assets/icons/year.svg";
import EmailIcon from "../../assets/icons/email.svg";
import AvatarIcon from "../../assets/icons/avatar.svg";
import { Link } from 'react-router-dom';
import React from "react";
import axios from "axios";
import Profiles from "../../data/profiles.json";

class Gallery extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            ProfilesArray: Profiles,
            loaded: true,
        };
    }

    toggleFilters() {
        document.getElementById("container1__filters").classList.toggle("show-or-not-to-show");
    }

    render() {

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

                    <article className="gallery__flexbox">
                        <section className="flexbox1__search">
                            <div className="search__icon-container">
                                <img
                                    className="search__icon"
                                    src={MagnifyingGlassIcon}
                                    alt="Magnifying Glass Icon"
                                />
                            </div>

                            <input
                                className="search__input"
                                type="text"
                                name="search__input"
                                id="search__input"
                                placeholder="Search"
                            ></input>
                        </section>

                        <div className="flexbox2__advanced-filters">
                            <p className="advanced-filters__text" onClick={this.toggleFilters}>
                                Advanced Filters
                            </p>
                        </div>

                        <article className="flexbox3__container">
                            <section className="container1__filters" id="container1__filters">
                                <h1 className="filters__title">
                                    Filters
                                </h1>

                                <section className="filters__form">
                                    <div className="form__flexbox1">
                                        <section className="form__school">
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
                                                name="school_input"
                                                id="school_input"
                                                placeholder="School"
                                            ></input>

                                            <div className="school__arrow-icon-container">
                                                <img
                                                    className="school__arrow-icon"
                                                    src={DropDownArrowIcon}
                                                    alt="School Arrow Icon"
                                                />
                                            </div>
                                        </section>

                                        <section className="form__year">
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
                                    </div>
                            
                                    <div className="form__flexbox2">
                                        <section className="form__email">
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

                                        <section className="form__username">
                                            <div className="username__icon-container">
                                                <img
                                                    className="username__icon"
                                                    src={AvatarIcon}
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
                                    </div>
                                </section>

                                <button className="filters__button">
                                    <Link to="/home" className="button__link">
                                        <section className="button__text-container">
                                            <p className="button__text">
                                                SEARCH
                                            </p>
                                        </section>
                                    </Link>
                                </button>
                            </section>

                            <article className="container2__card-gallery">
                                {this.state.ProfilesArray.map((profile) => {
                                    const { id, image, name, school, year } = profile;

                                    return (
                                        <Link to={`/${id}`}
                                            key={id}
                                            className="card-gallery__links"
                                        >
                                            <section className="card-gallery__card">
                                                <div className="card__avatar-container">
                                                    <img src={image}
                                                        className="card__avatar"
                                                        alt="Avatar" />
                                                </div>

                                                <div className="card__info">
                                                    <p className="info__name">
                                                        Name: {name}
                                                    </p>

                                                    <p className="info__school">
                                                        School: {school}
                                                    </p>

                                                    <p className="info__year">
                                                        Year: {year}
                                                    </p>
                                                </div>
                                            </section>
                                        </Link>
                                    )
                                })}
                            </article>
                        </article>
                    </article>
                </>
            );
        }   return <h1>Loading...</h1>;
    }
}

export default Gallery;