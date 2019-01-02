import React, {Component} from 'react';
import './sass/style.scss';

class Header extends Component {
    render() {
        return(
            <header className="site-header" role="banner">
                <div className="site-header-inner">
                    <div className="grid-table">
                        <div className="grid-table__item d-md-none">
                            <div className="site-nav--mobile navbar-light">
                                <button className="navbar-toggler" type="button" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                        <div className="grid-table__item grid-table__item--2">
                            <div className="site-logo">
                                <a href="https://www.deathwishcoffee.com" className="site-header__logo-link">
                                    <img src="//cdn.shopify.com/s/files/1/0271/7209/t/110/assets/logo_svg.svg?1361146811775311463" alt="Death Wish Coffee Company"/>
                                </a>
                            </div>
                        </div>
                        <div className="grid-table__item hide-on-md">
                            <ul className="site-nav nav justify-content-center">
                                <li className="site-nav__item" aria-haspopup="true">
                                    <ul className="site-nav__dropdown list-unstyled text-left">
                                        <li>
                                            <a href="/collections/death-wish-coffee" className="site-nav__dropdown-link nav-link">Coffee</a>
                                        </li>
                                        <li>
                                            <a href="/collections/death-wish-merchandise" className="site-nav__dropdown-link nav-link">Merch</a>
                                        </li>
                                        <li>
                                            <a href="/collections/bundles" className="site-nav__dropdown-link nav-link">Bundles</a>
                                        </li>
                                        <li>
                                            <a href="/collections/subscriptions" className="site-nav__dropdown-link nav-link">Subscriptions</a>
                                        </li>
                                        <li>
                                            <a href="https://www.dwccwholesale.com/" className="site-nav__dropdown-link nav-link">Wholesale</a>
                                        </li>
                                        <li>
                                            <a href="https://www.deathwishcoffee.com/apps/store-locator/" className="site-nav__dropdown-link nav-link">Store Locator</a>
                                        </li>
                                    </ul>
                                    <a href="#" className="site-nav__link nav-link">
                                        Shop
                                        <span className="fa fa-caret-down" aria-hidden="true"></span>
                                    </a>
                                </li>
                                <li className="site-nav__item">
                                    <a href="https://deathwishcoffeehelp.zendesk.com/hc/en-us" className="site-nav__link nav-link">Contact + FAQ</a>
                                </li>
                                <li className="site-nav__item" aria-haspopup="true">
                                    <ul className="site-nav__dropdown list-unstyled text-left">
                                        <li>
                                            <a href="/blogs/news" className="site-nav__dropdown-link nav-link">Blog</a>
                                        </li>
                                        <li>
                                            <a href="/collections/fueled-by-death-cast" className="site-nav__dropdown-link nav-link">Podcast</a>
                                        </li>
                                        <li>
                                            <a href="https://www.deathwishcoffee.com/collections/deathwish-contests" className="site-nav__dropdown-link nav-link">Contests</a>
                                        </li>
                                        <li>
                                            <a href="/pages/rewards-program" className="site-nav__dropdown-link nav-link">Reward</a>
                                        </li>
                                        <li>
                                            <a href="https://www.deathwishcoffee.com/blogs/recipes" className="site-nav__dropdown-link nav-link">Recipes</a>
                                        </li>
                                    </ul>
                                    <a href="#" className="site-nav__link nav-link">
                                        Explore
                                        <span className="fa fa-caret-down" aria-hidden="true"></span>
                                    </a>
                                </li>
                                <li className="site-nav__item">
                                    <a href="/pages/company-1" className="site-nav__link nav-link">About</a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid-table__item grid-table__item--3">
                            <ul className="site-nav-util nav">
                                <li className="site-nav-util__item">
                                    <a className="site-nav__link nav-link" href="/account">
                                        <span className="fa fa-user" aria-hidden="true"></span>
                                        <span className="fallback-text">Log In</span>
                                    </a>
                                </li>
                                <li className="site-nav-util__item ">
                                    <a href="/search" className="site-nav__link nav-link">
                                        <span className="fa fa-search" aria-hidden="true"></span>
                                        <span className="fallback-text">Search</span>
                                    </a>
                                </li>
                                <li className="site-nav-util__item">
                                    <a href="/cart" className="site-nav__link site-nav__link__cart nav-link" aria-controls="CartDrawer" aria-expanded="true">
                                        <span className="fa fa-shopping-cart" aria-hidden="true"></span>
                                        <span className="fallback-text">Cart</span>
                                        <span className="cart-link__bubble"></span>
                                    </a>
                                    <div id="igFlag"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;

