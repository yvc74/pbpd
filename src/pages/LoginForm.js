import React from 'react';
import {
    Button,
    Label,
    FormGroup,
    Input

} from 'reactstrap';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            passowrd: ''
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render() {
        return (
            <form>
                <FormGroup>
                    <Label for="email-input">Email</Label>
                    <Input
                        id="email-input"
                        name="email"
                        onChange={this.handleInput}
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password-input">Password</Label>
                    <Input
                        id="password-input"
                        name="password"
                        onChange={this.handleInput}
                        type="password"
                    />
                </FormGroup>
                <Button
                    onClick={() =>
                        this.props.handleLogIn(this.state.email, this.state.password)}
                >Log In</Button>
            </form>
        );
    }
}