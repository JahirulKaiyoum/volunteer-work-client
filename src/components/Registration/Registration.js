import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import "./Registration.css";

const Registration = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { eventName } = useParams();
  const [data, setData] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    setData({ ...loggedInUser, [e.target.name]: e.target.value, eventName });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    fetch("https://vast-cove-35974.herokuapp.com/activities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => history.push("/activities"));
  };

  return (
    <div className="col-md-4 offset-md-4">
      <form className="form-box">
        <h4 className="text-center heading">Register as a volunteer</h4>
        <input
          type="text"
          name="name"
          value={loggedInUser.name}
          placeholder="Name"
          className="form-control"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          name="email"
          value={loggedInUser.email}
          placeholder="Email"
          className="form-control"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="form-control"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="date"
          name="date"
          onChange={(e) => handleChange(e)}
          className="form-control"
        />
        <input
          type="text"
          name="event"
          value={eventName}
          placeholder="Event"
          className="form-control"
          onChange={(e) => handleChange(e)}
        />
        <button
          className="btn btn-primary form-control "
          type="submit"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
