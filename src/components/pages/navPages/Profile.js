import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, ListView, ScrollView, View } from 'react-native';
import { playerFetch, playerDelete } from "../../../actions/index";
import ListItem from '../ListItem';
import NavigationBottom from "../NavigationBottom";
import { ButtonCreate, Card, CardSection, Confirm } from "../../common";
import { Actions } from "react-native-router-flux";

class Profile extends Component {
    componentWillMount() {
        this.props.playerFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ playerList }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(playerList);
    }

    renderRow(player) {
        return <ListItem player={player} /> ;
    }

    render() {
        return (
            <View style={{ flex:1 }}>
                <ScrollView>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />

                    <ButtonCreate onPress={() =>  Actions.createPlayer() }>
                      Participe To Competition
                    </ButtonCreate>

                </ScrollView>
                <NavigationBottom/>
            </View>

        );
    }
}

const mapStateToProps = state => {
    const playerList = _.map(state.playerList, (val, uid) => {
        return { ...val, uid};
        });

    return { playerList };
};

export default connect(mapStateToProps, { playerFetch, playerDelete }) (Profile);
