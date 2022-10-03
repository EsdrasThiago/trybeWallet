import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testando o app.js', () => {
  it('Testando os elementos que estão na tela', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId('email-input');
    expect(email).toBeInTheDocument();
    const password = screen.getByTestId('password-input');
    expect(password).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
  });
  it('Testa se bloqueia o botão', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', { name: /entrar/i });
    const email = screen.getByTestId('email-input');
    userEvent.type(email, 'email@email.com');
    expect(button).toBeDisabled();
    const password = screen.getByTestId('password-input');
    userEvent.type(password, '123456');
    expect(button).toBeEnabled();
    userEvent.click(button);
    expect(history.location.pathname).toBe('/carteira');
  });
});
