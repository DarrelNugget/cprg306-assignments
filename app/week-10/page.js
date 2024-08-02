"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


export default function Page() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();


    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    console.log(user);

    return(
        <main>
            <body className="h-screen bg-gradient-to-b bg-gray-600"></body>
            <header>
                <h1 className="font-bold text-3xl">Login Page</h1>
            </header>
            <section>
                { user ? (
                    <div>
                        <p>Welcome, {user.email}</p>
                        <div className="underline hover:font-bold">
                            <Link href="/week-10/shopping-list">shopping list page</Link>
                        </div>
                        <div>
                            <button className="hover:underline font-bold" onClick={handleSignOut}>
                                Logout
                            </button>
                        </div>
                        
                    </div>
                ) : (
                    <div>
                        <button className="text-2xl hover:font-bold" onClick={handleSignIn}>
                            SignIn
                        </button>
                    </div>
                ) }
            </section>
        </main>
    )
}