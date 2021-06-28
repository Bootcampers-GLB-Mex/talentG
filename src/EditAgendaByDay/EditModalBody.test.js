import { render, screen } from '@testing-library/react';
import EditModalBody from './EditModalBody';

describe('<EditModalBody/>', () => {
    it('render a heading with inner text "Agenda"', () => {
        render(<EditModalBody />);
        const h3 = screen.getByRole('heading', { name: 'Agenda' });
        expect(h3).toBeInTheDocument();
    });
    it('render day number that is passed by props', async () => {
        const testDay = 30;
        render(<EditModalBody day={testDay} />);
        const subtitle = await screen.findByTestId('editSubTitle');
        expect(subtitle).toHaveTextContent(`Día ${testDay}`);
    });
    it('render topic title passed by props', async () => {
        const testSubtitle = "Some title";
        render(<EditModalBody topicTitle={testSubtitle} />);
        const subtitle = await screen.findByTestId('editSubTitle');
        expect(subtitle).toHaveTextContent(`${testSubtitle}`);
    });
    it('render a form', async () => {
        render(<EditModalBody />);
        const form = await screen.findByTestId('form');
        expect(form).toBeTruthy();
    });
    it('render form text area value should be the same as summary', () => {
        const testSummary = ["Some topic", "Another topic", "other topic", "something"];
        render(<EditModalBody summary={testSummary} />);
        const textBox = screen.getByRole('textbox', {
            value: `${testSummary.join(" ")}`
        });
        expect(textBox).toBeTruthy();
    });
    it('option values length should be equal trainers array length', () => {
        const sampleTrainers = ["Miguel", "Juan", "Rubén", "Ad", "Carlos"];
        const sampleLength = sampleTrainers.length;
        render(<EditModalBody trainers={sampleTrainers} />);
        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(sampleLength);
    });
});

