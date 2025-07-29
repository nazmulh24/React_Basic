// import "./App.css";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("Button Clicked!");
  };

  return (
    <>
      {/* <Button handleClick={handleClick} /> */}
      <Button handleClick={handleClick} >
        My_Button
      </Button>
    </>
  );
}

export default App;
