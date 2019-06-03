import React from 'react';
import {Text,StyleSheet,TouchableHighlight} from 'react-native';

export default AddProduct = (props) => {
        return(
            <TouchableHighlight onPress={()=>{props.showPopup()}} style={style.floatingButton}><Text style={{textAlign:'center',fontSize:30}}>+</Text></TouchableHighlight>
        )
}

const style=StyleSheet.create({
    floatingButton:{
        position:'absolute',
        borderRadius:25,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        bottom:30,
        right:10,
        height:50,
        width:50
    }
})