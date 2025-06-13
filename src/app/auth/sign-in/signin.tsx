// 'use client';
// import { FcGoogle } from 'react-icons/fc';
// import {handleGoogleSignIn} from '@/src/lib/auth/googleSignInServerAction';
// export const SignInPage: React.FC = () => {
//     return (
//         <div className="signin-page">
//             <div className="signin-card">
//                 <h1 className="signin-title">Sign In</h1>
//                 <div className="form-container">
//                     <div className="social-login">
//                         <button className="google" onClick={() => handleGoogleSignIn()}> 
//                             <FcGoogle className="google-icon" />
//                             Sign in with Google </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// src/app/signin/page.tsx
'use client';

import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { handleGoogleSignIn } from '@/src/lib/auth/googleSignInServerAction';
// import '@/src/sass/signin.scss';

export const SignInPage: React.FC = () => {
  return (
    <div className="signin-page">
      <div className="signin-card">
        <div className="brand-section">
          <div className="pizza-logo">🍕</div>
        </div>

        <h1 className="signin-title">Welcome to Pizzeria</h1>
        <p className="signin-description">
          Sign in to order your favorite slice and track delivery in real time!
        </p>

        <div className="form-container">
          <div className="social-login">
            <button
              className="google-btn"
              onClick={() => handleGoogleSignIn()}
            >
              <span className="icon-wrapper">
                <FcGoogle className="google-icon" />
              </span>
              <span className="btn-text">Continue with Google</span>
              <span className="ripple" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default SignInPage;
