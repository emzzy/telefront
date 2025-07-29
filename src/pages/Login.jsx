import Form from "../components/Form";

function Login() {
  return (
    <div className="">
      <Form route="/api/token/" method="login" />
      <p className="flex flex-col items-center justify-center px-4 text-center">
        Not registered?
        <a
          href="/select-role"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
        >
          Register
        </a>
      </p>
    </div>
  );
}

export default Login;
