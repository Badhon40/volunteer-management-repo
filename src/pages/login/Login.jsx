import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
    const {signInUser,googleLogin,setUser}=useContext(AuthContext)

    // const location=useLocation()
    const navigate=useNavigate()
    
    const handleLogin=(e)=>{
       e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value;

        // const loginUser={email,password}

        signInUser(email,password)
        .then(result=>{
            setUser(result.user)
            toast.success("Sign In SuccessFully")
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            toast.error(error?.message)
        })
    }
    const handleGoogle=async()=>{
                try{
                    await googleLogin()
                    toast.success("Successfully Login")
                    navigate('/')
                }
                catch(err){
                    toast.error(err?.message)
                }
      }

    //   const handleGithub=()=>{
    //     githubLogin()
    //                 .then(
    //                     toast.success('Login Success Fully'),
    //                     navigate(location?.state ? location.state : '/')
    
    //                 )
    //                 .catch(
    //                     toast.error("login Failed")
    //                 )
    //   }
 
    return (
      <div className="flex justify-evenly my-14">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
           
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required/>
            </div>
           
            <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
            </div>
            <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>
            <ToastContainer></ToastContainer>
        </form>
        <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
        <button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
            
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
            <Link to='/register' className="underline dark:text-gray-800">Sign up</Link>
        </p>
    </div>
      </div>
    );
};

export default Login;