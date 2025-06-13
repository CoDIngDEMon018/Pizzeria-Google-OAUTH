import { RxCheckCircled } from "react-icons/rx";
import Link from 'next/link';
const AuthSuccessPage: React.FC = () => {
  return (
    <div className="auth-success-page">
      <div className="auth-success-card">
        <div className="auth-success">
          <RxCheckCircled className="icon" />

          <p>{"Success! You have already logged in."}</p>
        </div>
        <div>
          <p>
            {
              "Want to go back to the sign-in page and try again? "
            }

            <Link
              href="/api/auth/signin"
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthSuccessPage;