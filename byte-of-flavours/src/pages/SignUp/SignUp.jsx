import { useContext} from 'react';
import { useForm } from "react-hook-form";
import { Helmet} from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';



const SignUp = () => {
     
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
              
              const userInfo = {
                name: data.name,
                email: data.email
              }
              axiosPublic.post('/users', userInfo)
              .then(res => {
                if(res.data.insertedId){

                  console.log('user added to database')

                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');

                }
              })

            })
            .catch(error => console.log(error))
        })
    };



    return (
        <>
        <Helmet>
            <title> Byte of Flavours | Sign Up</title>
        </Helmet>
        <button className="btn btn-outline border-0 border-b-4 border-yellow-500 text-l border-t-4 mt-4 mb-4"> <Link to="/">Go Back Home</Link></button>

        <div className="hero bg-base-200 min-h-screen mb-4">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign up now!</h1>
      <p className="py-6">
      The sign-up process enables new users to create an account by providing essential information, such as their name, email address, and a secure password. 
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl min-h-2.5 mx-14">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">

        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} name ="name" placeholder="name" className="input input-bordered" />
          {errors.name && <span className="text-red-700">Name is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
          {errors.photoURL && <span className="text-red-700">PhotoURL is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-red-700">Email is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required: true, 
            minLength:6, 
            maxLength: 20 ,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
            })} placeholder="password" className="input input-bordered" />

          {errors.password?.type === "required" && (
            <p className="text-red-700">Password must be 6 characters</p>)}

          {errors.password?.type === "minLength" && (
            <p className="text-red-700">Password must be 6 characters</p>)}

          {errors.password?.type === "maxLength" && (
            <p className="text-red-700">Password must be less than 20 characters</p>)}

          {errors.password?.type === "pattern" && (
            <p className="text-red-700">Password must have one uppercase, one lowercase and one special character</p>)}

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-2">
          <button className="btn btn-outline border-0 border-b-4 border-yellow-500 text-l border-t-4 mt-4 mb-4">Sign Up</button>
        </div>
      </form>

      <p className="px-10 -pt-4 -pb-2"> <small>Already have an account <Link className="text-red-700 font-bold" to="/login">Login</Link> </small></p>

      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
        </>

    );
};

export default SignUp;