import React from 'react'
import { ShieldCheck } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="container-px mx-auto max-w-6xl py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About MedAI</h2>
          <p className="mt-4 leading-relaxed text-slate-soft">
            MedAI is a frontend-based educational healthcare project designed to help users
            understand common health conditions through symptom-based information. The
            application focuses on simplicity, accessibility, and an intuitive user experience.
          </p>
          <p className="mt-4 leading-relaxed text-slate-soft">
            Every result comes from a small, predefined dataset of conditions and symptoms built
            into the application itself — there is no external service, account, or medical
            record involved. MedAI does not replace a professional diagnosis; it is a starting
            point for learning, not an endpoint for treatment decisions.
          </p>
        </div>

        <div className="rounded-3xl border border-ink/10 bg-mist/40 p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal text-paper">
            <ShieldCheck size={20} aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-display text-lg font-semibold text-ink">Built for learning, not diagnosis</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-soft">
            MedAI provides general health information for educational purposes only. It does not
            provide medical diagnosis or replace professional medical advice. If you have
            serious, worsening, or emergency symptoms, seek medical attention immediately.
          </p>
        </div>
      </div>
    </section>
  )
}
