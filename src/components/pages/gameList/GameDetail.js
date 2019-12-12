import React  from 'react';
import { Text, View , Image } from 'react-native';
import { ButtonGame, Card, CardSectionGame, CardGame } from '../../common/index';
import { Actions } from 'react-native-router-flux';

const GameDetail = ({ game }) => {

    const { title, aantal, console, image } = game;
    const { headerContentStyle, headerTextStyle, imageStyle, imageContainerStyle, titelStyle } = styles;

    return (
      <View>
        <CardGame>
          <CardSectionGame>

            <View style={imageContainerStyle}>
              <Image style={ imageStyle } source= {{ uri: image }} />
            </View>

            <View style={headerContentStyle}>
                <Text style={titelStyle}>{ title }</Text>
                <Text>Team: { aantal }</Text>
                <Text>Console: { console }</Text>

                <ButtonGame onPress={() =>  Actions.createPlayer() }>
                  >
                </ButtonGame>
            </View>

          </CardSectionGame>
        </CardGame>
      </View>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 20,
        textAlign: 'left',
        paddingLeft: 5,
        width: "50%",
    },
    titelStyle:{
      fontSize: 15,
      fontWeight: '700',
      paddingBottom: 10
    },
    imageStyle: {
        height: 75,
        width: 75,
        borderRadius: 38
    },
    imageContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    }
};

export default GameDetail;
