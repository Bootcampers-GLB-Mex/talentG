import { render, screen } from '@testing-library/react';
import ListContent from './ListContent';

describe('<ListContent/>', () => {
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
