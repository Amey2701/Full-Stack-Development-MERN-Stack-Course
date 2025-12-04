import { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);

    if (e.target.value.trim() === "") {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  const reset = () => {
    setValue("");
    setError("");
  };

  return {
    value,
    onChange,
    reset,
    error,
  };
};

export default useInput;
