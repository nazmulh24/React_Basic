import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

const PlayWithButton = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleShowAlert = () => {
    setAlertVisible(true);
  };

  const handleCloseAlert = () => {
    setAlertVisible(false);
  };

  return (
    <div className="p-4">
      {alertVisible && (
        <Alert
          type="warning"
          message="This is a warning alert!"
          onClose={handleCloseAlert}
        />
      )}
      <Button color="warning" onClick={handleShowAlert}>
        Show Alert
      </Button>
    </div>
  );
};

export default PlayWithButton;
