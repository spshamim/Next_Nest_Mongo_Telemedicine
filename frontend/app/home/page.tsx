"use client"
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
export default function User() {
    const notify = () =>{
        toast.success("Redirecting....", { duration: 600 });
    }
    
    return (
        <>
        <Toaster />
        <h2 className="text-rose-600 text-2xl text-center my-4">3NP Stack</h2>
        <div className="flex justify-center">
            <ul className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-4">
                <li>
                    <Link href="/" onClick={notify}>
                        <span className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-rose-100 hover:text-rose-600 transition-colors">Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/apitest/" onClick={notify}>
                        <span className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-rose-100 hover:text-rose-600 transition-colors">API Test</span>
                    </Link>
                </li>
                <li>
                    <Link href="/auth/login/" onClick={notify}>
                        <span className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-rose-100 hover:text-rose-600 transition-colors">Login</span>
                    </Link>
                </li>
                <li>
                    <Link href="/signup" onClick={notify}>
                        <span className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-rose-100 hover:text-rose-600 transition-colors">Signup</span>
                    </Link>
                </li>
            </ul>
        </div>
    </>
    );
}