import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, CardSection, Card, Input} from "./common";
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '',  password: '', error: '' };

  onLogin() {
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(err => {
          firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
            this.setState({error: 'Authentication Failed.'})
          });
        });
  }


  render() {
    return (
        <Card>
          <CardSection>
            <Input value={this.state.email}
                   label="Email"
                   placeholder="user@domain.com"
                   secureTextEntry={false}
                   onChange={email => this.setState({email})} />
          </CardSection>
          <CardSection>
            <Input value={this.state.password}
                   label="Pass"
                   placeholder="Password"
                   secureTextEntry
                   onChange={password => this.setState({password})} />
          </CardSection>
          <Text style={styles.errorText}>{this.state.error}</Text>
          <CardSection>
            <Button onPress={() => this.onLogin}>Log In</Button>
          </CardSection>
        </Card>
    )
  }

}

const styles = {
  errorText: {
    fontSize: 20,
    alignItems: 'center',
    color: 'red'
  }
}

export default LoginForm;