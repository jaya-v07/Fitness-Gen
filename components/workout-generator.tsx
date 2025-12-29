"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dumbbell, Sparkles } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

type WorkoutParams = {
  age: string
  fatigue: string
  goal: string
  experience: string
  duration: string
}

export default function WorkoutGenerator() {
  const [params, setParams] = useState<WorkoutParams>({
    age: "",
    fatigue: "",
    goal: "",
    experience: "",
    duration: "",
  })
  const [workout, setWorkout] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async () => {
    setIsLoading(true)
    setWorkout("")

    try {
      const response = await fetch("https://ufit-7m80.onrender.com/generate", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      })

      if (!response.ok) {
        throw new Error("Failed to generate workout")
      }

      const data = await response.json()
      setWorkout(data.workout)
    } catch (error) {
      console.error("Error generating workout:", error)
      setWorkout("Failed to generate workout. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const isFormValid = Object.values(params).every((value) => value !== "")

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-primary/10 p-4">
            <Dumbbell className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          AI Fitness Workout Generator
        </h1>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Get personalized workout plans powered by AI. Answer a few questions and receive a custom workout tailored to
          your fitness goals.
        </p>
      </div>

      {/* Form */}
      <Card className="mx-auto mb-8 max-w-4xl border-border/50 bg-card p-6 shadow-lg md:p-8">
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">Your Profile</h2>
          <p className="text-sm text-muted-foreground">Tell us about yourself to get the perfect workout</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Age Bracket */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Age Bracket</label>
            <div className="grid grid-cols-3 gap-2">
              {["10+", "20+", "30+", "40+", "50+"].map((age) => (
                <Button
                  key={age}
                  type="button"
                  variant={params.age === age ? "default" : "outline"}
                  className={`transition-all ${
                    params.age === age
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => setParams({ ...params, age })}
                >
                  {age}
                </Button>
              ))}
            </div>
          </div>

          {/* Fatigue Level */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Fatigue Level</label>
            <div className="grid grid-cols-3 gap-2">
              {["Low", "Medium", "High"].map((fatigue) => (
                <Button
                  key={fatigue}
                  type="button"
                  variant={params.fatigue === fatigue ? "default" : "outline"}
                  className={`transition-all ${
                    params.fatigue === fatigue
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => setParams({ ...params, fatigue })}
                >
                  {fatigue}
                </Button>
              ))}
            </div>
          </div>

          {/* Fitness Goal */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Fitness Goal</label>
            <div className="grid gap-2">
              {["Weight Loss", "Muscle Gain", "General Fitness"].map((goal) => (
                <Button
                  key={goal}
                  type="button"
                  variant={params.goal === goal ? "default" : "outline"}
                  className={`transition-all ${
                    params.goal === goal
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => setParams({ ...params, goal })}
                >
                  {goal}
                </Button>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Experience Level</label>
            <div className="grid gap-2">
              {["Beginner", "Intermediate"].map((experience) => (
                <Button
                  key={experience}
                  type="button"
                  variant={params.experience === experience ? "default" : "outline"}
                  className={`transition-all ${
                    params.experience === experience
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => setParams({ ...params, experience })}
                >
                  {experience}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Workout Duration */}
        <div className="mt-6 space-y-3">
          <label className="text-sm font-medium">Workout Duration</label>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {["15", "30", "45", "60"].map((duration) => (
              <Button
                key={duration}
                type="button"
                variant={params.duration === duration ? "default" : "outline"}
                className={`transition-all ${
                  params.duration === duration
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                    : "hover:border-primary/50"
                }`}
                onClick={() => setParams({ ...params, duration })}
              >
                {duration} min
              </Button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="mt-8">
          <Button
            size="lg"
            className="w-full text-base font-semibold shadow-lg transition-all hover:shadow-xl"
            onClick={handleGenerate}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? (
              <>
                <Spinner className="mr-2 h-5 w-5" />
                Generating Your Workout...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Workout
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Output Section */}
      {(isLoading || workout) && (
        <Card className="mx-auto max-w-4xl border-border/50 bg-card p-6 shadow-lg md:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-2">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Your Personalized Workout</h2>
          </div>

          {isLoading ? (
            <div className="flex min-h-[200px] items-center justify-center">
              <div className="text-center">
                <Spinner className="mx-auto mb-4 h-12 w-12 text-primary" />
                <p className="text-muted-foreground">Creating your perfect workout plan...</p>
              </div>
            </div>
          ) : (
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap rounded-lg bg-secondary/50 p-6 text-foreground">{workout}</div>
            </div>
          )}
        </Card>
      )}
    </div>
  )
}
