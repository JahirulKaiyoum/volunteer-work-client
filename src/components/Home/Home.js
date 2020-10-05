import React, { useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import Volunteers from "../Volunteers/Volunteers";
import "./Home.css";
// import Header from '../Header/Header';

const Home = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("https://vast-cove-35974.herokuapp.com/volunteers")
      .then((response) => response.json())
      .then((data) => {
        setVolunteers(data);
      });
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-center">I GROW BY HELPING PEOPLE IN NEED </h3>
            <InputGroup className="mb-3">
              <FormControl
                className="src-box"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
        <div className="row">
          {volunteers.map((volunteer) => (
            <Volunteers key={volunteer._id} volunteer={volunteer}></Volunteers>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
