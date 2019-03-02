import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {Button, CardSection, Card} from "./common";

class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
        <Card>
          <CardSection>
            <TextInput value={this.state.text}
                       onChange={text => this.setState({text})}
                       style={{height: 20, width: 100}} />
          </CardSection>
          <CardSection>
            <Button>Log In</Button>
          </CardSection>
        </Card>
    )
  }

}

export default LoginForm;