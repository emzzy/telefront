import Form from "../components/Form";

function Login() {
  return (
    <div className=" justify-center items-center flex flex-col ">
      <Form route="/api/token/" method="login" />
      <p className=" flex flex-col  items-center justify-center px-4 text-center font-sans ">
        Not registered?
        <a
          href="/register"
          className="inline-block flex flex-colmx-auto bg-slate-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition"
        >
          Register
        </a>
      </p>
    </div>
  );
}

export default Login;
