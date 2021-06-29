import { render, screen } from '@testing-library/react';
import DailyClass from './DailyClass';

describe('<DailyClass/>', () => {
    const dailyDataMock = {
        date: "28-06-21",
        day: 30,
        id: 1,
        id_Trainer: 1,
        id_training: 1,
        summary: ["Some summary"],
        topic: "CSS"
    }
    const mockImage = {
        src: "/assets/img/daily-class-30.png",
        alt: "Day 30 Bootcamp: Final Project",
        caption: "UI Engineering Studio. Day 1. Bootcamp: Final Project"
    }
    it('render title wih day and topic', () => {
        render(<DailyClass dailyScheduleData={dailyDataMock} />);
        const title = screen.getByRole('heading',
            { name: `Día ${dailyDataMock.day} - ${dailyDataMock.topic}` });
        expect(title).toBeInTheDocument();
    });
    it('render topic into the card', () => {
        render(<DailyClass dailyScheduleData={dailyDataMock} />);
        const topics = screen.getByText(dailyDataMock.summary[0]);
        expect(topics).toBeInTheDocument();
    });
    it('render an image into card', () => {
        render(<DailyClass dailyImage={mockImage} />);
        const image = screen.getByRole('img');
        expect(image).toBeTruthy();
    });
    it('render image with alt text', () => {
        render(<DailyClass dailyImage={mockImage} />);
        const altText = screen.getByAltText(mockImage.alt);
        expect(altText).toBeInTheDocument();
    });
    it('render "Editar" button in trainer view', () => {
        render(<DailyClass isTrainer={true} />);
        const button = screen.getByRole('button', {
            name: "Editar"
        });
        expect(button).toBeInTheDocument();
    });
});

