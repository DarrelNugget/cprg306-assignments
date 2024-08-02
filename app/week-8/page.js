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
            <header>
                <h1>Login Page</h1>
            </header>
            <section>
                { user ? (
                    <div>
                        <p>Welcome, {user.email}</p>
                        <Link href="/week-8/shopping-list">shopping list page</Link>
                        <button className="text-lg m-2 hover:underline" onClick={handleSignOut}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        <button className="text-lg m-2 hover:underline" onClick={handleSignIn}>
                            SignIn
                        </button>
                    </div>
                ) }
            </section>
        </main>
    )
}