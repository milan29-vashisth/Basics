import React from 'react'
import {Image,StyleSheet,View} from 'react-native'

 function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.dltIcon}></View>
        <Image resizeMode='contain' style={styles.image} source ={require("../assets/images.jpg")}></Image>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1
    },
    closeIcon:{
     width:50,
     height:50,
     backgroundColor:'#fc5c65',
     position:'absolute',
     top:40,
     left:30
    },
    image:{
        width:"100%",
        height:"100%"
    },
    dltIcon:{
        width:50,
        height:50,
        backgroundColor:'#4ecdc4',
        position:'absolute',
        top:40,
        right:30

            }
  
})
export default ViewImageScreen