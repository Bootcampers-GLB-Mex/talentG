import { fireEvent, render, screen } from '@testing-library/react';
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
    const innerTextButton = 'any string';
    render(<ModalContainer primaryBtnName={innerTextButton} />);
    const button = screen.getByText(innerTextButton, { selector: 'button' });
    expect(button).toBeTruthy();
  });
  it('render secondary button with custom inner text', () => {
    const innerTextButton = 'any string';
    render(<ModalContainer secondaryBtnName={'any string'} />);
    const button = screen.getByText(innerTextButton, { selector: 'button' });
    expect(button).toBeTruthy();
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
  it('call function primary when clicked', async () => {
    const mockCallBack = jest.fn();
    const primaryText = "Test button"
    render(<ModalContainer handlePrimary={mockCallBack} primaryBtnName={primaryText} />);
    const button = await screen.findByText(primaryText, { selector: 'button' });
    fireEvent.click(button);
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
  it('call function when clicked secondary', async () => {
    const mockClose = jest.fn();
    const secondary = "Close";
    render(<ModalContainer handleClose={mockClose} secondaryBtnName={secondary} />);
    const button = await screen.findByText(secondary, { selector: 'button' });
    fireEvent.click(button);
    expect(mockClose).toHaveBeenCalledTimes(1);
  });
});

