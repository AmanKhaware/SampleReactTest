import "./App.css";
import Alert from "./assets/Component/Alert";
import ListGroup from "./assets/Component/ListGroup";
import Message from "./assets/Component/Message";

function App() {
  let cityList = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai"];
  return (
    <div>
      <Message text="Hello My First Property"></Message>
      <ListGroup listHeading="Cities Available" listItems={cityList} />
      {/* <Alert message="Hello Aman Khaware" /> */}
      <Alert>
        <p>Aman Khaware</p>
      </Alert>
    </div>
  );
}
export default App;
