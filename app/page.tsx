import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dumbbell, Zap, Target, Clock } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">FitAI</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary">
            AI-Powered Fitness
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Your Personal AI Workout <span className="text-primary">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Get personalized workout plans tailored to your fitness level, goals, and available time. Powered by
            advanced AI technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="/workout">Generate Workout</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FitAI?</h2>
            <p className="text-muted-foreground text-lg">Advanced AI technology meets personalized fitness</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-border/40 bg-card hover:border-primary/20 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Goal-Oriented</h3>
              <p className="text-muted-foreground">
                Workouts designed specifically for your fitness goals, whether it's weight loss, muscle gain, or
                endurance.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border/40 bg-card hover:border-primary/20 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">
                Leverage cutting-edge AI to generate workouts that adapt to your experience level and current fatigue.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border/40 bg-card hover:border-primary/20 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Time Flexible</h3>
              <p className="text-muted-foreground">
                From 15-minute quick sessions to 90-minute intensive workouts. Fit exercise into your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 border-t border-border/40">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Fitness?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of users already achieving their fitness goals with AI-powered workouts
          </p>
          <Button size="lg" className="text-base px-8" asChild>
            <Link href="/workout">Start Your First Workout</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 FitAI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
