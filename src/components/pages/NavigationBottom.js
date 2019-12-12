import React  from 'react';
import { Image, TouchableOpacity, View } from "react-native";
import { Actions } from "react-native-router-flux";

const NavigationBottom = () => {

    return (
                <View style={ styles.navBottom }>
                    <TouchableOpacity onPress={()=> Actions.blog() }>
                        <Image style={ styles.imageStyle }  source={require('../../img/speech.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> Actions.profile() }>
                        <Image style={ styles.imageStyle }  source={require('../../img/profile.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> Actions.about() }>
                        <Image style={ styles.imageStyle }  source={require('../../img/info.png')} />
                    </TouchableOpacity>
                </View>
    );
};

const styles = {
    imageStyle: {
        height: 40,
        width: 40,
        marginTop: 10,
        marginLeft:'25%',
    },
    navBottom: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#000',
    }
}

export default NavigationBottom;
