import React, { useState } from 'react'
import { Activity, Menu, Moon, Sun, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Symptoms', href: '#symptom-checker' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const handleNavClick = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-ink/10">
      <nav
        className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center gap-2 text-ink" onClick={handleNavClick}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-paper">
            <Activity size={18} strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">MedAI</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate transition-colors hover:text-teal-deep"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:border-teal hover:text-teal-deep"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="#symptom-checker"
            className="hidden rounded-full bg-teal px-5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-teal-deep md:inline-block"
          >
            Check Symptoms
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-paper md:hidden">
          <ul className="container-px mx-auto flex max-w-6xl flex-col gap-1 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate hover:bg-mist hover:text-teal-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
