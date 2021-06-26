import PropTypes from 'prop-types';

export default function HomeworkList() {
    const hwList = [
        {
            title: "Tarea - Magazine Layout",
            href: "/"
        },
        {
            title: "Tarea - CodeWars Katas",
            href: "/"
        },
        {
            title: "Tarea - Puzzle Js",
            href: "/"
        },
        {
            title: "Tarea - Magazine Layout",
            href: "/"
        },
        {
            title: "Tarea - Magazine Layout",
            href: "/"
        },
        {
            title: "Tarea - CodeWars Katas",
            href: "/"
        },
        {
            title: "Tarea - Puzzle Js",
            href: "/"
        },
        {
            title: "Tarea - Magazine Layout",
            href: "/"
        }
    ];

    return (
        <>
            <ul className="homeworkFeedback__list">
                {hwList.map((hw) => {
                    return <li key={hw.title}><a href={hw.href} alt={hw.title}>{hw.title}</a></li>
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