import React from 'react'
import { AlertCircle } from 'lucide-react'

const severityStyles = {
  Mild: { bar: 'bg-teal', badge: 'bg-mist text-teal-deep', accent: 'bg-teal' },
  Moderate: { bar: 'bg-coral', badge: 'bg-coral/10 text-coral-deep', accent: 'bg-coral' },
  Severe: { bar: 'bg-coral-deep', badge: 'bg-coral-deep/10 text-coral-deep', accent: 'bg-coral-deep' },
}

export default function ConditionCard({ condition }) {
  const styles = severityStyles[condition.severity] || severityStyles.Mild

  return (
    <div className="flex overflow-hidden rounded-2xl border border-ink/10 bg-white">
      <div className={`w-1.5 shrink-0 ${styles.accent}`} aria-hidden="true" />
      <div className="flex-1 p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h4 className="font-display text-lg font-semibold text-ink">{condition.name}</h4>
          <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}>
            {condition.severity}
          </span>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between text-xs font-medium text-slate-soft">
            <span>Match</span>
            <span>{condition.matchPercent}%</span>
          </div>
          <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-mist" role="progressbar" aria-valuenow={condition.matchPercent} aria-valuemin={0} aria-valuemax={100} aria-label={`${condition.name} match score`}>
            <div
              className={`h-full rounded-full ${styles.bar} transition-all duration-700 ease-out`}
              style={{ width: `${condition.matchPercent}%` }}
            />
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate">{condition.description}</p>

        <div className="mt-4">
          <p className="text-xs font-semibold text-ink">Common symptoms</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {condition.symptoms.slice(0, 6).map((symptom) => (
              <span
                key={symptom}
                className="rounded-full bg-mist px-2.5 py-1 text-xs capitalize text-teal-deep"
              >
                {symptom}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-paper p-3">
          <p className="text-xs font-semibold text-ink">General advice</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-soft">{condition.advice}</p>
        </div>

        <div className="mt-3 flex items-start gap-2 text-sm text-slate-soft">
          <AlertCircle size={16} className="mt-0.5 shrink-0 text-coral" aria-hidden="true" />
          <p>
            <span className="font-semibold text-ink">When to seek help: </span>
            {condition.whenToSeekHelp}
          </p>
        </div>
      </div>
    </div>
  )
}
