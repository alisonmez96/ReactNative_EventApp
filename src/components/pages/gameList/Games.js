import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import GameDetail from './GameDetail';

class Games extends Component {

    state = {games: [] };

    componentWillMount() {
        axios.get('http://dtsl.ehb.be/~ali.sonmez/gameList.json')
            .then(response => this.setState({ games: response.data }));
    }

    renderGames() {
        return this.state.games.map(game =>
            <GameDetail key={game.title} game={game} />
        );
    }

    render() {
        return (
                <ScrollView style={{ flex: 1 }}>
                    {this.renderGames()}
                </ScrollView>
        );
    }

}

export default Games;
