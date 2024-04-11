import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import ProfileBox from "../components/ProfileBox";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

var images = [];

function Home() {
  // const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api/users");
    var users = [];
    for (var key in response.data.users) {
      if (response.data.users.hasOwnProperty(key)) {
        users.push(key);
      }
    }
    for (var user in response.data.users) {
      if (response.data.users.hasOwnProperty(key)) {
        images.push(response.data.users[user].img);
      }
    }
    console.log(response.data.users.Reed.img);
    console.log(images);
    setArray(users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      {array.map((user, index) => (
        <div key={index}>
          <ProfileBox
            name={user}
            image={images[index]}
            onClick={() => window.open("/form")}
          />
          <br></br>
        </div>
      ))}
      {/* <input type="text" id="subbedEmail" />
      <br />
      <Button
        color="primary"
        onClick={async () =>
          await axios
            .post("http://localhost:8080/send", {
              email: document.getElementById("subbedEmail").value,
            })
            .then(async () => {
              const stuff = await axios.get("http://localhost:8080/send");
              console.log(stuff.data);
              console.log(document.getElementById("subbedEmail").value);
            })
            .catch((error) => {
              console.log(error);
            })
        }
      >
        SEND MAIL
      </Button>
      {array.map((user, index) => (
        <div key={index}>
          <span id="a">{user}</span>
          <br></br>
        </div>
      ))} */}
    </>
  );
}

export default Home;
