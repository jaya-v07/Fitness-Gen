import React from "react";
import "../index.css";
import Button from "../components/button";
const Home = ({ navigateTo }) => {
  return (
    <main className="bg-black h-screen flex items-center justify-center">
      <div className="text-center text-white m-100"> 
            <h1 className="text-6xl font-bold mb-4">
            FitnessGen
            </h1>
                <p className="text-xl max-w-xl mb-8">
                Welcome to FitnessGen, your personalized fitness plan
                <span className="bg-linear-to-r from-blue-200 to-indigo-600 bg-clip-text text-transparent">
                    {" "}generator!
                </span>
                </p>
                    <Button 
                        children="Get Started!"
                        onClick={() => navigateTo('signup')}
                        / >        
        </div>
    </main>
  );
}
export default Home;