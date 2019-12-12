import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const PopUp = ({ onPress, children }) => {
    const {buttonStyle, textStyle} = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
      alignSelf: 'center',
      color: '#2c3e50',
      fontSize: 20,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ffffff',
        height: 45,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 40
    }
};

export { PopUp };
