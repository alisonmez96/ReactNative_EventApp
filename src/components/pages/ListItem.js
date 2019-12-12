import React, { Component } from 'react';
import { Text, Image, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ButtonCreate, Card, CardSection, Confirm } from "../common";
import { connect } from 'react-redux';
import { playerDelete } from "../../actions/index";

class ListItem extends Component{
    state = { showModal: false };

    onAccept() {
        this.props.playerDelete();
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        const { name } = this.props.player;
        const { game } = this.props.player;
        const { nickname } = this.props.player;
        const { email } = this.props.player;

        return (
            <View>
                <Image style={ styles.imageStyle }  source={require('../../img/image.png')} />

                    <Text style={ styles.nameStyle }>
                        {name}
                    </Text>

                    <Text style={ styles.emailStyle }>
                         {email}
                    </Text>

                <Text style={ styles.nameStyle }>
                    Competition Info:
                </Text>

                    <Text style={ styles.nicknameStyle }>
                        NickName: {nickname}
                    </Text>


                    <Text style={ styles.nicknameStyle }>
                           Game: {game}
                    </Text>


                <ButtonCreate onPress={()=>this.setState({showModal: !this.state.showModal})}>
                        Leave Competition
                </ButtonCreate>


                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want leave the competition?
                </Confirm>

            </View>
        );
    }
}

const styles = {
    nameStyle: {
        fontSize: 22,
        color: '#e74c3c',
        fontWeight: 'bold',
        marginLeft: '5%',
        marginTop: '5%'
    },
    imageStyle: {
        borderRadius: 40,
        width: 80,
        height: 80,
        marginTop: 20,
        marginLeft: '5%',

    },
    emailStyle: {
        fontSize: 18,
        marginTop: '1%',
        marginLeft: '5%',
        color: '#95a5a6'
    },
    nicknameStyle: {
        fontSize: 18,
        marginTop: '5%',
        marginLeft: '5%',
        color: '#95a5a6'
    }
}

export default connect(null,{playerDelete})(ListItem);
