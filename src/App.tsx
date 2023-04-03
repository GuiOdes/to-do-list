import { ChangeEvent, useState } from 'react';
import './App.css';
import Task, { TaskProps } from './components/card';

export type TaskType = {
  id: number,
  title: string,
  completed: boolean
}

function App() {
  const [
    taskInput,
    setTaskInput
  ] = useState('');

  const [
    taskList, // O que será salvo no state
    setTaskList // Função para atualizar o valor de todoList
  ] = useState<TaskType[]>([]);
  

  function addTask() {
    setTaskList((actualTasks) => [
      ...actualTasks,
      {
        id: Math.random(),
        title: taskInput,
        completed: false
      }
    ]);

    setTaskInput('');
  }

  function removeTask(id: number) {
    setTaskList((actualTasks) => actualTasks.filter((task) => task.id != id));
  }

  function completeTask(id: number) {
    setTaskList(
      (actualTasks) => actualTasks.map((task) => task.id !== id ? task : { ...task, completed: !task.completed })
    )
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    console.log('penis');
    setTaskInput(event.target.value);
  }

  return (
    <div className="App">
      <div className='add-todo'>
        <input placeholder="teste" value={taskInput} onChange={handleInputChange}/>
        <button onClick={addTask}>Adicionar</button>
      </div>

      {
        taskList.map((task) => (
          <Task key={task.id} task={task} completeTask={completeTask} removeTask={removeTask} />
        ))
      }
    </div>
  )
}

export default App
