import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import ProductTray from '../../component/ProductTray';
import AddProduct from '../../component/AddProduct';
import AddProductModal from '../../component/AddProductModal';
import { bindActionCreators } from 'redux';
import * as actions from './actionCreators';
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';

class HomePage extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Inventory',
            headerRight:(
                <TouchableHighlight style={{paddingRight:15}} onPress={()=>{navigation.navigate('DealersPage')}}>
                    <Icon name='link' type='font-awesome' color='white'/>
                </TouchableHighlight>
            )
        };
    };

    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }

    render() {
        console.log("this.props", this.props);
        return (
            <View style={style.viewContainer}>
                <ScrollView>
                    {this.props.inventoryList && this.props.inventoryList.map((item, key) => {
                        return <ProductTray key={key} item={item} onDelete={()=>{this.props.action.deleteProdData(item)}}/>
                    })}
                </ScrollView>
                <AddProduct showPopup={() => this.showAddProductComponent()} />
                {this.state.showModal ? <AddProductModal onCancel={() => this.onCancel()} onAddProduct={(prodDetails) => this.addProduct(prodDetails)} /> : null}
            </View>
        )
    }

    addProduct(prodData) {
        this.props.action.addProductData(prodData);
        this.setState({
            showModal: false
        })
    }

    showAddProductComponent() {
        this.setState({
            showModal: true
        })
    }

    onCancel() {
        this.setState({
            showModal: false
        })
    }
}

const style = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        position: 'relative'
    }
})

const mapStateToProps = (state) => ({
    inventoryList: state.inventoryList
})

const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);