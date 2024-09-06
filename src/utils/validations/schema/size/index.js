import * as Yup from "yup";

export const sizeSchema = Yup.object().shape({
  name: Yup.string()
    .oneOf(
      ["small", "medium", "large"],
      'Size must be either "small", "medium",  or "large"'
    )
    .required("Size is required"),
});
