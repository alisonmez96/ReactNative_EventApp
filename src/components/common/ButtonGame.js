import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonGame = ({ onPress, children }) => {
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
      color: '#007aff',
      paddingTop: 5,
      paddingBottom: 10
    },
    buttonStyle: {
      backgroundColor: '#fff',
      borderRadius: 100,
      borderWidth: 1,
      borderColor: '#007aff',
      width: 30,
      height: 30,
      marginLeft: '73%',
      marginTop: '-5%'
    }
};

export { ButtonGame };
