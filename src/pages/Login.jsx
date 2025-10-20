import Form from "../components/Form";
import googleIcon from '../assets/images/google.svg';
import appleIcon from '../assets/images/apple.svg';



function Login() {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold text-tele-blue mb-6 text-center">
            Log in to your account
          </h1>
          <h4 className="text-gray-600 font-semibold text-xl text-center mb-4">
            select method to log in
          </h4>
          <Form route="/api/token/" method="login" />
          <div className="flex justify-center text-sm mt-12 mb-6 font-semibold">
            <p className="flex items-center px-4">Don't have an account? </p>
            <a href="/select-role" className="text-tele-blue">
              Create account
            </a>
          </div>
          <div className="flex justify-center items-center text-gray-700 font-semibold max-w-xs mx-auto">
            <div className="border-t-2 border-gray-300 w-1/4"></div>
            <p className="px-2 text-sm text-center">Or connect with</p>
            <div className="border-t-2 border-gray-300 w-1/4"></div>
          </div>
          <div className="flex justify-center space-x-3 mt-4 font-semibold">
            <button className="flex items-center gap-x-4 border-2 border-tele-blue-light rounded-lg px-4 py-2 hover:border-tele-blue-dark">
              <img src={googleIcon} className="w-6" alt="Google logo" />
              <p>Google</p>
            </button>
            <button className="flex items-center gap-x-3 border-2 border-tele-blue-light rounded-lg px-4 py-2 hover:border-tele-blue-dark">
              <img src={appleIcon} className="w-6" alt="Apple logo" />
              <p>Apple</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
