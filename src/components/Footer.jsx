import React from 'react'
import { Activity, Github, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Symptoms', href: '#symptom-checker' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-ink/10 bg-ink text-paper/80">
      <div className="container-px mx-auto max-w-6xl py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2 text-paper">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-paper">
                <Activity size={16} aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-semibold">MedAI</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">
              An educational symptom checker built to help you understand common health
              conditions in plain language.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-paper">Navigate</h4>
            <ul className="mt-3 space-y-2 text-sm text-paper/60">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-paper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-paper">Contact</h4>
            <p className="mt-3 text-sm text-paper/60">hello@medai.example</p>
            <div className="mt-3 flex gap-3">
              <a
                href="#"
                aria-label="MedAI on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/70 hover:border-teal hover:text-paper"
              >
                <Github size={16} aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="MedAI on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/70 hover:border-teal hover:text-paper"
              >
                <Linkedin size={16} aria-hidden="true" />
              </a>
              <a
                href="mailto:hello@medai.example"
                aria-label="Email MedAI"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/70 hover:border-teal hover:text-paper"
              >
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold text-paper">Disclaimer</h4>
            <p className="mt-3 text-xs leading-relaxed text-paper/60">
              MedAI provides general health information for educational purposes only. It does
              not provide medical diagnosis or replace professional medical advice. If you have
              serious, worsening, or emergency symptoms, seek medical attention immediately.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} MedAI. All rights reserved.</p>
          <p>Built as an educational portfolio project.</p>
        </div>
      </div>
    </footer>
  )
}
