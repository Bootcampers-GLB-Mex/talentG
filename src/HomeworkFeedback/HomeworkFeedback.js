import HomeworkList from './HomeworkList.js';

import './homeworkFeedBack.css';

export default function HomeworkFeedBack() {

    return (
        <section className="homeworkFeedback">
            <h1 className="homeworkFeedback__title">Feedback</h1>
            <div className="homeworkFeedback__list">
                <HomeworkList></HomeworkList>
            </div>
        </section>
    );
}