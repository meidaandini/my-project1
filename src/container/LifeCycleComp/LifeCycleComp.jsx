import React, {Component} from 'react';
import './LifeCycleComp.css';

class LifeCycleComp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 1,
        }
        console.log('constructor')
    } 

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null;
    } 
    componentDidMount () {
        console.log('componentDidMount')
        // setTimeout(() => {
        // this.setState({
        //     count: 2
        // })
        // }, 3000);
    }
    shouldComponentUpdate(nectProps, nextState){
        console.log('shouldComponentUpdate');
        console.log('nextProps, nextPorps');
        console.log('nextState, nextState');
        console.log('this state, this.state');
        console.groupEnd();
        if(nextState.count>= 4){
            return false;
        }
        return true;
    }
    getSnapshotBeforeUpdate(pervPorps, praveState){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }
    componentDidUpdate(pervPorps, prevState, snapshot) {
        console.log('componentDitUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmout')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log('render')
        return(
            <button className='btn' onClick={this.changeCount}>Component Button {this.state.count}</button>
        )
    }
} 

export default LifeCycleComp;
