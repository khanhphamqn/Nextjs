import React, {Component} from 'react';
import './sass/style.scss';
import LazyLoad from '../LazyLoad';

class Item extends Component {
	render() {
        const { 
            data,
            mapData 
        } = this.props;
		return(
			<div className="thumb-outer">
				<div className="box_inner">
                    <strong>new</strong>
                    <div className="thumbnail">
                        <figure>
                            <LazyLoad imageSrc={data[mapData.imgUrl]}>{(Url) =>
                                <img className="animated fadeIn" src={Url} alt=""/>
                            }</LazyLoad>
                        </figure>
                        <div className="caption">
                            <a href="#">{data[mapData.author]}</a>
                            <br/>
                            <hr/>
                            <p>{data[mapData.title]}</p>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default Item;