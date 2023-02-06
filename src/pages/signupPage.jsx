import useSignup from "../hooks/useSignUp"

export default function Signup(){
    
    const {formData, handleChange, submitForm} = useSignup()
    
    return (
        <div>
            <form className="form" onSubmit={submitForm}>
                <h1 className="text-2xl uppercase font-bold mb-6">Sign up</h1>

                <label htmlFor="email" className="block mt-4 mb-1">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    className="input" 
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="password" className="block mt-4 mb-1">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="input"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button type="submit" className="btn mt-6">Sign up</button>
            </form>
        </div>
    )
}