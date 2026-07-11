import "../index.css";
import Button from '../components/button';
import { features } from '../constants/home.js';
import FeatureCard from '../components/feature-card.jsx';

export default function Home({ navigateTo }) {

  return (
    <div className="min-h-screen bg-bg selection:bg-champagne">
      {/* Navigation Header */}
      <header className="flex justify-between items-center max-w-6xl mx-auto px-6 py-6">
        <div className="text-xl font-bold tracking-tight text-deep-charcoal">FitnessGen</div>
        <button 
          onClick={() => navigateTo('signup')} 
          className="text-sm font-medium text-deep-charcoal hover:text-earth-taupe transition-colors cursor-pointer"
        >
          Sign Up
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-24 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-deep-charcoal mb-4">
          FitnessGen
        </h1>
        <p className="text-base md:text-lg text-earth-taupe font-medium max-w-lg mb-8 leading-relaxed">
          Welcome to FitnessGen, your personalized fitness plan generator!
        </p>
        <Button onClick={() => navigateTo('signup')} variant="primary">
          Get Started
        </Button>
      </section>

      {/* How It Works Section */}
      <section className="max-w-xl mx-auto px-6 pb-24">
        <h2 className="text-xs uppercase tracking-widest text-earth-taupe font-bold text-center mb-10">
          How It Works
        </h2>
        
        <div className="bg-white border border-soft-rose/30 rounded-2xl p-6 shadow-[0_4px_20px_rgba(44,42,41,0.03)] flex gap-5 items-start">
          <div className="text-sm font-bold text-deep-charcoal bg-champagne/40 px-3 py-1 rounded-md">
            01
          </div>
          <div>
            <h3 className="text-base font-semibold text-deep-charcoal mb-1">
              Tell Us About Yourself
            </h3>
            <p className="text-sm text-earth-taupe leading-relaxed">
              Securely log in and fill out a streamlined profile form. We assess your targets, schedules, and experience levels to curate something <b> tailored especially for you.</b>
            </p>
          </div>
        </div>

      </section>
      {/* Premium features */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
          <h2 className="text-xs uppercase tracking-widest text-earth-taupe font-bold text-center mb-10">
            Premium Features
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {features.map((feat) => (
              <FeatureCard
                key={feat.title}
                title={feat.title}
                description={feat.desc}
              />
          ))}
        </div>
      </section>
    </div>
  );

}
