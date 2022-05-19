import { useState } from "react";
import "./Form.scss";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { addTask } from "./../../../redux/tasksSlice";
import api from "./../../../api";

function Form(props) {
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [saving, setSaving] = useState(false);

  const dispatch = useDispatch();

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleStatusChange = (event) => {
    const value = event.target.value;
    setDone(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (description === "") {
      setErrorMessage("Please enter a description");
    } else {
      const newTask = {
        id: uuid(),
        description: description,
        done: done,
      };

      setSaving(true);

      api.post("/tasks", newTask).then((response) => {
        if (response.status === 201) {
          dispatch(addTask(newTask));

          setDescription("");
          setDone(false);
          setErrorMessage(null);
          setSaving(false);
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="error">Invalid data: {errorMessage}</div>
      )}

      {saving && (
        <div className="saving">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      <label>
        <span>Description:</span>
        <input
          type="text"
          maxLength={150}
          value={description}
          onChange={handleDescriptionChange}
        />
      </label>

      <label>
        <span>Status:</span>
        <select value={done} onChange={handleStatusChange}>
          <option value={false}>Open</option>
          <option value={true}>Completed</option>
        </select>
      </label>

      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
