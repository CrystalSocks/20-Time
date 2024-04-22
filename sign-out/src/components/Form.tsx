import React, { useEffect } from "react";
import Button from "./Button";
import axios from "axios";

interface Properties {
  onClose: () => void;
  email: string;
  t_name: string;
}

const Form = ({ onClose, email, t_name }: Properties) => {
  //   const fetchAPI = async () => {
  //     const response = await axios.get("http://localhost:8080/api/users");
  //   };

  //   useEffect(() => {
  //     fetchAPI();
  //   }, []);

  return (
    <>
      <div className="form">
        <div className="fContent">
          <label htmlFor="yname">Your First and Last Name:</label> <br />
          <input
            type="text"
            id="yname"
            name="yourname"
            placeholder="Your name..."
          ></input>
          <br />
          <label htmlFor="yemail">Your Email Address:</label> <br />
          <input
            type="text"
            id="yemail"
            name="youremail"
            placeholder="Your email..."
          ></input>
          <br />
          <label htmlFor="classorhomeroom">
            Are You Leaving a Class or Homeroom?
          </label>
          <select id="classtype" name="classtype">
            <option value="class">Class</option>
            <option value="homeroom">Homeroom</option>
          </select>{" "}
          <br />
          <label htmlFor="leaveteach">Teacher You are Leaving:</label> <br />
          <input
            type="text"
            id="leaveteach"
            name="leavingteacher"
            placeholder="Teacher's name..."
          ></input>
          <br />
          <label htmlFor="subject">Reason For Dismissal:</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Reason..."
          ></textarea>
          <br />
          <Button
            color="success"
            onClick={async () =>
              await axios
                .post("http://localhost:8080/send", {
                  email: email,
                  u_name: document.getElementById("yname").value,
                  u_email: document.getElementById("yemail").value,
                  t_name: t_name,
                  class_hr: document.getElementById("classtype").value,
                  return_teacher: document.getElementById("leaveteach").value,
                  reason: document.getElementById("subject").value,
                })
                .then(async () => {
                  const stuff = await axios.get("http://localhost:8080/send");
                  console.log(stuff.data);
                  console.log(email);
                })
                .catch((error) => {
                  console.log(error);
                })
            }
          >
            Send Request
          </Button>
        </div>
        <div className="fClose">
          <button type="button" className="btn-close" onClick={onClose} />
        </div>
      </div>
    </>
  );
};

export default Form;
