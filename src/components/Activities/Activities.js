import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import UserActivity from "../UserActivity/UserActivity";

const Activities = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [activities, setActivities] = useState([]);

  const [del, setDel] = useState(false);
  useEffect(() => {
    fetch(
      "https://vast-cove-35974.herokuapp.com/userActivity?email=" +
        loggedInUser.email
    )
      .then((response) => response.json())
      .then((data) => setActivities(data));
  }, [del]);

  const handleDelete = (id) => {
    fetch(`https://vast-cove-35974.herokuapp.com/deleteEvent/${id}`, {
      method: "DELETE",
    }).then((result) => {
      setDel(!del);
    });
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          {activities.map((activity) => (
            <UserActivity
              activity={activity}
              handleDelete={handleDelete}
            ></UserActivity>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
