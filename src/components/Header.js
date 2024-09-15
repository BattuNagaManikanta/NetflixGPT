import { useNavigate } from "react-router-dom";
import logo from "../assets/pngwing.com.png"
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { toggleShowGptPage } from "../Utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../Utils/constant";
import { changeLanguage } from "../Utils/configSlice";

const Header=()=>{
    const navigate= useNavigate();
    const dispatch=useDispatch();
    const user= useSelector((store)=>store.user)
    const showGptPage = useSelector((store)=>store.gptSearch.showGptPage)
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

    const handleGptSearchPage=(e)=>{
        dispatch(toggleShowGptPage());
    }

    const handleClick=(e)=>{
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="">
            <div className="w-screen absolute z-10 flex justify-around align-middle">
                <div className="w-56">
                    <img className="" src={logo}/>
                </div>
                {user && <div className=" my-5 mx  flex justify-between">
                    { showGptPage && <select className="" onChange={handleClick}>
                        {SUPPORTED_LANGUAGES.map(language => <option value={language.identifier}>{language.name}</option>)}
                    </select>}
                    <button className="text-white h-9 mx-3 px-6 rounded-lg bg-purple-600" onClick={handleGptSearchPage}>{showGptPage ? "Homepage": "GPT Search"}</button>
                    <img className="w-11 h-11" src={user.photoURL}/>
                    <button onClick={handleSignOut} className="text-white font-bold text-lg">(SignOut)</button>
                </div>}
            </div>
        </div>
    )
}

export default Header;