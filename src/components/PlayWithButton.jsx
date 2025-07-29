import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

const PlayWithButton = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert type="warning" message="This is a warning alert!" />
      )}
      <Button handleClick={() => setAlertVisible(true)}>Click Me</Button>
    </div>
  );
};

export default PlayWithButton;
