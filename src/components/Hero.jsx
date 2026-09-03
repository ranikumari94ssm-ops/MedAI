import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="container-px mx-auto max-w-6xl pb-20 pt-16 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="animate-fade-up">
          <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Understand your symptoms with MedAI
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-soft">
            Get simple, informative insights about common health conditions based on the
            symptoms you provide.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#symptom-checker"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-teal-deep"
            >
              Check Symptoms
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal-deep"
            >
              Learn More
            </a>
          </div>

          <p className="mt-8 max-w-md text-xs leading-relaxed text-slate-soft">
            MedAI provides general health information for educational purposes only. It does
            not diagnose conditions or replace professional medical advice.
          </p>
        </div>

        <div className="relative" aria-hidden="true">
          <div className="rounded-3xl border border-ink/10 bg-white/60 p-6 shadow-[0_20px_60px_-25px_rgba(16,48,46,0.35)]">
            <div className="flex items-center justify-between text-xs font-medium text-slate-soft">
              <span>Symptom monitor</span>
              <span className="flex items-center gap-1.5 text-teal-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Live analysis
              </span>
            </div>

            <svg viewBox="0 0 400 160" className="mt-4 w-full" role="img" aria-label="Illustrative vital sign waveform">
              <line x1="0" y1="80" x2="400" y2="80" stroke="#E4EDE9" strokeWidth="1" />
              <path
                d="M0,80 L60,80 L80,40 L100,120 L120,80 L160,80 L180,55 L200,105 L220,80 L400,80"
                fill="none"
                stroke="#1E7A6E"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="8 6"
                className="animate-pulse-line"
              />
            </svg>

            <div className="mt-4 flex flex-wrap gap-2">
              {['Fever', 'Headache', 'Fatigue', 'Sore throat'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-teal-deep"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-lg sm:block">
            <p className="text-xs text-slate-soft">Possible match</p>
            <p className="font-display text-lg font-semibold text-ink">Common Cold — 78%</p>
          </div>
        </div>
      </div>
    </section>
  )
}
