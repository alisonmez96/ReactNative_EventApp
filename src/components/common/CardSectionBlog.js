import React  from 'react';
import { View } from 'react-native';

const CardSectionBlog = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
      backgroundColor: '#fff',
      borderRadius: 15,
      marginBottom: 20
    }
};

export {CardSectionBlog};
