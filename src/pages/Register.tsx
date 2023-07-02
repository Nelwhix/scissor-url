import { FormEvent } from "react"
import { registerWithEmailAndPassword, signInWithGoogle } from "../firebase"
import { User } from "../entity"
import Button from "../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useLoader, useLoaderUpdate } from "../LoaderContext"
import Progress from "../components/Progress"
import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input
} from '@chakra-ui/react'

export default function Register() {
    const navigate = useNavigate()
    const loader = useLoader()
    const toggleLoader = useLoaderUpdate()

    const gSignIn = async () => {
        const success = await signInWithGoogle()
        if (success) {
            navigate("/trim")
        }
    }

    const signUp = async (ev: FormEvent) => {
        toggleLoader()
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
        toggleLoader()
        if (user) {
            navigate("/trim")
        }
    }

    return <main className="px-8">
        <Progress isAnimating={loader?.isAnimating} key={loader?.key} />
        <div id="sign" className="mt-10">
            <p>Sign up with:</p>

            <div className="flex justify-center mt-4">
                <div className="flex justify-between gap-x-6">
                    <button className="text-white bg-blue-700 rounded-md py-3 px-6" onClick={gSignIn}>
                        <img className="inline mr-1 -mt-1" src="/icons/google.svg" />Google
                    </button>
                    <button className="text-white bg-blue-700 rounded-md py-3 px-6">
                        <img className="inline mr-1 -mt-1" src="/icons/apple.svg" />Apple
                    </button>
                </div>
            </div>
        </div>

            <div className="flex justify-center">
                <div className="flex justify-between mt-4 px-4 w-80">
                    <span className="w-52 bg-gray-300 h-[1px] mt-3" />
                    <span className="mx-4">Or</span>
                    <span className="w-52 bg-gray-300 h-[1px] mt-3" />
                </div>
            </div>
            
    
            <form onSubmit={signUp} className="mt-8 lg:px-[489px]">
                <FormControl>
                    <FormLabel>User name</FormLabel>
                    <Input type='text' name="username" />
                </FormControl>

                <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <Input type='email' name="email" />
                </FormControl>

                <FormControl className="mt-4">
                    <FormLabel>Password</FormLabel>
                    <Input type='password' name="password" />
                </FormControl>

                <FormControl className="mt-4">
                    <FormLabel>Re-type Password</FormLabel>
                    <Input type='password' name="password_confirmation" />
                    <FormHelperText>6 or more characters, one number, one uppercase & one lower case.</FormHelperText>
                </FormControl>
                

                <button className="text-white bg-blue-700 rounded-full py-3 px-6 w-full mt-9">
                    Sign up with Email
                </button>
            </form>

            <p className="mt-6 text-center">
                <span className="mr-2">Already have an account?</span>
                <Link to="/login" className="text-blue-700">Log in</Link>
            </p>

            <p className="text-center mt-5">
                <span className="text-gray-400">By signing up, you agree to <br />
                Scissor's</span> Terms of Service, Privacy Policy <span className="text-gray-400">and</span> Acceptable Use Policy.
            </p>
    </main>
}