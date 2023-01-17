import { useContext } from "react";
import { userContext } from "../providers/userContext";
import { useForm } from "react-hook-form";
import { UserObject } from "../interface/interface"


export default function SignInForm() {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const {user, setUser} = useContext<any>(userContext);
    
    const extractAndAssign = (userObject: UserObject) => {
        localStorage.setItem('user', JSON.stringify(userObject))
        // setUser(userObject)
    };
    return (
        <>
            <div id="sign-in-form-container">
                
                <form className="form" onSubmit={handleSubmit((data) => {

                    extractAndAssign(data as UserObject)
                })}>
                    <div className="title">Welcome</div>
                    <div className="subtitle">Sign in to your account!</div>
                    <div className="input-container ic1">
                        <input data-test="firstName-input" {...register("firstName", {required: true})} id="firstname" className="input" type="text" placeholder=" "/>
                        <div className="cut"></div>
                        <label className="placeholder">First name</label>
                        {errors.firstName && <span className="error-span">This field is required</span>}
                    </div>
                    <div className="input-container ic2">
                        <input {...register("lastName")} id="lastname" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label className="placeholder">Last name</label>
                    </div>
                    <div className="input-container ic2">
                        <input {...register("email")} id="email" className="input" type="email" placeholder=" " />
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