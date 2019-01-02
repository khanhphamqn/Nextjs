import React, {Component} from 'react';
import './sass/style.scss';

class Footer extends Component {
	render() {
		return(
			<div className="Footer">
                <article className="col-lg-12 col-md-12 col-sm-12">
                    <footer>
                        <p>Public Library © <em id="copyright-year">2018</em> All Rights Reserved | <a href="index-5.html">Privacy Policy</a></p>
                        <ul>
                            <li><a href="#" className="fa fa-twitter"></a></li>
                            <li><a href="#" className="fa fa-facebook"></a></li>
                            <li><a href="#" className="fa fa-google-plus"></a></li>
                        </ul>
                    </footer>
                </article>
            </div>
		)
	}
}

export default Footer;