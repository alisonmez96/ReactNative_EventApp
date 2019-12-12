import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSectionPopup } from "./CardSectionPopup";
import { PopUp } from "./PopUp";

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { cardSectionStyle, containerStyle, textStyle }= styles;

    return (
      <Modal
          visible={visible}
          transparent
          animationType="slide"
          onRequestClose={()=>{}}
      >
          <View style={containerStyle}>
              <CardSectionPopup style={cardSectionStyle}>
                  <Text style={textStyle}>{children}</Text>
              </CardSectionPopup>

              <CardSectionPopup>
                  <PopUp onPress={onAccept}>Yes</PopUp>
                  <PopUp onPress={onDecline}>No</PopUp>
              </CardSectionPopup>
          </View>
      </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { Confirm };
