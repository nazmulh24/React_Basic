// import "./App.css";
import FirstComponent from "./components/FirstComponent";
import List from "./components/List";

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  const cities = ["New York", "Los Angeles", "Chicago"];

  return (
    <>
      <List items={items} heading="Item List" />
      <List items={cities} heading="City List" />
    </>
  );
}

export default App;
