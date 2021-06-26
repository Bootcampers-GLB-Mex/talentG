import { render, screen } from '@testing-library/react';
import ModalContainer from './ModalContainer';

describe('<ModalContainer/>', () => {
  it('render modal with display block style', async () => {
    render(<ModalContainer show={true} />);
    const modalContainer = await screen.findByTestId('modalContainer')
    expect(modalContainer).toHaveStyle({
      display: 'block',
    })
  });
  it('render modal with display none style', async () => {
    render(<ModalContainer />);
    const modalContainer = await screen.findByTestId('modalContainer')
    expect(modalContainer).toHaveStyle({
      display: 'none',
    })
  });
  it('do not render primary button if name is not supplied', () => {
    render(<ModalContainer />);
    const button = screen.queryByTestId('primary');
    expect(button).toBeFalsy();
  });
  it('render primary button with custom inner text', () => {
    render(<ModalContainer primaryBtnName={'any string'} />);
    const button = screen.queryByTestId('primary');
    expect(button).toHaveTextContent('any string');
  });
  it('render secondary button with custom inner text', () => {
    render(<ModalContainer secondaryBtnName={'any string'} />);
    const button = screen.queryByTestId('secondary');
    expect(button).toHaveTextContent('any string');
  });
  it('render a custom modal body', async () => {
    function Elem() {
      return (
        <h2>Not empty body</h2>
      )
    }
    render(<ModalContainer children={<Elem />} />);
    const children = await screen.findByText('Not empty body');
    expect(children).toBeInTheDocument();
  });
});

