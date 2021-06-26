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
  it('do not render primary button if name is not supplied', async () => {
    render(<ModalContainer />);
    const button = screen.queryByTestId('primary');
    expect(button).toBeFalsy();
  });
  it('renders primary button with custom inner text', async () => {
    render(<ModalContainer primaryBtnName={'any string'} />);
    const button = screen.queryByTestId('primary');
    expect(button).toHaveTextContent('any string');
  });
  it('renders secondary button with custom inner text', async () => {
    render(<ModalContainer secondaryBtnName={'any string'} />);
    const button = screen.queryByTestId('secondary');
    expect(button).toHaveTextContent('any string');
  });
  it('renders a custom modal body', async () => {
    function Elem(){
      return(
        <h2>Not empty body</h2>
      )
    }
    render(<ModalContainer children={<Elem/>} />);
    const body = await screen.findByText('Not empty body');
    expect(body).toBeInTheDocument();
  });
});

