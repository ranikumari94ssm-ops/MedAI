import React, { useEffect, useRef, useState } from 'react'
import { AlertTriangle, RotateCcw, SendHorizontal, Stethoscope } from 'lucide-react'
import { ChatMessage, TypingIndicator } from './ChatMessage.jsx'
import ConditionCard from './ConditionCard.jsx'
import { detectEmergency, matchConditions } from '../utils/matchSymptoms.js'
import { suggestedSymptoms } from '../data/conditions.js'

const WELCOME_MESSAGE = {
  role: 'bot',
  text: "Hi, I'm MedAI. Describe how you're feeling — for example, \"fever, headache and body pain\" — and I'll suggest some conditions that may be associated with those symptoms.",
}

function buildSummary(matches) {
  if (matches.length === 0) {
    return "I couldn't find a close match for those symptoms in my dataset. Try describing them differently, or consult a healthcare professional for anything persistent or concerning."
  }
  const names = matches.map((m) => m.name).join(' or ')
  return `Based on the symptoms you entered, some common conditions that may be associated with them include ${names}. Here's what I found:`
}

export default function SymptomChecker() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [inputError, setInputError] = useState('')
  const [recentSearches, setRecentSearches] = useState([])
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = (rawText) => {
    const text = (rawText ?? input).trim()

    if (!text) {
      setInputError('Please enter a symptom before sending.')
      return
    }
    setInputError('')

    const userMessage = { role: 'user', text }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setRecentSearches((prev) => {
      const next = [text, ...prev.filter((item) => item !== text)]
      return next.slice(0, 5)
    })

    window.setTimeout(() => {
      const isEmergency = detectEmergency(text)
      const matches = isEmergency ? [] : matchConditions(text)

      const botMessage = {
        role: 'bot',
        text: isEmergency
          ? "Some of what you described can be associated with a medical emergency. Please seek emergency medical care immediately or contact your local emergency number — MedAI is not able to help with this."
          : buildSummary(matches),
        matches,
        isEmergency,
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 900)
  }

  const handleSuggestedClick = (symptom) => {
    setInput((prev) => (prev ? `${prev}, ${symptom.toLowerCase()}` : symptom.toLowerCase()))
  }

  const handleClearChat = () => {
    setMessages([WELCOME_MESSAGE])
    setInput('')
    setInputError('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSend()
    }
  }

  return (
    <section id="symptom-checker" className="container-px mx-auto max-w-6xl pb-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Check your symptoms</h2>
        <p className="mt-3 text-slate-soft">
          Describe how you're feeling in your own words. MedAI will compare it against a set of
          common conditions and explain what it finds.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-ink/10 bg-white/70 shadow-[0_20px_60px_-30px_rgba(16,48,46,0.35)]">
        <div className="flex items-center justify-between border-b border-ink/10 bg-white/80 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-paper">
              <Stethoscope size={17} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">MedAI Symptom Checker</p>
              <p className="text-xs text-slate-soft">Educational information, not a diagnosis</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClearChat}
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1.5 text-xs font-medium text-slate-soft transition-colors hover:border-coral hover:text-coral-deep"
          >
            <RotateCcw size={13} aria-hidden="true" />
            Clear chat
          </button>
        </div>

        <div
          ref={scrollRef}
          className="chat-scroll flex h-[28rem] flex-col gap-4 overflow-y-auto px-5 py-6"
          role="log"
          aria-live="polite"
        >
          {messages.map((message, index) => (
            <div key={index} className="flex flex-col gap-3">
              <ChatMessage role={message.role} text={message.text} />

              {message.isEmergency && (
                <div className="ml-11 flex items-start gap-2 rounded-2xl border border-coral/30 bg-coral/10 px-4 py-3 text-sm text-coral-deep">
                  <AlertTriangle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <p>
                    <span className="font-semibold">This may be a medical emergency.</span> Call
                    your local emergency number or go to the nearest emergency room right away.
                  </p>
                </div>
              )}

              {message.matches && message.matches.length > 0 && (
                <div className="ml-11 grid gap-3 sm:grid-cols-1">
                  {message.matches.map((condition) => (
                    <ConditionCard key={condition.id} condition={condition} />
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && <TypingIndicator />}
        </div>

        <div className="border-t border-ink/10 bg-white/80 px-5 py-4">
          <div className="flex flex-wrap gap-2">
            {suggestedSymptoms.map((symptom) => (
              <button
                key={symptom}
                type="button"
                onClick={() => handleSuggestedClick(symptom)}
                className="rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-xs font-medium text-slate transition-colors hover:border-teal hover:text-teal-deep"
              >
                {symptom}
              </button>
            ))}
          </div>

          {recentSearches.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-soft">
              <span className="font-medium">Recent:</span>
              {recentSearches.map((search) => (
                <button
                  key={search}
                  type="button"
                  onClick={() => handleSend(search)}
                  className="rounded-full bg-mist px-2.5 py-1 text-teal-deep hover:bg-mist/70"
                >
                  {search}
                </button>
              ))}
            </div>
          )}

          <div className="mt-3 flex items-center gap-2">
            <label htmlFor="symptom-input" className="sr-only">
              Describe your symptoms
            </label>
            <input
              id="symptom-input"
              type="text"
              value={input}
              onChange={(event) => {
                setInput(event.target.value)
                if (inputError) setInputError('')
              }}
              onKeyDown={handleKeyDown}
              placeholder="Describe your symptoms, e.g. fever, headache and body pain"
              className="flex-1 rounded-full border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-slate-soft focus:border-teal"
              aria-describedby={inputError ? 'symptom-input-error' : undefined}
              aria-invalid={Boolean(inputError)}
            />
            <button
              type="button"
              onClick={() => handleSend()}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-paper transition-colors hover:bg-teal-deep"
              aria-label="Send symptoms"
            >
              <SendHorizontal size={17} aria-hidden="true" />
            </button>
          </div>
          {inputError && (
            <p id="symptom-input-error" className="mt-2 text-xs font-medium text-coral-deep">
              {inputError}
            </p>
          )}
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-slate-soft">
        MedAI provides general health information for educational purposes only. It does not
        provide medical diagnosis or replace professional medical advice. If you have serious,
        worsening, or emergency symptoms, seek medical attention immediately.
      </p>
    </section>
  )
}
