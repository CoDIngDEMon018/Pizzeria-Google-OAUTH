import { RxExclamationTriangle } from "react-icons/rx";
import Link from 'next/link';
const AuthErrorPage: React.FC = () => {
  return (
    <div className="auth-error-page">
      <div className="auth-error-card">
        <div className="auth-error">
          <RxExclamationTriangle className="icon" />

          <p>{"Oops, something went wrong."}</p>
        </div>
        <div>
          <p>
            {"To go back to the sign in page, "}

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

export default AuthErrorPage;