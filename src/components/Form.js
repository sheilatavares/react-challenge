import React, { useState } from "react";
import styles from "./Form.module.css";
import { useDispatch } from "react-redux";
import { updateFirstName, updateLastName } from "../redux/actions";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateFirstName(firstName));
    dispatch(updateLastName(lastName));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <div className={styles.BoxInput}>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="First Name"
            style={{ marginRight: "10px" }}
            required
          />
        </div>
        <div className={styles.BoxInput}>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Last name"
            required
          />
        </div>
      </div>
      <button type="submit">Breakify</button>
    </form>
  );
};

export default Form;
