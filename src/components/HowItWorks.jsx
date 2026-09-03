import React from 'react'
import { ClipboardList, ScanSearch, ListChecks, HeartPulse } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Enter symptoms',
    description: 'Type how you feel in plain language, or tap a suggested symptom to get started.',
  },
  {
    icon: ScanSearch,
    title: 'MedAI analyzes input',
    description: 'Your description is compared against a dataset of common conditions and symptoms.',
  },
  {
    icon: ListChecks,
    title: 'View possible conditions',
    description: 'See ranked matches with a match score, severity, and plain-language explanations.',
  },
  {
    icon: HeartPulse,
    title: 'Take appropriate action',
    description: 'Follow the general advice, and know when it is time to see a healthcare professional.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-ink/10 bg-mist/40 py-20">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How MedAI works</h2>
          <p className="mt-3 text-slate-soft">
            Four simple steps take you from a description of how you feel to information you can
            act on.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="relative rounded-2xl border border-ink/10 bg-white p-6"
            >
              <span className="font-display text-sm font-semibold text-teal">{`0${index + 1}`}</span>
              <span className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-teal-deep">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-soft">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
