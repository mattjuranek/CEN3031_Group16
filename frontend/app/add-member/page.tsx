"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const AddMember = () =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string |null>(null)
    const router = useRouter()

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setError(null)
        setSuccess(null)

        try{
            const response = await fetch("http://localhost:4000/user",{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({username, password})
            })

            const data = await response.json()
            if(!response.ok){
                console.error('Server error response:', data)
                throw new Error(data.message || "Failed to add member")
            }

            console.log('Server success response:', data)
            setSuccess("Member add successfully")
            setUsername("")
            setPassword("")
        } catch(err){
            if(err instanceof Error){
                setError(err.message)
            }else{
                setError("An unexpected error occured")
            }
        }
    } 

    return(
        <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-blue-500'>
            <h1 className='mb-5 text-2xl font-bold text-white'>Add New Member</h1>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <input
                    type = "email"
                    placeholder= "Email"
                    required
                    className='mb-3 p-2 border border-gray-300 rounded'
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                />
                <input
                    type = "password"
                    placeholder = "Password"
                    required
                    className='mb-3 p-2 border border-gray-300 rounded'
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <button
                    type = "submit"
                    className='p-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Add Member</button>
            </form>
            {error && <p className= 'mt-3 text-red-500'>{error}</p>}
            {success && <p className='mt-3 text-black'>{success}</p>}
        </div>
    )
}

export default AddMember