import { render, screen } from '@testing-library/react';
import ListContent from './ListContent';
import ListContainer from './ListContainer';

describe('<ListContainer/>', () =>{
  it('render the hole container', () =>{
    render (<ListContainer />);
    const container = screen.getByTestId('listContainer');
    expect(container).toBeVisible();
  });
});

describe('<ListContent/>', () => {
  it('render custom title list', () => {
    render(<ListContent/>);
    const title = screen.getByRole('heading');
    expect(title).toBeTruthy();
  });
  it('render list with custom text', () => {
    render(<ListContent/>);
    const list = screen.getByRole('list');
    expect(list).toBeTruthy();
  });
});

