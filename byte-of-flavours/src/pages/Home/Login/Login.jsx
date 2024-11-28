
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet} from 'react-helmet-async';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

import Swal from 'sweetalert2'
import SocialLogin from '../../../components/SocialLogin/SocialLogin';
const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log('state in the location', location.state)
    useEffect(() => {
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password .value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

            Swal.fire({
                title: "User Login Successfull",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              navigate(from, { replace: true });
        })
    }
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }
    return (
        <>
        <Helmet>
            <title> Byte of Flavours | Login</title>
        </Helmet>

        <button className="btn btn-outline border-0 border-b-4 border-yellow-500 text-l border-t-4 mt-4 mb-4"> <Link to="/">Go Back Home</Link></button>


          <div className="hero bg-base-200 min-h-screen mb-4">
            <div className="hero-content flex-col md:flex-row-reverse">
              <div className="text-center md:w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                The login process allows users to securely access their accounts by entering their registered email and password.
                </p>
              </div>
              <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl min-h-2.5 mx-14">
                <form onSubmit={handleLogin} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered"  />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
          
                  <div className="form-control">
                    <label className="label">
                    <LoadCanvasTemplate />
                    </label>
                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha" className="input input-bordered" />
              
                  </div>
          
                  <div className="form-control mt-2">
                    <input disabled={disabled} className="btn btn-outline border-0 border-b-4 border-yellow-500 text-l border-t-4 mt-4 mb-4" type="submit" value="Login" />
                  </div>         
                </form>
          
                <p className="px-10 -pt-4 -pb-2">
                 <small>
                   New here? <Link className="text-red-700 font-bold" to="/signup">Create an account</Link>
                 </small>
               </p>

                  <SocialLogin></SocialLogin>         
              </div>
            </div>          
       </div> </>
    );
};

export default Login;