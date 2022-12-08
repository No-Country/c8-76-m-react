import { useState } from "react";

const initialState = {
  nombre: "",
  monto: 0,
  concepto: "",
};

const useForm = () => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return {
    values,
    handleInputChange,
  };
};

export default useForm;
