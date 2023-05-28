export default function Validation(values){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.name === ""){
        errors.name = "Name is required!";
    }
    if(values.name === ""){
        errors.email = "Email is Requied";
    }
     if(!email_pattern.test(values.email)) {
        errors.email = "Email didnot match";
     }
     if(values.password === ""){
        errors.password = 'Password Required';
     }else if(!password_pattern.test(values.password))
     {
        errors.email = "Password did not match";
     }
     return errors;
}