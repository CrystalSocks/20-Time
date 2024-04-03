import axios from "axios";
import { useState, useEffect } from "react";
import Button from "./components/Button";

function App() {
  // const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api/users");
    console.log(response.data.users);
    setArray(response.data.users);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div id="root">
      <>
        <input type="text" name="subbedEmail" id="subbedEmail" />
        <br />
        <Button
          color="primary"
          onClick={async () =>
            await axios
              .post(
                "http://localhost:8080/send",
                // data: {
                { email: document.getElementById("subbedEmail").value }
                //},
              )
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
        ))}
      </>
    </div>
  );
}

export default App;
