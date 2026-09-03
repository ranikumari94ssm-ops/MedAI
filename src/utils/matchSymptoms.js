import { conditions, emergencySymptoms } from '../data/conditions.js'

/**
 * Checks raw user input for wording associated with medical emergencies.
 * This is a simple keyword check, not a clinical triage tool.
 */
export function detectEmergency(input) {
  const text = input.toLowerCase()
  return emergencySymptoms.some((symptom) => text.includes(symptom))
}

/**
 * Very small keyword-overlap matcher: for each known condition, count how
 * many of its listed symptoms appear as substrings of the user's input,
 * then convert that into a rough match percentage.
 */
export function matchConditions(input) {
  const text = input.toLowerCase().trim()
  if (!text) return []

  const scored = conditions.map((condition) => {
    const matchedSymptoms = condition.symptoms.filter((symptom) => text.includes(symptom))
    const score = matchedSymptoms.length / condition.symptoms.length
    return {
      ...condition,
      matchedSymptoms,
      matchPercent: Math.round(score * 100),
    }
  })

  return scored
    .filter((c) => c.matchedSymptoms.length > 0)
    .sort((a, b) => b.matchPercent - a.matchPercent || b.matchedSymptoms.length - a.matchedSymptoms.length)
    .slice(0, 3)
}
