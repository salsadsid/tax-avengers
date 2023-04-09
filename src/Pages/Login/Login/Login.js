import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Login = () => {
  const [loginError,setLoginError]= useState('')
  const {register,handleSubmit,formState:{errors},watch} =useForm()
  const {signIn} = useContext(AuthContext)
  const navigate =useNavigate()
  const location=useLocation()
  const from= location.state?.from?.pathname || "/"
  
  const handleLogin=data=>{
    setLoginError("")
      signIn(data.email,data.password)
      .then(res=>{
        if(res.user){
          navigate(from,{replace:true})
        }
      })
      .catch(error=>{
        console.log(error.message)
        setLoginError(error.message)
      })
  }

  console.log(watch("email"))
    return (
        <section className="h-[1024px] md:h-[800px] mx-auto lg:max-w-7xl">
  <div className="h-full">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image" ></img>
      </div>
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div
            className="flex flex-row items-center justify-center lg:justify-start">
            <p className="mb-0 mr-4 text-lg">Sign in with</p>
            <button
              className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>

            <button
              
              className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
       
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </button>

            <button
              
              className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>
          </div>

          <div
            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              className="mx-4 mb-0 text-center font-semibold dark:text-white">
              Or
            </p>
          </div>
          <div className="relative mb-4" >
            
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded py-[0.32rem] px-3 leading-[2.15] outline-none border-2 bg-gray-200 focus:bg-transparent"
              id="formControlInput2"
              placeholder="Email address" {...register("email",{required:true})}/>
          {errors?.email && <span className='inline-block mb-2 text-xs text-red-400'>This field is required</span>}
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded py-[0.32rem] px-3 leading-[2.15] outline-none border-2 bg-gray-200 focus:bg-transparent"
              id="formControlInput22"
              placeholder="Password" 
              {...register("password",{required:true})}
              />
          {errors?.password && <span className='inline-block mb-2 text-xs text-red-400'>This field is required</span>}
          </div>
          <div className="mb-6 flex items-center justify-between">
            <a href="#!">Forgot password ? </a>
          {loginError && <span className='inline-block mt-2 text-xs text-red-400'>{loginError}</span>}
          </div>
          <div className=" text-center lg:text-left">
            <input
              type="submit"
              className="btn rounded-full px-7 btn-primary normal-case m-0 text-lg py-3 shadow-sm pb-10 text-white border-2"
              data-te-ripple-init
              data-te-ripple-color="light" value="Login"/>
            <button className="btn bg-white border-2 border-black hover:border-black rounded-full text-lg px-8 py-3 pb-10 normal-case hover:bg-black text-black hover:text-white mx-2 shadow">
          <Link to="/signup">Create Account</Link>
        </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    );
};

export default Login;