export default function SignInForm() {
    return (
        <>
            <div id="sign-in-form-container">
                
                <div className="form">
                    <div className="title">Welcome</div>
                    <div className="subtitle">Let's create your account!</div>
                    <div className="input-container ic1">
                    <input id="firstname" className="input" type="text" placeholder=" "/>
                    <div className="cut"></div>
                    <label  className="placeholder">First name</label>
                    </div>
                    <div className="input-container ic2">
                    <input id="lastname" className="input" type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label  className="placeholder">Last name</label>
                    </div>
                    <div className="input-container ic2">
                    <input id="email" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Email</label>
                    </div>
                    <button className="submit">Submit</button>
                </div>
                <div id="text-container">
                    <h1>Wordle</h1>
                    <h1>Sign In & Keep Score</h1>
                </div>
            </div>  
        </>

    )
}