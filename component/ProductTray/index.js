import React from 'react';
import {View,Text,StyleSheet,Image,TouchableHighlight} from 'react-native';

export default ProductTray = (props) => {
        return(
                <View style={style.eachTray}>
                    <View style={style.productImg}>
                        <Image source={require('../../assets/productIcon.png')} style={style.imgStyle}/>
                    </View>
                    <View style={style.productDesc}>
                        <Text style={{fontSize:30}}>{props.item.prodName}</Text>
                        <Text style={{fontSize:15,color:'orange'}}>Dollar:{props.item.price}$</Text>
                    </View>
                    <View style={style.productDel}>
                        <TouchableHighlight onPress={()=>props.onDelete()}>
                            <Image source={require('../../assets/delete.png')} style={style.imgStyle}></Image>
                        </TouchableHighlight>
                    </View>
                </View>
        )
}

const style=StyleSheet.create({
    eachTray:{
        flex:1/7,
        flexDirection:'row',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:'black',
        borderBottomColor:'black',
        borderLeftWidth:5,
        borderRightWidth:5,
        borderRightColor:'orange',
        borderLeftColor:'orange',
        borderRadius:6,
        marginTop:5
    },
    productImg:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    productDesc:{
        flex:6,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        padding:10,
        paddingLeft:40,
    },
    productDel:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    imgStyle:{
        height:50,
        width:50
    }
})