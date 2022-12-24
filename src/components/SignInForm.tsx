import { useContext } from "react";
import { userContext } from "../providers/userContext";
import { useForm } from "react-hook-form";

export default function SignInForm() {

    const { register, handleSubmit } = useForm();

    const {user, setUser} = useContext<any>(userContext)
    
    let userFirstName: string;
    let userLastName :string;
    let userEmail: string; 

    const extractAndAssign = (dataObject: {firstName: string, lastName: string, email: string}) => {
        setUser(dataObject)

        console.log(userFirstName, userEmail, userLastName)

    }
    return (
        <>
            <div id="sign-in-form-container">
                
                <form className="form" onSubmit={handleSubmit((data) => {
                    extractAndAssign(data)
                })}>
                    <div className="title">Welcome</div>
                    <div className="subtitle">Let's create your account!</div>
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