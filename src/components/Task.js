import { FaTimes } from 'react-icons/fa';

const Task = ({ task }) => {
    return (
        <div className="task">
            <h3>
                { task.text} 
                <FaTimes style={{ color: 'green', cursor: 'pointer' }} /> 
            </h3>
            <p>{ task.date }</p>
        </div>
    )
}

export default Task
