import { TaskType } from '../../App';
import './styles.css';

export type TaskProps = {
    task: TaskType,
    completeTask: (id: number) => void,
    removeTask: (id: number) => void,
}

export default function Task({ task, completeTask, removeTask }: TaskProps) {

    function handleCompleteTask() {
        completeTask(task.id)
    }

    function handleRemoveTask() {
        removeTask(task.id)
    }

    return (
        <div className={`card ${task.completed ? 'done' : ''}`}>
            <h2>{task.title}</h2>

            <div className="card-buttons">
                <button onClick={handleCompleteTask}>{task.completed ? 'Retomar' : 'Completar'}</button>
                <button onClick={handleRemoveTask}>Deletar</button>
            </div>
        </div>
    )
}