import { useState } from "react";

export function ContacForm() {
    const {email,setEmail} = useState("");
    
    const handleemail = (event) => {
        setEmail()
    }
    return (
        <div>
            <input value={email} /> 
        </div>
    )
}