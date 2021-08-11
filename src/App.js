import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meeting",
      day: "June 29th at 2:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Lunch",
      day: "June 30th at 1:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping",
      day: "June 30th at 5:00pm",
      reminder: false,
    },
  ]);

  // Add task
  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = {
      id,
      ...task,
    };
    setTasks([...tasks, newTask]);
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Add reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
