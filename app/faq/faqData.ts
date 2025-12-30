export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  title: string;
  icon: string;
  blurb: string;
  questions: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    title: "Getting Started",
    icon: "✨",
    blurb: "How we plan care, what to bring, and when you will get started.",
    questions: [
      {
        question: "How do you decide the therapy plan for my child?",
        answer:
          "We start with a comprehensive assessment of sensory profile, motor skills, communication, and functional abilities. Your family's priorities shape a personalized plan with measurable goals and evidence-based interventions.",
      },
      {
        question: "Do I need a doctor's referral?",
        answer:
          "No referral is required to begin. You can book an assessment directly. If you have a referral or diagnosis, bring it along so we have full medical context.",
      },
      {
        question: "What should I bring to the first session?",
        answer:
          "Please bring any previous medical reports, assessments, school reports, and a favorite toy or comfort item. Dress your child comfortably for movement activities; we provide the rest.",
      },
      {
        question: "How long is the initial assessment?",
        answer:
          "The initial assessment typically takes 45-60 minutes, including evaluation activities, a parent interview, and discussion of recommendations so you leave with clear next steps.",
      },
    ],
  },
  {
    title: "Sessions & Progress",
    icon: "📈",
    blurb: "Frequency, parent involvement, and how we measure growth.",
    questions: [
      {
        question: "How soon do we see changes?",
        answer:
          "Many families notice small shifts within 2-4 weeks. Significant gains typically emerge over 2-3 months of consistent therapy, with every child's pace tracked through data-driven reports.",
      },
      {
        question: "Can parents sit in sessions?",
        answer:
          "Yes. Parents are encouraged to observe or participate, especially early on. As comfort grows, we may suggest stepping out to build independence, while keeping parent coaching in every session.",
      },
      {
        question: "Do you provide home programs?",
        answer:
          "Absolutely. Each week you receive a simple home practice plan with 2-3 daily activities that fit routines like meals, bedtime, and play to reinforce progress.",
      },
      {
        question: "How many sessions per week does my child need?",
        answer:
          "Most children benefit from 2-3 sessions per week in the early months. We recommend frequency during the assessment and adjust as goals are met.",
      },
      {
        question: "How do you track progress?",
        answer:
          "We use standardized assessments, session data, and video documentation. Reports every 4-6 weeks highlight measurable changes, often paired with before/after videos.",
      },
    ],
  },
  {
    title: "Therapy & Approaches",
    icon: "🧠",
    blurb: "Collaboration style, methods, and how we tailor care.",
    questions: [
      {
        question: "Do you coordinate with schools/teachers?",
        answer:
          "Yes. We collaborate with teachers when helpful, sharing classroom strategies and accommodation ideas to keep therapy and school aligned.",
      },
      {
        question: "What's the difference between OT and Special Education?",
        answer:
          "Occupational Therapy focuses on fine motor skills, sensory processing, and daily living skills. Special Education builds academic skills, learning strategies, and school readiness. Many children benefit from both together.",
      },
      {
        question: "Do you use ABA (Applied Behavior Analysis)?",
        answer:
          "We use a neurodevelopmental, child-led approach rather than traditional ABA. We focus on root causes and intrinsic motivation through play, incorporating behavioral principles respectfully when helpful.",
      },
      {
        question: "Can therapy be done online?",
        answer:
          "Yes, for selected services. Teletherapy works well for parent coaching, some speech goals, and special education. Hands-on sensory work is best in person; we will guide you to the best format.",
      },
      {
        question: "What is Root Cause Therapy?",
        answer:
          "It is our approach to address underlying neurological drivers of challenges rather than just symptoms. For speech, for example, we work on oral-motor planning, sensory processing, and auditory processing together.",
      },
    ],
  },
  {
    title: "Practical & Logistics",
    icon: "🗓️",
    blurb: "Scheduling, payments, locations, and day-to-day details.",
    questions: [
      {
        question: "Do you accept insurance?",
        answer:
          "We currently operate on a private pay basis. We provide detailed receipts you can submit to your insurer; many plans offer reimbursement with a physician's prescription.",
      },
      {
        question: "What if we need to cancel or reschedule?",
        answer:
          "Please provide at least 24 hours notice. Late cancellations or no-shows may be charged, but we will work with you to find another time that week when possible.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes. We offer flexible options, including monthly plans for long-term programs. Discuss your needs during intake and we will build a fitting schedule.",
      },
      {
        question: "What locations do you serve?",
        answer:
          "We have centers in Ashok Nagar and Pallikaranai in Chennai, both equipped with specialized pediatric therapy spaces. Teletherapy is available for families who cannot attend in person.",
      },
      {
        question: "What are your operating hours?",
        answer:
          "We are open Monday-Friday 9:00 AM - 6:00 PM and Saturday 9:00 AM - 4:00 PM, with early morning and evening slots available for working parents.",
      },
    ],
  },
  {
    title: "Safety & Policies",
    icon: "✅",
    blurb: "Credentials, confidentiality, and health and safety standards.",
    questions: [
      {
        question: "Are your therapists certified?",
        answer:
          "Yes. All therapists are licensed and certified. Dr. Aaditya holds a Master's in Occupational Therapy (M.O.Th) with Sensory Integration training. Our team includes certified OTs, SLPs, and Special Educators.",
      },
      {
        question: "How do you ensure child safety?",
        answer:
          "Safety is prioritized through sanitized equipment, supervised therapy spaces, and staff trained in pediatric first aid. We follow secure check-in and check-out procedures for every family.",
      },
      {
        question: "Is therapy confidential?",
        answer:
          "Yes. We follow HIPAA-aligned confidentiality and only share information with your consent or when required by law. Records and progress reports are stored securely.",
      },
      {
        question: "What COVID-19 safety measures do you have?",
        answer:
          "We sanitize between sessions, check temperatures, require masks for staff, and maintain distancing in common areas. Teletherapy is available as a safe alternative when needed.",
      },
    ],
  },
  {
    title: "Specific Concerns",
    icon: "❤️",
    blurb: "Support for unique needs, behaviors, and multiple diagnoses.",
    questions: [
      {
        question: "My child is non-verbal. Can you help?",
        answer:
          "Yes. We use AAC devices, picture exchange systems, and other tools to build functional communication while working toward verbal speech when possible. Many children show progress within 3-6 months.",
      },
      {
        question: "What if my child has severe behavioral challenges?",
        answer:
          "We specialize in understanding the drivers of behavior, whether sensory, communication, or anxiety related. We teach replacement skills and create supportive environments so your child can succeed.",
      },
      {
        question: "Can you help with toilet training?",
        answer:
          "Yes. We address sensory, motor, and behavioral aspects of toileting, design a customized plan, and coach you to apply it consistently at home.",
      },
      {
        question: "Do you work with teens and older children?",
        answer:
          "Yes, up to age 18. For older children we focus on independence skills, vocational readiness, social skills, and transitions, adapting to their developmental stage.",
      },
      {
        question: "What if my child has multiple diagnoses?",
        answer:
          "Many children have co-occurring conditions. Our multidisciplinary team coordinates across therapies so strategies reinforce each other and address needs together.",
      },
    ],
  },
];
