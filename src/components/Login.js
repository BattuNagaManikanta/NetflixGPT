import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validData";
import { auth } from "../Utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { AVATAR_LOGO, LOGO } from "../Utils/constant";

const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const dispatch=useDispatch();

    const handleClick=(e)=>{
        e.preventDefault();
        const message=checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        // console.log(message);
        // console.log(isSignInForm);
        
        
        if(message != null ) return;

        if(!isSignInForm){
            // console.log(isSignInForm);
            
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // console.log(user);
                updateProfile(user, {
                displayName: name.current.value, photoURL: AVATAR_LOGO
                }).then(() => {
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    // console.log(uid,email,displayName,photoURL);
                    
                    dispatch(addUser({uid,email,displayName,photoURL}));
                // ...
                }).catch((error) => {
                // An error occurred
                console.log(error);
                
                // ...
                });
                // console.log(user);
                // navigate("/browse");
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        }

        else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
                // navigate("/browse");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage);
                
            });
        }
        
    }

    return (
        <div>
            <Header></Header>
            <div className="relative">
                <div className="absolute bg-black opacity-35 top-0 bottom-0 left-0 right-0"></div>
                <form className="text-white py-20 px-11 absolute w-1/4 bg-black z-20 top-40 left-[600px] bg-opacity-80">
                    <h1 className="text-3xl py-5 font-bold">Sign {(!isSignInForm) ? "UP" : "IN" }</h1>
                    {(!isSignInForm) && <input ref={name} className="w-full my-4 p-4 bg-gray-800" type="text" placeholder="UserName"/>}
                    <input ref={email} className="w-full my-4 p-4 bg-gray-800" type="text" placeholder="email" />
                    <input ref={password} className="w-full my-4 p-4  bg-gray-800" type="password" placeholder="password" />
                    <p className="text-red-600">{errorMessage}</p>
                    <button onClick={handleClick} className="w-full my-8 p-4 bg-red-600">{(!isSignInForm) ? "Sign Up" : "Sign In"}</button>
                    <p className="cursor-pointer" onClick={(e)=>{
                        // e.preventDefault();
                        setIsSignInForm(!isSignInForm);
                    }}>{isSignInForm ?  "New to Netflix ? Sign Up Now" :  "Already a user ? Sign In Now"  }</p>
                </form>
                <img className="w-screen h-screen object-cover " src={LOGO}/>  
            </div>
        </div>
    )
}

export default Login;