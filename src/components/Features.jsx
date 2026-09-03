import React from 'react'
import { Brain, MousePointerClick, Zap, Heart } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Symptom matching logic that surfaces conditions worth reading up on.',
  },
  {
    icon: MousePointerClick,
    title: 'Easy to Use',
    description: 'Type your symptoms in plain language, or pick from quick suggestions.',
  },
  {
    icon: Zap,
    title: 'Fast Results',
    description: 'See possible conditions and next steps in seconds, right in the chat.',
  },
  {
    icon: Heart,
    title: 'User Friendly',
    description: 'Clear language throughout, built to be approachable for anyone.',
  },
]

export default function Features() {
  return (
    <section className="container-px mx-auto max-w-6xl pb-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-2xl border border-ink/10 bg-white/50 p-5 transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-teal-deep">
              <Icon size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-ink">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-soft">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
