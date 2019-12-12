import React, { Component } from 'react';
import { Picker, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { playerUpdate, playerCreate } from "../../actions";
import { CardGame, CardSection, Input, ButtonCreate } from "../common";

class CreatePlayer extends Component {

    insertPlayer() {
        const { name, nickname, email, game } = this.props;

        this.props.playerCreate({ name, nickname, email, game: game || 'Counter Strike' });
    }

    render() {
        return (
          <ScrollView style={{ flex: 1 }}>
            <CardGame>
              <CardSection>
                <Input
                  label="Name:"
                  placeholder="Name"
                  value={this.props.name}
                  onChangeText={ text => this.props.playerUpdate({ prop: 'name', value: text }) }
                />
              </CardSection>

              <CardSection>
                <Input
                  label="NickName:"
                  placeholder="NickName"
                  value={this.props.nickname}
                  onChangeText={ text => this.props.playerUpdate({ prop: 'nickname', value: text }) }
                />
              </CardSection>

              <CardSection>
                <Input
                  label="Email:"
                  placeholder="User@gmail.com"
                  value={this.props.email}
                  onChangeText={ text => this.props.playerUpdate({ prop: 'email', value: text }) }
                  />
              </CardSection>

              <Text style={styles.pickerTextStyle}>Games:</Text>

              <View style={styles.gameListStyle}>
                  <Picker
                    style={{ flex: 1, marginTop: 20 }}
                    selectedValue={this.props.game}
                    onValueChange={ value => this.props.playerUpdate({ prop: 'game', value })}
                  >
                    <Picker.Item label="Counter Strike" value="Counter Strike" />
                    <Picker.Item label="League Of Legends" value="League Of Legends" />
                    <Picker.Item label="Rocket League" value="Rocket League" />
                    <Picker.Item label="Hearthstone" value="Hearthstone" />
                    <Picker.Item label="Fifa2019" value="Fifa2019" />
                    <Picker.Item label="Fortnite" value="Fortnite" />
                    <Picker.Item label="Overwatch" value="Overwatch" />
                    <Picker.Item label="SuperSmahBros" value="SuperSmahBros" />
                    <Picker.Item label="Brawlhalla" value="Brawlhalla" />
                </Picker>
            </View>

            <ButtonCreate onPress={this.insertPlayer.bind(this)} >
              Participe
            </ButtonCreate>

        </CardGame>
      </ScrollView>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 40,
        marginTop: 20
    },
    gameListStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
      width: '90%',
      textAlign: 'center',
      marginLeft: '5%',
    }
}

const mapStateToProps = (state) => {
    const { name, nickname, email, game } = state.playerForm;

    return { name, nickname, email, game };
};

export default connect(mapStateToProps, { playerUpdate, playerCreate }) (CreatePlayer);
