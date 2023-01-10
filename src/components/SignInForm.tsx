import { useContext } from "react";
import { userContext } from "../providers/userContext";
import { useForm } from "react-hook-form";
import { UserObject } from "../interface/interface"


export default function SignInForm() {

    const { register, handleSubmit } = useForm();

    const {user, setUser} = useContext<any>(userContext);
    
    const extractAndAssign = (userObject: UserObject) => {
        localStorage.setItem('user', JSON.stringify(userObject))
        // const currentUser = JSON.parse(localStorage.getItem('user') as string)
        setUser(userObject)
    };
    return (
        <>
            <div id="sign-in-form-container">
                
                <form className="form" onSubmit={handleSubmit((data) => {
                    console
                    extractAndAssign(data)
                })}>
                    <div className="title">Welcome</div>
                    <div className="subtitle">Sign in to your account!</div>
                    <div className="input-container ic1">
                        <input {...register("firstName")} id="firstname" className="input" type="text" placeholder=" "/>
                        <div className="cut"></div>
                        <label className="placeholder">First name</label>
                    </div>
                    <div className="input-container ic2">
                        <input {...register("lastName")} id="lastname" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label className="placeholder">Last name</label>
                    </div>
                    <div className="input-container ic2">
                        <input {...register("email")} id="email" className="input" type="text" placeholder=" " />
                        <div className="cut cut-short"></div>
                        <label className="placeholder">Email</label>
                    </div>
                    <button className="submit">Submit</button>
                </form>
                <div id="text-container">
                    <h1>Wordle</h1>
                    <h1>Sign In & Keep Score</h1>
                </div>
            </div>  
        </>

    )
}