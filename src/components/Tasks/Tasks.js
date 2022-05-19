import { useEffect, useState } from "react";
// import uuid from "react-uuid";
import Task from "./Task/Task";
import "./Tasks.scss";
import Form from "./Form/Form";
import { useSelector, useDispatch } from "react-redux";
import { setTasks, clearTasks } from "./../../redux/tasksSlice";
import api from "./../../api";

function Tasks() {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/tasks").then((response) => {
      if (response.status === 200) {
        dispatch(setTasks(response.data));
        setLoading(false);
      }
    });
  }, [dispatch]);

  const handleClearTasks = () => {
    api.delete("/tasks/all").then((response) => {
      if (response.status === 200) {
        dispatch(clearTasks());
      }
    });
  };

  return (
    <div className="tasks">
      <div className="body">
        <h2>There are the tasks:</h2>

        {loading && (
          <div className="loading">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
        <div className="btn-container">
          <button
            type="button"
            className="clear-tasks"
            onClick={handleClearTasks}
          >
            Clear Tasks
          </button>
        </div>

        <h2>Add a new Task:</h2>
        <Form />
      </div>
    </div>
  );
}

export default Tasks;
