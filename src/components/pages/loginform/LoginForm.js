import React, { Component } from 'react';
import { Image, Text, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Button, CardSection, Input, Spinner } from '../../common/index';
import { emailChanged, passwordChanged, loginUser } from "../../../actions/index";

class LoginForm extends Component {
    onEmailChange(text) {
      this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password })
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                LOGIN
            </Button>
        );
    }

    renderError() {
        if (this.props.error){
            return (
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
            )
        }
    }

    render() {
        return (

            <ImageBackground source={require('../../../img/BG.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.imageViewStyle} >
                    <Image style={ styles.imageStyle } source={require('../../../img/Logo.png')} />
                </View>

                <Text style={styles.textStyle}>
                    PLEASE LOGIN
                </Text>

                <CardSection>
                    <Input
                        //placeholder="user@gmail.com"
                        label="Email :"
                        onChangeText={ this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        //placeholder="password"
                        label="Password :"
                        onChangeText={ this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </ImageBackground>


        );
    }
}


const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    imageStyle: {
        height: 150,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    textStyle: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 100
    }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
