import React, {Component} from 'react';
import './sass/style.scss';

class Nav extends Component {
    render() {
        return(
            <div className="site-nav-mob slide--left" tabIndex="-1">
                <div className="site-nav-mob-overlay"></div>
                <div className="site-nav-mob-inner">
                    <div className="site-nav-mob-header">
                        <div className="site-nav-mob-header__close">
                            <button type="button" className="close-menu">
                                <span className="fa fa-times" aria-hidden="true"></span>
                                <span className="fallback-text">Close menu</span>
                            </button>
                        </div>
                    </div>
                    <div className="site-nav-mob-body">
                        <ul className="mobile-nav nav flex-column">
                            <li className="mobile-nav__item" aria-haspopup="true">
                                <div className="mobile-nav__has-sublist mobile-nav--expanded">
                                    <a href="#" className="mobile-nav__link main-nav" data-activator="#">Shop</a>
                                    <div className="mobile-nav__toggle">
                                        <button type="button" className="icon-fallback-text">
                                        <span className="icon-fallback-text mobile-nav__toggle-open">
                                            <span className="fa fa-plus" aria-hidden="true"></span>
                                            <span className="fallback-text">See More</span>
                                        </span>
                                        <span className="icon-fallback-text mobile-nav__toggle-close">
                                            <span className="fa fa-minus" aria-hidden="true"></span>
                                            <span className="fallback-text">Close Cart</span>
                                        </span>
                                        </button>
                                    </div>
                                </div>
                                <ul className="mobile-nav__sublist">
                                    <li className="mobile-nav__item">
                                        <a href="/collections/death-wish-coffee" className="mobile-nav__link">Coffee</a>
                                    </li>
                                    <li className="mobile-nav__item">
                                        <a href="/collections/death-wish-merchandise" className="mobile-nav__link">Merch</a>
                                    </li>
                                    <li className="mobile-nav__item">
                                        <a href="/collections/bundles" className="mobile-nav__link">Bundles</a>
                                    </li>
                                    <li className="mobile-nav__item">
                                        <a href="/collections/subscriptions" className="mobile-nav__link">Subscriptions</a>
                                    </li>
                                    <li className="mobile-nav__item">
                                        <a href="https://www.dwccwholesale.com/" className="mobile-nav__link">Wholesale</a>
                                    </li>
                                    <li className="mobile-nav__item">
                                        <a href="https://www.deathwishcoffee.com/apps/store-locator/" className="mobile-nav__link">Store Locator</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mobile-nav__item">
                                <a href="https://deathwishcoffeehelp.zendesk.com/hc/en-us" className="mobile-nav__link">Contact + FAQ</a>
                            </li>
                            <li className="mobile-nav__item" aria-haspopup="true">
                                <div className="mobile-nav__has-sublist mobile-nav--expanded">
                                    <a href="#" className="mobile-nav__link main-nav" data-activator="#">Explore</a>
                                    <div className="mobile-nav__toggle">
                                        <button type="button" className="icon-fallback-text">
                                        <span className="icon-fallback-text mobile-nav__toggle-open">
                                            <span className="fa fa-plus" aria-hidden="true"></span>
                                            <span className="fallback-text">See More</span>
                                        </span>
                                        <span className="icon-fallback-text mobile-nav__toggle-close">
                                            <span className="fa fa-minus" aria-hidden="true"></span>
                                            <span className="fallback-text">Close Cart</span>
                                        </span>
                                        </button>
                                    </div>
                                </div>
                                <ul className="mobile-nav__sublist">
                                    <li className="mobile-nav__item">
                                        <a href="/blogs/news" className="mobile-nav__link">Blog</a>
                                    </li>
                                    <li className="mobile-nav__item">
                                        <a href="/collections/fueled-by-death-cast" className="mobile-nav__link">Podcast</a>
                                    </li>
                                    <li className="mobile-nav__item">
                                        <a href="https://www.deathwishcoffee.com/collections/deathwish-contests" className="mobile-nav__link">Contests</a>
                                    </li>
                                    <li className="mobile-nav__item">
                                        <a href="/pages/rewards-program" className="mobile-nav__link">Reward</a>
                                    </li>
                                    <li className="mobile-nav__item">
                                        <a href="https://www.deathwishcoffee.com/blogs/recipes" className="mobile-nav__link">Recipes</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mobile-nav__item">
                                <a href="/pages/company-1" className="mobile-nav__link main-nav">About</a>
                            </li>
                            <li className="mobile-nav__spacer"></li>
                            <li className="mobile-nav__item mobile-nav__item--secondary">
                                <a href="/account/login" id="customer_login_link" className="mobile-nav__link">Log In</a>
                            </li>
                            <li className="mobile-nav__item mobile-nav__item--secondary">
                                <a href="/account/register" id="customer_register_link" className="mobile-nav__link">Create Account</a>
                            </li>
                            <li className="mobile-nav__item mobile-nav__item--secondary">
                                <a href="/pages/company-1" className="mobile-nav__link">About Us</a></li>
                            <li className="mobile-nav__item mobile-nav__item--secondary">
                                <a href="/pages/why-death-wish" className="mobile-nav__link">Why Death Wish?</a></li>
                            <li className="mobile-nav__item mobile-nav__item--secondary">
                                <a href="https://deathwishcoffeehelp.zendesk.com/hc/en-us" className="mobile-nav__link">Common Questions</a>
                            </li>
                            <li className="mobile-nav__item mobile-nav__item--secondary">
                                <a href="https://deathwishcoffeehelp.zendesk.com/hc/en-us/sections/115001493747-SHIPPING-DELIVERY-INFO" className="mobile-nav__link">Shipping Details</a>
                            </li>
                            <li className="mobile-nav__item mobile-nav__item--secondary">
                                <a href="/pages/terms-conditions-1" className="mobile-nav__link">Terms &amp; Conditions</a>
                            </li>
                            <li className="mobile-nav__item mobile-nav__item--secondary">
                                <a href="https://deathwishcoffeehelp.zendesk.com/hc/en-us/requests/new" className="mobile-nav__link">Contact Us</a>
                            </li>
                            <li className="mobile-nav__item mobile-nav__item--secondary">
                                <a href="/pages/safety-notice-recall-death-wish-nitro" className="mobile-nav__link">Nitro Recall</a>
                            </li>
                            <li className="mobile-nav__item mobile-nav__item--secondary">
                                <a href="/products/death-wish-coffee" className="mobile-nav__link">Buy Coffee</a>
                            </li>
                            <li className="mobile-nav__item mobile-nav__item--secondary">
                                <a href="/pages/influencer-application" className="mobile-nav__link">Influencer Application</a>
                            </li>
                            <li className="mobile-nav__item mobile-nav__item--secondary">
                                <a href="/pages/donation-request-form" className="mobile-nav__link">Donation Request</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Nav;

