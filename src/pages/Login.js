import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { saveEmail, requestApi } from '../redux/actions/index';
import '../styles/login.css';

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
    // const history = useLoca();
    // history.push('/carteira');
    window.location.replace('http://localhost:3000/carteira');
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <div className="loginPrincipal">
        <form className="loginForms">
          {/* Email: */}
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="Digite seu email"
            className="loginInput"
            onChange={ this.onInputChange }
            autoComplete="off"
          />
          {/* Senha: */}
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
            className="loginInput"
            onChange={ this.onInputChange }
            autoComplete="off"
          />
          {/* <Link to="/carteira"> */}
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ this.onClickButton }
            className="loginButton"
          >
            Entrar
          </button>
          {/* </Link> */}
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
