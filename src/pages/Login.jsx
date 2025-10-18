import Form from "../components/Form";

function Login() {
  return (
    <>
      <div className="bg-red-500 text-white p-4 m-4 text-xl font-bold">
        If this is RED with white text, Tailwind works! ✓
      </div>

      <div className="bg-brand-blue-300 text-white p-4 m-4 text-xl font-bold">
        If this is BLUE (#259cd3), custom color works! ✓
      </div>

      <div>
        <h1 className="bg-redx text-3xl font-semibold text-brand-blue-300">
          Log in to your account
        </h1>
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
      </div>
    </>
  );
}

export default Login;
