import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import Index from "./components/pages/navPages/index";
import LoginForm from './components/pages/loginform/LoginForm';
import Games from './components/pages/gameList/Games';
import CreatePlayer from "./components/pages/CreatePlayer";
import Players from "./components/pages/navPages/Profile";
import About from "./components/pages/navPages/About";

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>

              <Scene key="auth">
                <Scene key="login" component={LoginForm} hideNavBar initial />
              </Scene>

                <Scene key="main">

                    <Scene key="games"
                           component={Games}
                           title="Games"
                           rightTitle="Skip"
                           onRight={() => { Actions.blog() }}
                    />

                    <Scene key="blog"
                           component={Index}
                           title="Conferences"
                    />

                    <Scene key="profile"
                           component={Players}
                           title="Profile"
                           rightTitle="Log Out"
                           onRight={() => { Actions.auth() }}
                    />

                    <Scene key="createPlayer"
                           component={CreatePlayer}
                           title="Participe"
                    />

                    <Scene key="about"
                           component={About}
                           title="About"
                    />

                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
