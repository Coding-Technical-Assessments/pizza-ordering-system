import * as Yup from "yup";

export const pizzaSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(20, "Name cannot be longer than 20 characters")
    .required("Name is required"),

  prize: Yup.number()
    .positive("Prize must be a positive number")
    .required("Prize is required"),

  imageUrl: Yup.string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
});
