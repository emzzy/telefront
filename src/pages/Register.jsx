import RegisterForm from "../components/RegisterForm";

function Register() {
    return <RegisterForm route="/api/user/signup/" method="register" />
}

export default Register