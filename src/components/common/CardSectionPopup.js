import React  from 'react';
import { View } from 'react-native';

const CardSectionPopup = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '90%',
        textAlign: 'center',
        marginLeft: '5%',
    }
};

export {CardSectionPopup};
