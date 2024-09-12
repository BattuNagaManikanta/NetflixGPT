import { useNavigate } from "react-router-dom";
import logo from "../assets/pngwing.com.png"
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";


const Header=()=>{
    const navigate= useNavigate();
    const dispatch=useDispatch();
    const user= useSelector((store)=>store.user)
    const handleSignOut=()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
            // dispatch(removeUser());
            
        }).catch((error) => {
        // An error happened.
        });
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid,email,displayName,photoURL}));
              navigate("/browse")
            } else {
              dispatch(removeUser());
              navigate("/");
            }
          })
          return ()=>{
            unsubscribe();
          }
    },[]);


    return (
        <div>
            <div className="w-screen absolute p-4 z-10 flex justify-between align-middle text-white">
                <div className="w-56">
                    <img className="" src={logo}/>
                </div>
                {user && <div className="flex justify-between align-middle">
                    <img className="w-11 h-11" src={user.photoURL}/>
                    <button onClick={handleSignOut} className="font-bold text-lg">(SignOut)</button>
                </div>}
            </div>
        </div>
    )
}

export default Header;