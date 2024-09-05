import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Z\s\-']+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    )
    .required("Name is required"),

  surname: Yup.string().required("Surname is required"),

  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    ),

  role: Yup.string()
    .oneOf(["user", "admin"], 'Role must be either "user" or "admin"')
    .required("Role is required"),
});
