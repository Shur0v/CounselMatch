
import React from 'react';
import { Step, TrustSignal, QualityMetric } from './types';

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Discover",
    description: "Browse our curated list of elite counselors tailored to your academic goals.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Submit Brief",
    description: "Tell us about your needs and aspirations in a simple, structured form.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Get Offers",
    description: "Receive personalized mentorship proposals from matched experts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Launch",
    description: "Select your perfect match and begin your journey to success.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export const TRUST_SIGNALS: TrustSignal[] = [
  {
    title: "Verified Pros",
    value: "500+",
    description: "Every counselor is vetted by our academic quality board.",
    icon: <span className="text-2xl">✅</span>
  },
  {
    title: "Student Success",
    value: "98%",
    description: "Success rate for top-tier university admissions.",
    icon: <span className="text-2xl">🎓</span>
  },
  {
    title: "Global Reach",
    value: "40+",
    description: "Countries represented in our diverse mentorship pool.",
    icon: <span className="text-2xl">🌎</span>
  }
];

export const QUALITY_METRICS: QualityMetric[] = [
  { label: "Acceptance Rate", value: "94.2%", color: "bg-blue-600" },
  { label: "Counselor Rating", value: "4.9/5", color: "bg-emerald-500" },
  { label: "Response Time", value: "< 2hrs", color: "bg-indigo-500" }
];
