// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import WalletForm from '../components/WalletForm';

describe('Testando o app.js', () => {
  it('Testando os elementos que estão na tela', () => {
    renderWithRouterAndRedux(<WalletForm />);
  });
});
