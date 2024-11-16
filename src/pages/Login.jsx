import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {handleSingIn, errorMessage} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        handleSingIn(email, password);
        navigate(location?.state ? location.state : "/");
    }
  return (
    <div>
          <div className="mx-auto card bg-base-100 w-full max-w-lg shrink-0 rounded-none my-20">
          <h1 className="text-2xl font-bold text-center pt-10">Login your ACcount</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">Login</button>
              </div>
            </form>
            <p className="text-center pb-5 text-red-600">{errorMessage}</p>
            <p className="text-center pb-10">Don&apos;t have an Account? <Link className="text-red-600" to="/auth/register">Register</Link></p>
          </div>
        </div>
  );
};

export default Login;
