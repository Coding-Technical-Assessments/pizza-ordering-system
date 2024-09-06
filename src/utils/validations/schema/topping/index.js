import * as Yup from "yup";

export const toppingSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(20, "Name cannot be longer than 20 characters")
    .required("Name is required"),

  price: Yup.number()
    .positive("Price must be a positive number")
    .required("Price is required"),
});
