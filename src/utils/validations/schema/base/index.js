import * as Yup from "yup";

export const baseSchema = Yup.object().shape({
  name: Yup.string()
    .oneOf(["thin", "thick"], 'Base must be either "thin", or "thick"')
    .required("Base is required"),
});
