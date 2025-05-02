import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../ContextProvider/AuthProvider';

const Register = () => {
    const{CreateUser,setUser,updateUser}=useContext(AuthContext)

    const navigate=useNavigate();

    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const photo=form.Photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password,photo);
        // Create User
        CreateUser(email,password).then((result)=>{
            const user=result.user;
            //update user profile
            updateUser({displayName:name, photoURL:photo}).then(()=>{
              setUser({...user,displayName:name, photoURL:photo})
              navigate("/");
            }).catch((error)=>{
              setUser(user);
              console.log(error);
            })
           
        }).catch((error)=>{
            const errorCode=error.code;
            const errorMessage=error.errorMessage;
            console.log(errorCode);
            alert(errorMessage);
        })
    }
    return (
        <div className="flex items-center justify-center mt-4 py-8">
      <div className="hero bg-base-200">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="font-bold text-center text-2xl">
            Register your account
            </h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="name"
                required
              />
              <label className="label">Photo URL</label>
              <input
                name="Photo"
                type="text"
                className="input"
                placeholder="Photo"
              />
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
             
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </form>
            <p className="font-semibold">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;