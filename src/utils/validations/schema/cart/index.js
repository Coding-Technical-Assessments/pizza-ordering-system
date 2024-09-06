import * as Yup from "yup";

export const cartSchema = Yup.object().shape({
  toppings: Yup.array()
    .min(1, "At least one topping is required")
    .of(Yup.string().required("Topping cannot be empty"))
    .required("Toppings are required"),

  quantity: Yup.number()
    .positive("Quantity must be a positive number")
    .integer("Quantity must be an integer")
    .required("Quantity is required"),

  base: Yup.string()
    .oneOf(["small", "medium"], "Base must be either 'small' or 'medium'")
    .required("Base is required"),
});
