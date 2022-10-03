import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Header from '../components/Header';

describe('Testando o app.js', () => {
  it('Testando os elementos que estão na tela', () => {
    renderWithRouterAndRedux(<Header />);
    const totalValue = screen.getByTestId('total-field');
    expect(totalValue).toHaveTextContent(/0\.00/i);
  });
});
