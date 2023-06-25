import { FormEvent } from "react"
import { registerWithEmailAndPassword, signInWithGoogle } from "../firebase"
import { User } from "../entity"


export default function Register() {

    const signUp = async (ev: FormEvent) => {
        ev.preventDefault()
        const form = ev.target as HTMLFormElement
        const formFields = new FormData(form)
        
        // add client-side validation
        const payload = {
            username: formFields.get("username"),
            email: formFields.get("email"),
            password: formFields.get("password")
        } as User

        const user = await registerWithEmailAndPassword(payload)
        console.log(user)
    }

    return <main>
        <h1 className="text-2xl text-center">Register</h1>

        <form onSubmit={signUp}>
            <div>
                <input name="username" placeholder="Username" />
            </div>

            <div>
                <input name="email" type="email" placeholder="Email" />
            </div>
            
            <div>
                <input name="password" type="password" placeholder="Password" />
            </div>
         
            <div>
                <input name="password_confirmation" type="password" placeholder="Re-type Password" />
            </div>
        
            <button>Sign up</button>
        </form>

        <button onClick={signInWithGoogle}>Sign up with Google</button>
    </main>
}