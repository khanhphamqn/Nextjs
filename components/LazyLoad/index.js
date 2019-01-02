import React from 'react';
import PropTypes from 'prop-types';
import './css/style.scss';

class LazyLoad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
        }
    }
    componentDidMount () {
        let that = this;
        let newImg = new Image();
        newImg.onload = function() {
            that.setState({
                url: this.src
            })
        }
        newImg.src = that.props.imageSrc;
	}
    render() {
        const {url} = this.state;
        const { style, children } = this.props;
		return (
			<div className="lazy-load" style={style}>
				{!url ? (<div className="lazy-spinner"></div>) : children(this.state.url)}
			</div>
		);
	}
}

export default LazyLoad