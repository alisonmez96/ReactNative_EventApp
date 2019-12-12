import React, { Component } from 'react';
import NavigationBottom from '../NavigationBottom';
import { ScrollView, View } from "react-native";
import axios from "axios";
import IndexDetail from "./indexDetail";

class Index extends Component {

    state = {games: [] };

    componentWillMount() {
        axios.get('http://dtsl.ehb.be/~ali.sonmez/blogList.json')
            .then(response => this.setState({ games: response.data }));
    }

    renderGames() {
        return this.state.games.map(game =>
            <IndexDetail key={game.title} game={game} />
        );
    }

    render() {
        return (
            <View style={{ flex:1 }}>
                    <ScrollView>
                        {this.renderGames()}
                    </ScrollView>
            <NavigationBottom/>
            </View>

        );
    }
}

export default Index;
