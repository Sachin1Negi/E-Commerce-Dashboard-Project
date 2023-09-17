import { type } from '@testing-library/user-event/dist/type';
import React, {useState} from 'react';

export default function SignUp(){

    const[name, setName] = useState("");  //Inside the useState() we provide the initial value.
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    async function collectData(){
        // console.warn({name, password, email});
        let result = await fetch("http://127.0.0.1:5000/register", {
            method : "post",
            body : JSON.stringify({name, password, email}),
            headers : { 'Content-Type' : 'application/json'}
        });
        result = await result.json();
        console.warn(result);
    }

    return(
        <div className='signup-div'>
            <h2 className='register'>Register </h2>
            <input className='signup-inp' type='text' placeholder='Enter Name' value={name} onChange={ (e)=>setName(e.target.value)} />
            <input className='signup-inp' type='text' placeholder='Enter Password' value={password} onChange={ (e)=>setPassword(e.target.value)} />
            <input className='signup-inp' type='email' placeholder='Enter Email' value={email} onChange={ (e)=>setEmail(e.target.value)} />
            <button className='signup-but' onClick={collectData} type='button'>Submit</button>
        </div>
    )

}