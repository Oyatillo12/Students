import * as yup from "yup";


export const LoginSchema =() => {
    return  yup.object().shape({
        username: yup.string().min(3, "Username must be at least 3 characters long").required("Username is required"),
        useremail: yup.string().email("Invalid email address").required("Email is required"),
        password: yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
    })
}