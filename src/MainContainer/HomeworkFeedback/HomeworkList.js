import PropTypes from 'prop-types';

export default function HomeworkList() {
    const hwList = [
        {
            title: "Tarea - Magazine Layout"
        },
        {
            title: "Tarea - CodeWars Katas"
        },
        {
            title: "Tarea - Puzzle Js"
        }
    ];

    return (
        <>
            <ul className="homeworkFeedback__list">
                {hwList.map((hw) => {
                    return <li key={hw.title}>{hw.title}</li>
                })}
            </ul>
        </>
    )
}

HomeworkList.propTypes = {
    hwList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string
    }))
}