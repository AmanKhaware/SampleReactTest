import "./App.css";
import ListGroup from "./assets/Component/ListGroup";
import Message from "./assets/Component/Message";

function App() {
  let cityList = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai"];
  return (
    <div>
      <Message text="Hello My First Property"></Message>
      <ListGroup listHeading="Technologies Available" listItems={cityList} />
    </div>
  );
}
export default App;
