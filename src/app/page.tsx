// import React from "react";
// import "@/src/sass/globals.scss";
// import { SignInButton } from "@/src/components/sign-in-button";
// const Home=() => {
//     return (
//         <div className="home-page">
//             <h1>Pizzeria</h1>
//             <div>
//                 <SignInButton className="signin-button" />
//             </div>
//         </div>
//     );
// }
// export default Home;

import React from "react";
import "@/src/sass/globals.scss";
import { SignInButton } from "@/src/components/sign-in-button";

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <div className="brand-section">
                        <div className="pizza-icon">🍕</div>
                        <h1 className="brand-title">Pizzeria</h1>
                        <p className="brand-subtitle">Authentic Italian Pizza Delivered Fresh</p>
                    </div>
                    
                    <div className="hero-text">
                        <h2>Craving the Perfect Slice?</h2>
                        <p>Experience the taste of authentic Italian pizza made with fresh ingredients and traditional recipes. Order now and get it delivered hot to your doorstep!</p>
                    </div>
                    
                    <div className="auth-section">
                        <SignInButton className="signin-button" />
                        <p className="auth-subtitle">Sign in with Google to start ordering</p>
                    </div>
                </div>
                
                <div className="hero-image">
                    <div className="pizza-showcase">
                        <div className="pizza-card">
                            <div className="pizza-img">🍕</div>
                            <h3>Margherita Classic</h3>
                        </div>
                        <div className="pizza-card">
                            <div className="pizza-img">🍕</div>
                            <h3>Pepperoni Deluxe</h3>
                        </div>
                        <div className="pizza-card">
                            <div className="pizza-img">🍕</div>
                            <h3>Veggie Supreme</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Features Section */}
            <div className="features-section">
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Fast Delivery</h3>
                        <p>Hot pizza delivered in 30 minutes or less</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🌟</div>
                        <h3>Fresh Ingredients</h3>
                        <p>Only the finest ingredients for authentic taste</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">👨‍🍳</div>
                        <h3>Expert Chefs</h3>
                        <p>Traditional Italian recipes from master chefs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;