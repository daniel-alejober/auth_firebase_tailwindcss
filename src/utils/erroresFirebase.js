export const erroresFirebase = (errorCode) => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return {
        code: "email",
        message: "Usuario ya registrado",
      };

    case "auth/user-not-found":
      return {
        code: "email",
        message: "Usuario no registrado",
      };

    case "auth/wrong-password":
      return {
        code: "password",
        message: "La contraseña es incorrecta",
      };

    default:
      return {
        code: "email",
        message: "Error en el servidor",
      };
  }
};
