import * as Yup from "yup";

export const pizzaSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name cannot be longer than 50 characters")
    .required("Name is required"),

  description: Yup.string()
    .min(3, "Description must be at least 3 characters long")
    .max(100, "Description cannot be longer than 100 characters")
    .required("Description is required"),

  price: Yup.number()
    .positive("price must be a positive number")
    .required("price is required"),

  image: Yup.string()
    .url("Must be a valid URL")
    .required("Image is required"),
});
