import Form from "../components/Form"

function Login() {
    return (
        <div>
            <Form route="/api/token/" method="login" />
            <p>Not registered? Signup</p>
        </div>
    )
}

export default Login