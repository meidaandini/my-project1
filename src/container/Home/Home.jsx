import React, {Component} from 'react';
// import YouTubeComp from '../../component/YouTube/YouTubecomp';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';


class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //     showComponent: false
        //     })    
        // }, 15000);
    }
    render(){
        return(
            <div>
                {/* <YouTubeComp title="judul"/> */}
                {/* <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent ?
                        <LifeCycleComp /> : null
                }  */}
                <p>Blog Post</p>
                <hr />
                <BlogPost/>

                
            </div>
        )
    }
}

export default Home;