import React from 'react';
import { connect } from 'react-redux';
// import saveEmail from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.disableButton());
  };

  disableButton = () => {
    const { password, email } = this.state;
    const maxNumber = 5;
    const emailVerify = email.includes('@') && email.includes('.com');
    if (password.length > maxNumber && emailVerify) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  };

  onClickButton = () => {
    const { props } = this;
    const { email } = this.state;
    const action = { type: 'SAVE_EMAIL',
      payload: { email } };
    window.location.pathname = '/carteira';
    props.dispatch(action);
    // saveEmail(email);
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <div>
        <div>Login</div>
        <form>
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.onInputChange }
          />
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.onInputChange }
          />
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ this.onClickButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
}.isRequired;

function mapStateToProps(state) {
  return state.user;
}

export default connect(mapStateToProps)(Login);
