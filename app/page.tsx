"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface Question {
  id: number
  question: string
  answers: {
    text: string
    scores: { [key: string]: number }
  }[]
}

interface QuizType {
  id: string
  title: string
  description: string
  emoji: string
  questions: Question[]
}

interface PlushieResult {
  name: string
  description: string
  personality: string
  whyPerfect: string
  emoji: string
  color: string
}

const quizTypes: QuizType[] = [
  {
    id: "personality",
    title: "Personality Quiz",
    description: "Discover your plushie based on your core personality traits",
    emoji: "🧠",
    questions: [
      {
        id: 1,
        question: "What's your ideal way to spend a weekend?",
        answers: [
          { text: "Curled up reading a book", scores: { blahaj: 3, hedgehog: 2, bear: 1 } },
          { text: "Adventure hiking or exploring", scores: { djungelskog: 3, lynx: 2, fox: 1 } },
          { text: "Hosting friends for dinner", scores: { penguin: 3, bee: 2, otter: 1 } },
          { text: "Stargazing and dreaming", scores: { alien: 3, owl: 2, earth: 1 } },
        ],
      },
      {
        id: 2,
        question: "How do you handle stress?",
        answers: [
          { text: "Take deep breaths and stay calm", scores: { whale: 3, turtle: 2, blahaj: 1 } },
          { text: "Talk it out with friends", scores: { penguin: 3, bee: 2, otter: 1 } },
          { text: "Go for a run or workout", scores: { djungelskog: 3, lynx: 2, fox: 1 } },
          { text: "Find a quiet space to think", scores: { owl: 2, hedgehog: 3, bear: 1 } },
        ],
      },
      {
        id: 3,
        question: "What's your biggest strength?",
        answers: [
          { text: "I'm incredibly loyal", scores: { blahaj: 3, bear: 2, otter: 1 } },
          { text: "I'm wise and observant", scores: { owl: 3, turtle: 2, hedgehog: 1 } },
          { text: "I'm brave and adventurous", scores: { djungelskog: 3, lynx: 2, fox: 1 } },
          { text: "I bring people together", scores: { bee: 3, penguin: 2, otter: 1 } },
        ],
      },
      {
        id: 4,
        question: "How do you show affection?",
        answers: [
          { text: "Big warm hugs", scores: { bear: 3, djungelskog: 2, otter: 1 } },
          { text: "Quality time together", scores: { penguin: 2, blahaj: 3, bee: 1 } },
          { text: "Thoughtful little gifts", scores: { hedgehog: 2, bee: 3, owl: 1 } },
          { text: "Playful teasing and jokes", scores: { octopus: 3, fox: 2, lynx: 1 } },
        ],
      },
      {
        id: 5,
        question: "What motivates you most?",
        answers: [
          { text: "Helping others feel better", scores: { bear: 3, blahaj: 2, bee: 1 } },
          { text: "Discovering new things", scores: { alien: 3, astronaut: 2, owl: 1 } },
          { text: "Building strong relationships", scores: { otter: 3, penguin: 2, bee: 1 } },
          { text: "Achieving personal goals", scores: { djungelskog: 3, lynx: 2, fox: 1 } },
        ],
      },
    ],
  },
  {
    id: "food",
    title: "Food Preferences Quiz",
    description: "Find your plushie match based on your taste buds and eating habits",
    emoji: "🍕",
    questions: [
      {
        id: 1,
        question: "What's your go-to comfort food?",
        answers: [
          { text: "Fresh sushi or seafood", scores: { blahaj: 3, whale: 2, octopus: 1 } },
          { text: "Hearty stew or soup", scores: { bear: 3, djungelskog: 2, hedgehog: 1 } },
          { text: "Sweet honey treats", scores: { bee: 3, otter: 2, bear: 1 } },
          { text: "Exotic space food", scores: { alien: 3, astronaut: 2, earth: 1 } },
        ],
      },
      {
        id: 2,
        question: "How do you prefer your meals?",
        answers: [
          { text: "Quick and on-the-go", scores: { fox: 3, lynx: 2, bee: 1 } },
          { text: "Slow and savored", scores: { turtle: 3, whale: 2, owl: 1 } },
          { text: "Shared with loved ones", scores: { penguin: 3, otter: 2, bee: 1 } },
          { text: "Perfectly organized", scores: { hedgehog: 2, owl: 3, bear: 1 } },
        ],
      },
      {
        id: 3,
        question: "What's your favorite flavor profile?",
        answers: [
          { text: "Fresh and oceanic", scores: { whale: 3, turtle: 2, blahaj: 1 } },
          { text: "Rich and earthy", scores: { djungelskog: 3, bear: 2, hedgehog: 1 } },
          { text: "Sweet and floral", scores: { bee: 3, otter: 2, penguin: 1 } },
          { text: "Mysterious and complex", scores: { octopus: 3, alien: 2, lynx: 1 } },
        ],
      },
      {
        id: 4,
        question: "What's your ideal dining setting?",
        answers: [
          { text: "Underwater restaurant", scores: { octopus: 3, whale: 2, turtle: 1 } },
          { text: "Cozy forest cabin", scores: { bear: 3, fox: 2, owl: 1 } },
          { text: "Bustling social gathering", scores: { penguin: 3, bee: 2, otter: 1 } },
          { text: "Space station cafeteria", scores: { astronaut: 3, alien: 2, earth: 1 } },
        ],
      },
      {
        id: 5,
        question: "How adventurous is your palate?",
        answers: [
          { text: "I'll try anything once!", scores: { djungelskog: 3, octopus: 2, alien: 1 } },
          { text: "I stick to what I know", scores: { bear: 3, hedgehog: 2, blahaj: 1 } },
          { text: "I love discovering new flavors", scores: { astronaut: 2, fox: 3, lynx: 1 } },
          { text: "I prefer simple, pure tastes", scores: { whale: 2, turtle: 3, owl: 1 } },
        ],
      },
    ],
  },
  {
    id: "sleep",
    title: "Sleep & Lifestyle Quiz",
    description: "Match with your plushie based on your daily rhythms and habits",
    emoji: "😴",
    questions: [
      {
        id: 1,
        question: "What's your ideal bedtime?",
        answers: [
          { text: "Early bird - asleep by 9 PM", scores: { hedgehog: 3, turtle: 2, bear: 1 } },
          { text: "Night owl - up past midnight", scores: { owl: 3, lynx: 2, fox: 1 } },
          { text: "Social sleeper - depends on plans", scores: { penguin: 3, bee: 2, otter: 1 } },
          { text: "Cosmic schedule - whenever", scores: { alien: 3, astronaut: 2, earth: 1 } },
        ],
      },
      {
        id: 2,
        question: "What's your sleeping position?",
        answers: [
          { text: "Sprawled out taking up the whole bed", scores: { djungelskog: 3, whale: 2, blahaj: 1 } },
          { text: "Curled up in a tiny ball", scores: { hedgehog: 3, bee: 2, turtle: 1 } },
          { text: "Side sleeper with many pillows", scores: { bear: 2, blahaj: 3, penguin: 1 } },
          { text: "Light sleeper, change positions often", scores: { owl: 3, lynx: 2, fox: 1 } },
        ],
      },
      {
        id: 3,
        question: "What helps you fall asleep?",
        answers: [
          { text: "Ocean sounds or white noise", scores: { whale: 3, turtle: 2, blahaj: 1 } },
          { text: "Complete silence and darkness", scores: { owl: 2, hedgehog: 3, lynx: 1 } },
          { text: "Soft music or nature sounds", scores: { fox: 2, bear: 3, bee: 1 } },
          { text: "Podcasts or audiobooks", scores: { penguin: 2, otter: 3, octopus: 1 } },
        ],
      },
      {
        id: 4,
        question: "How do you wake up in the morning?",
        answers: [
          { text: "Instantly alert and ready", scores: { bee: 3, fox: 2, lynx: 1 } },
          { text: "Slowly and peacefully", scores: { turtle: 3, whale: 2, bear: 1 } },
          { text: "Need coffee and social interaction", scores: { penguin: 3, otter: 2, octopus: 1 } },
          { text: "Depends on the cosmic alignment", scores: { alien: 3, astronaut: 2, owl: 1 } },
        ],
      },
      {
        id: 5,
        question: "What's your ideal nap situation?",
        answers: [
          { text: "Power nap in a sunny spot", scores: { bee: 2, fox: 3, lynx: 1 } },
          { text: "Long, deep afternoon sleep", scores: { djungelskog: 3, bear: 2, hedgehog: 1 } },
          { text: "Floating peacefully like in water", scores: { whale: 3, turtle: 2, blahaj: 1 } },
          { text: "Quick rest between adventures", scores: { astronaut: 2, alien: 3, octopus: 1 } },
        ],
      },
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle & Hobbies Quiz",
    description: "Discover your plushie through your interests and daily activities",
    emoji: "🎨",
    questions: [
      {
        id: 1,
        question: "What's your favorite type of weather?",
        answers: [
          { text: "Snowy winter wonderland", scores: { fox: 3, owl: 2, penguin: 1 } },
          { text: "Sunny beach weather", scores: { whale: 2, turtle: 3, octopus: 1 } },
          { text: "Cozy rainy afternoons", scores: { hedgehog: 3, bear: 2, blahaj: 1 } },
          { text: "Clear starry nights", scores: { alien: 3, earth: 2, owl: 1 } },
        ],
      },
      {
        id: 2,
        question: "What's your ideal vacation?",
        answers: [
          { text: "Deep sea diving adventure", scores: { whale: 3, octopus: 2, turtle: 1 } },
          { text: "Safari in the wilderness", scores: { djungelskog: 3, lynx: 2, fox: 1 } },
          { text: "Space camp or planetarium", scores: { alien: 3, earth: 2, astronaut: 1 } },
          { text: "Cozy cabin retreat", scores: { bear: 3, hedgehog: 2, owl: 1 } },
        ],
      },
      {
        id: 3,
        question: "What's your favorite hobby?",
        answers: [
          { text: "Swimming or water sports", scores: { blahaj: 3, whale: 2, turtle: 1 } },
          { text: "Hiking and outdoor exploration", scores: { djungelskog: 3, fox: 2, lynx: 1 } },
          { text: "Crafting and creating things", scores: { bee: 3, hedgehog: 2, otter: 1 } },
          { text: "Stargazing and astronomy", scores: { astronaut: 3, alien: 2, owl: 1 } },
        ],
      },
      {
        id: 4,
        question: "How do you prefer to socialize?",
        answers: [
          { text: "Big group gatherings", scores: { penguin: 3, bee: 2, otter: 1 } },
          { text: "One-on-one deep conversations", scores: { owl: 3, turtle: 2, hedgehog: 1 } },
          { text: "Active adventures with friends", scores: { djungelskog: 2, fox: 3, lynx: 1 } },
          { text: "Online communities and forums", scores: { alien: 2, octopus: 3, astronaut: 1 } },
        ],
      },
      {
        id: 5,
        question: "What's your favorite color palette?",
        answers: [
          { text: "Ocean blues and teals", scores: { blahaj: 3, whale: 2, turtle: 1 } },
          { text: "Earth tones and browns", scores: { bear: 3, hedgehog: 2, djungelskog: 1 } },
          { text: "Black and white classics", scores: { penguin: 3, owl: 2, lynx: 1 } },
          { text: "Cosmic purples and silvers", scores: { alien: 3, earth: 2, astronaut: 1 } },
        ],
      },
    ],
  },
]

const plushieResults: { [key: string]: PlushieResult } = {
  blahaj: {
    name: "BLÅHAJ (Shark)",
    description: "The legendary blue shark that's taken the internet by storm!",
    personality:
      "You're loyal, comforting, and surprisingly gentle despite your fierce appearance. You're the friend everyone turns to for support.",
    whyPerfect:
      "Like BLÅHAJ, you're a perfect cuddle companion who brings comfort and security to everyone around you. You're iconic, beloved, and have a calming presence that makes others feel safe.",
    emoji: "🦈",
    color: "bg-blue-500",
  },
  djungelskog: {
    name: "DJUNGELSKOG (Brown Bear)",
    description: "The mighty forest bear who's ready for any adventure!",
    personality:
      "You're strong, adventurous, and love the great outdoors. You're a natural leader who isn't afraid to take charge.",
    whyPerfect:
      "DJUNGELSKOG matches your bold spirit and love for adventure. You're both powerful yet cuddly, commanding respect while being incredibly lovable.",
    emoji: "🐻",
    color: "bg-amber-600",
  },
  penguin: {
    name: "BLÅVINGAD (Penguin)",
    description: "The dapper penguin who's always dressed for success!",
    personality:
      "You're social, elegant, and love bringing people together. You have a classic style and natural charm.",
    whyPerfect:
      "Like the penguin, you're perfectly suited for social situations and have an innate sense of community. You're both stylish and approachable.",
    emoji: "🐧",
    color: "bg-slate-700",
  },
  whale: {
    name: "BLÅVINGAD (Whale)",
    description: "The gentle giant of the ocean depths!",
    personality:
      "You're calm, wise, and have a deep emotional intelligence. You're the peaceful presence in any storm.",
    whyPerfect:
      "The whale represents your serene nature and ability to navigate life's depths with grace. You're both majestic and nurturing.",
    emoji: "🐋",
    color: "bg-blue-600",
  },
  hedgehog: {
    name: "SKOGSDUVA (Hedgehog)",
    description: "The adorable spiky friend who's soft on the inside!",
    personality:
      "You're introverted but incredibly thoughtful. You have a protective exterior but are incredibly warm once people get to know you.",
    whyPerfect:
      "Like the hedgehog, you're perfectly designed for cozy moments and quiet contemplation. You're both adorable and surprisingly resilient.",
    emoji: "🦔",
    color: "bg-amber-700",
  },
  fox: {
    name: "SKOGSDUVA (Arctic Fox)",
    description: "The clever and beautiful arctic fox!",
    personality:
      "You're intelligent, adaptable, and have a mysterious charm. You're quick-witted and always ready for winter adventures.",
    whyPerfect:
      "The arctic fox matches your cleverness and ability to thrive in any situation. You're both beautiful and brilliantly adaptive.",
    emoji: "🦊",
    color: "bg-gray-100",
  },
  owl: {
    name: "SKOGSDUVA (Snowy Owl)",
    description: "The wise and majestic night guardian!",
    personality:
      "You're wise beyond your years, observant, and prefer the quiet hours. You see things others miss and offer profound insights.",
    whyPerfect:
      "Like the snowy owl, you're a beacon of wisdom and grace. You both possess an otherworldly beauty and deep understanding.",
    emoji: "🦉",
    color: "bg-gray-200",
  },
  bee: {
    name: "SKOGSDUVA (Bee)",
    description: "The busy little bee who makes everything sweeter!",
    personality:
      "You're hardworking, community-minded, and bring joy wherever you go. You're essential to your friend group's happiness.",
    whyPerfect:
      "The bee represents your industrious spirit and ability to create sweetness in life. You're both small but mighty, with a huge impact.",
    emoji: "🐝",
    color: "bg-yellow-400",
  },
  lynx: {
    name: "SKOGSDUVA (Lynx)",
    description: "The mysterious and elegant wild cat!",
    personality:
      "You're independent, graceful, and have an air of mystery. You're selective with your friendships but incredibly loyal.",
    whyPerfect:
      "Like the lynx, you possess a rare combination of beauty and strength. You're both enigmatic and absolutely captivating.",
    emoji: "🐱",
    color: "bg-gray-600",
  },
  otter: {
    name: "SKOGSDUVA (Otter with Baby)",
    description: "The playful otter family that sticks together!",
    personality:
      "You're playful, family-oriented, and believe in the power of togetherness. You find joy in simple pleasures and love deeply.",
    whyPerfect:
      "The otter family represents your nurturing nature and playful spirit. You both understand that life is better when shared with loved ones.",
    emoji: "🦦",
    color: "bg-amber-500",
  },
  bear: {
    name: "FABLER BJÖRN (Teddy Bear)",
    description: "The classic teddy bear that never goes out of style!",
    personality:
      "You're traditional, reliable, and incredibly comforting. You're the steady presence everyone can count on.",
    whyPerfect:
      "Like the classic teddy bear, you represent timeless comfort and unconditional love. You're both cherished and irreplaceable.",
    emoji: "🧸",
    color: "bg-amber-400",
  },
  turtle: {
    name: "BLÅVINGAD (Turtle)",
    description: "The wise sea turtle who takes life at the perfect pace!",
    personality:
      "You're patient, wise, and believe in taking time to enjoy life's journey. You have incredible endurance and inner strength.",
    whyPerfect:
      "The turtle matches your thoughtful approach to life and incredible resilience. You both understand that slow and steady wins the race.",
    emoji: "🐢",
    color: "bg-green-600",
  },
  octopus: {
    name: "BLÅVINGAD (Octopus)",
    description: "The intelligent and adaptable sea creature!",
    personality:
      "You're incredibly smart, creative, and can handle multiple things at once. You're mysterious and endlessly fascinating.",
    whyPerfect:
      "Like the octopus, you're brilliantly adaptable and full of surprises. You both possess intelligence that amazes everyone around you.",
    emoji: "🐙",
    color: "bg-purple-500",
  },
  alien: {
    name: "AFTONSPARV (Alien)",
    description: "The cosmic visitor from another world!",
    personality:
      "You're unique, imaginative, and see the world differently than others. You're fascinated by the mysteries of the universe.",
    whyPerfect:
      "The alien represents your otherworldly perspective and unique way of thinking. You both bring a fresh viewpoint that opens minds.",
    emoji: "👽",
    color: "bg-green-400",
  },
  earth: {
    name: "AFTONSPARV (Earth)",
    description: "The beautiful blue planet we call home!",
    personality:
      "You're grounded, nurturing, and care deeply about the world around you. You're the foundation that others build upon.",
    whyPerfect:
      "Like Earth, you're essential to everyone's well-being and provide the stability that allows others to flourish. You're both precious and irreplaceable.",
    emoji: "🌍",
    color: "bg-blue-500",
  },
  astronaut: {
    name: "AFTONSPARV (Astronaut)",
    description: "The brave space explorer reaching for the stars!",
    personality:
      "You're ambitious, curious, and always reaching for new heights. You inspire others to dream bigger and explore further.",
    whyPerfect:
      "The astronaut matches your adventurous spirit and desire to explore the unknown. You both represent the courage to venture into uncharted territory.",
    emoji: "🚀",
    color: "bg-indigo-500",
  },
}

export default function IkeaPlushieQuiz() {
  const [selectedQuizType, setSelectedQuizType] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState<{ [key: string]: number }>({})
  const [showResult, setShowResult] = useState(false)
  const [started, setStarted] = useState(false)

  const currentQuiz = quizTypes.find((quiz) => quiz.id === selectedQuizType)

  const handleAnswer = (answerScores: { [key: string]: number }) => {
    const newScores = { ...scores }
    Object.entries(answerScores).forEach(([plushie, score]) => {
      newScores[plushie] = (newScores[plushie] || 0) + score
    })
    setScores(newScores)

    if (currentQuiz && currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getResult = (): PlushieResult => {
    const maxScore = Math.max(...Object.values(scores))
    const winner = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0] || "blahaj"
    return plushieResults[winner] || plushieResults.blahaj
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScores({})
    setShowResult(false)
    setStarted(false)
    setSelectedQuizType(null)
  }

  const progress = currentQuiz ? ((currentQuestion + 1) / currentQuiz.questions.length) * 100 : 0

  if (!selectedQuizType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Which IKEA Plushie Are You? 🧸
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your quiz type and discover your perfect cuddly companion from IKEA's amazing collection!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {quizTypes.map((quiz) => (
              <Card
                key={quiz.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-primary/20"
                onClick={() => setSelectedQuizType(quiz.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl md:text-5xl mb-3">{quiz.emoji}</div>
                  <CardTitle className="text-lg md:text-xl">{quiz.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-sm">{quiz.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <div className="flex justify-center gap-2 text-xl md:text-2xl mb-4">🦈🐻🐧🐋🦔🦊🦉🐝🐙👽🚀🌍</div>
            <p className="text-sm text-muted-foreground">
              From the legendary BLÅHAJ shark to the mighty DJUNGELSKOG bear!
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="text-4xl md:text-5xl mb-4">{currentQuiz?.emoji}</div>
            <CardTitle className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {currentQuiz?.title}
            </CardTitle>
            <CardDescription className="text-base md:text-lg mt-4">{currentQuiz?.description}</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div>
              <p className="text-muted-foreground mb-4">
                Answer {currentQuiz?.questions.length} fun questions to discover which adorable IKEA plushie matches
                your unique personality!
              </p>
              <div className="flex justify-center gap-2 text-xl md:text-2xl mb-6">🦈🐻🐧🐋🦔🦊🦉🐝</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => setSelectedQuizType(null)} variant="outline" className="order-2 sm:order-1">
                ← Choose Different Quiz
              </Button>
              <Button
                onClick={() => setStarted(true)}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 order-1 sm:order-2"
              >
                Start Quiz ✨
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showResult) {
    const result = getResult()
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div
              className={`w-16 h-16 md:w-20 md:h-20 ${result.color} rounded-full flex items-center justify-center text-3xl md:text-4xl mx-auto mb-4`}
            >
              {result.emoji}
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold">You are {result.name}!</CardTitle>
            <CardDescription className="text-base md:text-lg mt-2">{result.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-base md:text-lg mb-2">Your Personality:</h3>
              <p className="text-sm md:text-base text-muted-foreground">{result.personality}</p>
            </div>

            <div>
              <h3 className="font-semibold text-base md:text-lg mb-2">Why This Plushie is Perfect for You:</h3>
              <p className="text-sm md:text-base text-muted-foreground">{result.whyPerfect}</p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-xs md:text-sm text-muted-foreground text-center">
                🛍️ Ready to meet your plushie soulmate? Head to IKEA and bring home your perfect cuddle companion!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={resetQuiz} variant="outline" className="order-3 sm:order-1 bg-transparent">
                Try Different Quiz
              </Button>
              <Button
                onClick={() => {
                  setShowResult(false)
                  setCurrentQuestion(0)
                  setScores({})
                  setStarted(false)
                }}
                variant="outline"
                className="order-2"
              >
                Retake This Quiz
              </Button>
              <Button
                onClick={() => {
                  const text = `I got ${result.name} in the IKEA Plushie Quiz! ${result.emoji} ${result.description}`
                  if (navigator.share) {
                    navigator.share({ text })
                  } else if (navigator.clipboard) {
                    navigator.clipboard.writeText(text)
                  }
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 order-1 sm:order-3"
              >
                Share Result 📱
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = currentQuiz?.questions[currentQuestion]
  if (!question) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs md:text-sm">
              Question {currentQuestion + 1} of {currentQuiz.questions.length}
            </Badge>
            <div className="text-xs md:text-sm text-muted-foreground">{Math.round(progress)}% Complete</div>
          </div>
          <Progress value={progress} className="mb-4" />
          <CardTitle className="text-xl md:text-2xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {question.answers.map((answer, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full text-left justify-start h-auto p-3 md:p-4 hover:bg-primary/5 hover:border-primary/20 bg-transparent text-sm md:text-base"
                onClick={() => handleAnswer(answer.scores)}
              >
                <span className="text-wrap leading-relaxed">{answer.text}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
