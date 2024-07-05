import Link from 'next/link';
import React from 'react';

const Signup=()=>{
    return(
        <div className = "flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-blue-500">
            <h1 className = "mb-5 text-2xl font-bold text-white">Signup</h1>
            <form className ="flex flex-col">
                <input
                type = "email"
                placeholder = "Email"
                required
                className = "mb-3 p-2 border border-gray-300 rounded"
                />
                <input
                type = "password"
                placeholder = "Password"
                required
                className = "mb-3 p-2 border border-gray-300 rounded"
                />
                <button
                type = "submit"
                className = "p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Signup
                </button>
            </form>
            <p className='mt-5 text-white'>
                Already have an account? Login <Link href="/login" className = "text-blue-800 transition hover:text-blue-300 hover:underline">here. </Link>
            </p>
        </div>

    )
}

export default Signup