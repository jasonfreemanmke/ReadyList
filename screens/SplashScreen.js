import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';







export default function SplashScreenA() {
    return (



        // <View style={styles.container}>
        //   <Image style={styles.bgImage} source={require('../assets/window.png')} />





        // </View>

        <ImageBackground
            style={styles.bgImage}
            source={require('../assets/images/window2-min.jpg')}>


            <Image style={styles.logo}source={require('../assets/images/logo2-min.png')} />
            <Text style={styles.textStyle}>Advancing healthcare quality by transforming hospital service teams.</Text>
        </ImageBackground>




    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


    logo:
        {

            width: "75%",
            marginTop: 40,
            padding: 25,
            marginBottom: 60,
            marginLeft: 50 ,
        },
    textStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        color: "black",
        marginBottom: 250,

    },
    bgImage:{
        flex: 1,

        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        resizeMode: 'cover',
    },
});
