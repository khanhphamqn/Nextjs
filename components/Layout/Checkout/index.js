import React, {Component} from 'react';
import './sass/style.scss';

class Checkout extends Component {
    render() {
        return(
            <div className="site-nav-checkout slide-right" tabIndex="-1">
                <div className="site-nav-checkout-overlay"></div>
                <div className="site-nav-checkout-inner">
                    <div className="site-nav-checkout-header">
                        <div className="checkout-header-title">Your Cart</div>
                        <div className="checkout-header-close">
                            <button type="button" className="close-menu">
                            <span className="fa fa-times" aria-hidden="true"></span>
                            <span className="fallback-text">Close Cart</span>
                            </button>
                        </div>
                    </div>
                    <div className="site-nav-checkout-body">
                        <div className="checkout-cart">
                            <form action="/cart" method="post" noValidate="" className="cart ajaxcart">
                                <div className="checkout-cart-content">
                                    <div className="checkout-cart-product">
                                        <div className="product-row" data-line="1">
                                            <div className="grid">
                                                <div className="grid__item">
                                                    <a href="/products/worlds-strongest-coffee?variant=36163388173" className="ajaxcart__product-image"><img src="https://cdn.shopify.com/s/files/1/0271/7209/products/death_wish_coffee_ground_angle_large.jpg?v=1544636899" alt="Death Wish Coffee"/></a>
                                                </div>
                                                <div className="grid__item">
                                                    <div className="product-name">
                                                        <a href="/products/worlds-strongest-coffee?variant=36163388173" className="product-name-link">Death Wish Coffee</a>
                                                        <span className="product-name-meta">Ground / 1 Pound</span>
                                                    </div>
                                                    <div className="grid-table">
                                                        <div className="grid-table__item">
                                                            <div className="product-qty">
                                                                <button type="button" className="btn-minus" data-id="36163388173" data-qty="2" data-line="1">
                                                                <span className="fa fa-minus" aria-hidden="true"></span>
                                                                <span className="fallback-text">−</span>
                                                                </button>
                                                                <input type="text" name="updates[]" className="ajaxcart__qty-num" data-handle="worlds-strongest-coffee" defaultValue="3" min="0" data-id="36163388173" data-line="1" aria-label="quantity" pattern="[0-9]*"/>
                                                                <button type="button" className="btn-plus" data-id="36163388173" data-line="1" data-qty="4">
                                                                <span className="fa fa-plus" aria-hidden="true"></span>
                                                                <span className="fallback-text">+</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="grid-table__item text-right">
                                                            <button type="button" className="btn-remove" data-id="36163388173" data-line="1" title="Remove">
                                                            <span className="fa fa-times" aria-hidden="true"></span>
                                                            <span className="fallback-text">Remove Item</span>
                                                            </button>
                                                            <span className="price">
                                                            $19.99
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-cart-footer">
                                    <div className="grid-table">
                                        <div className="grid-table__item text-left">
                                            <p className="checkout-cart-subtotal">Subtotal</p>
                                        </div>
                                        <div className="grid-table__item text-right">
                                            <p className="checkout-cart-mount">$59.97</p>
                                        </div>
                                    </div>
                                    <button className="btn btn-danger" name="checkout-mod">
                                    Check Out →
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Checkout;

