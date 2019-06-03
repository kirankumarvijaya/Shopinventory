import React,{ Component} from 'react';
import { Text,View } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from './actionCreator';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';

class DealersLinkPage extends Component{

    constructor(){
        super();
    }

    render(){
        return(
            <View>
                <NavigationEvents onDidFocus={()=>{this.props.action.getProductsfromInventory()}}/>
                <Text>DealersLinkPage</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    inventoryList: state.inventoryList
})

const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DealersLinkPage);