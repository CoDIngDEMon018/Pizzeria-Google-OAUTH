"use client";
import {useRouter} from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
export const SignInButton = (props: {children?: React.ReactNode; className?: string}) => {
    const router = useRouter();
    return (
        <button className={props.className} onClick={() => {
            router.push('/auth/sign-in');
        }}>
            <FcGoogle className="google-icon" />
            {props.children || 'Sign in with Google'}
        </button>
    )
}