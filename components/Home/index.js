import React , {Component} from 'react';
import Item from '../Item';
import Layout from '../Layout';
import Loading from '../Loading';


class Home extends Component {
    
    render() {
        const { 
            data,
            loading
        } = this.props;
        
        return(
            <Layout>
                <div className="container-fluid">
                    <div className="row">
                        {data.map((d, i) => {
                            return (
                                <div key={i} className="col-12 col-md-4 col-lg-3">
                                    <Item data={d} 
                                        mapData={{
                                            imgUrl: "urlToImage",
                                            author: "author",
                                            title: "title"                                
                                        }}/>
                                </div>
                            )
                        })}
                    </div>
                    {(loading) && <Loading/>}
                </div>
            </Layout>
        )
    }
}

export default Home;