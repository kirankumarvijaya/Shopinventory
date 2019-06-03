import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Picker, TouchableHighlight } from 'react-native';

export default class AddProductModal extends Component {
    constructor() {
        super();
        this.state = {
            prodName: null,
            price: null,
            dealersName: "Flipkart"
        }
    }

    isValid() {
        return !(this.state.prodName && this.state.price)
    }

    render() {
        return (
            <View style={style.modalContainer}>
                <Text style={{ fontSize: 25, textAlign: 'center' }}>Add Product</Text>
                <View style={style.flexDirectionRow}>
                    <Text style={{ fontSize: 18 }}>Product Name:</Text>
                    <TextInput style={style.inputStyle} onChangeText={text => this.setState({ prodName: text })}></TextInput>
                </View>
                <View style={style.flexDirectionRow}>
                    <Text style={{ fontSize: 18 }}>Product Prize:</Text>
                    <TextInput keyboardType={'decimal-pad'} style={style.inputStyle} onChangeText={text => this.setState({ price: text })}></TextInput>
                </View>
                <View style={[style.flexDirectionRow, { paddingTop: 10 }]}>
                    <Text style={{ fontSize: 18 }}>Product Dealer:</Text>
                    <Picker
                        selectedValue={this.state.dealersName}
                        style={[{ height: 30, width: 100 }, style.inputStyle]}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ dealersName: itemValue })
                        }>
                        <Picker.Item label="Flipkart" value="Flipkart" />
                        <Picker.Item label="Adidas" value="Adidas" />
                        <Picker.Item label="Puma" value="Puma" />
                        <Picker.Item label="Shopclues" value="Shopclues" />
                    </Picker>
                </View>
                <TouchableHighlight 
                    disabled={this.isValid()} 
                    style={[style.buttonStyle,{backgroundColor:this.isValid() ? 'grey' : 'orange'}]}
                    onPress={()=>this.props.onAddProduct({...this.state})}
                    ><Text>Add Product</Text></TouchableHighlight>
                <TouchableHighlight style={[style.buttonStyle,{backgroundColor:'orange'}]} onPress={() => this.props.onCancel()}><Text>Cancel</Text></TouchableHighlight>
            </View>
        )
    }
}

const style = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        height: 350,
        width: 300,
        padding: 15,
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: 'orange',
        backgroundColor: 'white',
        alignItems: 'center',
        top: '25%',
        left: '13%',
    },
    flexDirectionRow: {
        flexDirection: 'row',
        marginTop: 10
    },
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        minWidth: 120
    },
    buttonStyle: {
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 20
    }
})