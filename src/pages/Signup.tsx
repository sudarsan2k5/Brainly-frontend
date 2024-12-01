import axios from "axios";
import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

       await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password

        })
        navigate('/signin')
        alert("You have signed Up :)")
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username"/>
            <Input reference={passwordRef} placeholder="Password"/>

            <div className="flex justify-center p-4">
            <Button onClick={signup}variant="primary" text="Signup" fullWidth={true} loading={false}/>
            </div>
            
        </div>
    </div>
}