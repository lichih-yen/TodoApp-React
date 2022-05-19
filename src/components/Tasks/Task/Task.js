import "./Task.scss";
import { changeTaskStatus, removeTasks } from "./../../../redux/tasksSlice";
import { useDispatch } from "react-redux";
import api from "./../../../api";

function Task(props) {
  const dispatch = useDispatch();

  const handleStatusClick = () => {
    const id = props.task.id;

    const updatedTasks = {
      ...props.task,
      done: !props.task.done,
    };

    api.put("/tasks/" + id, updatedTasks).then((response) => {
      if (response.status === 200) {
        dispatch(changeTaskStatus(id));
      }
    });
  };

  const handleRemoveClick = () => {
    const id = props.task.id;

    api.delete("/tasks/" + id).then((response) => {
      if (response.status === 200) {
        dispatch(removeTasks(id));
      }
    });
  };

  return (
    <div className="task">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.task.description}</h5>
          <div className="card-text">Id: {props.task.id}</div>
          <div className="card-status">
            Status:{" "}
            {props.task.done ? (
              <span
                style={{
                  color: "darkgreen",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                "Completed"
              </span>
            ) : (
              <span style={{ color: "red" }}>"Open"</span>
            )}
          </div>
          <button
            type="button"
            className="btn-status"
            onClick={handleStatusClick}
          >
            Change Status
          </button>
          <button
            type="button"
            className="btn-remove"
            onClick={handleRemoveClick}
          >
            Remove Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
