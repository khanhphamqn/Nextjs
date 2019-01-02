import React , {Component} from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { fetchItems } from '../actions/Home';

const mapStateToProps = state => {
    return {
        data: state.homeReducer.data,
        loading: state.loadingReducer.status
    }
};

class Index extends React.Component {
	static async getInitialProps(props) {
		const { 
			isServer, 
			store,
		} = props;
	    await store.execSagaTasks(isServer, dispatch => {
	      	dispatch(fetchItems());
	    });
	    return {}
    }
	render(){
		return <Home {...this.props}/>
	}
}
export default connect(mapStateToProps)(Index);