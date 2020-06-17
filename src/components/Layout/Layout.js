import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class layout extends Component {
    
    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    render () {
        return (
        <Aux>
            <Toolbar />
            <SideDrawer 
                open = {this.state.showSideDrawer} 
                closed={this.sideDrawerCloseHandler}/>
            <main className='content'>
                {this.props.children}
            </main>
        </Aux>
        );
    }
}

export default layout;