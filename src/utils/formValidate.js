export const formValidate = () => {
  return {
    required: {
      value: true,
      message: "Campo obligatorio",
    },
    patternEmail: {
      value:
        /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
      message: "Ingresa un email valido",
    },
    minLength: {
      value: 6,
      message: "Minimo 6 carácteres",
    },
    //*Sirve para evitar que le pasen espacion vacios en los inputs, tenemos que devolver un objeto y adentro la contraseña
    validateTrim: {
      noSpace: (space) => {
        if (!space.trim()) return "La contraseña no puede ir vacia";
        return true;
      },
    },
    //*le tenemos que pasar el metodo getValues ya que ese nos permite comparar el dato de otro input en este caso la contraseña
    validateEquals(value) {
      return {
        equalsPassword: (confirmP) =>
          confirmP === value || "Las contraseñas deben ser iguales",
      };
    },
  };
};
