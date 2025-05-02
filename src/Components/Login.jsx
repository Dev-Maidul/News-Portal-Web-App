
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { use, useState } from "react";

const Login = () => {
  const [error,setError]=useState("");
    const {signIn}=use(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();


    const handleSignIn=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        // user sign in
        signIn(email,password).then((result)=>{
            const user=result.user;
            navigate(`${location.state ? location.state: "/"}`)
            console.log(user);
        }).catch((error)=>{
            const errorCode=error.code;
           // const errorMessage=error.message;
            setError(errorCode);
        })
    }
  return (
    <div className="flex items-center justify-center mt-4 py-8">
      <div className="hero bg-base-200">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="font-bold text-center text-2xl">
              Login your account
            </h1>

            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
            <p className="font-semibold">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
