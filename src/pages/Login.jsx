import React from "react";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { erroresFirebase } from "../utils/erroresFirebase";
import { useForm } from "react-hook-form";
import { formValidate } from "../utils/formValidate";

import Alertas from "../components/Alertas";
import InputForm from "../components/InputForm";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useUser();
  const { required, patternEmail, minLength, validateTrim } = formValidate();

  const {
    register,
    handleSubmit,
    setError, //*sirve para poder personalizar errores que que no sean propios de los inputs como los del servidor
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      navigate("/");
    } catch (error) {
      //*creamos el tipo de error llamado firebase puede llevar cualquier nombre, que guardara todos los errores que vengan del backend

      const { code, message } = erroresFirebase(error.code);
      setError(code, { message });
      // setError("firebase", {
      //   message: erroresFirebase(error.code),
      // });
    }
  };
  return (
    <>
      <h1 className="text-center my-2 mx-auto text-3xl text-blue-700 font-bold">
        Login
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          type="text"
          placeholder="Ingresa Email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          label="Ingresa Email"
          error={errors.email}
        >
          <Alertas error={errors.email} />
        </InputForm>

        <InputForm
          type="password"
          placeholder="Ingresa Contraseña"
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
          label="Ingresa Contraseña"
          error={errors.password}
        >
          <Alertas error={errors.password} />
        </InputForm>

        <Button type="submit" text="Enviar" />
      </form>
    </>
  );
};

export default Login;
