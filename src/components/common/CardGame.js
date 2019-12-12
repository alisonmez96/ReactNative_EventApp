import React  from 'react';
import { View } from 'react-native';

const CardGame = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
      shadowColor: '#000',
      shadowOffset: { width:0, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      marginBottom: 10
    }
};

export {CardGame};
