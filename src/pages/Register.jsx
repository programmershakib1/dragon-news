import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const {handleRegister, errorMessage} = useContext(AuthContext);
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        if(name.length < 5){
          setError({...error, name: "must be more 5 character long"});
          return;
        }
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        handleRegister(email, password, {displayName:name, photoURL:photo});
        // updateUserProfile({displayName:name, photoURL:photo});
        // setUser({...user,displayName:name, photoURL:photo })
    }
  return (
    <div>
      <div className="mx-auto card bg-base-100 w-full max-w-lg shrink-0 rounded-none my-20">
        <h1 className="text-2xl font-bold text-center pt-10">
          Register your ACcount
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {
            error.name ? <label className="label">
            <span className="label-text text-rose-500">{error.name}</span>
          </label> : ""
          }
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
            name="photo"
              type="text"
              placeholder="url"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center pb-5 text-red-600">{errorMessage}</p>
        <p className="text-center pb-10">
          ALready Have AN ACcount?{" "}
          <Link className="text-red-600" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
