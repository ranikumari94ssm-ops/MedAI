// Static, local dataset used for simple keyword-based symptom matching.
// This is illustrative/educational data only — not a clinical knowledge base.

export const conditions = [
  {
    id: 'common-cold',
    name: 'Common Cold',
    symptoms: ['runny nose', 'stuffy nose', 'sneezing', 'sore throat', 'cough', 'mild headache', 'congestion'],
    description:
      'A mild viral infection of the nose and throat that usually clears up on its own within a week or two.',
    advice:
      'Rest, drink plenty of fluids, and use over-the-counter remedies for congestion or a sore throat as needed.',
    severity: 'Mild',
    whenToSeekHelp: 'If symptoms last more than 10 days or a high fever develops, consider seeing a doctor.',
  },
  {
    id: 'flu',
    name: 'Flu (Influenza)',
    symptoms: ['fever', 'headache', 'body pain', 'body aches', 'fatigue', 'chills', 'cough', 'sore throat'],
    description:
      'A viral infection that affects the respiratory system, often causing fever, body aches, and tiredness that come on quickly.',
    advice:
      'Rest, stay hydrated, and consider consulting a healthcare professional if symptoms are severe or persistent.',
    severity: 'Moderate',
    whenToSeekHelp: 'Seek care if breathing becomes difficult, or if fever is very high or does not improve.',
  },
  {
    id: 'viral-fever',
    name: 'Viral Fever',
    symptoms: ['fever', 'body pain', 'fatigue', 'headache', 'chills', 'weakness'],
    description:
      'A general term for fever caused by a viral infection, often accompanied by body aches and low energy.',
    advice: 'Rest, monitor your temperature, and stay well hydrated while your body fights the infection.',
    severity: 'Mild',
    whenToSeekHelp: 'See a doctor if fever stays above 103°F (39.4°C) or lasts more than three days.',
  },
  {
    id: 'migraine',
    name: 'Migraine',
    symptoms: ['headache', 'nausea', 'sensitivity to light', 'sensitivity to sound', 'dizziness', 'vomiting'],
    description:
      'A neurological condition causing intense, often one-sided head pain, sometimes with nausea or visual disturbances.',
    advice:
      'Rest in a quiet, dark room, stay hydrated, and consider a pain reliever suited to your situation.',
    severity: 'Moderate',
    whenToSeekHelp: 'Seek medical attention if this is the worst headache of your life or comes with confusion or weakness.',
  },
  {
    id: 'allergy',
    name: 'Allergy',
    symptoms: ['sneezing', 'itchy eyes', 'runny nose', 'skin rash', 'itching', 'watery eyes', 'congestion'],
    description:
      'An immune reaction to a substance such as pollen, dust, or certain foods, causing irritation of the skin, eyes, or airways.',
    advice: 'Try to identify and avoid the trigger, and consider an antihistamine for symptom relief.',
    severity: 'Mild',
    whenToSeekHelp: 'Seek urgent care if you experience swelling of the face or throat, or trouble breathing.',
  },
  {
    id: 'food-poisoning',
    name: 'Food Poisoning',
    symptoms: ['nausea', 'vomiting', 'diarrhea', 'stomach pain', 'stomach cramps', 'fever', 'weakness'],
    description:
      'An illness caused by eating contaminated food, typically leading to digestive upset that resolves within a few days.',
    advice: 'Stay hydrated with small sips of water or oral rehydration solutions, and rest your stomach with bland food.',
    severity: 'Moderate',
    whenToSeekHelp: 'Seek care for signs of dehydration, blood in vomit or stool, or symptoms lasting more than a couple of days.',
  },
  {
    id: 'dehydration',
    name: 'Dehydration',
    symptoms: ['thirst', 'dizziness', 'fatigue', 'dry mouth', 'weakness', 'headache', 'dark urine'],
    description:
      'A condition where the body loses more fluids than it takes in, affecting normal bodily functions.',
    advice: 'Drink water or an oral rehydration solution gradually, and rest in a cool environment.',
    severity: 'Mild',
    whenToSeekHelp: 'Seek help if you feel confused, cannot keep fluids down, or have not urinated in many hours.',
  },
  {
    id: 'sinusitis',
    name: 'Sinusitis',
    symptoms: ['facial pain', 'congestion', 'headache', 'runny nose', 'stuffy nose', 'cough', 'fatigue'],
    description:
      'Inflammation of the sinuses, often following a cold, causing pressure or pain around the face and nose.',
    advice: 'Try steam inhalation, saline nasal rinses, and rest; a decongestant may help with symptoms.',
    severity: 'Mild',
    whenToSeekHelp: 'See a doctor if symptoms persist beyond 10 days or are accompanied by a high fever.',
  },
  {
    id: 'sore-throat',
    name: 'Sore Throat',
    symptoms: ['sore throat', 'difficulty swallowing', 'cough', 'mild fever', 'hoarseness'],
    description:
      'Irritation or inflammation of the throat, commonly caused by a viral infection.',
    advice: 'Gargle with warm salt water, stay hydrated, and consider throat lozenges for relief.',
    severity: 'Mild',
    whenToSeekHelp: 'See a doctor if it is severe, lasts more than a week, or comes with difficulty breathing.',
  },
  {
    id: 'gastritis',
    name: 'Gastritis',
    symptoms: ['stomach pain', 'nausea', 'bloating', 'indigestion', 'loss of appetite', 'vomiting'],
    description:
      'Inflammation of the stomach lining, which can cause discomfort, nausea, and digestive upset.',
    advice: 'Eat smaller, bland meals, avoid spicy or fatty foods, and reduce alcohol or NSAID use if applicable.',
    severity: 'Moderate',
    whenToSeekHelp: 'Seek care for severe pain, vomiting blood, or black stools.',
  },
  {
    id: 'tension-headache',
    name: 'Tension Headache',
    symptoms: ['headache', 'neck pain', 'tightness', 'mild pressure', 'fatigue'],
    description:
      'The most common type of headache, often described as a dull, tight band of pressure around the head.',
    advice: 'Rest, gentle stretching, hydration, and over-the-counter pain relief can often help.',
    severity: 'Mild',
    whenToSeekHelp: 'See a doctor if headaches become frequent, severe, or are accompanied by other new symptoms.',
  },
  {
    id: 'urinary-tract-infection',
    name: 'Urinary Tract Infection',
    symptoms: ['burning urination', 'frequent urination', 'stomach pain', 'fatigue', 'fever', 'cloudy urine'],
    description:
      'An infection affecting part of the urinary system, most often the bladder, causing discomfort during urination.',
    advice: 'Drink plenty of water and consult a healthcare professional, as this often needs targeted treatment.',
    severity: 'Moderate',
    whenToSeekHelp: 'Seek care promptly if you develop back pain, fever, or chills, which may indicate a kidney infection.',
  },
]

// Symptoms considered potential emergencies. If any of these are detected in
// user input, the UI should show a prominent warning instead of relying on
// the general matching results.
export const emergencySymptoms = [
  'severe chest pain',
  'chest pain',
  'difficulty breathing',
  'trouble breathing',
  'shortness of breath',
  'unconscious',
  'unconsciousness',
  'severe bleeding',
  'heavy bleeding',
  'stroke',
  'slurred speech',
  'face drooping',
  'numbness on one side',
  'loss of consciousness',
  'seizure',
]

export const suggestedSymptoms = ['Fever', 'Headache', 'Cough', 'Cold', 'Stomach Pain', 'Fatigue']
