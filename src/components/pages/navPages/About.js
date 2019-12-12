import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import NavigationBottom from "../NavigationBottom";
import { CardGame, CardSectionGame } from "../../common";

class About extends Component {
    render() {
        return (

            <View style={{ flex:1 }}>
                <ScrollView>
              <CardGame>

                        <Text style={ styles.titlePageStyle }>
                            ErasmusHogeschoolBrussel
                        </Text>

                        <Text style={ styles.titleStyle }>
                            Nijverheidskaai 170, 1070 Anderlecht
                        </Text>

                        <Text style={ styles.titleStyle }>
                            Tel: 02 559 15 32
                        </Text>

                        <Text style={ styles.titleStyle }>
                            Email: ehackb@info.be
                        </Text>


                        <Text style={ styles.titleStyle }>
                            Start: 6 am - End: 12 pm
                        </Text>

                        <Text style={ styles.titleStyle }>
                            Organisator: EHB & Stuvo
                        </Text>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                    <Image style={ styles.imageStyle }  source={require('../../../img/ehblogo.jpg')} />

                    </View>

                    <Text style={ styles.titlePageStyle }>
                        Developped By Ali Sönmez
                    </Text>


              </CardGame>
                </ScrollView>

                <NavigationBottom/>

            </View>

        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        marginTop: '4%',
        textAlign: 'center',
        marginTop: 30,
    },
    imageStyle: {
        height: 120,
        width: 120,
        marginTop: '20%'
    },
    titlePageStyle: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: "bold",
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginTop: '2%',
    }
}

export default About;
