import React, {Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Checkout from './Checkout';

class Layout extends Component {
	render() {
		return(
			<div>
                <Nav/>
                <Checkout/>
                <div className="Page-Container">
                    <Header/>
                    {this.props.children}
                    <Footer/>
                </div>
                <style jsx global>{`
                    
                `}</style>
            </div>
		)
	}
}

export default Layout;