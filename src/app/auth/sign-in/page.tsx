import {SignInPage} from "@/src/app/auth/sign-in/signin" ;
import { redirect } from "next/navigation";
import { checkIsAuthenticated } from "@/src/lib/auth/checkIsAuthenticated";
const SignIn: React.FC = async () => {
        const isAuthenticated = await checkIsAuthenticated();

        
        if (isAuthenticated) {
            // Redirect to the dashboard if the user is authenticated
            redirect ("/dashboard" );
        } else {
            return <SignInPage/>;
        }
}

export default SignIn;
