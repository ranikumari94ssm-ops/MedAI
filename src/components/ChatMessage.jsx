import React from 'react'
import { Stethoscope, User } from 'lucide-react'

export function ChatMessage({ role, text }) {
  const isUser = role === 'user'

  return (
    <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''} animate-fade-up`}>
      <span
        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          isUser ? 'bg-ink text-paper' : 'bg-teal text-paper'
        }`}
        aria-hidden="true"
      >
        {isUser ? <User size={15} /> : <Stethoscope size={15} />}
      </span>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed sm:max-w-[70%] ${
          isUser
            ? 'rounded-tr-sm bg-teal text-paper'
            : 'rounded-tl-sm border border-ink/10 bg-white text-slate'
        }`}
      >
        {text}
      </div>
    </div>
  )
}

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 animate-fade-up" aria-live="polite" aria-label="MedAI is typing">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-paper" aria-hidden="true">
        <Stethoscope size={15} />
      </span>
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-ink/10 bg-white px-4 py-3">
        <span className="h-1.5 w-1.5 animate-bounce-dot rounded-full bg-teal" style={{ animationDelay: '0ms' }} />
        <span className="h-1.5 w-1.5 animate-bounce-dot rounded-full bg-teal" style={{ animationDelay: '150ms' }} />
        <span className="h-1.5 w-1.5 animate-bounce-dot rounded-full bg-teal" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  )
}
