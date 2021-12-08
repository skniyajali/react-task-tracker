import {useState} from 'react';
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      date: "2019-01-01",
      reminder: false,
    },
    {
      id: 2,
      text: "Task 2",
      date: "2019-01-02",
      reminder: true,
    },
    {
      id: 3,
      text: "Task 3",
      date: "2019-01-03",
      reminder: false,
    },
    {
      id: 4,
      text: "Task 4",
      date: "2019-01-04",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header title="Task Tracker"/>   
      <Tasks tasks={tasks} />   
    </div>
  );
}

export default App;
