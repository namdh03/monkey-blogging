import * as yup from "yup";
import signInSchema from "@pages/SignIn/SignIn.schema";

const schema = signInSchema.shape({
    fullname: yup.string().required("Please enter your fullname"),
});

export default schema;
