import { useContext, useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const {createUser,user,setUser,updateUserProfile}=useContext(AuthContext)
    const [showPassword,setShowPassword]=useState(false)
    const location=useLocation()
    const navigate=useNavigate()
    const handleRegister=async e=>{


        e.preventDefault()

        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;

        // const newUser={name,email,photo,password}

        if (password.length < 6) {
            toast.error("Password contains 6 digits")
            return;
          }
          if (!/[A-Z]/.test(password)) {
            toast.error("Use Atleast one Uppercase");
            return;
          }
          if (!/[a-z]/.test(password)) {
            toast.error("Use Atleast one Lowercase");
            return;
          }

        // console.log(newUser)
       
        try {
            //2. User Registration
            const result = await createUser(email, password)
            // console.log(result)
            await updateUserProfile(name, photo)
            setUser({ ...user, photoURL: photo, displayName: name })
            navigate(location?.state ? location.state : '/');
            toast.success('Signup Successful')
          } catch (err) {
            // console.log(err)
            toast.error(err?.message)
          }


    }
    return (
       <div>
        
         <div className="flex justify-center my-14 ">
            
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-600">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"  required  />
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-600">Photo URL</label>
                <input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"  required  />
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block">Password</label>
                <div className="flex items-center input justify-between w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50">
               <input type={showPassword ? "text" : "password"} name="password" id="password"  placeholder="Password" className="grow"  required />
                <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoEyeSharp></IoEyeSharp> : <IoEyeOffSharp></IoEyeOffSharp>}
            </span>
               </div>
            </div>
            <button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Register</button>
            {/* <ToastContainer></ToastContainer> */}
            <Toaster
            position="top-center"
            reverseOrder={false}
            />
        </form>
      
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Do have an account?
            <Link to='/login' className="underline dark:text-gray-800">Sign in</Link>
        </p>
       
    </div>
   
        </div>
       </div>
      
    );
};

export default Register;