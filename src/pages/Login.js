import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveEmail, requestApi } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  componentDidMount() {
    // this.getConversion();
    const { dispatch } = this.props;
    dispatch(requestApi('login'));
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
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
    const { dispatch } = this.props;
    const { email } = this.state;
    dispatch(saveEmail(email));
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
          <Link to="/carteira">
            <button
              type="button"
              disabled={ isDisabled }
              onClick={ this.onClickButton }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
